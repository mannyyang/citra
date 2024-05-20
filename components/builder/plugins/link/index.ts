import type { Plugin } from 'grapesjs';
import { BuilderBlock, BuilderCategory, BuilderComponent } from '../enum';
import { exportedSVG } from '../icons';

const plugin: Plugin = (editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(BuilderComponent.LINK.id, {
    isComponent: (el) =>
      el.tagName ? el.tagName.toLowerCase() === 'a' : false,
    extend: 'text',
    model: {
      defaults: {
        name: BuilderComponent.LINK.name,
        classes: [BuilderComponent.LINK.class],
        tagName: 'a',
        traits: ['title', 'href', 'target'],
        components: 'Text Link',
        style: {
          'text-decoration': 'underline'
        }
      }
    }
  });

  BlockManager.add(BuilderBlock.LINK.id, {
    category: BuilderCategory.TYPOGRAPHY,
    activate: true,
    label: 'Link',
    media: exportedSVG['link'],
    content: {
      type: BuilderComponent.LINK.id
    }
  });
};

export default plugin;
