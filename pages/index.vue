<!-- pages/index.vue -->
<template>
  <div>
    <HeroSlideshow />
    <NewsTicker />

    <!-- Wichtiger Hinweis zur Reittherapie & Seitenstatus -->
    <section
        class="disclaimer-banner py-4 bg-amber-50 dark:bg-amber-900/40 border-y border-amber-200 dark:border-amber-700/50 shadow-sm"
        aria-labelledby="disclaimer-title"
    >
      <div class="container mx-auto px-4">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <div class="flex-shrink-0">
            <i class="fas fa-info-circle text-amber-600 dark:text-amber-400 text-2xl sm:text-3xl"></i>
          </div>
          <div>
            <h2 id="disclaimer-title" class="sr-only">Wichtiger Hinweis</h2>
            <p class="text-amber-800 dark:text-amber-200 text-sm md:text-base leading-relaxed">
              <strong>Technische Störung:</strong> Momentan kommt es leider zu Problemen auf unserer Website – insbesondere auf Smartphones.
              Bitte sende deine Anfrage vorübergehend an
              <a href="mailto:sarah@lebenisteinponyhof.de" class="underline font-medium hover:text-amber-700 dark:hover:text-amber-100">sarah@lebenisteinponyhof.de</a>.
              Vielen Dank für dein Verständnis!
            </p>
          </div>
        </div>
      </div>
    </section>

    <PageSectionsWelcomeSection />
    <PageSectionsAvailabilityBanner />
    <PageSectionsHighlightsSection
      :highlightItems="startPageHighlights"
      :title="`Ponyreiten, Geburtstage & Kurse in ${businessAddress.city} entdecken`"
      :description="`Ob unvergessliche Kindergeburtstage mit Ponys, spannende Ferienkurse oder das erste geführte Ponyreiten in ${businessAddress.city} – bei uns auf dem Ponyhof in ${businessAddress.city} findet jedes Kind sein pferdestarkes Abenteuer.`"
      :showViewAllButton="true"
      supertitle="Unsere Top-Angebote" 
      :maxItems="4"
    />

    <!-- Kernaspekte: Mit Pferden wachsen und lernen -->
    <section
        class="why-therapy-section py-16 md:py-24 bg-white dark:bg-gray-800 relative overflow-hidden"
        aria-labelledby="why-therapy-heading"
    >
      <div class="absolute top-0 right-0 w-64 h-64 bg-primary-color/5 dark:bg-primary-light/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl -z-0"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-primary-color/5 dark:bg-primary-light/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-2xl -z-0"></div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="section-header mb-12 md:mb-16">
          <span class="uppercase tracking-wider text-primary-color dark:text-primary-light text-sm font-semibold">
            Entwicklungsförderung mit Pferden
          </span>
          <h2 id="why-therapy-heading" class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800 dark:text-white">
            Mit Pferden wachsen und lernen in {{ businessAddress.city }}
          </h2>
          <p class="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Die Begegnung mit Pferden ist ein einzigartiges Erlebnis, das Kinder auf vielfältige
            Weise positiv beeinflusst und in ihrer Entwicklung unterstützt – direkt hier auf unserem Ponyhof in {{ businessAddress.city }}.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          <FeatureCard
              icon="fas fa-rocket"
              title="Entwicklung fördern"
              description="Soziale Fähigkeiten, Teamarbeit und Körperwahrnehmung werden spielerisch geübt und gestärkt. Koordinative Fähigkeiten werden geschult."
          />
          <FeatureCard
              icon="fas fa-handshake"
              title="Geduld & Vertrauen"
              description="Wir schaffen ein sicheres Umfeld, in dem Kinder lernen, geduldig zu sein, Vertrauen zu fassen und wichtige Lebenskompetenzen zu entwickeln."
              icon-color="text-yellow-500 dark:text-yellow-400"
              bg-color="bg-yellow-500/10 dark:bg-yellow-400/10"
          />
          <FeatureCard
              icon="fas fa-shield-alt"
              title="Starkes Selbstbewusstsein"
              description="Den Umgang mit einem so großen Tier zu meistern, stärkt das Selbstvertrauen und die Fähigkeit, Herausforderungen anzunehmen."
              icon-color="text-green-500 dark:text-green-400"
              bg-color="bg-green-500/10 dark:bg-green-400/10"
          />
          <FeatureCard
              icon="fas fa-leaf"
              title="Natur & Achtsamkeit"
              description="Die Zeit im Freien und die achtsame Begegnung mit den Pferden fördert die Verbindung zur Natur und innere Ruhe."
              icon-color="text-teal-500 dark:text-teal-400"
              bg-color="bg-teal-500/10 dark:bg-teal-400/10"
          />
          <FeatureCard
              icon="fas fa-laugh-beam"
              title="Pure Lebensfreude"
              description="Neben aller Förderung steht der Spaß im Vordergrund! Lachen, spielen und unbeschwerte Momente mit unseren Ponys."
              icon-color="text-purple-500 dark:text-purple-400"
              bg-color="bg-purple-500/10 dark:bg-purple-400/10"
          />
        </div>
        <div class="mt-12 md:mt-16">
          <AppButton :to="{ path: '/blog/foerderung-kinder-ponyreiten-renningen' }" variant="primary" size="lg" class="px-8 py-4 text-lg rounded-xl">
            Mehr zur Förderung durch Ponys <i class="fas fa-chevron-right text-sm ml-2"></i>
          </AppButton>
        </div>
      </div>
    </section>

    <section class="testimonials py-16 md:py-20 bg-gray-50 dark:bg-gray-900/30" aria-labelledby="testimonials-heading">
      <div class="container mx-auto px-4 text-center">
        <div class="section-header mb-12">
          <span class="uppercase tracking-wider text-primary-color dark:text-primary-light text-sm font-semibold">
            Erfahrungen unserer Besucher
          </span>
          <h2 id="testimonials-heading" class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800 dark:text-white">
            Das sagen unsere kleinen & großen Gäste aus {{ businessAddress.city }} und Umgebung
          </h2>
          <p class="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Lesen Sie, was Familien über ihre Erlebnisse beim Ponyreiten und den Angeboten auf unserem Hof in {{ businessAddress.city }} berichten.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
              quote="Der Kindergeburtstag meiner Tochter auf dem Ponyhof in Renningen war einfach wundervoll! Alle Kinder waren begeistert und hatten so viel Spaß beim Reiten und bei den Spielen."
              author="Familie Müller"
              location="Leonberg"
              :stars="5"
          />
          <TestimonialCard
              quote="Mein Sohn, der sonst eher zurückhaltend ist, hat durch die pferdegestützte Zeit hier in Renningen so viel Selbstvertrauen gewonnen. Der liebevolle Umgang ist beeindruckend."
              author="Sandra K."
              location="Renningen"
              :stars="5"
          />
          <TestimonialCard
              quote="Der Ferienkurs hat unserer Tochter so gut gefallen, dass sie jetzt regelmäßig zum Ponyreiten kommt. Ein tolles Angebot mit viel Herz und Kompetenz."
              author="Familie Weber"
              location="Stuttgart"
              :stars="5"
          />
        </div>
      </div>
    </section>

    <section class="main-cta-section py-20 md:py-28 relative overflow-hidden" aria-labelledby="main-cta-heading">
      <div class="absolute inset-0 bg-gradient-to-br from-pink-500 via-primary-color to-orange-400 z-0"></div>
      <div class="absolute inset-0 opacity-10 bg-[url('/images/pattern-horses.webp')] bg-repeat z-0"></div>
      <div class="container mx-auto px-4 relative z-10 text-center">
        <h2 id="main-cta-heading" class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-lg max-w-4xl mx-auto leading-tight">
          Das Leben ist ein Ponyhof – Erlebe es mit uns in {{ businessAddress.city }}!
        </h2>
        <p class="max-w-2xl mx-auto mb-10 text-white text-opacity-95 text-lg md:text-xl leading-relaxed">
          Wir freuen uns darauf, dich und deine Familie auf unserem Ponyhof in {{ businessAddress.city }} willkommen zu heißen und euch die wunderbare Welt unserer Ponys näherzubringen.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <AppButton
              :to="{ path: '/angebote' }"
              size="xl"
              variant="secondary"
              class="px-8 py-3.5 dark:bg-white dark:text-primary-color dark:hover:bg-gray-100"
          >
            Unsere Pony-Angebote <i class="fas fa-horse ml-2"></i>
          </AppButton>
          <AppButton
              :to="{ path: '/contact', query: { subject: `Anfrage Ponyerlebnis ${businessAddress.city}` } }"
              size="xl"
              variant="outline-white"
              class="px-8 py-3.5 border-2 text-white hover:bg-white/10"
          >
            Kontakt aufnehmen <i class="fas fa-paper-plane ml-2"></i>
          </AppButton>
        </div>
      </div>
    </section>

    <SocialFeeds class="py-16 md:py-20 bg-gray-50 dark:bg-gray-900/30" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineComponent, h } from 'vue'; // defineComponent und h für die Dummy-Komponenten hinzugefügt
