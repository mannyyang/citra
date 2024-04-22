<script setup lang="ts">
const route = useRoute();

const isShownNav = !route.path.includes('/preview');
const isShownFooter = !route.path.includes('/preview');

</script>
<template>
  <div class="min-h-screen flex flex-col">
    <MarketingNavbar v-if="isShownNav"/>
    <div class="px-4 flex-grow">
      <slot />
    </div>

    <MarketingFooter v-if="isShownFooter"/>
  </div>
</template>
