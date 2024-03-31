<script setup lang="ts">
import 'grapesjs/dist/css/grapes.min.css';

import type { EditorConfig } from 'grapesjs';
import plugins from './plugins';


const canvas: any = ref(null)

const options: EditorConfig = {
  container: canvas,
  height: 'auto',
  fromElement: true,
  panels: {},
  plugins,
}

const grapes = useGrapes(options)

grapes.onInit((editor) => {
  const pn = editor.Panels;

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

    console.log(fontProperty)

    // Show borders by default
    pn.getButton('options', 'sw-visibility')?.set('active', 1);

    // Open block manager
    const openBlocksBtn = editor.Panels.getButton('views', 'open-blocks');
    openBlocksBtn && openBlocksBtn.set('active', 1);
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
  <div class="ca-builder flex w-full min-h-full">
    <div ref="canvas" class="flex-1 min-h-full" />
  </div>
</template>
