import type { Editor, Plugin } from 'grapesjs';
// import { exportedSVG } from '../icons';
// import { LIST_ITEM_STYLE } from '../listItem';
import { BuilderComponent, BuilderBlock } from '../enum';
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
    category: 'Basic',
    label: 'List',
    media: `
    <svg viewBox="0 0 24 24">
      <path 
        fill="currentColor" 
        d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z">
      </path>
    </svg>`,
    content: {
      type: BuilderComponent.LIST.id
    },
    select: true
  });
};

export default plugin;
