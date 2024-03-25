import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';

const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(ComponentTypes.CaTextBlock, {
    isComponent: (el: Element) => (el.tagName || '').toLowerCase() === ComponentTypes.CaTextBlock.toLowerCase(),
    extend: 'text',
    model: {
      defaults: {
        classes: [ComponentClasses.CaTextBlock],
        tagName: 'div',
        droppable: false,
        editable: true,
        style: {
          display: 'block',
          'box-sizing': 'border-box'
        }
      }
    }

  });

  BlockManager.add(BlockIdentifies.TextBlock, {
    category: 'Typography',
    label: 'Text Block',
    media: exportedSVG['textBlock'],
    content: {
      type: ComponentTypes.CaTextBlock,
      content: 'This is simple text'
    },
    activate: true,
    select: true
  });
}

export default plugin;