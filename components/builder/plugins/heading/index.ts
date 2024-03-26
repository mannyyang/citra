import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';
import { isComponent } from '../util';

const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(ComponentTypes.CaHeading, {
    isComponent: (el: HTMLElement) => isComponent(el, ComponentTypes.CaHeading),
    extend: 'text',
    model: {
      defaults: {
        classes: [ComponentClasses.CaHeading],
        tagName: 'h1',
        droppable: false,
        style: {
          'margin-top': '0px',
          'margin-bottom': '10px'
        },
        components: 'Heading Text',
        attributes: {
          'data-ca': ComponentTypes.CaHeading
        }
      }
    }
  });

  BlockManager.add(BlockIdentifies.Heading, {
    category: 'Typography',
    label: 'Heading',
    media: exportedSVG['heading'],
    content: {
      type: ComponentTypes.CaHeading
    },
    select: true
  });
}

export default plugin;