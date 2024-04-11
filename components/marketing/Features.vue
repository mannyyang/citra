<script setup lang="ts">
const features = [
  {
    icon: 'i-tabler-shield-check',
    title: 'Content Magic',
    desc: 'Experience content creation that feels like a breeze, with suggestions that align perfectly with your goals.',
  },
  {
    icon: 'i-tabler-credit-card',
    title: 'Tailored to You',
    desc: 'Your landing page adapts to your unique style effortlessly, ensuring a perfect match to your brand.',
  },
  {
    icon: 'i-tabler-database-star',
    title: 'Multi-Device Ready',
    desc: 'Rest easy knowing your landing page looks stunning and functions flawlessly across various screens.',
  },
  {
    icon: 'i-tabler-users-group',
    title: 'Smart Optimization',
    desc: `Leverage automated insights to enhance your landing page's performance without breaking a sweat.`,
  },
  {
    icon: 'i-tabler-palette',
    title: 'Instant Analytics',
    desc: 'Gain valuable insights in real-time, guiding you toward impactful decisions and adjustments.',
  },
  {
    icon: 'i-tabler-stars',
    title: 'Streamlined Workflow',
    desc: 'Focus on what truly matters while our platform takes care of the heavy lifting, so you can shine.',
  },
]
</script>

<template>
  <section>
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" 
          style="clip-path:polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div>
    <div data-aos="fade-up" class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 mb-24 aos-init">
      <div class="mx-auto md:text-center max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Effortless Landing Page Creation</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Unlock a world of seamless landing page creation with intelligent automation that simplifies the process for you.</p>
      </div>
      <dl data-aos="fade-up" class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 aos-init">
        <div v-for="(item, index) in features" :key="index">
          <dt class="font-semibold text-gray-900">{{item.title}}</dt>
          <dd class="mt-1 text-gray-600">{{item.desc}}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
