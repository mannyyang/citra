<script setup lang="ts">
import grapesjs from 'grapesjs';
import plugin from '../types';

const gjs = ref(null)

onMounted(() => {
  grapesjs.init({
    container: gjs.value,
    height: 'auto',
    noticeOnUnload: false,
    storageManager: false,
    fromElement: true,
    plugins: [plugin],
    pluginsOpts: [
      editor => plugin(editor, {}),
    ],
  })
})
</script>

<template>
  <div ref="gjs" class="min-h-full" />
</template>
