<script setup lang="ts">
import { useBlocks } from 'vue-grapesjs-composables';

// Provide the response from useGrapes as prop
const { grapes } = defineProps(['grapes'])
const blocksMgr = useBlocks(grapes)
</script>

<template>
  <div class="block-list" v-if="blocksMgr">  
     <div
      v-for="block in blocksMgr.blocks"
      :key="block.getId()"
      draggable="true"
      @dragstart="blocksMgr.dragStart(block._model)"
      @dragend="blocksMgr.dragStop()"
      v-html="block.getLabel()"
    />
  </div>
</template>
