<script setup lang="ts">
import { useGrapes } from 'vue-grapesjs-composables';
import 'vue-grapesjs-composables/css/vue-grapes.css';

import plugin from './plugins/div';

const gjs = ref(null)

const grapes = useGrapes({
  container: gjs,
  height: 'auto',
  plugins: [plugin],
})
</script>

<template>
  <div ref="gjs" class="min-h-full" />
</template>
