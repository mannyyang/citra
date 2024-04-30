<template>
  <NuxtLink to="/" class="flex items-center gap-2">
    <img :src="logoPath" alt="logo" class="h-8 w-8">
    <span class="text-lg font-semibold">Citra</span>
  </NuxtLink>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()
  const logoPath = config.directusPublicUrl + "/assets/db366ddb-7cc4-49d7-9835-c4b7341f085e" + "/Clementine.png"
</script>