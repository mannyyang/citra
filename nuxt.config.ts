import process from 'node:process'

export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  routeRules: {
    '/build/**': { ssr: false },
  },
  runtimeConfig: {
    databaseUrl: '',
    public: {
      url: '',
      directus:{
        url:process.env.DIRECTUS_PUBLIC_URL,
        email: process.env.DIRECTUS_ADMIN_EMAIL,
        password: process.env.DIRECTUS_ADMIN_PASSWORD
      }
    },
    google: {
      clientId: '',
      clientSecret: '',
    },
    stripe: {
      publishableKey: '',
      secretKey: '',
      webhookSecret: '',
    },
    
    
  },
  modules: ['@nuxt/ui', '@formkit/auto-animate/nuxt', '@nuxtjs/plausible'],
  ui: {
    global: true,
    icons: ['solar', 'tabler', 'octicon', 'devicon', 'logos'],
  },

  plausible: {
    domain: process.env.PLAUSIBLE_DOMAIN,
    apiHost: process.env.PLAUSIBLE_API_HOST ?? 'https://plausible.io',
    trackLocalhost: true,
  }
})
