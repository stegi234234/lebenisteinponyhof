<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">
        Shetty-Wanderung in {{ businessAddress.city }}: Naturabenteuer mit Mini-Ponys
      </h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Ein tierisch schöner Ausflug für die ganze Familie! Entdecken Sie die Umgebung von
        {{ businessAddress.city }} an der Hand unserer charmanten Shetlandponys.
      </p>
      <!-- Meta-Infos (Datum, Lesezeit) werden jetzt vom Composable oder pageContent gesteuert -->
      <div class="blog-meta text-sm text-gray-500 dark:text-gray-400 mt-4">
        <span class="date mr-4"><i class="far fa-calendar mr-1"></i> {{ formattedDate }}</span>
        <span class="read-time"><i class="far fa-clock mr-1"></i> {{ pageContent.readTime }}</span>
      </div>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li>
          <NuxtLink :to="{ path: '/angebote', hash: '#shetty-wanderung' }"
          >Angebote {{ businessAddress.city }}</NuxtLink
          >
        </li>
        <li aria-current="page">Shetty-Wanderung {{ businessAddress.city }}</li>
      </ol>
    </nav>

    <article
        class="content container mx-auto max-w-4xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
    >
      <!-- Hauptbild -->
      <figure class="my-8">
        <NuxtImg
            :src="pageContent.mainImage.src"
            :alt="pageContent.mainImage.alt"
            class="blog-image w-full max-w-3xl mx-auto rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            @click="
            lightbox.open(
              pageContent.mainImage.src,
              pageContent.mainImage.caption || pageContent.mainImage.alt
            )
          "
            loading="eager"
            format="webp"
            quality="85"
            :width="pageContent.mainImage.width"
            :height="pageContent.mainImage.height"
            densities="1x 2x"
            sizes="(max-width: 1023px) 100vw, 896px"
        />
        <figcaption class="text-center text-sm mt-3 text-gray-500 dark:text-gray-400">
          {{ pageContent.mainImage.caption }} Unsere liebenswerten Shettys freuen sich auf die
          Wanderung mit Ihnen durch die Natur von {{ businessAddress.city }}.
        </figcaption>
      </figure>

      <div class="prose dark:prose-invert lg:prose-lg mx-auto">
        <p class="lead text-xl !mb-8">
          Erleben Sie die malerische Landschaft rund um
          <strong>{{ businessAddress.city }}</strong> auf eine ganz besondere Art und Weise – bei
          einer geführten Shetty-Wanderung mit unseren liebenswerten Shetlandponys! Ein
          unvergessliches Abenteuer für die ganze Familie, bei dem Sie die Natur genießen und eine
          einzigartige Verbindung zu unseren vierbeinigen Freunden aufbauen können.
        </p>
        <p>
          Unsere Shetty-Wanderungen in {{ businessAddress.city }} sind perfekt für Tierliebhaber
          jeden Alters. Sie führen ein gutmütiges Mini-Pony an der Hand, während wir gemeinsam auf
          naturnahen Wegen durch Wiesen, Felder und Wälder spazieren. Dabei erfahren Sie
          Wissenswertes über die cleveren Shettys und den respektvollen Umgang mit ihnen.
        </p>

        <h2>Das erwartet Sie bei Ihrer Shetty-Wanderung in {{ businessAddress.city }}:</h2>
        <ul>
          <li>
            <strong>Begrüßung und Kennenlernen:</strong> Wir stellen Ihnen Ihre vierbeinigen
            Begleiter vor und geben eine kurze Einweisung in das Führen der Ponys.
          </li>
          <li>
            <strong>Gemeinsames Abenteuer:</strong> Die Wanderung führt uns durch die
            abwechslungsreiche Natur rund um {{ businessAddress.city }}, angepasst an das Tempo der
            Gruppe.
          </li>
          <li>
            <strong>Wissenswertes über Shettys:</strong> Erfahren Sie mehr über die Herkunft, den
            Charakter und die Bedürfnisse dieser besonderen Ponyrasse.
          </li>
          <li>
            <strong>Zeit für Fotos und Streicheleinheiten:</strong> Unterwegs gibt es genügend
            Gelegenheiten für schöne Erinnerungsfotos und Kuschelmomente mit den Ponys.
          </li>
          <li>
            <strong>Entspannung und Naturgenuss:</strong> Entfliehen Sie dem Alltag und genießen Sie
            die Ruhe und Schönheit unserer lokalen Umgebung.
          </li>
        </ul>

        <figure class="float-right-container">
          <NuxtImg
              src="/images/blog/shetty-wanderung/Chica_mit_Rucksack.webp"
              alt="Shetty Chica mit Packtaschen bereit für eine Wanderung in Renningen"
              class="rounded-xl shadow-lg w-full cursor-pointer transition-shadow hover:shadow-2xl"
              @click="
              lightbox.open(
                '/images/blog/shetty-wanderung/Chica_mit_Rucksack.webp',
                'Chica mit ihren Packtaschen – klein, aber oho!'
              )
            "
              loading="lazy"
              format="webp"
              quality="80"
              width="600"
              height="800"
              sizes="(max-width: 639px) 100vw, 320px"
          />
          <figcaption class="text-center text-xs mt-2 text-gray-500 dark:text-gray-400">
            Unsere Shettys, wie hier Chica, können sogar kleinen Proviant tragen!
          </figcaption>
        </figure>

        <p>
          Die Shetty-Wanderung ist nicht nur ein toller Ausflug für Familien mit Kindern, sondern
          auch eine wunderbare Möglichkeit für Erwachsene, zu entschleunigen und die positive
          Ausstrahlung der Tiere zu spüren. Unsere Shetlandponys sind erfahren, sehr geduldig und
          lieben die Aufmerksamkeit.
        </p>
        <p>
          Ob als besonderes Wochenenderlebnis, als Teil eines Kindergeburtstags in
          {{ businessAddress.city }} oder einfach als eine Auszeit in der Natur – eine Wanderung mit
          unseren Shettys ist immer ein Highlight.
        </p>
      </div>

      <!-- Mehr Infos zur Shetty-Wanderung -->
      <div class="additional-info mt-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl">
        <h3 class="text-xl font-semibold mb-4 text-center">Perfekt für alle Altersgruppen</h3>
        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 class="font-semibold mb-2">Für Familien mit Kindern:</h4>
            <ul class="space-y-1 text-gray-600 dark:text-gray-300">
              <li>• Kindergerechte Einführung in den Umgang mit Ponys</li>
              <li>• Sicherheit steht an erster Stelle</li>
              <li>• Spielerisches Lernen über Tiere und Natur</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Für Erwachsene:</h4>
            <ul class="space-y-1 text-gray-600 dark:text-gray-300">
              <li>• Entspannung und Stressabbau</li>
              <li>• Achtsamkeit und Naturverbindung</li>
              <li>• Qualitätszeit mit der Familie</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Akkordeon mit den wichtigsten Infos -->
      <div class="info-accordion mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="accordion-item bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6">
          <button
              @click="toggleInfoAccordion"
              class="accordion-header w-full text-left flex justify-between items-center font-semibold text-lg"
              :aria-expanded="showInfoAccordion"
          >
            <span>Wichtige Informationen zur Shetty-Wanderung</span>
            <i class="fas transition-transform duration-300" :class="showInfoAccordion ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
          </button>
          <div v-show="showInfoAccordion" class="accordion-content mt-4 text-gray-600 dark:text-gray-300">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-gray-800 dark:text-white mb-2">Dauer & Ablauf</h4>
                <ul class="text-sm space-y-1">
                  <li>• Gesamtdauer: ca. 1,5-2 Stunden</li>
                  <li>• Reine Wanderzeit: ca. 45-60 Minuten</li>
                  <li>• Begrüßung und Einweisung: 15 Minuten</li>
                  <li>• Verabschiedung der Ponys: 15 Minuten</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 dark:text-white mb-2">Teilnehmer</h4>
                <ul class="text-sm space-y-1">
                  <li>• Geeignet ab 3 Jahren</li>
                  <li>• Gruppengröße: 2-6 Personen</li>
                  <li>• Pro Pony: 1-2 Personen</li>
                  <li>• Erwachsene Begleitung erforderlich</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Highlights der Shetty-Wanderung -->
      <div class="highlights mt-16 py-8 px-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
        <h3 class="text-2xl font-bold text-center mb-8">Warum unsere Shetty-Wanderungen besonders sind</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="highlight-item text-center">
            <div class="text-4xl mb-4">🌿</div>
            <h4 class="font-semibold mb-2">Naturerlebnis</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Entdecken Sie versteckte Pfade und die schönsten Plätze rund um {{ businessAddress.city }}
            </p>
          </div>
          <div class="highlight-item text-center">
            <div class="text-4xl mb-4">💝</div>
            <h4 class="font-semibold mb-2">Familienzeit</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Gemeinsame Erlebnisse schaffen, die lange in Erinnerung bleiben
            </p>
          </div>
          <div class="highlight-item text-center">
            <div class="text-4xl mb-4">🐴</div>
            <h4 class="font-semibold mb-2">Tierkontakt</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Lernen Sie den respektvollen Umgang mit unseren geduldigen Shetlandponys
            </p>
          </div>
        </div>
      </div>

      <!-- Kundenstimmen -->
      <div class="testimonials mt-16">
        <h3 class="text-2xl font-bold text-center mb-8">Das sagen unsere Gäste</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <blockquote class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <p class="italic mb-4">"Die Shetty-Wanderung war das Highlight unseres Wochenendes! Unsere Kinder waren begeistert und sprechen heute noch davon."</p>
            <footer class="text-sm text-gray-600 dark:text-gray-400">— Familie Schmidt aus Stuttgart</footer>
          </blockquote>
          <blockquote class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <p class="italic mb-4">"So entspannend! Die Ponys sind so lieb und die Landschaft um {{ businessAddress.city }} ist wunderschön."</p>
            <footer class="text-sm text-gray-600 dark:text-gray-400">— Anna M.</footer>
          </blockquote>
        </div>
      </div>

      <!-- FAQ -->
      <div class="faq mt-16">
        <h3 class="text-2xl font-bold text-center mb-8">Häufig gestellte Fragen</h3>
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item bg-gray-50 dark:bg-gray-700/30 rounded-lg">
            <button
                @click="toggleFaq(index)"
                class="faq-question w-full text-left p-4 font-semibold flex justify-between items-center"
                :aria-expanded="faq.open"
            >
              <span>{{ faq.question }}</span>
              <i class="fas transition-transform duration-300" :class="faq.open ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </button>
            <div v-show="faq.open" class="faq-answer p-4 pt-0 text-gray-600 dark:text-gray-300">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Buchung & Preis -->
      <div class="booking-section mt-16 border-t border-gray-200 dark:border-gray-700 pt-8">
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 text-center">
          <h3 class="text-2xl font-bold mb-4">Jetzt Ihre Shetty-Wanderung buchen!</h3>
          <p class="text-lg mb-6">Ab 35€ pro Person (Kinder unter 6 Jahren frei)</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <AppButton variant="primary" size="large">
              <i class="fas fa-phone mr-2"></i> Jetzt anrufen
            </AppButton>
            <AppButton variant="secondary" size="large">
              <i class="fas fa-envelope mr-2"></i> E-Mail senden
            </AppButton>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="cta-section mt-12 text-center">
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Bereit für Ihr Shetty-Abenteuer in {{ businessAddress.city }}?
        </p>
        <AppButton variant="primary" size="large">
          <i class="fas fa-calendar-plus mr-2"></i> Termin vereinbaren
        </AppButton>
      </div>

      <!-- Ähnliche Erlebnisse -->
      <div class="related-experiences mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h3 class="text-xl font-bold mb-6">Weitere Pony-Erlebnisse</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="experience-card bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6">
            <h4 class="font-semibold mb-2">Ponyreiten für Kinder</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Erste Reiterfahrungen auf unseren geduldigen Ponys sammeln
            </p>
            <NuxtLink to="/angebote#ponyreiten" class="text-primary-color hover:underline">
              Mehr erfahren →
            </NuxtLink>
          </div>
          <div class="experience-card bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6">
            <h4 class="font-semibold mb-2">Pony-Geburtstag</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Unvergessliche Kindergeburtstage mit unseren Ponys feiern
            </p>
            <NuxtLink to="/angebote#kindergeburtstag" class="text-primary-color hover:underline">
              Mehr erfahren →
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Share Buttons -->
      <div
          class="blog-share-buttons mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 text-center not-prose"
      >
        <h3 class="text-base font-semibold mb-3 text-gray-600 dark:text-gray-400">
          Teilen Sie dieses Erlebnis:
        </h3>
        <div class="flex justify-center gap-4">
          <button class="share-btn bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <i class="fab fa-facebook-f mr-2"></i> Facebook
          </button>
          <button class="share-btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            <i class="fab fa-whatsapp mr-2"></i> WhatsApp
          </button>
        </div>
      </div>

      <p class="mt-8 text-center not-prose">
        <NuxtLink
            to="/angebote"
            class="back-link inline-block text-sm bg-gray-200 dark:bg-gray-700 px-5 py-2.5 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow hover:shadow-md"
        >
          <i class="fas fa-arrow-left mr-2"></i> Zurück zu allen Angeboten
        </NuxtLink>
      </p>
    </article>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRuntimeConfig } from '#app'
