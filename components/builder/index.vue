<script setup lang="ts">
import { useGrapes } from 'vue-grapesjs-composables';
import 'vue-grapesjs-composables/css/vue-grapes.css';

import divBlock from './plugins/div';

const canvas = ref(null)

const grapes = useGrapes({
  container: canvas,
  height: 'auto',
  plugins: [divBlock],
  panels: {},
})
</script>

<template>
  <div class="ca-builder flex w-full min-h-full">
    <BuilderBlocks :grapes="grapes" />
    <div
      ref="canvas"
      class="flex-1 min-h-full"
    />
  </div>
</template>
