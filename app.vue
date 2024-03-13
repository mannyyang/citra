<script setup lang="ts">
const route = useRoute()

function layout() {
  if (route?.path?.startsWith('/app'))
    return 'app'
  else if (route?.path?.startsWith('/build'))
    return 'build'
  else
    return 'default'
}
</script>

<template>
  <NuxtLayout :name="layout()">
    <NuxtPage />
  </NuxtLayout>
</template>
