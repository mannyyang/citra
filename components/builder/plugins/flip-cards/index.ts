import type { Editor, Plugin } from 'grapesjs';
import { BuilderBlock, BuilderCategory, BuilderComponent } from '../enum';
import { exportedSVG } from '../icons';
import { isComponent } from '../util';
import flipCards from './constants';

const plugin: Plugin = (editor: Editor) => {
  const BlockManager = editor.BlockManager;
  const Components = editor.Components;

  Components.addType(BuilderComponent.FLIP_CARDS.id, {
    isComponent: (el) => isComponent(el, BuilderComponent.FLIP_CARDS.id),
    model: {
      defaults: {
        script: flipCards.script,
        styles: flipCards.styles,
        components: flipCards.content,
        attributes: {
          'data-ca': BuilderComponent.FLIP_CARDS.id
        },
        classes: [BuilderComponent.FLIP_CARDS.class]
      }
    }
  });

  BlockManager.add(BuilderBlock.FLIP_CARDS.id, {
    category: BuilderCategory.INTERACTIVE,
    label: BuilderBlock.FLIP_CARDS.name,
    media: exportedSVG['flipCards'],
    content: {
      type: BuilderBlock.FLIP_CARDS.id
    }
  });
};

export default plugin;
