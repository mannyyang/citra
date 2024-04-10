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
  <section class="py-14">
    <div class="max-w-screen-xl mx-auto px-4 text-center md:px-8">
      <div class="max-w-2xl mx-auto">
        <h3 class=" text-3xl font-semibold sm:text-4xl">
          Effortless Landing Page Creation
        </h3>
        <p class="mt-3">
          Unlock a world of seamless landing page creation with intelligent automation that simplifies the process for you.
        </p>
      </div>
      <div class="mt-12">
        <ul class="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="(item, index) in features" :key="index" class="space-y-3">            
            <h4 class="text-lg  font-semibold">
              {{ item.title }}
            </h4>
            <p>
              {{ item.desc }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
