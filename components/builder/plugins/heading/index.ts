import type { Editor, Plugin } from 'grapesjs';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';


const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(ComponentTypes.NtvbHeading, {
    isComponent: (el: HTMLElement) => {
      if (el && el.classList) return el.classList.contains(ComponentClasses.NtvbHeading);
    },
    model: {
      defaults: {
        classes: [ComponentClasses.NtvbHeading],
        tagName: 'h1',
        style: {
          'margin-top': '0px',
          'margin-bottom': '10px'
        },
        components: 'Heading Text'
      }
    }
  });

  BlockManager.add(BlockIdentifies.Heading, {
    category: 'Typography',
    label: 'Heading',
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 4v3h5.5v12h3V7H19V4H5z"></path></svg>`,
    content: {
      type: ComponentTypes.NtvbHeading
    },
    select: true
  });
}