import { useRuntimeConfig } from '#app';
import { useMySeoMeta } from '~/composables/useMySeoMeta';
import HeroSlideshow from '~/components/HeroSlideshow.vue';
import NewsTicker from '~/components/NewsTicker.vue';
import AppButton from '~/components/AppButton.vue';
import SocialFeeds from '~/components/SocialFeeds.vue';
// NuxtLink wird automatisch importiert, wenn in <template> verwendet

// Importiere deine PageSections-Komponenten
import PageSectionsWelcomeSection from '~/components/PageSections/WelcomeSection.vue';
import PageSectionsAvailabilityBanner from '~/components/PageSections/AvailabilityBanner.vue';
import PageSectionsHighlightsSection from '~/components/PageSections/HighlightsSection.vue';
// Importiere das Interface für HighlightItem, falls es in einer separaten Datei liegt
// import type { HighlightItem } from '~/types'; // Beispielpfad oder aus HighlightsSection.vue
// Wenn HighlightItem direkt in HighlightsSection.vue definiert ist und nicht exportiert wird,
// müssen wir es hier eventuell neu definieren oder anders zugänglich machen.
// Für dieses Beispiel nehme ich an, dass wir die Struktur kennen oder ein ähnliches Interface verwenden.
interface HighlightItem {
  imgSrc: string;
  altText: string;
  teaserText?: string;
  title: string;
  description: string;
  link: any; // RouteLocationRaw
  linkText?: string;
  imageWidth?: number;
  imageHeight?: number;
  placeholderImg?: string | boolean;
  slug?: string;
}

