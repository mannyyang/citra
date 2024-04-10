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



function onPublish() {  
  const componentData = JSON.stringify(grapes.editor.getComponents());
  const html = grapes.editor.getHtml();
  const css = grapes.editor.getCss();
  const js =  grapes.editor.getJs()

  useCreateBuilder(componentData, html, css, js) 
  .then(res => {    
    navigateTo(`/build/${res.builder.builderPageId}`)
  })
  .catch(err=>{
    console.log(err)
  })    
}


</script>

<template>  
  <div class="w-full text-right min-h-full">
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="onPublish">Publish</button>
    <div class="ca-builder flex w-full h-full">  
      <div ref="canvas" class="flex-1" />
    </div>
  </div>
</template>

<style lang="scss">
.gjs-pn-btn svg {
  height: 22px;
}
</style>