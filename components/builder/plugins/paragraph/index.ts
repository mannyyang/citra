import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';

const plugin: Plugin = (editor: Editor) => {
    const Components = editor.Components;
    const BlockManager = editor.BlockManager;
  
    Components.addType(ComponentTypes.CaParagraph, {
      isComponent: (el: Element) => (el.tagName || '').toLowerCase() === ComponentTypes.CaParagraph.toLowerCase(),
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
      media: exportedSVG['paragraph'],
      content: {
        type: ComponentTypes.CaParagraph
      },
      select: true
    });
  };
  
  export default plugin;
  