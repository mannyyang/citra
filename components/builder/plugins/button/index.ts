import type { Plugin } from 'grapesjs';
import { BuilderBlock, BuilderCategory, BuilderComponent } from '../enum';
import { exportedSVG } from '../icons';
import { isComponent } from '../util';

const plugin: Plugin = (editor) => {
  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(BuilderComponent.BUTTON.id, {
    isComponent: (el) => isComponent(el, BuilderComponent.BUTTON.id),
    extend: 'text',
    model: {
      defaults: {
        name: BuilderComponent.BUTTON.name,
        classes: [BuilderComponent.BUTTON.class],
        attributes: {
          'data-ntvb': 'button',
          'data-ca': BuilderComponent.BUTTON.id
        },
        tagName: 'button',
        style: {
          display: 'flex',
          'justify-content': 'center',
          padding: '10px 20px',
          'background-color': '#0d6efd',
          color: '#fff',
          'border-radius': '5px',
          'text-align': 'center',
          'text-decoration': 'none'
        },
        content: 'Button Text'
      }
    },
    view: {
      init() {
        this.listenTo(this.model, `change:modify change:dataSource change:Table`, this.handleChanges);
      },
      handleChanges() { }
    }
  });

  BlockManager.add(BuilderBlock.BUTTON.id, {
    category: BuilderCategory.BASIC,
    activate: true,
    label: 'Button',
    media: exportedSVG['button'],
    content: {
      type: BuilderComponent.BUTTON.id
    }
  });
};

export default plugin;
