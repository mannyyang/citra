import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';

import { BuilderBlock, BuilderCategory, BuilderComponent } from '../enum';

const H_TAGS = [
  { id: 'h1', label: 'H1' },
  { id: 'h2', label: 'H2' },
  { id: 'h3', label: 'H3' },
  { id: 'h4', label: 'H4' },
  { id: 'h5', label: 'H5' },
  { id: 'h6', label: 'H6' },
]

const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(BuilderComponent.HEADING.id, {
    isComponent: (el) =>
      el.tagName
        ? H_TAGS.some(tag => tag.id === el.tagName.toLowerCase())
        : false,
    extend: 'text',
    model: {
      defaults: {
        name: BuilderComponent.HEADING.name,
        classes: [BuilderComponent.HEADING.class],
        tagName: 'h1',
        droppable: false,
        style: {
          'margin-top': '0px',
          'margin-bottom': '10px'
        },
        content: 'Heading Text',
        attributes: {
          'data-ca': BuilderComponent.HEADING.id
        },
        traits: [
          {
            type: 'select',
            name: 'tagName',
            label: 'Head',
            options: H_TAGS,
            changeProp: true
          }
        ]
      },
    }
  });

  BlockManager.add(BuilderBlock.HEADING.id, {
    category: BuilderCategory.TYPOGRAPHY,
    label: BuilderComponent.HEADING.name,
    media: exportedSVG['heading'],
    content: {
      type: BuilderComponent.HEADING.id
    },
    select: true
  });
};

export default plugin;
