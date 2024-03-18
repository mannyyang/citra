import grapesjs, { Editor, type EditorConfig } from 'grapesjs'
import { nextTick, onBeforeUnmount, onMounted, reactive } from 'vue'

/**
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
export function useGrapes(config: EditorConfig | {
  container: Ref<any>
}) {
  const beforeInit: Function[] = []
  const afterInit: Function[] = []

  // Prepare object to export.
  const grapes = {
    // Cache to store reactive objects for composables
    _cache: {},

    // Make the configuration reactive to make use of template refs to append to.
    // Some default values provided to be more inline with integrating in to Vue.
    config: reactive({
      panels: { defaults: [] },
      height: '100%',
      ...config,
    }),

    initialized: false,
    editor: null,

    /**
     * @method onBeforeInit
     * @memberof VGCconfig
     * @inner
     * @param {Function} fn Function to register. Does not receive any parameters.
     */
    onBeforeInit(fn: Function) { beforeInit.push(fn) },

    /**
     * @method onInit
     * @memberof VGCconfig
     * @inner
     * @param {Callback} fn Function to register. Receives the GrapesJS editor as a parameter.
     */
    onInit(fn: (editor: Editor) => void) {
      afterInit.push(fn)
    },
  } as {
    config: EditorConfig;
    initialized: boolean;
    editor: Editor | null;
    onBeforeInit: (fn: Function) => void;
    onInit: (fn: (editor: Editor) => void) => void;
  };

  let editor: Editor
  // Initialize GrapesJs after Vue component has been mounted.
  onMounted(async () => {
    // Wait for all child components to mount
    await nextTick()

    // Execute all functions registered before initialization
    for (const fn of beforeInit) { fn() }

    // Initialize GrapesJS
    editor = grapesjs.init(grapes.config as EditorConfig)

    // Make GrapesJS editor available to other composables
    grapes.initialized = true
    grapes.editor = editor

    for (const fn of afterInit) { fn(editor) }
  })

  // Tidy up
  onBeforeUnmount(() => editor.destroy())

  return grapes
}