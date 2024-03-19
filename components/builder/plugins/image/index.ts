import type { Editor, Plugin } from 'grapesjs';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';


const plugin: Plugin = (editor: Editor) => {
    const Components = editor.Components;
    const BlockManager = editor.BlockManager;
  
    Components.addType(ComponentTypes.CaImage, {
      isComponent: (el: HTMLElement) => {
        if (el && el.classList) {
          return el.classList.contains(ComponentClasses.CaImage);
        }
      },    
      extend: 'image',
      model: {
        defaults: {            
          classes: [ComponentClasses.CaImage],
          draggable: `[data-gjs-type="${ComponentTypes.CaDiv}"]`,
          style: {
            'padding': '10px 25px',
            'align': 'center',
          },
          traits: ['href', 'rel', 'alt', 'title'],
        }
      },
      view: {
        attributes: {
            style: 'pointer-events: all; width: 100%; user-select: none;',
          },
      }
    });
  
    BlockManager.add(BlockIdentifies.Image, {
      category: 'Media',
      label: 'Image',
      media: `<svg data-wf-icon="AddPanelImage64Icon" width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 23C22 21.8954 22.8954 21 24 21H41C42.1046 21 43 21.8954 43 23V40C43 41.1046 42.1046 42 41 42H24C22.8954 42 22 41.1046 22 40V23ZM24 22C23.4477 22 23 22.4477 23 23V40C23 40.0896 23.0118 40.1764 23.0339 40.259L31.7929 31.5C32.1834 31.1095 32.8166 31.1095 33.2071 31.5L41.9661 40.259C41.9882 40.1764 42 40.0896 42 40V23C42 22.4477 41.5523 22 41 22H24ZM24 41C23.9104 41 23.8236 40.9882 23.741 40.9661L32.5 32.2071L41.259 40.9661C41.1764 40.9882 41.0896 41 41 41H24ZM28 28.5C28.8284 28.5 29.5 27.8284 29.5 27C29.5 26.1716 28.8284 25.5 28 25.5C27.1716 25.5 26.5 26.1716 26.5 27C26.5 27.8284 27.1716 28.5 28 28.5Z" fill="currentColor"></path></svg>`,
      content: {
        type: ComponentTypes.CaImage,
        style: { color: 'black' },
      },
      activate: true,
    });
  };
  
  export default plugin;
  