const config = useRuntimeConfig();
const businessAddress = config.public.businessAddress;
const siteUrl = config.public.siteUrl;

// Definiere den Pfad zu deinem neuen Startseiten-OG-Bild
// **WICHTIG: Ersetze dies durch den tatsächlichen Dateinamen und Pfad deines Bildes (1200x630px empfohlen)**
const startseiteOgImage = `${siteUrl}/images/og-startseite-ponyreiten-renningen.webp`; // Dein Bild hier

useMySeoMeta({
  title: `Ponyreiten ${businessAddress.city} & Pferde-Erlebnisse | Leben ist ein Ponyhof ${businessAddress.city}`,
  description: `Dein Ponyhof in ${businessAddress.city} für Ponyreiten, Reittherapie (bald!), Kindergeburtstage und mehr. Entdecke unvergessliche Momente mit Pferden und erlebe Abenteuer beim Ponyreiten in ${businessAddress.city}.`,
  keywords: `Ponyreiten ${businessAddress.city}, Ponyhof ${businessAddress.city}, Reiten Kinder ${businessAddress.city}, Reittherapie ${businessAddress.city}, Kindergeburtstag Pferde ${businessAddress.city}, Ausritte ${businessAddress.city}, Leben ist ein Ponyhof ${businessAddress.city}`,
  
  ogImage: startseiteOgImage,
  ogImageAlt: `Leben ist ein Ponyhof - Ponyreiten und Reittherapie in ${businessAddress.city}`,
  ogType: 'website',

  localBusinessDetails: {
    type: 'SportsActivityLocation', // Oder 'EquestrianBusiness' wenn passender
    name: config.public.siteName || `Leben ist ein Ponyhof ${businessAddress.city}`,
    description: `Dein Ponyhof in ${businessAddress.city} für Ponyreiten, Reittherapie (bald!), Kindergeburtstage und mehr. Wir bieten unvergessliche Pferde-Erlebnisse für Kinder und Familien.`,
    image: startseiteOgImage,
    telephone: businessAddress.telephone,
    email: businessAddress.email,
    openingHours: config.public.openingHours,
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
    priceRange: "€€", // Beispiel
  }
});

