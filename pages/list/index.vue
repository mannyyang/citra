<script setup lang="ts">
// use nuxt directus to fetch data
const { getItems } = useDirectusItems()

const builderPages = await getItems < any > ({
  collection: 'builder_page',
})
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th
            scope="col"
            class="px-6 py-3"
          >
            Builders
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(page) in builderPages"
          :key="page.builder_page_id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700
        hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ page.builder_page_id }}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
