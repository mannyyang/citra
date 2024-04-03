import type { Editor, Plugin } from 'grapesjs';
import { BuilderBlock, BuilderCategory, BuilderComponent } from '../enum';
import { exportedSVG } from '../icons';
import { isComponent } from '../util';
import flipCards3D from './constants';

const plugin: Plugin = (editor: Editor) => {
  const BlockManager = editor.BlockManager;
  const Components = editor.Components;

  Components.addType(BuilderComponent.FLIP_CARDS_3D.id, {
    isComponent: el => isComponent(el, BuilderComponent.FLIP_CARDS_3D.id),
    model: {
      defaults: {
        script: flipCards3D.script,
        styles: flipCards3D.styles,
        components: flipCards3D.content,
        attributes: {
          'data-ca': BuilderComponent.FLIP_CARDS_3D.id,
        },
        classes: [BuilderComponent.FLIP_CARDS_3D.class],
      },
    },
  });

  BlockManager.add(BuilderBlock.FLIP_CARDS_3D.id, {
    category: BuilderCategory.INTERACTIVE.name,
    label: BuilderBlock.FLIP_CARDS_3D.name,
    media: exportedSVG['flipCards3D'],
    content: {
      type: BuilderBlock.FLIP_CARDS_3D.id
    }
  });
};

export default plugin;
