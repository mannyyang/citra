import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';

/**
 * Creates a link component with some default styles and adds it as a reusable block.
 */

const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(ComponentTypes.CaLinkBlock, {
    isComponent: (el: Element) => (el.tagName || '').toLowerCase() === ComponentTypes.CaLinkBlock.toLowerCase(),
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
      init() { }
    }
  });

  BlockManager.add(BlockIdentifies.Link, {
    category: 'Basic',
    activate: true,
    label: 'Link Block',
    media: exportedSVG['linkBlock'],
    content: {
      type: ComponentTypes.CaLinkBlock
    }
  });
};

export default plugin;
