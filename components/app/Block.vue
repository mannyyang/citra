<script setup lang="ts">
import grapesjs from 'grapesjs'
import plugin from '../types'

const gjs = ref(null)

onMounted(() => {
  grapesjs.init({
    container: gjs.value,
    height: '100%',
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
  <div ref="gjs" />
</template>
