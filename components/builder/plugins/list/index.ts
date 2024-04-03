import type { Editor, Plugin } from 'grapesjs';
// import { exportedSVG } from '../icons';
// import { LIST_ITEM_STYLE } from '../listItem';
import { BuilderBlock, BuilderCategory, BuilderComponent } from '../enum';
import { exportedSVG } from '../icons';
import { isComponent } from '../util';

/**
 * Creates an empty div as a starting point.
 */
const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(BuilderComponent.LIST.id, {
    isComponent: (el: HTMLElement) => isComponent(el, BuilderComponent.LIST.id),
    model: {
      defaults: {
        classes: [BuilderComponent.LIST.class],
        tagName: 'ul',
        style: {
          'margin-top': '0px',
          'margin-bottom': '10px',
          'padding-left': '40px'
        },
        droppable: `[data-gjs-type="${BuilderComponent.LIST_ITEM.id}"]`,
        components: [
          {
            type: BuilderComponent.LIST_ITEM.id
            // style: LIST_ITEM_STYLE
          }
        ],
        attributes: {
          'data-ca': BuilderComponent.LIST.id
        }
      }
    }
  });

  BlockManager.add(BuilderBlock.LIST.id, {
    category: BuilderCategory.BASIC.name,
    label: 'List',
    media: exportedSVG['list'],
    content: {
      type: BuilderComponent.LIST.id
    },
    select: true
  });
};

export default plugin;
