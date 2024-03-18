import type { Editor, Plugin } from 'grapesjs';
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
        }
      }
    });
  
    BlockManager.add(BlockIdentifies.TextBlock, {
      category: 'Typography',
      label: 'Text Link',
      media: `<svg data-wf-icon="AddPanelLink64Icon" width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.4846 25.2727V34H26.5982V33.0625H22.5414V25.2727H21.4846ZM28.0982 27.4545V34H29.1039V27.4545H28.0982ZM28.1025 26.1634C28.2445 26.2969 28.4135 26.3636 28.6096 26.3636C28.8056 26.3636 28.9732 26.2969 29.1124 26.1634C29.2544 26.0298 29.3255 25.8693 29.3255 25.6818C29.3255 25.4943 29.2544 25.3338 29.1124 25.2003C28.9732 25.0668 28.8056 25 28.6096 25C28.4135 25 28.2445 25.0668 28.1025 25.2003C27.9632 25.3338 27.8936 25.4943 27.8936 25.6818C27.8936 25.8693 27.9632 26.0298 28.1025 26.1634ZM31.9515 34V30.0625C31.9515 29.6818 32.024 29.358 32.1689 29.0909C32.3137 28.8239 32.5112 28.6207 32.7612 28.4815C33.014 28.3423 33.301 28.2727 33.622 28.2727C34.0879 28.2727 34.4544 28.4176 34.7214 28.7074C34.9885 28.9943 35.122 29.3949 35.122 29.9091V34H36.1277V29.8409C36.1277 29.2841 36.0353 28.8239 35.8507 28.4602C35.666 28.0938 35.4075 27.821 35.0751 27.642C34.7427 27.4602 34.3549 27.3693 33.9118 27.3693C33.4174 27.3693 33.014 27.4716 32.7015 27.6761C32.389 27.8778 32.1561 28.1449 32.0027 28.4773H31.9174V27.4545H30.9458V34H31.9515ZM38.9711 31.5505V34H37.9654V25.2727H38.9711V30.3693H39.0904L41.954 27.4545H43.1983L40.4328 30.2509L43.4029 34H42.1245L39.6754 30.8979L38.9711 31.5505ZM21 39L44 39V38L21 38V39Z" fill="currentColor"></path></svg>`,
      content: {
        type: ComponentTypes.CaTextLink
      },
      select: true
    });
  };
  
  export default plugin;
  