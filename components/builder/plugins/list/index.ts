import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import { LIST_ITEM_STYLE } from '../listItem';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';

/**
 * Creates an empty div as a starting point.
 */
const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(ComponentTypes.CaList, {
    isComponent: (el: HTMLElement) => {
      if (el && el.classList) return el.classList.contains(ComponentClasses.CaList);
    },
    model: {
      defaults: {
        classes: [ComponentClasses.CaList],
        tagName: 'ul',
        style: {
          'margin-top': '0px',
          'margin-bottom': '10px',
          'padding-left': '40px'
        },
        droppable: `[data-gjs-type="${ComponentTypes.CaListItem}"]`,
        components: [
          {
            tagName: 'li',
            type: ComponentTypes.CaListItem,
            style: LIST_ITEM_STYLE
          }
        ],
      },
    }
  });

  BlockManager.add(BlockIdentifies.List, {
    category: 'Basic',
    label: 'List',
    media: exportedSVG['list'],
    content: {
      type: ComponentTypes.CaList
    },
    select: true
  });
};

export default plugin;