// Definition für startPageHighlights (Auswahl für die Startseite)
const startPageHighlights = ref<HighlightItem[]>([
  {
    slug: 'ponyreiten',
    imgSrc: "/images/cards/ponyreiten-teaser.webp", // PLATZHALTER - anpassen!
    altText: `Kind beim geführten Ponyreiten in ${businessAddress.city}`,
    teaserText: "Sicher im Sattel",
    title: `Ponyreiten in ${businessAddress.city}`,
    description: `Erste Reiterfahrungen sammeln, Ausritte genießen oder individuelle Förderung – Spaß und Sicherheit für kleine Pferdefreunde in ${businessAddress.city}.`,
    link: { path: '/angebote', hash: '#ponyreiten' },
    linkText: "Mehr zum Ponyreiten",
    imageWidth: 400, imageHeight: 300
  },
  {
    slug: 'kindergeburtstag',
    imgSrc: "/images/cards/kindergeburtstag-teaser.webp", // PLATZHALTER - anpassen!
    altText: `Fröhliche Kinder feiern einen Pony-Geburtstag in ${businessAddress.city}`,
    teaserText: "Die beste Party!",
    title: `Kindergeburtstage in ${businessAddress.city}`,
    description: `Ein unvergesslicher Tag mit Ponys, Spielen und Basteln. Das Highlight für jedes Geburtstagskind in der Region ${businessAddress.city}.`,
    link: { path: '/blog/kindergeburtstag' },
    linkText: "Infos zum Pony-Geburtstag",
    imageWidth: 400, imageHeight: 300
  },
  {
    slug: 'ferienkurse',
    imgSrc: "/images/cards/ferienkurs-teaser.webp", // PLATZHALTER - anpassen!
    altText: `Kinder haben Spaß im Ferienkurs auf dem Ponyhof in ${businessAddress.city}`,
    teaserText: "Ferien-Abenteuer",
    title: `Ferienkurse (${businessAddress.city})`,
    description: `Spielerisch Pferde verstehen, Natur erleben und neue Freunde finden. Unsere Ferienkurse in ${businessAddress.city} sind voller Spaß und Lernen.`,
    link: { path: '/blog/ferienkurse' },
    linkText: "Details & Termine",
    imageWidth: 400, imageHeight: 300
  },
  {
    slug: 'reittherapie',
    imgSrc: "/images/cards/reittherapie-teaser.webp", // PLATZHALTER - anpassen!
    altText: `Kind in der pferdegestützten Therapie in ${businessAddress.city}`,
    teaserText: "Förderung mit Herz",
    title: `Reittherapie (bald in ${businessAddress.city})`,
    description: `Individuelle pferdegestützte Förderung zur Stärkung von Körper und Seele. Unser Angebot startet bald in ${businessAddress.city}.`,
    link: { path: '/angebote', hash: '#reittherapie' },
    linkText: "Mehr erfahren",
    imageWidth: 400, imageHeight: 300
  },
]);

// Dummy-Komponenten Definitionen (können in eigene Dateien ausgelagert werden für bessere Organisation)
const FeatureCard = defineComponent({
  props: { title: String, description: String, icon: String, iconColor: String, bgColor: String },
  setup(props) {
    return () => h('div', { class: 'feature-card flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-600/20' }, [
      h('div', { class: `w-16 h-16 rounded-full ${props.bgColor || 'bg-primary-color/10 dark:bg-primary-light/10'} flex items-center justify-center mb-4` }, [
        h('i', { class: `${props.icon} text-3xl ${props.iconColor || 'text-primary-color dark:text-primary-light'}` })
      ]),
      h('h3', { class: 'text-xl font-semibold mb-3 text-gray-800 dark:text-white text-center' }, props.title),
      h('p', { class: 'text-gray-600 dark:text-gray-400 leading-relaxed flex-grow text-sm text-center' }, props.description)
    ]);
  }
});

const TestimonialCard = defineComponent({
  props: { quote: String, author: String, location: String, stars: Number },
  setup(props) {
    const starElements = Array.from({ length: props.stars || 0 }).map(() => h('i', { class: 'fas fa-star' }));
    return () => h('div', { class: 'testimonial-card w-full p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600/20 text-center' }, [
      h('div', { class: 'flex justify-center mb-3' }, [
        h('div', { class: 'rating flex text-yellow-400' }, starElements)
      ]),
      h('p', { class: 'text-gray-600 dark:text-gray-300 italic mb-4 text-sm leading-relaxed min-h-[6em]' }, `"${props.quote}"`),
      h('div', { class: 'flex flex-col items-center' }, [
        h('p', { class: 'font-semibold text-gray-800 dark:text-white text-sm' }, props.author),
        props.location && h('p', { class: 'text-xs text-gray-500 dark:text-gray-400' }, props.location)
      ])
    ]);
  }
});

</script>

<style scoped>
.section-header {
  margin-bottom: 3rem; /* Tailwind: mb-12 */
}
.feature-card p {
  font-size: 0.9rem; /* Tailwind: text-sm (ca.) */
}
.testimonial-card p.italic {
  min-height: 6em; /* Behält die Mindesthöhe für gleichmäßige Darstellung */
}

.disclaimer-banner p {
  line-height: 1.6; /* Tailwind: leading-relaxed (ca.) */
}
.disclaimer-banner strong {
  color: inherit;
}
</style>