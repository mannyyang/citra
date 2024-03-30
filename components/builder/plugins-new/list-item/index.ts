import type { Editor, Plugin } from 'grapesjs';
// import { exportedSVG } from '../icons';
import { BuilderBlock, BuilderComponent } from '../enum';
import { exportedSVG } from '../icons';
import { isComponent } from '../util';

export const LIST_ITEM_STYLE = {
  outline: '1px dashed #555 !important',
  'outline-offset': '-1px !important',
  'box-shadow':
    'inset 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 4px rgba(255, 255, 255, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.3)',
  height: '75px',
  'min-width': '75px',
  padding: '10px'
};

const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(BuilderComponent.LIST_ITEM.id, {
    isComponent: (el: HTMLElement) =>
      isComponent(el, BuilderComponent.LIST_ITEM.id),
    model: {
      defaults: {
        classes: [BuilderComponent.LIST_ITEM.class],
        tagName: 'li',
        style: LIST_ITEM_STYLE,
        draggable: `[data-gjs-type="${BuilderComponent.LIST.id}"]`,
        components: [
          {
            tagName: 'span',
            type: 'text',
            components: [
              {
                type: 'textnode',
                content: 'List item'
              }
            ]
          }
        ],
        attributes: {
          'data-ca': BuilderComponent.LIST_ITEM.id
        }
      }
    }
  });

  BlockManager.add(BuilderBlock.LIST_ITEM.id, {
    category: 'Basic',
    label: 'List Item',
    media: exportedSVG['listItem'],
    content: {
      type: BuilderComponent.LIST_ITEM.id
    },
    select: true
  });
};

export default plugin;
