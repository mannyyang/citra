import type { Editor, Plugin } from 'grapesjs';
import { exportedSVG } from '../icons';

import { BuilderBlock, BuilderComponent } from '../enum';
import { isComponent } from '../util';

const plugin: Plugin = (editor: Editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(BuilderComponent.HEADING.id, {
    isComponent: (el: HTMLElement) => isComponent(el, BuilderComponent.HEADING.id),
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
        }
      }
    }
  });

  BlockManager.add(BuilderBlock.HEADING.id, {
    category: 'Typography',
    label: BuilderComponent.HEADING.name,
    media: exportedSVG['heading'],
    content: {
      type: BuilderComponent.HEADING.id
    },
    select: true
  });
}

export default plugin;