<template>
  <section>
    <div class="mx-auto max-w-3xl py-10">
      <div class="flex justify-center">
        <img class="h-12 max-w-full" src="~/assets/images/logo.png" alt="Logo"/>
      </div>
    </div>
    <div class="mx-auto max-w-3xl py-16">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div data-aos="fade-in" class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 aos-init aos-animate">
          Land with Impact: AI-Driven Landing Pages in a Click!
        </div>
      </div>
      <div class="text-center">
        <h1 data-aos="fade-in" class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl aos-init aos-animate">
          Generate landing pages at the speed of thought!
        </h1>
        <p data-aos="fade-in" class="mt-6 text-lg leading-8 text-gray-600 aos-init aos-animate">
          Unlock the power of AI to generate and customize stunning landing pages effortlessly.<br>Join the waitlist and elevate your online presence!
        </p>
        <div class="mt-10 mb-2 flex grow items-center justify-center gap-x-6">
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