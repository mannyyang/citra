<template>
  <NuxtLink to="/" class="flex items-center gap-2">
    <img :src="logoPath" alt="logo" class="h-8 w-8">
    <span class="text-lg font-semibold">Citra</span>
  </NuxtLink>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()
  const logoPath = config.directusPublicUrl + "/assets/73235046-a139-4315-91a8-e28963b44c75" + "/logo.png"
</script>