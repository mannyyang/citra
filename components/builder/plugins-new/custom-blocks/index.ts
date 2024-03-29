// @ts-nocheck

import type { BlockProperties, ComponentDefinition, Plugin } from 'grapesjs';

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

const typeCustomBlock = 'custom-block';

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

  Components.addType(typeCustomBlock, {
    model: {
      defaults: {
        name: 'Custom Block',
        editable: true,
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

  BlockManager.add('custom-block', {
    category: 'Premium',
    activate: true,
    label: 'Custom Block',
    media: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 256 256" xml:space="preserve">
    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
      <path fill="currentColor" d="M 45 41.519 c -0.149 0 -0.299 -0.034 -0.437 -0.101 L 3.904 21.659 c -0.344 -0.167 -0.563 -0.517 -0.563 -0.899 s 0.219 -0.732 0.563 -0.899 L 44.563 0.101 c 0.275 -0.134 0.599 -0.134 0.874 0 L 86.096 19.86 c 0.344 0.167 0.563 0.517 0.563 0.899 s -0.219 0.732 -0.563 0.899 L 45.437 41.418 C 45.299 41.485 45.149 41.519 45 41.519 z M 6.629 20.759 L 45 39.407 l 38.37 -18.647 L 45 2.112 L 6.629 20.759 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      <path fill="currentColor" d="M 45 90 c -0.149 0 -0.299 -0.033 -0.437 -0.101 L 3.904 70.141 c -0.344 -0.167 -0.563 -0.517 -0.563 -0.899 V 20.759 c 0 -0.345 0.177 -0.665 0.469 -0.848 c 0.294 -0.183 0.659 -0.203 0.968 -0.052 L 45 39.407 L 85.221 19.86 c 0.311 -0.15 0.677 -0.131 0.968 0.052 c 0.292 0.183 0.47 0.503 0.47 0.848 v 48.482 c 0 0.383 -0.219 0.732 -0.563 0.899 L 45.437 89.899 C 45.299 89.967 45.149 90 45 90 z M 5.341 68.615 L 45 87.888 l 39.658 -19.272 V 22.357 L 45.437 41.418 c -0.275 0.134 -0.599 0.134 -0.874 0 L 5.341 22.357 V 68.615 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      <path fill="currentColor" d="M 45 90 c -0.552 0 -1 -0.447 -1 -1 V 40.519 c 0 -0.552 0.448 -1 1 -1 s 1 0.448 1 1 V 89 C 46 89.553 45.552 90 45 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
    </g>
    </svg>`,
    content: {
      type: typeCustomBlock
    }
  });
};

export default plugin;
