import type { Plugin } from 'grapesjs';
import { BuilderComponent, BuilderBlock } from '../enum';

/**
 * Creates an empty div as a starting point.
 */
const plugin: Plugin = (editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(BuilderComponent.DIV.id, {
    isComponent: (el) => {
      if (el && el.classList) return el.classList.contains('ntvb-div');
    },
    model: {
      defaults: {
        name: BuilderComponent.DIV.name,
        classes: ['ntvb-div'],
        tagName: 'div',
        style: {
          display: 'flex',
          padding: '20px'
        }
      }
    }
  });

  BlockManager.add(BuilderBlock.DIV.id, {
    category: 'Basic',
    label: BuilderBlock.DIV.name,
    media: `
    <svg viewBox="0 0 24 24">
      <path 
        fill="currentColor" 
        d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z">
      </path>
    </svg>`,
    content: {
      type: BuilderComponent.DIV.id
    },
    select: true
  });
};

export default plugin;
