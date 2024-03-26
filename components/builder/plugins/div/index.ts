import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';
import { isComponent } from '../util';

/**
 * Creates an empty div as a starting point.
 */
const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(ComponentTypes.CaDiv, {
    isComponent: (el: HTMLElement) => isComponent(el, ComponentTypes.CaDiv),
    model: {
      defaults: {
        classes: [ComponentClasses.CaDiv],
        tagName: 'div',
        style: {
          display: 'flex',
          padding: '20px'
        },
        attributes: {
          'data-ca': ComponentTypes.CaDiv
        }
      }
    }
  });

  BlockManager.add(BlockIdentifies.Div, {
    category: 'Basic',
    label: 'Div',
    media: exportedSVG['div'],
    content: {
      type: ComponentTypes.CaDiv
    },
    select: true
  });
};

export default plugin;
