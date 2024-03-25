import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';

/**
 * Creates a button component with some default styles and adds it as a reusable block.
 */

const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(ComponentTypes.CaButton, {
    extend: 'link',
    isComponent: (el: HTMLElement) => {
      if (el && el.classList) return el.classList.contains(ComponentClasses.CaButton);
    },
    model: {
      defaults: {
        classes: [ComponentClasses.CaButton],
        style: {
          display: 'flex',
          'justify-content': 'center',
          padding: '10px 20px',
          'background-color': '#0d6efd',
          color: '#fff',
          'border-radius': '5px',
          'text-align': 'center',
          'text-decoration': 'none'
        },
        components: {
          tagName: 'span',
          components: 'Button Text'
        }
      },
      init() {}
    }
  });

  BlockManager.add(BlockIdentifies.Button, {
    category: 'Basic',
    activate: true,
    label: 'Button',
    media: exportedSVG['button'],
    content: {
      type: ComponentTypes.CaButton
    }
  });
};

export default plugin;
