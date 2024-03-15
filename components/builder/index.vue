<script setup lang="ts">
import 'grapesjs/dist/css/grapes.min.css';
import { useGrapes } from 'vue-grapesjs-composables';
import './builder.css';
import plugins from './plugins';

const canvas = ref(null)

const grapes = useGrapes({
  container: canvas,
  height: 'auto',
  panels: {},
  plugins,
})
</script>

<template>
  <div class="ca-builder flex w-full min-h-full">
    <div
      ref="canvas"
      class="flex-1 min-h-full"
    />
  </div>
</template>
