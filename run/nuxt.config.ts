import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  //---------------------------------------------------------------------
  // Entwicklungs‑Tools & Rendering‑Modus
  //---------------------------------------------------------------------
  devtools: { enabled: true },
  ssr: true,

  //---------------------------------------------------------------------
  // Globale Styles
  //---------------------------------------------------------------------
  css: ['~/assets/css/tailwind.css'],

  //---------------------------------------------------------------------
  // Vite‑Spezifisch (IONOS braucht meist strict false)
  //---------------------------------------------------------------------
  vite: {
    server: { fs: { strict: false } },
  },

  //---------------------------------------------------------------------
  // Nuxt‑Module
  //---------------------------------------------------------------------
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],


  //---------------------------------------------------------------------
  // Globaler <head>‑Bereich
  //---------------------------------------------------------------------
  app: {
    head: {
      htmlAttrs: { lang: 'de-DE' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Ponyreiten Renningen & Leonberg – Reittherapie & Kindergeburtstage',
      titleTemplate: (titleChunk) => {
        return titleChunk
          ? `${titleChunk} | Leben ist ein Ponyhof Renningen`
          : 'Ponyreiten Renningen & Leonberg – Reittherapie & Kindergeburtstage'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
        { rel: 'canonical', href: process.env.NUXT_PUBLIC_SITE_URL },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
          crossorigin: 'anonymous',
          referrerpolicy: 'no-referrer',
        },
      ],
      meta: [
        { name: 'author', content: 'Sarah Handte - Leben ist ein Ponyhof' },
        { name: 'publisher', content: 'Sarah Handte - Leben ist ein Ponyhof' },
        {
          hid: 'description', // hid in der globalen config, um es von Seiten überschreiben zu können
          name: 'description',
          content:
            'Ponyreiten in Renningen: Geführtes Reiten für Kinder, Reittherapie, Kindergeburtstage und Ferienkurse. Unvergessliche Erlebnisse mit Ponys in Renningen und Umgebung.',
        },
        {
          name: 'keywords',
          content:
            'Ponyreiten Renningen, Reittherapie Renningen, Kindergeburtstag mit Ponys, Ferienkurse Renningen, Ponyhof Renningen',
        },
        { property: 'og:site_name', content: 'Leben ist ein Ponyhof Renningen' },
        {
          property: 'og:title',
          content: 'Ponyreiten Renningen & Leonberg – Reittherapie & Kindergeburtstage',
        },
        {
          property: 'og:description',
          content:
            'Erleben Sie Ponyreiten in Renningen: Geführtes Reiten, Kindergeburtstage und Reittherapie. Jetzt mehr erfahren!',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'de_DE' },
        { property: 'og:url', content: 'https://lebenisteinponyhof.de' },
        { property: 'og:image', content: 'https://lebenisteinponyhof.de/images/og-default.webp' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      script: [
        {
          innerHTML: `!function(){try{const p=localStorage.getItem('vueuse-color-scheme');const m=matchMedia('(prefers-color-scheme: dark)').matches;const d=p&&p!=='auto'?p==='dark':m;document.documentElement.classList.toggle('dark',d);}catch(e){}}();`,
          type: 'text/javascript',
          tagPosition: 'head-prepend', // Korrekt für Nuxt 3 für früheste Ausführung
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            // KORREKTUR: `innerHTML` statt `children`
            '@context': 'https://schema.org',
            '@type': 'SportsActivityLocation',
            name: 'Leben ist ein Ponyhof Renningen',
            description: 'Ponyreiten, Reittherapie, Kindergeburtstage und mehr in Renningen.',
            url: 'https://lebenisteinponyhof.de',
            image: 'https://lebenisteinponyhof.de/images/og-default.webp',
            telephone: '+4915759666733',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Kriegsbäume 2',
              addressLocality: 'Renningen',
              postalCode: '71272',
              addressCountry: 'DE',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '48.7662057',
              longitude: '8.917119',
            },
            priceRange: '€€',
            department: [
              {
                '@type': 'SportsActivityLocation',
                name: 'Ponyreiten Renningen',
                url: 'https://lebenisteinponyhof.de/angebote#ponyreiten',
              },
              {
                '@type': 'SportsActivityLocation',
                name: 'Kindergeburtstag Ponyhof Renningen',
                url: 'https://lebenisteinponyhof.de/angebote#kindergeburtstag',
              },
            ],
          }),
        },
      ],
    },
  },

  image: {
    provider: 'ipx',
    screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 },
    presets: {
      default: { modifiers: { format: 'webp', quality: 75 } },
    },
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'https://api.lebenisteinponyhof.de',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://lebenisteinponyhof.de',
      businessAddress: {
        street: 'Kriegsbäume 2',
        city: 'Renningen',
        zip: '71272',
        country: 'DE',
        latitude: '48.7662057',
        longitude: '8.917119',
      },
      formbricks: {
        environmentId: process.env.NUXT_PUBLIC_FORMBRICKS_ENV_ID || 'cmadxjkhy11o6u701h3epbqts',
        apiHost: process.env.NUXT_PUBLIC_FORMBRICKS_API_HOST || 'https://app.formbricks.com',
        contactFormId: process.env.NUXT_PUBLIC_FORMBRICKS_CONTACT_ID || 'cmadxvi6i12wdue01iltgp896',
        newsletterFormId:
          process.env.NUXT_PUBLIC_FORMBRICKS_NEWSLETTER_ID || 'cmafamjhd0kzav601nt0t9y5w',
      },
      formspreeEndpoint:
        process.env.NUXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xgvobyka',
      googleMapsKey: process.env.NUXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    },
  },

  sitemap: {
    xsl: false,
    hostname: 'https://lebenisteinponyhof.de',
    defaults: {
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(), // Komma hier ist korrekt, da es die letzte Eigenschaft von defaults ist.
    }, // Komma hier ist korrekt, da es die letzte Eigenschaft von sitemap ist, ABER NUR WENN DANACH NOCH WAS KOMMT
  }, // Dieses Komma ist korrekt, da danach `vueuse` kommt.

  vueuse: { ssrHandlers: true }, // Dieses Komma ist korrekt, da danach `nitro` kommt.

  // ...
  nitro: {
    prerender: {
      crawlLinks: true,
    },
    compatibilityDate: '2025-05-25', // Stelle sicher, dass dieses Datum korrekt ist oder entferne es, wenn du die allerneuesten Nuxt-Features nutzt.
    routeRules: {
      // 1. TRAILING SLASHES
      '/**': { trailingSlash: false },
      // '/blog/**': { trailingSlash: true },

      // 2. SSR vs. CSR
      '/admin/**': { ssr: false },
      // '/heavy-interactive-page': { ssr: false },

      // 3. PRERENDERING
      '/statische-infoseite': { prerender: true },
      // '/api/dynamisch/**': { prerender: false },

      // 4. CACHING
      '/blog/**': { swr: 3600 },
      '/landingpage': { static: true },
      // '/news': { isr: 60 },

      // 5. REDIRECTS
      '/alte-seite': { redirect: { to: '/neue-seite', statusCode: 301 } },
      '/impressum.html': { redirect: { to: '/impressum', statusCode: 301 } },
      '/shop/**': { redirect: { to: '/angebote', statusCode: 301 } },

      // 6. HTTP HEADERS
      '/secure-area/**': {
        headers: {
          'X-Frame-Options': 'DENY',
          'Content-Security-Policy': "default-src 'self'; img-src *; media-src *; script-src 'self' 'unsafe-inline';"
        }
      },
      // '/legacy-api/**': { headers: { 'Access-Control-Allow-Origin': '*' } },

      // 7. CORS
      // '/api/public/**': { cors: true },

      // 8. INDEX-Regeln
      '/entwurf/**': { index: false },
      '/geheim': { index: false, headers: { 'X-Robots-Tag': 'noindex, nofollow' } },

      // Kombinationen
      '/blog/alter-artikel-mit-redirect': {
        redirect: { to: '/blog/neuer-artikel', statusCode: 301 },
        index: false
      } // KEIN Komma hier, wenn es die letzte Regel ist
    } // KEIN Komma hier, wenn `routeRules` die letzte Eigenschaft in `nitro` ist
  } // KEIN Komma hier, wenn `nitro` die letzte Eigenschaft in `defineNuxtConfig` ist

})