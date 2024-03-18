import type { Editor, Plugin } from 'grapesjs';
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
    isComponent: (el: HTMLElement) => {
      if (el && el.classList) {
        return el.classList.contains(ComponentClasses.CaListItem);
      }
    },
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
    media: `<svg data-wf-icon="AddPanelList64Icon" width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 19H51V45H13L13 19ZM12 19C12 18.4477 12.4477 18 13 18H51C51.5523 18 52 18.4477 52 19V45C52 45.5523 51.5523 46 51 46H13C12.4477 46 12 45.5523 12 45V19ZM46 24H22V40H46V24ZM22 23C21.4477 23 21 23.4477 21 24V40C21 40.5523 21.4477 41 22 41H46C46.5523 41 47 40.5523 47 40V24C47 23.4477 46.5523 23 46 23H22ZM19 33C19 33.5523 18.5523 34 18 34C17.4477 34 17 33.5523 17 33C17 32.4477 17.4477 32 18 32C18.5523 32 19 32.4477 19 33Z" fill="white" fill-opacity="0.22"></path><circle cx="18" cy="24" r="1" fill="currentColor"></circle><rect x="21.5" y="23.5" width="25" height="9" rx="0.5" fill="white" fill-opacity="0.1" stroke="currentColor"></rect></svg>`,
    content: {
      type: ComponentTypes.CaListItem
    },
    select: true
  });
};

export default plugin;
