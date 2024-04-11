import grapesjs, { Editor, type EditorConfig } from 'grapesjs';
import { onBeforeUnmount, reactive } from 'vue';

/**
 * Derived and modified from https://github.com/dutchigor/vue-grapesjs-composables/blob/main/src/composables/useGrapes.js
 * Reactive base state and functions to manage Vue GrapesJS Composables.
 * @typedef VGCconfig
 * @property {Object} config Reactive version of the provided GrapesJS configuration object
 * @property {boolean} initialized Whether GrapesJS has been initialized
 * @property {VGCconfig~onBeforeInit} onBeforeInit Register function to be executed
 * right before GrapesJS is initialized
 * @property {VGCconfig~onInit} onInit Register function to be executed
 * right after GrapesJS is initialized
 */

/**
 * Initialize GrapesJS and make it available to the other composables
 * @exports useGrapes
 * @param {Object} config Configuration options as defined by
 * [GrapesJS]{@link https://github.com/artf/grapesjs/blob/master/src/editor/config/config.js}
 * @returns {VGCconfig}
 */
export function useGrapes(config: EditorConfig) {
  let editor: Editor;

  const beforeInit: Function[] = [];
  const afterInit: Function[] = [];

  // Prepare object to export.
  const grapes = {
    // Cache to store reactive objects for composables
    _cache: {},

    // Make the configuration reactive to make use of template refs to append to.
    // Some default values provided to be more inline with integrating in to Vue.
    config: reactive({
      panels: {},
      height: '100%',
      ...config
    }),

    initialized: false,
    editor: null,

    /**
     * @method onBeforeInit
     * @memberof VGCconfig
     * @inner
     * @param {Function} fn Function to register. Does not receive any parameters.
     */
    onBeforeInit(fn: Function) {
      beforeInit.push(fn);
    },

    /**
     * @method onInit
     * @memberof VGCconfig
     * @inner
     * @param {Callback} fn Function to register. Receives the GrapesJS editor as a parameter.
     */
    onInit(fn: (editor: Editor) => void) {
      afterInit.push(fn);
    },
    /**
     * Initialize GrapesJS
     * @method init
     * @memberof VGCconfig
     * @inner
     * @returns {void}
     */
    init(config) {
      init(config);
    }
  } as {
    config: EditorConfig;
    initialized: boolean;
    editor: Editor | null;
    onBeforeInit: (fn: Function) => void;
    onInit: (fn: (editor: Editor) => void) => void;
    init: (config?: EditorConfig) => void;
  };

  // Tidy up
  onBeforeUnmount(() => editor && editor.destroy());

  // Have a user manually call init so they can control when the editor is
  // created. They may want to init on mount or watch for some content.d
  function init(initConfig?: EditorConfig) {
    // check if container exists
    if (!initConfig?.container && !grapes.config.container) {
      console.error('No container provided for GrapesJS.');
      return;
    }

    // Execute all functions registered before initialization
    for (const fn of beforeInit) {
      fn();
    }

    // Initialize GrapesJS
    let config = grapes.config;
    if (initConfig) {
      config = {
        ...config,
        ...initConfig
      };
    }
    editor = grapesjs.init(config);

    // Make GrapesJS editor available to other composables
    grapes.initialized = true;
    grapes.editor = editor;

    // Execute all functions registered after initialization
    for (const fn of afterInit) {
      fn(editor);
    }
  }

  return grapes;
}
