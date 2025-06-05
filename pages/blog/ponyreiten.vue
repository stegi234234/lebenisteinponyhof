<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">
        Ponyreiten Renningen – Geführtes Reiten für Kinder auf dem Ponyhof
      </h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Entdecken Sie qualitativ hochwertiges
        <strong>Ponyreiten in {{ businessAddress.city }}</strong> – Geführte Ausritte,
        Schnupperstunden und individuelle Förderung für kleine und große Pferdefreunde auf unserem
        erfahrenen Ponyhof.
      </p>
      <div class="blog-meta text-sm text-gray-500 dark:text-gray-400 mt-4">
        <span class="date mr-4"><i class="far fa-calendar mr-1"></i> {{ formattedDate }}</span>
        <span class="read-time"><i class="far fa-clock mr-1"></i> ca. 4 Min. Lesezeit</span>
      </div>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li>
          <NuxtLink to="/angebote">Pony-Angebote {{ businessAddress.city }}</NuxtLink>
        </li>
        <li aria-current="page">Ponyreiten {{ businessAddress.city }}</li>
      </ol>
    </nav>

    <article
      class="content container mx-auto max-w-4xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <figure class="my-8 text-center">
        <NuxtImg
          :src="pageImage"
          :alt="`Kinder genießen das Ponyreiten in ${businessAddress.city} auf dem Ponyhof Leben ist ein Ponyhof`"
          class="rounded-lg shadow-md cursor-pointer mx-auto transition-transform duration-300 hover:scale-[1.02]"
          loading="eager"
          format="webp"
          quality="85"
          width="800"
          height="600"
          @click="
            lightbox.open(pageImage, `Sicheres Ponyreiten für Kinder in ${businessAddress.city}`)
          "
        />
        <!-- Korrekte Platzierung für einen Kommentar: -->
        <!-- Passe Dimensionen (width/height oben) an dein spezifisches Bild an -->
        <figcaption class="text-center text-sm mt-2 text-gray-500 dark:text-gray-400">
          Beim <strong>Ponyreiten in {{ businessAddress.city }}</strong> steht der Spaß und die
          Sicherheit an erster Stelle.
        </figcaption>
      </figure>

      <!-- Rest des Templates bleibt gleich -->
      <div class="prose dark:prose-invert lg:prose-lg mx-auto">
        <p class="lead-paragraph text-lg mb-6">
          Träumt Ihr Kind davon, die Welt vom Rücken eines Ponys aus zu entdecken? Auf unserem
          Ponyhof in <strong>{{ businessAddress.city }}</strong> machen wir diesen Traum wahr! Unser
          Angebot für <strong>Ponyreiten in {{ businessAddress.city }}</strong> richtet sich an
          Kinder jeden Alters und Erfahrungslevels.
        </p>
        <p>
          Unter der liebevollen und fachkundigen Anleitung von Sarah Handte lernen die Kinder nicht
          nur die Grundlagen des Reitens, sondern auch den achtsamen und respektvollen Umgang mit
          unseren gutmütigen Ponys. Die Sicherheit der Kinder und das Wohl unserer Tiere haben dabei
          stets oberste Priorität.
        </p>
        <h2>Was erwartet Ihr Kind beim Ponyreiten in {{ businessAddress.city }}?</h2>
        <ul>
          <li>
            <strong>Geführtes Ponyreiten:</strong> Ideal für die Kleinsten und Reitanfänger. Ein
            erfahrener Führer begleitet das Kind sicher durch unsere schöne Umgebung in
            {{ businessAddress.city }}.
          </li>
          <li>
            <strong>Schnupperstunden:</strong> Eine tolle Möglichkeit, um herauszufinden, ob Reiten
            das Richtige ist. Spielerisch werden erste Kontakte zum Pony geknüpft.
          </li>
          <li>
            <strong>Individuelle Förderung:</strong> Wir gehen auf die Bedürfnisse jedes Kindes ein
            und fördern motorische Fähigkeiten, Selbstvertrauen und die Beziehung zum Tier.
          </li>
          <li>
            <strong>Ausritte in die Natur (für Fortgeschrittene):</strong> Erkunden Sie die
            malerischen Wege rund um {{ businessAddress.city }} auf dem Ponyrücken.
          </li>
        </ul>

        <h2>Warum Ponyreiten bei Leben ist ein Ponyhof in {{ businessAddress.city }}?</h2>
        <p>
          Bei uns ist Ponyreiten mehr als nur im Kreis gehen. Es ist ein ganzheitliches Erlebnis,
          das die Entwicklung Ihres Kindes positiv beeinflusst. Wir legen Wert auf:
        </p>
        <ul>
          <li><strong>Kleine Gruppen:</strong> Für eine individuelle Betreuung.</li>
          <li>
            <strong>Gut ausgebildete Ponys:</strong> Unsere Tiere sind kinderlieb und erfahren.
          </li>
          <li><strong>Pädagogischer Ansatz:</strong> Spielerisches Lernen steht im Vordergrund.</li>
          <li>
            <strong>Sicherheit:</strong> Helmpflicht und ständige Aufsicht sind selbstverständlich.
          </li>
        </ul>
        <p>
          Das <strong>Ponyreiten in {{ businessAddress.city }}</strong> bei "Leben ist ein Ponyhof"
          bietet eine wunderbare Gelegenheit, Kindern die Freude am Umgang mit Pferden
          näherzubringen und unvergessliche Erinnerungen zu schaffen.
        </p>
      </div>

      <div class="details-section mt-12">
        <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
          <i class="fas fa-info-circle mr-2 text-primary-color dark:text-primary-light"></i>
          Gut zu wissen für das Ponyreiten in {{ businessAddress.city }}
        </h2>
        <div class="space-y-4 mt-6">
          <div
            v-for="(detail, index) in details"
            :key="index"
            class="detail-item border dark:border-gray-600 rounded-lg overflow-hidden"
          >
            <div
              class="detail-question p-4 flex justify-between items-center cursor-pointer bg-gray-50 dark:bg-gray-700"
              @click="toggleDetail(index)"
            >
              <h3 class="text-lg font-medium text-gray-800 dark:text-white">
                {{ detail.question }}
              </h3>
              <i
                :class="[
                  detail.open ? 'fa-chevron-up' : 'fa-chevron-down',
                  'fas text-gray-500 dark:text-gray-400',
                ]"
              ></i>
            </div>
            <div
              v-show="detail.open"
              class="detail-answer p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              <p v-if="detail.text">{{ detail.text }}</p>
              <ul v-if="detail.list" class="list-disc pl-5 mt-2 space-y-1">
                <li v-for="(item, i) in detail.list" :key="i">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="cta-section mt-16 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Bereit für das erste Pony-Abenteuer in {{ businessAddress.city }}?
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Sichern Sie sich jetzt einen Termin für unvergessliches Ponyreiten in
          {{ businessAddress.city }}. Wir freuen uns auf Ihr Kind!
        </p>
        <div class="flex justify-center">
          <AppButton
            :to="{
              path: '/contact',
              query: { subject: `Anfrage Ponyreiten ${businessAddress.city}` },
            }"
            size="lg"
            variant="primary"
          >
            Termin für Ponyreiten anfragen
            <i class="fas fa-calendar-check ml-2"></i>
          </AppButton>
        </div>
      </div>

      <div
        class="blog-share-buttons mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <h3 class="text-base font-semibold mb-3 text-gray-600 dark:text-gray-400">
          Diesen Beitrag teilen:
        </h3>
        <div class="flex justify-center gap-3 flex-wrap">
          <a
            :href="`https://www.facebook.com/sharer/sharer.php?u=${currentUrlForHead}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-button facebook inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            ><i class="fab fa-facebook-f mr-1.5"></i> Facebook</a
          >
          <a
            :href="`https://twitter.com/intent/tweet?url=${currentUrlForHead}&text=${encodedShareText}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-button twitter inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
            ><i class="fab fa-twitter mr-1.5"></i> Twitter</a
          >
          <a
            :href="`https://api.whatsapp.com/send?text=${encodedShareText}%20${currentUrlForHead}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-button whatsapp inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
            ><i class="fab fa-whatsapp mr-1.5"></i> WhatsApp</a
          >
          <a
            :href="`mailto:?subject=${encodedShareText}&body=${currentUrlForHead}`"
            class="share-button email inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            ><i class="fas fa-envelope mr-1.5"></i> E-Mail</a
          >
          <a
            :href="`https://pinterest.com/pin/create/button/?url=${currentUrlForHead}&media=${encodedOgImageUrl}&description=${encodedShareText}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-button pinterest inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            ><i class="fab fa-pinterest-p mr-1.5"></i> Pinterest</a
          >
        </div>
      </div>
      <p class="mt-8 text-center">
        <NuxtLink
          to="/angebote"
          class="back-link inline-block px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          ← Zurück zur Angebotsübersicht
        </NuxtLink>
      </p>
    </article>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  // HINZUGEFÜGT: useRuntimeConfig
  import { useHead, useRoute, useRuntimeConfig } from '#imports'
  import { NuxtLink, NuxtImg } from '#components'
  import { useLightbox } from '~/composables/useLightbox'
  import AppButton from '~/components/AppButton.vue'
  import dayjs from 'dayjs'
  import 'dayjs/locale/de'

  dayjs.locale('de')

  const lightbox = useLightbox()
  const route = useRoute()
  const config = useRuntimeConfig() // Hol dir die runtimeConfig
  const siteUrl = config.public.siteUrl
  const businessAddress = config.public.businessAddress // Stelle businessAddress hier bereit

  // SEO Variablen (verwenden jetzt das hier definierte businessAddress)
  const pageTitleForHead = `Ponyreiten für Kinder in ${businessAddress.city} | Leben ist ein Ponyhof`
  const pageDescriptionForHead = `Erlebe sicheres und geführtes Ponyreiten für Kinder in ${businessAddress.city}. Perfekt für Anfänger und kleine Pferdefreunde auf unserem Ponyhof. Jetzt Termin anfragen!`
  const pageImage = ref(`${siteUrl}/images/ponyreiten/Napoleon-mit-Sattel-2.webp`) // Bild für den Content der Seite
  const pageImageForHead = `${siteUrl}/images/ponyreiten/og-ponyreiten-renningen.webp`
  const currentUrlForHead = `${siteUrl}${route.path}`
  const publishDate = '2025-05-10'
  const formattedDate = computed(() => dayjs(publishDate).format('DD. MMMM YYYY'))

  const shareText = `Ponyreiten für Kinder in ${businessAddress.city} erleben!`
  const encodedShareText = encodeURIComponent(shareText)
  const encodedOgImageUrl = encodeURIComponent(pageImageForHead)

  useHead({
    title: pageTitleForHead,
    meta: [
      { name: 'description', content: pageDescriptionForHead },
      {
        name: 'keywords',
        content: `Ponyreiten ${businessAddress.city}, Reiten Kinder ${businessAddress.city}, Ausritt Pony ${businessAddress.city}, geführtes Reiten ${businessAddress.city}, Schnupperreiten Kinder ${businessAddress.city}, Ponyhof ${businessAddress.city}`,
      },
      { property: 'og:title', content: pageTitleForHead },
      { property: 'og:description', content: pageDescriptionForHead },
      { property: 'og:url', content: currentUrlForHead },
      { property: 'og:image', content: pageImageForHead },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:image:alt',
        content: `Ponyreiten für Kinder auf dem Ponyhof in ${businessAddress.city}`,
      },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: `${publishDate}T09:00:00+02:00` },
      { property: 'article:author', content: 'Sarah Handte' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'canonical', href: currentUrlForHead }],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: `Ponyreiten & Ausritte in ${businessAddress.city}`,
          image: pageImageForHead,
          datePublished: `${publishDate}T09:00:00+02:00`,
          author: { '@type': 'Person', name: 'Sarah Handte' },
          publisher: {
            '@type': 'Organization',
            name: `Leben ist ein Ponyhof ${businessAddress.city}`,
            logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo.png` },
          },
          description: pageDescriptionForHead,
          mainEntityOfPage: { '@type': 'WebPage', '@id': currentUrlForHead },
          about: {
            '@type': 'Service',
            name: `Ponyreiten für Kinder in ${businessAddress.city}`,
            description: `Geführtes Ponyreiten und erste Reiterfahrungen für Kinder auf unserem Ponyhof in ${businessAddress.city}.`,
            provider: {
              '@type': 'Organization',
              name: `Leben ist ein Ponyhof ${businessAddress.city}`,
            },
            areaServed: {
              '@type': 'City',
              name: businessAddress.city,
            },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'EUR',
              price: '25',
              url: `${siteUrl}/contact?subject=Anfrage+Ponyreiten+${businessAddress.city}`,
            },
          },
        }),
      },
    ],
  })

  const details = ref([
    {
      question: 'Für wen ist das Ponyreiten geeignet?',
      text: `Unser Ponyreiten in ${businessAddress.city} ist ideal für Kinder ab ca. 3 Jahren (in Begleitung) bis hin zu älteren Kindern und Jugendlichen, die erste Erfahrungen sammeln oder ihre Kenntnisse vertiefen möchten. Wir passen das Angebot individuell an.`,
      list: [],
      open: true,
    },
    {
      question: 'Wie lange dauert eine Einheit Ponyreiten?',
      text: 'Eine typische Einheit für geführtes Ponyreiten oder eine Schnupperstunde dauert inklusive Vorbereitung (Putzen, Kennenlernen) etwa 45-60 Minuten. Reine Reitzeit auf dem Pony ist davon ca. 20-30 Minuten, je nach Alter und Konzentration des Kindes.',
      list: [],
      open: false,
    },
    {
      question: 'Was müssen wir zum Ponyreiten mitbringen?',
      text: `Für das Ponyreiten in ${businessAddress.city} sind feste, geschlossene Schuhe (z.B. Gummistiefel, feste Turnschuhe) und eine bequeme, lange Hose wichtig. Ein passender Reit- oder Fahrradhelm ist Pflicht und kann bei Bedarf auch bei uns geliehen werden.`,
      list: [],
      open: false,
    },
    {
      question: `Was kostet das Ponyreiten in ${businessAddress.city}?`,
      text: `Die Kosten für das Ponyreiten variieren je nach Dauer und Art des Angebots. Eine Schnupperstunde beginnt bei 25€. Für genaue Preise und Paketangebote kontaktieren Sie uns bitte direkt.`,
      list: [
        `Schnupperstunde (ca. 30 Min. Ponyzeit): ab 25€`,
        `Geführte Ponyrunde (ca. 45-60 Min. Gesamtzeit): ab 35€`,
      ],
      open: false,
    },
  ])
  const toggleDetail = (index) => {
    details.value[index].open = !details.value[index].open
  }

  // pageImage wird jetzt direkt aus der SEO-Variable verwendet, wenn es das Hauptbild der Seite ist.
  // Wenn du ein anderes Bild für die Lightbox oder im Artikel verwenden möchtest, definiere eine separate Variable.
  // Korrektur: pageImage für den Content der Seite muss hier definiert werden, da pageImageForHead für SEO ist.
  // const pageImage = ref(`${siteUrl}/images/ponyreiten/Napoleon-mit-Sattel.webp`); // Wird im Template verwendet
</script>

<style scoped>
  /* Lead-Paragraph */
  .lead-paragraph {
    font-weight: 500;
    color: theme('colors.gray.700');
  }
  .dark .lead-paragraph {
    color: theme('colors.gray.200');
  }

  /* Info-Accordion */
  .info-accordion {
    transition: all 0.3s ease;
  }
  .info-accordion-content {
    transition: max-height 0.3s ease;
  }

  /* Service Items */
  .service-item {
    transition: all 0.3s ease;
  }
  .service-item:hover {
    transform: translateY(-3px);
  }

  /* Highlights */
  .highlight-item {
    transition: transform 0.2s ease;
  }
  .highlight-item:hover {
    transform: translateY(-2px);
  }

  /* Testimonials */
  .testimonial-card {
    transition: all 0.3s ease;
  }
  .testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  /* Details Items */
  .detail-question {
    transition: background-color 0.2s ease;
  }
  .detail-question:hover {
    background-color: theme('colors.gray.100');
  }
  .dark .detail-question:hover {
    background-color: theme('colors.gray.600');
  }

  /* Related Posts */
  .related-post {
    transition: all 0.3s ease;
  }
</style>
