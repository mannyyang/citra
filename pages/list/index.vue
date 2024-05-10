<script setup lang="ts">
 const { $directus, $readItems, $isAuthenticated } = useNuxtApp();
 const builders = ref([])
 if ($isAuthenticated) {
    const {data:collection} = await useAsyncData('collection', ()=>$directus.request($readItems('builder_page', {fields: ['builder_page_id']})));
    builders.value = collection;                
 }
 
</script>

<template>
<table class="table-auto">
    <thead>
        <tr><th>Builders</th></tr>
    </thead>
    <tbody>
        <tr v-for="(builder, index) in builders.value">
        <td>{{builder.builder_page_id}}</td>
        </tr>
    </tbody>
</table>
</template>