import { useMySeoMeta } from '~/composables/useMySeoMeta'
import { NuxtLink, NuxtImg } from '#components'
import { useLightbox } from '~/composables/useLightbox'
import AppButton from '~/components/AppButton.vue'
import dayjs from 'dayjs'
import 'dayjs/locale/de'

dayjs.locale('de')

const lightbox = useLightbox()
const route = useRoute()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const businessAddress = config.public.businessAddress

const pageContent = ref({
  title: `Shetty-Wanderung in ${businessAddress.city}: Naturabenteuer mit Mini-Ponys`,
  subtitle: `Ein tierisch schöner Ausflug für die ganze Familie! Entdecken Sie die Umgebung von ${businessAddress.city} an der Hand unserer charmanten Shetlandponys.`,
  navTitle: `Shetty-Wanderung ${businessAddress.city}`,
  readTime: 'ca. 5 Min. Lesezeit',
  publishDate: '2024-07-15',
  mainImage: {
    src: '/images/ponyreiten/Bilbo.webp',
    alt: `Liebevolles Shetlandpony Bilbo, bereit für eine geführte Shetty-Wanderung in ${businessAddress.city}`,
    width: 1200,
    height: 800,
    caption: 'Unser erfahrener Wander-Shetty Bilbo.',
  },

})

