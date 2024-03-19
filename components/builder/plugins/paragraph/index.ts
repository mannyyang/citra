import type { Editor, Plugin } from 'grapesjs';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';


const plugin: Plugin = (editor: Editor) => {
    const Components = editor.Components;
    const BlockManager = editor.BlockManager;
  
    Components.addType(ComponentTypes.CaParagraph, {
      isComponent: (el: HTMLElement) => {
        if (el && el.classList) {
          return el.classList.contains(ComponentClasses.CaParagraph);
        }
      },
      extend: 'text',
      model: {
        defaults: {
          classes: [ComponentClasses.CaParagraph],
          tagName: 'p',
          droppable: false,
          style: {
            'margin-top': '0px',
            'margin-bottom': '10px'
          },
          components: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
        }
      }
    });
  
    BlockManager.add(BlockIdentifies.Paragraph, {
      category: 'Typography',
      label: 'Paragraph',
      media: `<svg data-wf-icon="AddPanelParagraph64Icon" width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M52 27H12V26H52V27ZM52 33H12V32H52V33ZM12 39L32 39V38L12 38V39Z" fill="currentColor"></path></svg>`,
      content: {
        type: ComponentTypes.CaParagraph
      },
      select: true
    });
  };
  
  export default plugin;
  