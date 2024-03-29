<script setup lang="ts">
import 'grapesjs/dist/css/grapes.min.css';
import './builder.css';

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
