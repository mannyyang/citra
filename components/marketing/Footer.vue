<script setup lang="ts">
const footerNavs = [
  {
    href: '/',
    name: 'Home',
  },

  {
    href: '/login',
    name: 'Login',
  },
]
</script>

<template>
  <UDivider class="mt-24 mb-8" />
  <footer class="px-4 py-5 max-w-screen-xl mx-auto">
    <div class="max-w-lg sm:mx-auto sm:text-center">
      <div class="flex justify-center">
        <Brand />
      </div>
    </div>
    <div class="mt-8 items-center justify-center sm:flex gap-8">
      <div class="mt-4 sm:mt-0">
        &copy; {{ new Date().getFullYear() }}
      </div>      
    </div>
  </footer>
</template>
