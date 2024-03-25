import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';

export const LIST_ITEM_STYLE = {
  outline: '1px dashed #555 !important',
  'outline-offset': '-1px !important',
  'box-shadow': 'inset 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 4px rgba(255, 255, 255, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.3)',
  height: '75px',
  'min-width': '75px',
  padding: '10px'
}

const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(ComponentTypes.CaListItem, {
    isComponent: (el: Element) => (el.tagName || '').toLowerCase() === ComponentTypes.CaListItem.toLowerCase(),
    model: {
      defaults: {
        classes: [ComponentClasses.CaListItem],
        tagName: 'li',
        style: LIST_ITEM_STYLE,
        draggable: `[data-gjs-type="${ComponentTypes.CaList}"]`,
        components: [
          {
            tagName: 'span',
            type: 'text',
            components: [
              {
                type: 'textnode',
                content: 'Hello world!!!'
              }
            ]
          }
        ]
      }
    }
  });

  BlockManager.add(BlockIdentifies.ListItem, {
    category: 'Basic',
    label: 'List Item',
    media: exportedSVG['listItem'],
    content: {
      type: ComponentTypes.CaListItem
    },
    select: true
  });
};

export default plugin;
