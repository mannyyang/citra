<script setup lang="ts">
import type { EditorConfig } from 'grapesjs';
import plugins from './plugins';

const canvas: any = ref(null)
const loading = ref(false);

const options: EditorConfig = {
  container: canvas,
  height: 'auto',
  fromElement: true,
  panels: {},
  plugins,
  selectorManager: {
    componentFirst: true
  },
  assetManager: {
    // Upload endpoint, set `false` to disable upload, default `false`
    upload: '/api/file/upload',

    // The name used in POST to pass uploaded files, default: `'files'`
    uploadName: 'citra_files',
  },
}

const grapes = useGrapes(options)
grapes.onInit((editor) => {
  // Do stuff on load
  editor.on('load', function () {

    // load default fonts
    const fontProperty = editor.StyleManager.getProperty(
      'typography',
      'font-family'
    );

    // @ts-ignore
    fontProperty?.addOption({
      value: `Lato, Helvetica, Arial, sans-serif`,
      name: 'Lato'
    });

    fontProperty?.set('default', `Lato, Helvetica, Arial, sans-serif`);
    fontProperty?.set('defaults', `Lato, Helvetica, Arial, sans-serif`);

    const openBlocksBtn = editor.Panels.getButton('views', 'open-blocks');
    openBlocksBtn && openBlocksBtn.set('active', 1);
  });

  editor.RichTextEditor.remove('bold')
  editor.RichTextEditor.add('bold', {
    name: 'bold',
    icon: '<strong>B</strong>',
    result: rte => {
      const content = rte.selection();
      const active = rte.doc.queryCommandState('bold');
      if (active === false) {
        rte.insertHTML(`<strong>${rte.selection()}</strong>`)
      }
    }
  })

  editor.RichTextEditor.remove('italic')
  editor.RichTextEditor.add('italic', {
    name: 'italic',
    icon: '<em>I</em>',
    result: rte => {
      const content = rte.selection();
      const active = rte.doc.queryCommandState('italic');
      if (active === false) {
        rte.insertHTML(`<em>${rte.selection()}</em>`)
      }
    }
  })

  editor.RichTextEditor.remove('strikethrough')
  editor.RichTextEditor.add('strikethrough', {
    name: 'strikethrough',
    icon: '<s>S</s>',
    result: rte => {
      const content = rte.selection();
      const active = rte.doc.queryCommandState('strikethrough');
      if (active === false) {
        rte.insertHTML(`<s>${rte.selection()}</s>`)
      }
    }
  })

  editor.on('asset:upload:start', () => {
    loading.value = true;
  });

  editor.on('asset:upload:end', () => {
    loading.value = false;
  });

});

// Initialize GrapesJS
watch(
  canvas,
  (newVal: any) => {
    if (!newVal) return;

    grapes.init({
      ...options,
      container: newVal
    });
  },
  { immediate: true }
);

</script>

<template>
  <div class="w-full text-right min-h-full">
    <div :class="loading? 'ca-builder flex w-full h-full pointer-events-none': 'ca-builder flex w-full h-full'">
      <div ref="canvas" class="flex-1" />      
    </div>
    <div v-show="loading" role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 loading-spinner">
      <svg aria-hidden="true" class="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<style lang="scss">
@import 'grapesjs/dist/css/grapes.min.css';

/* Default CSS vars - can test updating these instead of targeting the CSS classes. */
:root {
  --gjs-main-color: #444;
  --gjs-primary-color: #444;
  --gjs-secondary-color: #ddd;
  --gjs-tertiary-color: #804f7b;
  --gjs-quaternary-color: #d278c9;
  --gjs-font-color: #444;
  --gjs-font-color-active: #f8f8f8;
  --gjs-main-dark-color: rgba(0, 0, 0, 0.2);
  --gjs-secondary-dark-color: rgba(0, 0, 0, 0.1);
  --gjs-main-light-color: rgba(255, 255, 255, 0.1);
  --gjs-secondary-light-color: rgba(255, 255, 255, 0.7);
  --gjs-soft-light-color: rgba(0, 0, 0, 0.15);
  --gjs-color-blue: #3b97e3;
  --gjs-color-red: #dd3636;
  --gjs-color-yellow: #ffca6f;
  --gjs-color-green: #62c462;
  --gjs-left-width: 18%;
  --gjs-color-highlight: #71b7f1;
  --gjs-color-warn: #ffca6f;
  --gjs-handle-margin: -5px;
  --gjs-light-border: rgba(255, 255, 255, 0.05);
  --gjs-arrow-color: rgba(255, 255, 255, 0.7);
  --gjs-dark-text-shadow: rgba(0, 0, 0, 0.2);
  --gjs-color-input-padding: 22px;
  --gjs-input-padding: 5px;
  --gjs-padding-elem-classmanager: 5px 6px;
  --gjs-upload-padding: 150px 10px;
  --gjs-animation-duration: 0.2s;
  --gjs-main-font: Roboto, sans-serif;
  --gjs-font-size: 0.75rem;
  --gjs-placeholder-background-color: var(--gjs-color-green);
  --gjs-canvas-top: 40px;
  --gjs-flex-item-gap: 5px;
}

