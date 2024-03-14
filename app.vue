<script setup lang="ts">
const { layout } = useLayout()
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
