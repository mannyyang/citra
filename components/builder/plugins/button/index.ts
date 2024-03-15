import type { Editor } from 'grapesjs';

/**
 * Creates a button component with some default styles and adds it as a reusable block.
 */
const COMPONENT_TYPE = 'ntvButton';

const plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(COMPONENT_TYPE, {
    extend: 'link',
    isComponent: (el: HTMLElement) => {
      if (el && el.classList) return el.classList.contains('ntvb-button');
    },
    model: {
      defaults: {
        classes: ['ntvb-button'],
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

  BlockManager.add('button', {
    category: 'Basic',
    activate: true,
    label: 'Button',
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path><path d="M4 11.5h16v1H4z"></path></svg>`,
    content: {
      type: COMPONENT_TYPE
    }
  });
};

export default plugin;
