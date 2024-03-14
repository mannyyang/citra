<script setup lang="ts">
import { useGrapes } from 'vue-grapesjs-composables'
import 'vue-grapesjs-composables/css/vue-grapes.css'
import plugin from '../types';

const gjs = ref(null)

const grapes = useGrapes({
  container: gjs,
  fromElement: true
})

grapes.onInit(editor => plugin(editor))

</script>

<template>
  <div ref="gjs" class="min-h-full" />
</template>
