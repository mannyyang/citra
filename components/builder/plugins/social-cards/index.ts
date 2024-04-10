import type { Editor, Plugin } from 'grapesjs';
import { BuilderBlock, BuilderCategory, BuilderComponent } from '../enum';
import { exportedSVG } from '../icons';
import { isComponent } from '../util';
import socialCards from './constants';

const plugin: Plugin = (editor: Editor) => {
  const BlockManager = editor.BlockManager;
  const Components = editor.Components;

  Components.addType(BuilderComponent.SOCIAL_CARDS.id, {
    isComponent: el => isComponent(el, BuilderComponent.SOCIAL_CARDS.id),
    model: {
      defaults: {
        styles: socialCards.styles,
        components: socialCards.content,
        attributes: {
          'data-ca': BuilderComponent.SOCIAL_CARDS.id,
        },
        classes: [BuilderComponent.SOCIAL_CARDS.class],
      },
    },
  });

  BlockManager.add(BuilderBlock.SOCIAL_CARDS.id, {
    category: BuilderCategory.INTERACTIVE,
    label: BuilderBlock.SOCIAL_CARDS.name,
    media: exportedSVG['socialCards'],
    content: {
      type: BuilderBlock.SOCIAL_CARDS.id
    }
  });
};

export default plugin;
