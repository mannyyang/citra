import type { Editor, Plugin } from 'grapesjs';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';

/**
 * Creates a link component with some default styles and adds it as a reusable block.
 */
const COMPONENT_TYPE = 'ntvLinkBlock';

const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(ComponentTypes.CaLinkBlock, {
    isComponent: (el: HTMLElement) => {
      if (el && el.classList) return el.classList.contains(ComponentClasses.CaLinkBlock);
    },
    model: {
      defaults: {
        classes: [ComponentClasses.CaLinkBlock],
        style: {
          display: 'inline-block',          
          padding: '5px',
          height: '50px',
          width: '50px'
        },
        tagName: 'a'
      },
      init() {}
    }
  });

  BlockManager.add(BlockIdentifies.Link, {
    category: 'Basic',
    activate: true,
    label: 'Link Block',
    media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path></svg>`,
    content: {
      type: ComponentTypes.CaLinkBlock
    }
  });
};

export default plugin;
