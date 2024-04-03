import type { Plugin } from 'grapesjs';
import { BuilderBlock, BuilderCategory, BuilderComponent } from '../enum';
import { exportedSVG } from '../icons';
import { isComponent } from '../util';

/**
 * Creates an empty div as a starting point.
 */
const plugin: Plugin = (editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(BuilderComponent.DIV.id, {
    isComponent: (el: HTMLElement) => isComponent(el, BuilderComponent.DIV.id),
    model: {
      defaults: {
        name: BuilderComponent.DIV.name,
        classes: [BuilderComponent.DIV.class],
        tagName: 'div',
        attributes: {
          'data-ca': BuilderComponent.DIV.id
        },
        style: {
          display: 'flex',
          padding: '20px'
        }
      }
    }
  });

  BlockManager.add(BuilderBlock.DIV.id, {
    category: BuilderCategory.BASIC.name,
    label: BuilderBlock.DIV.name,
    media: exportedSVG['div'],
    content: {
      type: BuilderComponent.DIV.id
    },
    select: true
  });
};

export default plugin;
