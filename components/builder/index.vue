<script setup lang="ts">
import { useGrapes } from 'vue-grapesjs-composables';
import 'grapesjs/dist/css/grapes.min.css';

import divBlock from './plugins';

const canvas = ref(null)

const grapes = useGrapes({
  container: canvas,
  height: 'auto',
  panels: {},  
})

grapes.onInit(divBlock)
</script>

<template>
  <div class="ca-builder flex w-full min-h-full">  
    <div
      ref="canvas"
      class="flex-1 min-h-full"
    />
  </div>
</template>

<style scoped >
.gjs-devices-c {
  padding: 2px 3px 0 3px;
}

</style>