// @ts-nocheck

import { Editor } from 'grapesjs';
import { exportedSVG } from '../icons';
import { isComponent } from '../util';

export default (editor: Editor): void => {
  const dc = editor.DomComponents;

  const id = 'block-adder';
  const htmlLabel = exportedSVG['userBlocks'];

  dc.getTypes().forEach((elType) => {
    const { model: oldModel, view: oldView } = elType;
    dc.addType(elType.id, {
      isComponent: (el: HTMLElement) => isComponent(el, elType.id),
      model: oldModel.extend({
        initToolbar() {
          //@ts-ignore i don't know
          // eslint-disable-next-line prefer-rest-params
          oldModel.prototype.initToolbar.apply(this, arguments);
          const toolbar = this.get('toolbar');

          if (!toolbar.filter((tlb: any) => tlb.id === id).length) {
            toolbar.unshift({
              id,
              command: function () {
                const selectedComponent = editor.getSelected();
                const htmlCode = selectedComponent?.toHTML() as string;

                const cssCode = editor.CodeManager.getCode(
                  selectedComponent,
                  'css',
                  {
                    cssc: editor.CssComposer
                  }
                );

                document.dispatchEvent(
                  new CustomEvent('user-block-init', {
                    detail: {
                      html: htmlCode,
                      css: cssCode
                    }
                  })
                );
              },
              label: htmlLabel
            });
            this.set('toolbar', toolbar);
          }
        }
      }),
      view: oldView
    });
  });
};
