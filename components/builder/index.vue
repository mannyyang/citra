<script setup lang="ts">
import 'grapesjs/dist/css/grapes.min.css';

import './builder.css';
import plugins from './plugins';

const canvas = ref(null)

const {
  onInit,
} = useGrapes({
  container: canvas,
  height: 'auto',
  fromElement:true,
  panels: {},
  plugins,
})

onInit((editor) => {
  const panels = editor.Panels
  const commands = editor.Commands

  const cmdClear = 'canvas-clear'

  commands.add(cmdClear, () => {
    if (confirm('Are you sure to clean the canvas?'))
      editor.runCommand('core:canvas-clear')
  })

  const clearButton = {
    id: cmdClear,
    command: () => editor.runCommand(cmdClear),
    label: `
    <svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
    </svg>`,
  }

  panels.addButton('options', clearButton)
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
