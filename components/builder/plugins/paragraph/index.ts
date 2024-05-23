import type { Editor, Plugin } from 'grapesjs';
import { BuilderBlock, BuilderCategory, BuilderComponent } from '../enum';
import { exportedSVG } from '../icons';

const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(BuilderComponent.PARAGRAPH.id, {
    isComponent: (el) =>
      el.tagName ? el.tagName.toLowerCase() === 'p' : false,
    extend: 'text',
    model: {
      defaults: {
        name: BuilderComponent.PARAGRAPH.name,
        classes: [BuilderComponent.PARAGRAPH.class],
        attributes: {
          'data-ntvb': BuilderComponent.PARAGRAPH.id
        },
        tagName: 'p',
        droppable: false,
        style: {
          padding: '10px',
          'box-sizing': 'border-box',
          width: '100%'
        },
        content: 'Add your text here.'
      }
    }
  });

  BlockManager.add(BuilderBlock.PARAGRAPH.id, {
    category: BuilderCategory.TYPOGRAPHY,
    label: BuilderBlock.PARAGRAPH.name,
    media: exportedSVG['paragraph'],
    content: {
      type: BuilderComponent.PARAGRAPH.id
    },
    select: true
  });
};

export default plugin;
