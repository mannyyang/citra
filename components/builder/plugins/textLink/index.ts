import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';

const plugin: Plugin = (editor: Editor) => {
    const Components = editor.Components;
    const BlockManager = editor.BlockManager;
  
    Components.addType(ComponentTypes.CaTextLink, {
      isComponent: (el: HTMLElement) => {
        if (el && el.classList) {
          return el.classList.contains(ComponentClasses.CaTextLink);
        }
      },
      extend: 'text',
      model: {
        defaults: {
          classes: [ComponentClasses.CaTextLink],
          tagName: 'a',
          droppable: false,
          style: {
            'background-color': 'transparent',
            color: '-webkit-link',
            cursor: 'pointer',
            'text-decoration': 'underline'            
          },        
          traits: ['href'],
          content: 'Text Link'
        },
      }
      
    });
  
    BlockManager.add(BlockIdentifies.TextLink, {
      category: 'Typography',
      label: 'Text Link',
      media: exportedSVG['textLink'],
      content: {
        type: ComponentTypes.CaTextLink
      },
      select: true
    });
  };
  
  export default plugin;
  