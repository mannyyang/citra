// @ts-nocheck

import type { BlockProperties, ComponentDefinition, Plugin } from 'grapesjs';
import { BuilderBlock, BuilderComponent } from '../enum';
import { exportedSVG } from '../icons';

export type PluginOptions = {
  /**
   * Object to extend the default custom code block. Pass a falsy value to avoid adding the block
   * @example
   * { label: 'Custom Code', category: 'Extra', ... }
   */
  blockCustomCode?: Partial<BlockProperties>;

  /**
   * Object to extend the default custom code properties.
   * @example
   * { name: 'Custom Code', droppable: false, ... }
   */
  propsCustomCode?: ComponentDefinition;

  /**
   * Object to extend the default component's toolbar button for the code. Pass a falsy value to avoid adding the button
   * @example
   * { label: '</>', attributes: { title: 'Open custom code' } }
   */
  toolbarBtnCustomCode?: Record<string, any>;

  /**
   * Content to show when the custom code contains `<script>`
   */
  placeholderScript?: string;

  /**
   * Title for the custom code modal
   * @default 'Insert your code'
   */
  modalTitle?: string;
};


const plugin: Plugin<PluginOptions> = (editor, opts = {}) => {
  // const options: PluginOptions = {
  //   blockCustomCode: {},
  //   propsCustomCode: {},
  //   toolbarBtnCustomCode: {},
  //   placeholderScript: `<div style="pointer-events: none; padding: 10px;">
  //     <svg viewBox="0 0 24 24" style="height: 30px; vertical-align: middle;">
  //       <path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"></path>
  //       </svg>
  //     test
  //   </div>`,
  //   modalTitle: 'Insert your code',
  //   codeViewOptions: {},
  //   buttonLabel: 'Save',
  //   commandCustomCode: {},
  //   ...opts
  // };

  const Components = editor.Components;
  const BlockManager = editor.BlockManager;

  Components.addType(BuilderComponent.CUSTOM_BLOCK.id, {
    isComponent: (el) => isComponent(el, BuilderComponent.CUSTOM_BLOCK.id),
    model: {
      defaults: {
        name: BuilderComponent.CUSTOM_BLOCK.name,
        editable: true,
        attributes: {
          'data-ca': BuilderComponent.CUSTOM_BLOCK.id
        },
        components: {
          tagName: 'div',
          components: {
            type: 'textnode',
            content: 'Add custom block here'
          }
        } as any
      },

      updateContent(html: string) {
        this.components(html);
      }
    },

    view: {
      events: {
        dblclick: 'onActive'
      } as any,

      onActive() {
        document.dispatchEvent(
          new CustomEvent('custom-block-init', { detail: this })
        );
      }
    }
  });

  BlockManager.add(BuilderBlock.CUSTOM_BLOCK.id, {
    category: 'Premium',
    activate: true,
    label: BuilderBlock.CUSTOM_BLOCK.name,
    media: exportedSVG['customBlock'],
    content: {
      type: BuilderComponent.CUSTOM_BLOCK.id
    }
  });
};

export default plugin;
