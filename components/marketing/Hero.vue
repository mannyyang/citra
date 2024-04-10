<template>
  <section>
    <div class="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8">
      <div class="space-y-5 max-w-4xl mx-auto text-center">
        <h1 class="text-sm text-primary-600 font-medium">
          Land with Impact: AI-Driven Landing Pages in a Click!
        </h1>
        <h2 class="text-4xl font-extrabold mx-auto md:text-5xl">
          Generate landing pages at the speed of thought!
        </h2>
        <p class="max-w-2xl mx-auto">
          Unlock the power of AI to generate and customize stunning landing pages effortlessly. Join the paginova waitlist and elevate your online presence!
        </p>        
        <div class="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
          <iframe 
          ref="iframe"
          data-tally-src="https://tally.so/embed/nGdEyL?hideTitle=1&transparentBackground=1&dynamicHeight=1" 
          loading="lazy" 
          width="100%" 
          height="343" 
          frameborder="0" 
          marginheight="0" 
          marginwidth="0" 
          title="Citra Waiting List"
          ></iframe>          
        </div>
      </div>  
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(()=> {
  const w="https://tally.so/widgets/embed.js";
  const v= () => {
    "undefined"!=typeof Tally
      ?Tally.loadEmbeds() 
      : document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))
  };

  if("undefined"!=typeof Tally) {
    v()
  } else if (document.querySelector('script[src="'+w+'"]')==null) {
    const s=document.createElement("script");
    s.src=w, s.onload=v, s.onerror=v;
    document.body.appendChild(s);
  }
})

</script>                