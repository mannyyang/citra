import type { Editor, Plugin } from 'grapesjs';
import { BuilderBlock, BuilderComponent } from '../../enum';
import { exportedSVG } from '../../icons';
import { isComponent } from '../../util';
import carousel from './constants';

const plugin: Plugin = (editor: Editor) => {
  const BlockManager = editor.BlockManager;
  const Components = editor.Components;

  Components.addType(BuilderComponent.CAROUSEL.id, {
    isComponent: el => isComponent(el, BuilderComponent.CAROUSEL.id),
    model: {
      defaults: {
        script: carousel.script,
        styles: carousel.styles,
        components: carousel.content,
        attributes: {
          'data-ca': BuilderComponent.CAROUSEL.id,
        },
        classes: [BuilderComponent.CAROUSEL.class],
      },
    },
  });

  BlockManager.add(BuilderBlock.CAROUSEL.id, {
    category: 'Interactive',
    label: BuilderBlock.CAROUSEL.name,
    media: exportedSVG['carousel'],
    content: {
      type: BuilderBlock.CAROUSEL.id
    }
  });
};

export default plugin;