const formattedDate = computed(() => dayjs(pageContent.value.publishDate).format('DD. MMMM YYYY'))
const currentUrlForHead = `${siteUrl}${route.path}`

useMySeoMeta({
  title: pageContent.value.title,
  description: `Erleben Sie eine unvergessliche Shetty-Wanderung in ${businessAddress.city} mit unseren kinderlieben Shetlandponys. Ein Naturabenteuer für die ganze Familie.`,
  keywords: `Shetty-Wanderung ${businessAddress.city}, Pony Spaziergang ${businessAddress.city}, Ausflug mit Ponys ${businessAddress.city}, Tierwanderung ${businessAddress.city}, Familienausflug Pferde ${businessAddress.city}, Ponyhof ${businessAddress.city}`,
  ogImage: `${siteUrl}${pageContent.value.mainImage.src}`,
  ogImageAlt: `Shetty-Wanderung in der Natur von ${businessAddress.city} mit Leben ist ein Ponyhof`,
  ogType: 'article',
  articleDetails: {
    publishedTime: `${pageContent.value.publishDate}T09:00:00+02:00`,
    authorName: 'Sarah Handte',
    section: 'Pony-Erlebnisse',
    tags: ['Shetty-Wanderung', 'Familienausflug', 'Natur', businessAddress.city, 'Ponys'],
  },
  ldJson: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Shetty-Wanderung im Naturpark ${businessAddress.city}`,
    description: `Geführte Wanderungen mit kinderlieben Shetlandponys durch die malerische Natur von ${businessAddress.city}. Ein tierisches Abenteuer für Familien.`,
    image: `${siteUrl}${pageContent.value.mainImage.src}`,
    provider: {
      '@type': 'Organization',
      name: `Leben ist ein Ponyhof ${businessAddress.city}`,
      url: siteUrl,
    },
    areaServed: {
      '@type': 'City',
      name: businessAddress.city,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '35',
      url: currentUrlForHead,
    },
    audience: { '@type': 'Audience', audienceType: 'Familien mit Kindern' },
  },
})

const showInfoAccordion = ref(true)
const toggleInfoAccordion = () => {
  showInfoAccordion.value = !showInfoAccordion.value
}

const faqs = ref([
  {
    question: 'Welche Kleidung sollten wir mitbringen?',
    answer: 'Wir empfehlen wetterangepasste Kleidung und feste Schuhe. Bei Regen können wir die Wanderung leider nicht durchführen.',
    open: false
  },
  {
    question: 'Können auch Kleinkinder mitlaufen?',
    answer: 'Ja, Kinder ab 3 Jahren können gerne teilnehmen. Jüngere Kinder können von den Eltern getragen werden.',
    open: false
  },
  {
    question: 'Was passiert bei schlechtem Wetter?',
    answer: 'Bei leichtem Regen finden die Wanderungen statt. Bei starkem Regen oder Gewitter verschieben wir den Termin.',
    open: false
  },
  {
    question: 'Dürfen wir eigene Fotos machen?',
    answer: 'Selbstverständlich! Bringen Sie gerne Ihre Kamera mit für unvergessliche Erinnerungen.',
    open: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<style scoped>
.lead-paragraph {
  @apply !text-lg !font-normal;
}

.prose figure {
  @apply my-6;
}

/* Float-Container mit nativen CSS-Eigenschaften statt @apply */
.prose .float-right-container {
  /* Mobile: Zentriert und volle Breite */
  float: none;
  clear: both;
  margin: 0 auto 1.5rem auto;
}

@media (min-width: 640px) {
  .prose .float-right-container {
    /* Desktop: Float rechts */
    float: right;
    clear: right;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    max-width: 20rem;
  }
}

/* Accordion Transitions */
.accordion-content,
.faq-answer {
  transition: all 0.3s ease-in-out;
}

/* Share Buttons */
.share-btn {
  transition: all 0.3s ease;
}

.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>