import type { Editor } from 'grapesjs';


const COMPONENT_TYPE = 'navList';

/**
 * Creates an empty div as a starting point.
 */
const plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(COMPONENT_TYPE, {
    isComponent: (el: HTMLElement) => {
      if (el && el.classList) return el.classList.contains('nav-list');
    },
    model: {
      defaults: {
        classes: ['nav-list'],
        tagName: 'ul',
        components:[{
          tagName: 'li',
          type: 'text',
        }],        
      },      
    }
  });

  BlockManager.add('list', {
    category: 'Basic',
    label: 'List',
    media: `<svg data-wf-icon="AddPanelList64Icon" width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19C12 18.4477 12.4477 18 13 18H51C51.5523 18 52 18.4477 52 19V45C52 45.5523 51.5523 46 51 46H13C12.4477 46 12 45.5523 12 45V19Z" fill="white" fill-opacity="0.1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 19H51V45H13L13 19ZM12 19C12 18.4477 12.4477 18 13 18H51C51.5523 18 52 18.4477 52 19V45C52 45.5523 51.5523 46 51 46H13C12.4477 46 12 45.5523 12 45V19ZM19 24C19 24.5523 18.5523 25 18 25C17.4477 25 17 24.5523 17 24C17 23.4477 17.4477 23 18 23C18.5523 23 19 23.4477 19 24ZM19 33C19 33.5523 18.5523 34 18 34C17.4477 34 17 33.5523 17 33C17 32.4477 17.4477 32 18 32C18.5523 32 19 32.4477 19 33ZM22 24H46V32H22V24ZM47 33V32V24C47 23.4477 46.5523 23 46 23H22C21.4477 23 21 23.4477 21 24V32V33V40C21 40.5523 21.4477 41 22 41H46C46.5523 41 47 40.5523 47 40V33ZM22 40V33H46V40H22Z" fill="currentColor"></path></svg>`,
    content: {
      type: COMPONENT_TYPE
    },
    select: true
  });
};

export default plugin;
