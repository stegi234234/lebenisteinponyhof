<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Der perfekte Pony-Kindergeburtstag</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Ideen und Ablauf für einen unvergesslichen Tag im Sattel.
      </p>
      <div class="blog-meta text-sm text-gray-500 dark:text-gray-400 mt-4">
        <span class="date mr-4"><i class="far fa-calendar mr-1"></i> {{ formattedDate }}</span>
        <span class="read-time"><i class="far fa-clock mr-1"></i> 6 Min. Lesezeit</span>
      </div>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li aria-current="page">Pony-Kindergeburtstag</li>
      </ol>
    </nav>

    <article
      class="content container mx-auto max-w-3xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md prose dark:prose-invert prose-a:text-primary-color dark:prose-a:text-primary-light prose-headings:text-gray-800 dark:prose-headings:text-white"
    >
      <p>
        Ein Ponygeburtstag ist mehr als nur eine Feier – er ist ein Abenteuer voller Spannung, Spaß
        und ganz viel Pferdeliebe. Hier sind 5 kreative Ideen, wie Sie den Tag Ihres Kindes mit
        Ponys unvergesslich machen:
      </p>

      <h2>1. Ponyreiten & Führführspiel</h2>
      <p>
        Lassen Sie die kleinen Gäste nacheinander auf dem Pony reiten. Für mehr Interaktion können
        Sie ein Führführspiel organisieren: Wer führt das Pony am schnellsten sicher um Hindernisse
        herum?
      </p>

      <h2>2. Kreative Ponyschmuck-Station</h2>
      <p>
        Richten Sie einen Basteltisch ein, an dem die Kinder bunte Bänder, Perlen und Federn für die
        Ponygeschirre gestalten. So wird jedes Pony einzigartig geschmückt!
      </p>

      <h2>3. Schatzsuche rund ums Pony</h2>
      <p>
        Verstecken Sie kleine Pferdeaccessoires und Leckerlis auf dem Gelände. Mit einer Schatzkarte
        ziehen die Kinder los und sammeln Hinweise – am Ende wartet eine Pony-Medaille für jeden.
      </p>

      <h2>4. Mini-Pferdepflege-Wettbewerb</h2>
      <p>
        Wer putzt das Pony am gründlichsten und schnellsten? Unter Anleitung lernen die Kinder, wie
        wichtig Fellpflege ist. Ein fairer Zeitnehmer und eine kleine Belohnung machen das Ganze
        spannend.
      </p>

      <h2>5. Pferde-Q&A und Kuschelrunde</h2>
      <p>
        Zum Abschluss erzählt eine Betreuerin Wissenswertes über Ponys – was sie fressen, wie sie
        schlafen, und warum sie soziale Tiere sind. Anschließend dürfen alle zum Kuscheln kommen.
      </p>

      <hr />

      <p><strong>Unser Angebot bei "Leben ist ein Ponyhof":</strong></p>
      <p>
        Wir gestalten Ihren Ponygeburtstag professionell und kindgerecht. Unsere erfahrenen Betreuer
        und gut ausgebildeten Ponys sorgen für Sicherheit und Spaß gleichermaßen. Ob auf unserer
        Anlage in Renningen oder mobil bei Ihnen vor Ort – wir machen Ihren Tag einzigartig!
      </p>
      <p>
        Sprechen Sie uns an für individuelle Pakete und Termine:
        <NuxtLink to="/contact?subject=Pony-Kindergeburtstag">Jetzt anfragen</NuxtLink>.
      </p>

      <!-- Share Buttons -->
      <div
        class="blog-share-buttons mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <h3 class="text-base font-semibold mb-3 text-gray-600 dark:text-gray-400">
          Teilen Sie diesen Beitrag:
        </h3>
        <div class="flex justify-center gap-3 flex-wrap">
          <a
            :href="`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`"
            target="_blank"
            class="share-button facebook inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <i class="fab fa-facebook-f mr-1.5"></i> Facebook
          </a>
          <a
            :href="`https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareText}`"
            target="_blank"
            class="share-button twitter inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
          >
            <i class="fab fa-twitter mr-1.5"></i> Twitter
          </a>
          <a
            :href="`https://pinterest.com/pin/create/button/?url=${currentUrl}&media=${encodedOgImageUrl}&description=${shareText}`"
            target="_blank"
            class="share-button pinterest inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <i class="fab fa-pinterest-p mr-1.5"></i> Pinterest
          </a>
          <a
            :href="`https://api.whatsapp.com/send?text=${shareText} ${currentUrl}`"
            target="_blank"
            class="share-button whatsapp inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
          >
            <i class="fab fa-whatsapp mr-1.5"></i> WhatsApp
          </a>
        </div>
      </div>

      <p class="mt-8 text-center not-prose">
        <NuxtLink
          to="/blog"
          class="back-link inline-block text-sm bg-gray-200 dark:bg-gray-600 px-5 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
        >
          ← Zurück zum Blog
        </NuxtLink>
      </p>
    </article>

    <section class="related-posts container mx-auto max-w-4xl px-4 py-8 md:py-12 mt-8">
      <h2 class="text-2xl font-semibold mb-6 text-center">Das könnte Sie auch interessieren:</h2>
      <div class="related-posts-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="related-post bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
        >
          <div class="p-4">
            <h3 class="text-md font-semibold mb-1">Reittherapie entdecken</h3>
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-3">
              Wie Pferde Kindern helfen zu wachsen.
            </p>
          </div>
        </div>
        <div
          class="related-post bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
        >
          <NuxtImg
            src="/images/Pferde/Napoleon.webp"
            alt="Shetty Napoleon Nahaufnahme"
            class="w-full h-40 object-cover"
          />
          <div class="p-4">
            <h3 class="text-md font-semibold mb-1">Unsere Ponys kennenlernen</h3>
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-3">
              Erfahren Sie mehr über unsere tierischen Freunde.
            </p>
          </div>
        </div>
        <div
          class="related-post bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
        >
          <div class="p-4">
            <h3 class="text-md font-semibold mb-1">Ferienkurs-Ponyspaß</h3>
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-3">
              Tolle Erlebnisse in den Schulferien.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { useHead, useRoute } from '#imports'
  import { computed } from 'vue'
  import { NuxtLink, NuxtImg } from '#components'
  import { useLightbox } from '~/composables/useLightbox'
  import dayjs from 'dayjs'
  import 'dayjs/locale/de'

  dayjs.locale('de')

  const lightbox = useLightbox()
  const route = useRoute()
  const siteUrl = 'https://lebenisteinponyhof.de'
  const currentUrl = computed(() => `${siteUrl}${route.path}`)
  const pageTitle = 'Der perfekte Pony-Kindergeburtstag'
  const pageDescription =
    'Ideen und Ablauf für einen spannenden und liebevollen Geburtstag mit Ponys in Renningen/Leonberg.'
  const publishDate = '2025-05-08'
  const formattedDate = computed(() => dayjs(publishDate).format('DD. MMMM YYYY'))
  const shareText = encodeURIComponent(pageTitle)
  const pageImage = `${siteUrl}/images/Napoleon.webp`

  const encodedOgImageUrl = encodeURIComponent(pageImage)

  useHead({
    title: pageTitle,
    titleTemplate: '%s | Leben ist ein Ponyhof Blog',
    meta: [
      { name: 'description', content: pageDescription },
      {
        name: 'keywords',
        content:
          'Pony Kindergeburtstag, Geburtstag Ideen Kinder, Ponyparty Ablauf, Kindergeburtstag Pferde, Ponyhof Feier Kinder, Renningen Leonberg',
      },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:url', content: currentUrl.value },
      { property: 'og:image', content: pageImage },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: `${publishDate}T10:00:00+02:00` },
      { property: 'article:author', content: 'Sarah Handte' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDescription },
      { name: 'twitter:image', content: pageImage },
    ],
    link: [{ rel: 'canonical', href: currentUrl.value }],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: pageTitle,
          description: pageDescription,
          image: pageImage,
          datePublished: publishDate,
          author: { '@type': 'Person', name: 'Sarah Handte', url: `${siteUrl}/about` },
          publisher: {
            '@type': 'Organization',
            name: 'Leben ist ein Ponyhof',
            logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logos/logo.svg` },
          },
          mainEntityOfPage: { '@type': 'WebPage', '@id': currentUrl.value },
          about: [
            { '@type': 'Thing', name: 'Pony Kindergeburtstag' },
            { '@type': 'Thing', name: 'Kindergeburtstag Ideen' },
            { '@type': 'Thing', name: 'Pferdeparty' },
          ],
        }),
      },
    ],
  })
</script>

<style>
  /* Tailwind Prose kümmert sich drum */
</style>
