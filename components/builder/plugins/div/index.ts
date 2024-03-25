import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';

/**
 * Creates an empty div as a starting point.
 */
const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(ComponentTypes.CaDiv, {
    isComponent: (el: Element) => (el.tagName || '').toLowerCase() === ComponentTypes.CaRow.toLowerCase(),
    model: {
      defaults: {
        classes: [ComponentClasses.CaDiv],
        tagName: 'div',
        style: {
          display: 'flex',
          padding: '20px'
        }
      }
    }
  });

  BlockManager.add(BlockIdentifies.Div, {
    category: 'Basic',
    label: 'Div',
    media: exportedSVG['div'],
    content: {
      type: ComponentTypes.CaDiv
    },
    select: true
  });
};

export default plugin;
