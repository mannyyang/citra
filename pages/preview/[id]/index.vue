<script setup lang="ts">
import {ref} from 'vue';

const route = useRoute()
const { builder } = await usePreviewBuilder(route.params.id);  
useHead({
    script: builder.js,
    style: builder.css,        
})  

const htmlString = ref(builder.html);

</script>

<template>
   <div v-html="htmlString"></div>
</template>