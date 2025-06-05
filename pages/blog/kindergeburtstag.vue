// pages/blog/kindergeburtstag.vue
<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">
        Unvergessliche Pony-Geburtstage in {{ businessAddress.city }}
      </h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Feiern Sie den schönsten Tag im Jahr mit
        <strong>Ponyreiten in {{ businessAddress.city }}</strong
        >, lustigen Spielen und kreativem Spaß auf unserem Ponyhof. Ein tierisch gutes Abenteuer für
        das Geburtstagskind und seine Freunde!
      </p>
      <div class="blog-meta text-sm text-gray-500 dark:text-gray-400 mt-4">
        <span class="date mr-4"><i class="far fa-calendar mr-1"></i> {{ formattedDate }}</span>
        <span class="read-time"><i class="far fa-clock mr-1"></i> ca. 5 Min. Lesezeit</span>
      </div>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li>
          <NuxtLink to="/angebote">Pony-Angebote {{ businessAddress.city }}</NuxtLink>
        </li>
        <li aria-current="page">Pony-Kindergeburtstag {{ businessAddress.city }}</li>
      </ol>
    </nav>

    <article
      class="content container mx-auto max-w-4xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <!-- Hauptbild mit Lightbox -->
      <figure class="my-8">
        <NuxtImg
          src="/images/Einhorn_Pinjata.webp"
          alt="Das Highlight von jedem Kindergeburtstag: die Pinjata!"
          class="blog-image w-full max-w-3xl mx-auto rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          @click="
            lightbox.open(
              '/images/Einhorn_Pinjata.webp',
              'Gemeinsame Vorbereitung für den Geburtstagsritt.'
            )
          "
          loading="eager"
          format="jpeg"
          quality="85"
          width="1200"
          height="800"
          densities="1x 2x"
        />
        <figcaption class="text-center text-sm mt-2 text-gray-500 dark:text-gray-400">
          Spiel und Spaß gehören zu jedem Pony-Geburtstag!
        </figcaption>
      </figure>

      <!-- Einleitungstext -->
      <div class="prose dark:prose-invert lg:prose-lg mx-auto">
        <p class="lead-paragraph text-lg mb-6">
          Ein Kindergeburtstag auf dem Ponyhof – davon träumen viele kleine Pferdefans! Bei uns wird
          dieser Traum Wirklichkeit. Wir gestalten einen abwechslungsreichen und fröhlichen
          Nachmittag, bei dem die Ponys natürlich die Hauptrolle spielen.
        </p>
        <p>
          Bei unseren Geburtstagsfeiern kommen Spiel, Spaß und Kreativität nicht zu kurz. Jeder
          Geburtstag ist einzigartig und wird individuell auf das Alter und die Wünsche der Kinder
          abgestimmt.
        </p>
      </div>

      <!-- Ablauf-Akkordeon -->
      <div class="info-accordion mt-10 border rounded-lg overflow-hidden">
        <div
          class="info-accordion-header bg-gray-100 dark:bg-gray-700 p-4 flex justify-between items-center cursor-pointer"
          @click="toggleInfoAccordion"
        >
          <div class="flex items-center">
            <i class="fas fa-birthday-cake text-primary-color dark:text-primary-light mr-3"></i>
            <h2 class="text-xl font-semibold text-gray-800 dark:text-white m-0">
              So könnte euer Pony-Geburtstag aussehen
            </h2>
          </div>
          <i
            :class="[
              showInfoAccordion ? 'fa-chevron-up' : 'fa-chevron-down',
              'fas text-gray-600 dark:text-gray-300',
            ]"
          ></i>
        </div>
        <div
          v-show="showInfoAccordion"
          class="info-accordion-content p-5 bg-white dark:bg-gray-800 border-t dark:border-gray-700"
        >
          <div class="timeline-container">
            <div
              v-for="(step, index) in birthdayTimeline"
              :key="index"
              class="timeline-item mb-6 pb-6 border-l-4 border-primary-color dark:border-primary-light pl-5 relative"
              :class="{ 'border-l-0': index === birthdayTimeline.length - 1 }"
            >
              <div
                v-if="index !== birthdayTimeline.length - 1"
                class="timeline-dot absolute -left-3 w-6 h-6 rounded-full bg-primary-color dark:bg-primary-light flex items-center justify-center text-white"
                style="top: 0"
              >
                {{ index + 1 }}
              </div>
              <h3
                class="text-lg font-semibold mb-2 text-gray-800 dark:text-white flex items-center"
              >
                <i :class="[step.icon, 'mr-2 text-primary-color dark:text-primary-light']"></i>
                {{ step.title }}
              </h3>
              <p class="text-gray-700 dark:text-gray-300">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Zusätzliches Bild -->
      <figure class="my-8 mt-12">
        <NuxtImg
          src="/images/Pferde/Coco-angemalt-1.webp"
          alt="Ponys dürfen von den Kinder auch angemalt werden"
          class="blog-image w-full max-w-3xl mx-auto rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          @click="
            lightbox.open(
              '/images/Pferde/Coco-angemalt-1.webp',
              'Unser Shetty Coco mit bunten Farben geschmückt.'
            )
          "
          loading="lazy"
          format="webp"
          quality="80"
          width="1200"
          height="800"
          densities="1x 2x"
        />
        <figcaption class="text-center text-sm mt-2 text-gray-500 dark:text-gray-400">
          Strahlende Augen beim Geburtstagsritt.
        </figcaption>
      </figure>

      <!-- Extras Slideshow Section -->
      <div class="extras-section mt-16 py-8 px-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
        <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
          <i class="fas fa-gift mr-2 text-primary-color dark:text-primary-light"></i>
          Macht euren Geburtstag einzigartig!
        </h2>
        <p class="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
          Wählt aus unseren beliebten Extras und Mottos, um die Feier individuell zu gestalten.
          Klickt euch durch die Galerie für einen Vorgeschmack:
        </p>

        <!-- Extras Slideshow -->
        <div
          class="extras-slideshow relative bg-gray-50 dark:bg-gray-700/50 p-4 sm:p-6 rounded-xl shadow-lg max-w-2xl mx-auto mb-8"
        >
          <!-- Aktuelles Slide-Bild -->
          <div class="relative aspect-w-4 aspect-h-3 mb-4 rounded-lg overflow-hidden shadow">
            <NuxtImg
              :key="currentExtra.id"
              :src="currentExtra.imageSrc"
              :alt="currentExtra.title"
              class="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              :width="currentExtra.width"
              :height="currentExtra.height"
              format="webp"
              quality="70"
              loading="lazy"
              densities="1x 2x"
              sizes="sm:100vw md:50vw lg:600px"
            />
          </div>

          <!-- Titel und Beschreibung des aktuellen Slides -->
          <div class="text-center">
            <h4 class="text-xl font-semibold mb-2 text-primary-color dark:text-primary-light">
              <i :class="[currentExtra.icon, 'mr-2']"></i>{{ currentExtra.title }}
            </h4>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-3 min-h-[3.5em]">
              {{ currentExtra.shortDescription }}
            </p>
            <p
              v-if="currentExtra.priceInfo"
              class="text-xs font-medium text-gray-500 dark:text-gray-400"
            >
              {{ currentExtra.priceInfo }}
            </p>
          </div>

          <!-- Navigationspfeile -->
          <button
            @click="prevExtra"
            aria-label="Vorheriges Extra"
            class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 sm:-translate-x-full bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-primary-color transition-all z-10"
          >
            <i class="fas fa-chevron-left text-primary-color dark:text-primary-light"></i>
          </button>
          <button
            @click="nextExtra"
            aria-label="Nächstes Extra"
            class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 sm:translate-x-full bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-primary-color transition-all z-10"
          >
            <i class="fas fa-chevron-right text-primary-color dark:text-primary-light"></i>
          </button>

          <!-- Navigationspunkte -->
          <div class="flex justify-center space-x-2 mt-4">
            <button
              v-for="(extra, index) in birthdayExtras"
              :key="`dot-${extra.id}`"
              @click="goToExtra(index)"
              :aria-label="`Zeige ${extra.title}`"
              class="w-2.5 h-2.5 rounded-full transition-all duration-300"
              :class="
                index === currentExtraIndex
                  ? 'bg-primary-color scale-125'
                  : 'bg-gray-300 dark:bg-gray-500 hover:bg-primary-color/50'
              "
            ></button>
          </div>
        </div>

        <!-- Buttons für Extra-Auswahl -->
        <div class="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
          <AppButton
            v-for="extra in birthdayExtras"
            :key="`btn-${extra.id}`"
            @click="selectExtra(extra.id)"
            :variant="selectedExtraId === extra.id ? 'primary' : 'outline-primary'"
            size="normal"
            class="transition-all"
          >
            <i :class="[extra.icon, 'mr-2 text-sm']"></i> {{ extra.title }}
          </AppButton>
        </div>

        <!-- Detailansicht für das ausgewählte Extra -->
        <div
          v-if="selectedExtraDetails"
          class="extra-info mt-4 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl shadow-inner border border-gray-200 dark:border-gray-600"
        >
          <h4
            class="text-xl font-semibold mb-3 text-primary-color dark:text-primary-light flex items-center"
          >
            <i :class="[selectedExtraDetails.icon, 'mr-2']"></i>{{ selectedExtraDetails.title }}
          </h4>
          <p class="text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {{ selectedExtraDetails.description }}
          </p>
          <p
            v-if="selectedExtraDetails.priceInfo"
            class="text-sm mt-3 font-medium text-gray-500 dark:text-gray-400"
          >
            {{ selectedExtraDetails.priceInfo }}
          </p>
        </div>
      </div>

      <!-- Wichtige Informationen -->
      <div class="info-section mt-16">
        <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
          <i class="fas fa-info-circle mr-2 text-primary-color dark:text-primary-light"></i>
          Wichtige Informationen für den Pony-Geburtstag
        </h2>

        <!-- FAQ Accordion -->
        <div class="space-y-4 mt-6">
          <div
            v-for="(info, index) in birthdayInfo"
            :key="index"
            class="info-item border dark:border-gray-600 rounded-lg overflow-hidden"
          >
            <div
              class="info-question p-4 flex justify-between items-center cursor-pointer bg-gray-50 dark:bg-gray-700"
              @click="toggleInfo(index)"
            >
              <h3 class="text-lg font-medium text-gray-800 dark:text-white flex items-center">
                <i :class="[info.icon, 'mr-2 text-primary-color dark:text-primary-light']"></i>
                {{ info.title }}
              </h3>
              <i
                :class="[
                  info.open ? 'fa-chevron-up' : 'fa-chevron-down',
                  'fas text-gray-500 dark:text-gray-400',
                ]"
              ></i>
            </div>
            <div
              v-show="info.open"
              class="info-answer p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              <p>{{ info.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="testimonials mt-16">
        <h2 class="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-white">
          <i class="fas fa-quote-left mr-2 text-primary-color dark:text-primary-light"></i>
          Das sagen Eltern und Geburtstagskinder
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="testimonial-card p-5 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <span class="ml-2 text-gray-600 dark:text-gray-300 text-sm">vor 3 Wochen</span>
            </div>
            <p class="text-gray-700 dark:text-gray-200 italic mb-4">
              "Wir haben den 7. Geburtstag meiner Tochter hier gefeiert und es war fantastisch! Die
              Kinder waren begeistert von den Ponys und das Bemalen war ein absolutes Highlight. Die
              Organisation war perfekt und die Stimmung toll!"
            </p>
            <div class="text-gray-800 dark:text-white font-medium">
              Sabine M., Mutter von Lena (7)
            </div>
          </div>

          <div class="testimonial-card p-5 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <span class="ml-2 text-gray-600 dark:text-gray-300 text-sm">vor 2 Monaten</span>
            </div>
            <p class="text-gray-700 dark:text-gray-200 italic mb-4">
              "Die Piñata war ein Riesenspaß und das Pony-Bemalen hat allen Kindern super gefallen.
              Auch die schüchternen Kinder haben schnell Vertrauen zu den sanften Ponys gefasst.
              Vielen Dank für diesen tollen Tag!"
            </p>
            <div class="text-gray-800 dark:text-white font-medium">Thomas K. aus Renningen</div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="cta-section mt-16 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Plant jetzt den unvergesslichen Geburtstag!
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Ein Geburtstag bei unseren Ponys ist ein ganz besonderes Erlebnis, das lange in Erinnerung
          bleibt. Sichert euch frühzeitig euren Wunschtermin, da die Plätze besonders an Wochenenden
          beliebt sind!
        </p>
        <div class="flex justify-center">
          <AppButton
            :to="{ path: '/contact', query: { subject: 'Anfrage Kindergeburtstag' } }"
            size="lg"
            variant="primary"
          >
            Wunschtermin anfragen <i class="fas fa-calendar-check ml-2"></i>
          </AppButton>
        </div>
      </div>

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

      <p class="mt-8 text-center">
        <NuxtLink
          to="/blog"
          class="back-link inline-block px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          ← Zurück zum Blog
        </NuxtLink>
      </p>
    </article>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  // useHead wird jetzt durch useMySeoMeta aufgerufen
  import { useRoute, useRuntimeConfig } from '#app'
  import { NuxtLink, NuxtImg } from '#components'
  import { useLightbox } from '~/composables/useLightbox'
  import AppButton from '~/components/AppButton.vue'
  import { useMySeoMeta } from '~/composables/useMySeoMeta' // Importiere dein Composable
  import dayjs from 'dayjs'
  import 'dayjs/locale/de'

  dayjs.locale('de')

  const lightbox = useLightbox()
  const route = useRoute()
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl
  const businessAddress = config.public.businessAddress

  // Bild für den Content der Seite
  const pageImageForContent = ref(`${siteUrl}/images/Einhorn_Pinjata.png`) // Bleibt für das <NuxtImg src>

  // --- Daten für SEO Composable ---
  const seoTitle = `Kindergeburtstag Ponyhof ${businessAddress.city} | Ponyreiten & Spiele`
  const seoDescription = `Feiern Sie einen unvergesslichen Kindergeburtstag mit Ponyreiten, Spielen und Basteln auf unserem Ponyhof in ${businessAddress.city}. Ein tierisches Erlebnis für Kinder!`
  const seoKeywords = `Kindergeburtstag Ponyhof ${businessAddress.city}, Kindergeburtstag Pferde ${businessAddress.city}, Ponyreiten Geburtstag ${businessAddress.city}, Feiern Stall ${businessAddress.city}, Kinderparty Tiere ${businessAddress.city}, Geburtstagsidee Mädchen ${businessAddress.city}, Geburtstagsidee Jungs ${businessAddress.city}, Pony bemalen ${businessAddress.city}`
  const seoOgImage = `${siteUrl}/images/og-kindergeburtstag-renningen.webp` // Spezifisches OG-Bild

  const publishDate = '2024-07-28' // Behalte dein Veröffentlichungsdatum
  const formattedDate = computed(() => dayjs(publishDate).format('DD. MMMM YYYY'))

  // Rufe das Composable auf
  useMySeoMeta({
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    ogImage: seoOgImage,
    ogImageAlt: `Ein fröhlicher Kindergeburtstag mit Ponys und Spielen auf dem Ponyhof in ${businessAddress.city}`,
    ogType: 'article', // Da es ein Blog-Beitrag über ein Angebot ist
    articleDetails: {
      publishedTime: `${publishDate}T14:00:00+02:00`, // Beispielzeit, anpassen
      authorName: 'Sarah Handte',
      section: 'Kindergeburtstag', // Kategorie des Blogposts
      tags: ['Kindergeburtstag', 'Ponyhof', businessAddress.city, 'Ponyreiten', 'Feiern'],
    },
    ldJson: {
      // Strukturierte Daten für das Event "Kindergeburtstag"
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: `Pony-Kindergeburtstag auf dem Ponyhof in ${businessAddress.city}`,
      description: seoDescription,
      image: seoOgImage,
      startDate: `${publishDate}T14:00:00+02:00`, // Beispielhafter Beginn, kann auch allgemeiner sein
      endDate: `${publishDate}T17:00:00+02:00`, // Beispielhaftes Ende
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: `Leben ist ein Ponyhof ${businessAddress.city}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: businessAddress.street,
          addressLocality: businessAddress.city,
          postalCode: businessAddress.zip,
          addressCountry: businessAddress.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: businessAddress.latitude,
          longitude: businessAddress.longitude,
        },
      },
      organizer: {
        '@type': 'Person', // Oder Organization
        name: `Sarah Handte - Leben ist ein Ponyhof ${businessAddress.city}`,
        url: siteUrl,
      },
      offers: {
        '@type': 'Offer',
        price: '120', // Ab-Preis
        priceCurrency: 'EUR',
        url: `${siteUrl}${route.fullPath}`, // Link zu dieser Seite
        availability: 'https://schema.org/InStock',
        validFrom: dayjs().format('YYYY-MM-DD'),
      },
      // Optional, um die Verbindung zum Blog-Artikel herzustellen
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${siteUrl}${route.fullPath}`,
      },
    },
  })

  // Akkordeon State
  const showInfoAccordion = ref(true)
  const toggleInfoAccordion = () => {
    showInfoAccordion.value = !showInfoAccordion.value
  }

  // Timeline für Geburtstag
  const birthdayTimeline = [
    {
      title: 'Ankommen & Begrüßung',
      description:
        'Die kleine Geburtstagsgesellschaft kommt an und wir lernen uns bei einer kurzen Hofrunde kennen.',
      icon: 'fas fa-handshake',
    },
    {
      title: 'Pony-Kennenlernen & Vorbereiten',
      description:
        'Gemeinsam holen wir unsere lieben Ponys. Wir erfahren Wissenswertes über sie und machen sie dann gemeinsam hübsch: Putzen, Striegeln und vielleicht sogar ein bisschen Schmücken mit bunten Bändern oder Blumen gehört dazu!',
      icon: 'fas fa-horse-head',
    },
    {
      title: 'Geführtes Ponyreiten',
      description:
        'Jedes Kind darf unter sicherer Führung auf dem Ponyrücken Platz nehmen. Je nach Wunsch machen wir kleine Geschicklichkeitsübungen, einen geführten Ausritt ins Gelände oder lustige Reiterspiele.',
      icon: 'fas fa-child',
    },
    {
      title: 'Spiel & Spaß / Schatzsuche',
      description:
        'Abhängig vom Wetter und der Gruppe organisieren wir passende Spiele rund ums Pferd oder eine spannende Schatz- oder Schnitzeljagd.',
      icon: 'fas fa-search',
    },
    {
      title: 'Kuchenpause & Geschenke',
      description:
        'In unserem gemütlichen, wettergeschützten Bereich ist ausreichend Zeit für den mitgebrachten Geburtstagskuchen und das Auspacken der Geschenke.',
      icon: 'fas fa-birthday-cake',
    },
    {
      title: 'Kreativzeit & Zusatzleistungen',
      description:
        'Je nach gebuchtem Paket oder Wunsch können wir jetzt kreativ werden! Möglichkeiten sind Pony-Painting, Hufeisen gestalten oder andere kreative Aktivitäten.',
      icon: 'fas fa-paint-brush',
    },
  ]

  // Daten für die Extras
  const birthdayExtras = ref([
    {
      id: 'pony-painting',
      title: 'Pony Painting',
      icon: 'fas fa-paint-brush',
      shortDescription:
        'Lasst eurer Kreativität freien Lauf und bemalt unsere geduldigen Ponys mit tierfreundlichen Farben.',
      description:
        'Lasst eurer Kreativität freien Lauf! Mit speziellen, tierfreundlichen Fingerfarben dürfen die Kinder unsere geduldigen Ponys nach Herzenslust bemalen. Ein farbenfrohes Erlebnis, das für tolle Fotos sorgt!\n(Die Farben sind leicht abwaschbar und für die Ponys völlig unbedenklich.)',
      imageSrc: '/images/Chica-angemalt.jpeg',
      width: 400,
      height: 400,
      priceInfo: 'Beliebtes Extra!',
    },
    {
      id: 'pinjata',
      title: 'Piñata Schlagen',
      icon: 'fas fa-candy-cane',
      shortDescription:
        'Ein riesen Spaß für alle! Eine bunt gefüllte Pferde- oder Einhorn-Piñata wartet darauf, zerschlagen zu werden.',
      description:
        'Ein riesen Spaß für alle! Eine bunt gefüllte Pferde- oder Einhorn-Piñata wartet darauf, von den Kindern unter Jubelrufen zerschlagen zu werden. Die süße Beute darf natürlich geteilt werden.\n(Piñata und Füllung werden von uns gestellt).',
      imageSrc: '/images/Einhorn_Pinjata.webp',
      width: 1000,
      height: 750,
      priceInfo: 'Aufpreis: ca. 25-35€',
    },
    {
      id: 'basteln-hufeisen',
      title: 'Hufeisen gestalten',
      icon: 'fas fa-horse-head',
      shortDescription:
        'Jedes Kind gestaltet sein eigenes Glücks-Hufeisen als tolle Erinnerung an den Geburtstag.',
      description:
        'Jedes Kind gestaltet sein eigenes Glücks-Hufeisen als tolle Erinnerung an den Geburtstag. Mit Farben, Glitzer, Perlen und anderen Dekomaterialien entstehen einzigartige Kunstwerke zum Mitnehmen und Aufhängen.\nAlle Materialien sind inklusive.',
      imageSrc: '/images/Buntstifte_Hufeisen.jpeg',
      width: 800,
      height: 600,
      priceInfo: 'Material inklusive',
    },
    {
      id: 'motto-bibi-tina',
      title: 'Motto: Bibi & Tina',
      icon: 'fas fa-hat-wizard',
      shortDescription:
        'Hex-hex! Wir tauchen ein in die Welt von Bibi & Tina mit passenden Spielen und Dekorationen.',
      description:
        'Hex-hex! Wir tauchen ein in die Welt von Bibi & Tina. Die Spiele, Dekoration und vielleicht sogar die Ponys werden passend zum Motto gestaltet. Ein Muss für alle kleinen Hexen und Pferdefans!\n(Spezifische Wünsche können gerne abgesprochen werden).',
      imageSrc: '/images/Bibi_und_Tina.png',
      width: 800,
      height: 500,
      priceInfo: 'Auf Anfrage',
    },
    {
      id: 'geschenktueten',
      title: 'Geschenktüten',
      icon: 'fas fa-gift',
      shortDescription:
        'Kleine Überraschungstüten für jedes Gastkind als schönes Andenken an die Feier.',
      description:
        'Kleine Überraschungstüten für jedes Gastkind als schönes Andenken an die Feier. Je nach Alter und Interesse der Kinder können die Tüten mit kleinen Pony-Figuren, Stickern, Süßigkeiten oder anderen Kleinigkeiten gefüllt werden.',
      imageSrc: '/images/Einhorn_Tüte.jpeg',
      width: 900,
      height: 1200,
      priceInfo: 'Individuell gestaltbar',
    },
    {
      id: 'rundum-sorglos',
      title: 'Rundum-Sorglos-Paket',
      icon: 'fas fa-magic',
      shortDescription:
        'Lehn dich zurück, wir kümmern uns um (fast) alles! Mit passender Dekoration und Überraschungstüten.',
      description:
        'Lehn dich zurück, wir kümmern uns um (fast) alles! Dieses Paket beinhaltet zusätzlich zum Basisprogramm:\n- Thematisch passende Tischdekoration\n- Kleine Überraschungstüten für jedes Gastkind\n- Organisation von Kuchen oder Snacks (nach Absprache, Kosten für Lebensmittel exkl.)\nSo wird der Geburtstag für dich als Elternteil besonders entspannt.',
      imageSrc: 'images/rundumsorglos.png',
      width: 800,
      height: 600,
      priceInfo: 'Aufpreis: Bitte anfragen',
    },
  ])

  // Wichtige Informationen
  const birthdayInfo = ref([
    {
      title: 'Altersempfehlung',
      description:
        'Ideal für Kinder im Alter von ca. 4 bis 8 Jahren. Wir passen das Programm entsprechend dem Alter an und können auch für jüngere oder ältere Kinder geeignete Aktivitäten anbieten.',
      icon: 'fas fa-child',
      open: true,
    },
    {
      title: 'Gruppengröße',
      description:
        'Für eine optimale Betreuung empfehlen wir 5 bis maximal 10 teilnehmende Kinder. Bei größeren Gruppen bitten wir um frühzeitige Absprache, damit wir zusätzliche Betreuungspersonen einplanen können.',
      icon: 'fas fa-users',
      open: false,
    },
    {
      title: 'Dauer',
      description:
        'Ein Geburtstag bei uns dauert in der Regel ca. 2,5 bis 3 Stunden. Die genaue Dauer kann je nach gebuchten Extras und Gruppengröße variieren. Wir besprechen den zeitlichen Rahmen gerne individuell.',
      icon: 'fas fa-clock',
      open: false,
    },
    {
      title: 'Kleidung',
      description:
        'Bitte feste, geschlossene Schuhe (keine Sandalen!) und dem Wetter angepasste Kleidung anziehen, die auch mal schmutzig werden darf. Ein Fahrradhelm ist für jedes reitende Kind Pflicht (wir haben auch einige Leihhelme in verschiedenen Größen vorrätig).',
      icon: 'fas fa-tshirt',
      open: false,
    },
    {
      title: 'Verpflegung',
      description:
        'Geburtstagskuchen, Snacks und Getränke können gerne selbst mitgebracht werden. Eine Bierbank steht für Sie bereit, die Sie entsprechend dekorieren dürfen.',
      icon: 'fas fa-birthday-cake',
      open: false,
    },
  ])

  // Für die Slideshow
  const currentExtraIndex = ref(0)

  const currentExtra = computed(() => {
    return birthdayExtras.value[currentExtraIndex.value]
  })

  const nextExtra = () => {
    currentExtraIndex.value = (currentExtraIndex.value + 1) % birthdayExtras.value.length
  }

  const prevExtra = () => {
    currentExtraIndex.value =
      (currentExtraIndex.value - 1 + birthdayExtras.value.length) % birthdayExtras.value.length
  }

  const goToExtra = (index) => {
    currentExtraIndex.value = index
  }

  // Für die Detailanzeige
  const selectedExtraId = ref(null)

  const selectExtra = (id) => {
    if (selectedExtraId.value === id) {
      selectedExtraId.value = null
    } else {
      selectedExtraId.value = id
    }
  }

  const selectedExtraDetails = computed(() => {
    if (!selectedExtraId.value) return null
    return birthdayExtras.value.find((extra) => extra.id === selectedExtraId.value)
  })

  // Info Toggle Funktion
  const toggleInfo = (index) => {
    birthdayInfo.value[index].open = !birthdayInfo.value[index].open
  }
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

  /* Timeline */
  .timeline-container {
    position: relative;
  }
  .timeline-item {
    position: relative;
    padding-bottom: 20px;
  }
  .timeline-item:last-child {
    padding-bottom: 0;
    border-left: none;
  }

  /* Slideshow-Styles */
  .extras-slideshow .aspect-w-4 {
    --tw-aspect-w: 4;
    position: relative;
    padding-bottom: calc(var(--tw-aspect-h, 1) / var(--tw-aspect-w, 1) * 100%);
  }

  .extras-slideshow .aspect-w-4 > * {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .extras-slideshow .aspect-h-3 {
    --tw-aspect-h: 3;
  }

  .extras-slideshow .min-h-\[3\.5em\] {
    min-height: 3.5em; /* Etwa 2-3 Zeilen für die Kurzbeschreibung */
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

  /* Info Items */
  .info-question {
    transition: background-color 0.2s ease;
  }
  .info-question:hover {
    background-color: theme('colors.gray.100');
  }
  .dark .info-question:hover {
    background-color: theme('colors.gray.600');
  }

  /* Related Posts */
  .related-post {
    transition: all 0.3s ease;
  }
</style>
