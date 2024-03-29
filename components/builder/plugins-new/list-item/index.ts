import type { Editor, Plugin } from 'grapesjs';
// import { exportedSVG } from '../icons';
import { BuilderComponent, BuilderBlock } from '../enum';
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
    media: `
    <svg fill="#000000" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title>list</title><rect x="10" y="6" width="18" height="2"/><rect x="10" y="24" width="18" height="2"/><rect x="10" y="15" width="18" height="2"/><rect x="4" y="15" width="2" height="2"/><rect x="4" y="6" width="2" height="2"/><rect x="4" y="24" width="2" height="2"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
    `,
    content: {
      type: BuilderComponent.LIST_ITEM.id
    },
    select: true
  });
};

export default plugin;
