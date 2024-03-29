import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';
import { BlockIdentifies, ComponentClasses, ComponentTypes } from '../types';
import { isComponent } from '../util';

const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(ComponentTypes.CaImage, {
    isComponent: (el: HTMLElement) => isComponent(el, ComponentTypes.CaImage),
    extend: 'image',
    model: {
      defaults: {
        classes: [ComponentClasses.CaImage],
        style: {
          'padding': '10px 25px',
          'align': 'center',
        },
        traits: ['href', 'rel', 'alt', 'title'],
        attributes: {
          'data-ca': ComponentTypes.CaImage
        }
      }
    },
    view: {
      attributes: {
        style: 'pointer-events: all; width: 100%; user-select: none;',
      },
    }
  });

  BlockManager.add(BlockIdentifies.Image, {
    category: 'Media',
    label: 'Image',
    media: exportedSVG['image'],
    content: {
      type: ComponentTypes.CaImage,
      style: { color: 'black', width: '100%', height: 'auto' },
    },
    activate: true,
  });
};

export default plugin;
