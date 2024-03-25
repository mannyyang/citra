import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';


const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(ComponentTypes.CaHeading, {
    isComponent: (el: HTMLElement) => {
      if (el && el.classList) return el.classList.contains(ComponentClasses.CaHeading);
    },
    extend: 'text',
    model: {
      defaults: {
        classes: [ComponentClasses.CaHeading],
        tagName: 'h1',
        droppable: false,
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
    media: exportedSVG['heading'],
    content: {
      type: ComponentTypes.CaHeading
    },
    select: true
  });
}

export default plugin;