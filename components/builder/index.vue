<script setup lang="ts">
import { useGrapes } from 'vue-grapesjs-composables';
import devBlock from './plugins/div'
import "grapesjs/dist/css/grapes.min.css"
import "./builder.css"

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
  </div>
</template>

