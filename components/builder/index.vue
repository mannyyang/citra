<script setup lang="ts">
import { useGrapes } from 'vue-grapesjs-composables';
import 'vue-grapesjs-composables/css/vue-grapes.css'
import devBlock from './plugins/div'

const canvas = ref(null)

const grapes = useGrapes({
  container: canvas,
  height: 'auto',
  panels: {},    
})

grapes.onInit(devBlock)
</script>

<template>
  <div class="ca-builder flex w-full min-h-full">
    <div
      ref="canvas"     
      class="flex-1 min-h-full" 
    >
    </div>
    <BuilderBlocks :grapes="grapes"/>
  </div>
</template>

<style>
.gjs-cv-canvas { position: absolute; }
</style>