.loading-spinner {
  z-index: 100
}

.ca-builder {

  .gjs-pn-btn svg {
    height: 22px;
    width: 22px;
  }

  .gjs-block svg {
    overflow: visible;
  }

  .gjs-pn-devices-c {
    left: 0;
  }

  .gjs-blocks-c {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: white;
    padding: 10px;
    gap: 5px;
    font-size: 16px;

    .gjs-block {
      width: auto;
      min-width: auto;
      min-height: auto;
      background-color: white;
      color: black;
      font-weight: normal;
      border: none;
      box-shadow: none;
      padding: 10px;
      margin: 0;
      cursor: grab;
      border: 1px solid #79acfe;
      border-radius: 3px;
      align-items: center;
      justify-content: center;
      gap: 10px;

      .gjs-block__media {
        font-size: 16px;
        height: 30px;
        width: 30px;
        margin-bottom: 0;
      }

      .gjs-block-label {
        font-size: 12px;
      }

      &:hover {
        color: #1f75fe;
        border: 1px solid #1f75fe;
        background-color: #f1f6fe;

        & svg {
          color: #1f75fe;
        }
      }

      &:active {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
      }
    }
  }

  .gjs-pn-btn {
    display: flex;
    align-items: center;
    padding: 0;

    &.gjs-pn-active {
      background-color: transparent;
      box-shadow: none;

      svg {
        height: 22px;
        color: #1f75fe;
      }
    }
  }

  .gjs-clm-tags-field {
    background-color: white;
  }

  .gjs-field {
    background-color: white;
    border: 1px solid #79acfe;
    border-radius: 3px;
  }

  /* not sure why the labels sometimes have warning class when using blocks,
      just unset the color for now */
  .gjs-sm-label.gjs-color-warn {
    color: unset;
  }

  .gjs-title,
  .gjs-sm-sector-title {
    color: #5f5f5f;
    background-color: white;
    font-weight: bold;
  }

  .gjs-sm-field input,
  .gjs-sm-field select,
  .gjs-sm-field textarea {
    color: black;
  }

  .gjs-radio-item input:checked+.gjs-radio-item-label {
    background-color: #79acfe;
  }

  .gjs-radio-item:has(label.icons-flex) {
    background-color: lightgrey;
  }

  .gjs-sm-field.gjs-sm-composite {
    background-color: white;
    border: 1px solid #79acfe;
  }

  .gjs-toolbar-item {
    svg {
      color: white;
    }
  }

  /* nucleus style was setting this icon red */
  .fa-times {
    color: unset;
  }

  /* Primary color for the background */
  .gjs-one-bg {
    background-color: white;
  }

  /* Secondary color for the text color */
  .gjs-two-color {
    color: black;
  }

  /* Targets active icons */
  .gjs-four-color,
  .gjs-four-color-h:hover {
    color: #1f75fe;
  }

  /* Targets things like the selected class tags */
  .gjs-three-bg {
    border: 1px solid #1f75fe;
    background-color: #d2e3ff;
    color: black;

    svg {
      color: black;
    }
  }

  /* Targets the empty container area when switching devices */
  .gjs-cv-canvas-bg {
    background-color: #efefef;
  }

  .gjs-cv-canvas {
    box-shadow: 0 0 2px 0px #606060;
  }

  /* ADM-17588 eye icon has black background color */
  .gjs-off-prv.fa-eye-slash {
    background-color: unset;
  }
}

.panel__basic-actions {
  z-index: 10;
  left: 120px;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 2px 10px 2px 10px;
  margin-top: 2px;
}

.gjs-mdl-dialog {
  .gjs-mdl-header {
    position: relative;
    display: flex;
    border-bottom: 1px solid var(--gjs-main-dark-color);
    padding: 15px 15px 7px;
  }
}

.silex-form {
  text-align: left;

  .silex-form__group {
    .silex-bar {
      display: flex;
      gap: 10px;
      margin-bottom: 5px;

      input {
        background-color: #E7E9EB;
        color: #000;
        padding-left: 5px;
        padding-right: 5px;
      }

      select {
        background-color: #E7E9EB;
        color: #000;
      }

      button {
        background-color: #E7E9EB;
        color: #000;
      }
    }
  }

  .silex-form__element {
    h2 {
      font-size: 1.5em;
    }

    .silex-list__item__header {
      h4 {
        font-size: 1.3em
      }
    }

    .silex-list__item__body {
      fieldset {
        margin-inline-start: 2px;
        margin-inline-end: 2px;
        padding-block-start: 0.35em;
        padding-inline-start: 0.75em;
        padding-inline-end: 0.75em;
        padding-block-end: 0.625em;
        min-inline-size: min-content;
        border-width: 2px;
        border-style: groove;
        border-color: rgb(192, 192, 192);

        div {
          display: flex;
          gap: 5px;
        }
      }
    }

    .silex-list__item__footer {
      text-align: right;

      .silex-button {
        margin-top: 10px;
        background-color: #E7E9EB;
        padding: 5px;
      }
    }
  }

  footer {
    input {
      margin-top: 10px;
      background-color: #E7E9EB;
      padding: 5px;
    }
  }
}
</style>