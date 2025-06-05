<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-3">
        Ponyreiten {{ businessAddress.city }} & Pferdeerlebnisse
      </h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
        Entdecken Sie unsere vielfältigen und liebevoll gestalteten
        <strong>Pony-Angebote in {{ businessAddress.city }}</strong>: geführtes Ponyreiten,
        pferdegestützte Förderung (bald!), zauberhafte Kindergeburtstage und erlebnisreiche Ferienkurse für unvergessliche Momente.
      </p>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li aria-current="page">Pony-Angebote {{ businessAddress.city }}</li>
      </ol>
    </nav>

    <!-- Aktuelle Verfügbarkeit Banner (Wiederverwendete Komponente) -->
    <PageSectionsAvailabilityBanner class="my-6 md:my-8" />

    <div class="container mx-auto px-4 py-8 md:py-10 space-y-12 md:space-y-16">
      <!-- Angebot: Reittherapie -->
      <OfferSection
        id="reittherapie"
        image-src="/images/Pferde/Therapie-mit-Ball.webp"
        :image-alt="`Kind bei der pferdegestützten Therapie in ${businessAddress.city}`"
        :image-width="800"
        :image-height="1200"
        image-aspect="aspect-[3/4]"
        icon="fas fa-heartbeat"
        :title="`Reittherapie & Heilpädagogisches Reiten in ${businessAddress.city}`"
        badge-text="Ab 2026"
        badge-color="amber"
      >
        <p>
          Individuelle pferdegestützte Förderung für Kinder und Jugendliche in
          {{ businessAddress.city }} und Umgebung. Sarah absolviert derzeit ihre Ausbildung zur
          Reittherapeutin (Start der Angebote voraussichtlich 2026).
        </p>
        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-3 my-4 rounded-lg border border-yellow-100 dark:border-yellow-800/30 text-sm">
          <div class="flex items-center">
            <i class="fas fa-info-circle text-yellow-600 dark:text-yellow-400 mr-2"></i>
            <span class="text-yellow-800 dark:text-yellow-300">
              Bleiben Sie informiert über den Start unserer Reittherapie!
            </span>
          </div>
        </div>
        <template #actions>
          <AppButton :to="{ path: '/blog/wirkung-reittherapie' }" size="normal" :aria-label="`Mehr über Reittherapie in ${businessAddress.city} erfahren`">
            Wirkung der Reittherapie <i class="fas fa-arrow-right text-xs ml-1.5"></i>
          </AppButton>
          <AppButton @click="showInterestModal('Reittherapie')" variant="outline-primary" size="normal" :aria-label="`Interesse für Reittherapie in ${businessAddress.city} vormerken`">
            <i class="fas fa-bell mr-2"></i> Interesse vormerken
          </AppButton>
        </template>
      </OfferSection>

      <!-- Angebot: Ponyreiten & Ausritte -->
      <OfferSection
        id="ponyreiten"
        image-src="/images/ponyreiten/Napoleon-mit-Sattel.webp"
        :image-alt="`Kind beim geführten Ponyreiten in ${businessAddress.city} mit Shetty Napoleon`"
        :image-width="400"
        :image-height="400"
        image-aspect="aspect-[1/1]"
        icon="fas fa-horse-head"
        :title="`Ponyreiten & Ausritte in ${businessAddress.city}`"
        badge-text="ab 25€ • Verfügbar"
        badge-color="green"
        :image-on-left="false"
      >
        <p>
          Erleben Sie sicheres und geführtes <strong>Ponyreiten für Kinder in {{ businessAddress.city }}</strong>.
          Perfekt für Anfänger und kleine Pferdefreunde, die erste Reiterfahrungen sammeln möchten.
          Wir bieten Schnupperstunden, geführte Runden und begleitete Ausritte.
        </p>
        <template #actions>
          <AppButton :to="{ path: '/blog/ponyreiten' }" size="normal" :aria-label="`Details zum Ponyreiten in ${businessAddress.city}`">
            Details zum Ponyreiten <i class="fas fa-arrow-right text-xs ml-1.5"></i>
          </AppButton>
          <AppButton :to="{ path: '/contact', query: { subject: `Anfrage Ponyreiten ${businessAddress.city}` } }" variant="outline-primary" size="normal" :aria-label="`Termin für Ponyreiten in ${businessAddress.city} anfragen`">
            <i class="fas fa-calendar-check text-xs mr-1.5"></i> Termin anfragen
          </AppButton>
        </template>
      </OfferSection>

      <!-- Angebot: Kindergeburtstag -->
      <OfferSection
        id="kindergeburtstag"
        image-src="/images/Einhorn_Pinjata.webp"
        :image-alt="`Kindergeburtstag mit Ponys und Einhorn-Pinata in ${businessAddress.city}`"
        :image-width="1200"
        :image-height="900"
        image-aspect="aspect-[4/3]"
        icon="fas fa-birthday-cake"
        :title="`Pony-Kindergeburtstage in ${businessAddress.city}`"
        badge-text="ab 120€ • Ab 11. Juni"
        badge-color="green"
      >
        <p>
          Feiern Sie einen unvergesslichen Kindergeburtstag mit <strong>Ponyreiten in {{ businessAddress.city }}</strong>!
          Wir bieten lustige Spiele, kreatives Basteln und tolle Mottos. Ein tierisches Abenteuer für das Geburtstagskind und seine Freunde.
        </p>
        <template #actions>
          <AppButton :to="{ path: '/blog/kindergeburtstag' }" size="normal" :aria-label="`Details zu Kindergeburtstagen mit Ponys in ${businessAddress.city}`">
            Details zum Kindergeburtstag <i class="fas fa-arrow-right text-xs ml-1.5"></i>
          </AppButton>
          <AppButton :to="{ path: '/contact', query: { subject: `Anfrage Kindergeburtstag ${businessAddress.city}` } }" variant="outline-primary" size="normal" :aria-label="`Termin für einen Kindergeburtstag in ${businessAddress.city} anfragen`">
            <i class="fas fa-calendar-check text-xs mr-1.5"></i> Termin anfragen
          </AppButton>
        </template>
      </OfferSection>

      <!-- Angebot: Shetty-Wanderung -->
      <OfferSection
        id="shetty-wanderung"
        image-src="/images/shetty-wanderung.jpeg"
        :image-alt="`Familie bei einer Shetty-Wanderung in der Natur um ${businessAddress.city}`"
        :image-width="1200" :image-height="900" image-aspect="aspect-[4/3]"
        icon="fas fa-hiking"
        :title="`Shetty-Wanderung in ${businessAddress.city}`"
        badge-text="ab 35€ • Verfügbar" badge-color="green"
        :image-on-left="false"
      >
        <p>
          Entdecken Sie die malerische Umgebung von {{ businessAddress.city }} gemeinsam mit unseren freundlichen Shetlandponys.
          Eine geführte Wanderung für die ganze Familie, bei der jeder ein Pony an der Hand führen darf.
        </p>
        <template #actions>
          <AppButton :to="{ path: '/blog/shetty-wanderung' }" size="normal" aria-label="Details zur Shetty-Wanderung">Details zur Shetty-Wanderung <i class="fas fa-arrow-right text-xs ml-1.5"></i></AppButton>
          <AppButton :to="{ path: '/contact', query: {subject: `Anfrage Shetty-Wanderung ${businessAddress.city}`} }" variant="outline-primary" size="normal" aria-label="Termin für Shetty-Wanderung anfragen">
            <i class="fas fa-calendar-check text-xs mr-1.5"></i> Termin anfragen
          </AppButton>
        </template>
      </OfferSection>

      <!-- Angebot: Zwergen-Wanderung -->
      <OfferSection
        id="zwergen-wanderung"
        image-src="/images/mini-zwergenbande.webp"
        :image-alt="`Kleinkinder bei der Zwergen-Wanderung mit Ponys in ${businessAddress.city}`"
        :image-width="800" :image-height="1150" image-aspect="aspect-[3/4]"
        icon="fas fa-child"
        :title="`Zwergen-Wanderung (Mini Zwergen Bande) in ${businessAddress.city}`"
        badge-text="ab 30€ • Verfügbar" badge-color="green"
      >
        <p>
          Speziell für unsere kleinsten Ponyfans (ca. 3-6 Jahre): Eine kindgerechte Wanderung, bei der die Kinder unsere Mini-Shettys
          an der Führleine durch den Wald begleiten und spielerisch den Umgang mit den Tieren lernen.
        </p>
        <template #actions>
          <AppButton :to="{ path: '/blog/zwergen-bande' }" size="normal" aria-label="Details zur Zwergen-Wanderung">Details zur Zwergen-Wanderung <i class="fas fa-arrow-right text-xs ml-1.5"></i></AppButton>
           <AppButton :to="{ path: '/contact', query: {subject: `Anfrage Zwergen-Wanderung ${businessAddress.city}`} }" variant="outline-primary" size="normal" aria-label="Termin für Zwergen-Wanderung anfragen">
            <i class="fas fa-calendar-check text-xs mr-1.5"></i> Termin anfragen
          </AppButton>
        </template>
      </OfferSection>

      <!-- Angebot: Ferienkurse -->
       <OfferSection
        id="ferienkurse"
        image-src="/images/blog/ferienkurse/Basteln_Hufeisen_copy.webp"
        :image-alt="`Kinder basteln Hufeisen im Ferienkurs auf dem Ponyhof ${businessAddress.city}`"
        :image-width="1200" :image-height="900" image-aspect="aspect-[4/3]"
        icon="fas fa-sun"
        :title="`Ferienkurse mit Ponys in ${businessAddress.city}`"
        badge-text="ab 149€ • Plätze frei" badge-color="green"
        :image-on-left="false"
      >
        <p>
          Spiel, Spaß und Abenteuer in den Schulferien! Unsere pädagogisch begleiteten Ferienkurse in {{ businessAddress.city }}
          bieten ein buntes Programm rund ums Pferd, Naturerlebnisse und kreative Aktivitäten.
        </p>
        <template #actions>
          <AppButton :to="{ path: '/blog/ferienkurse' }" size="normal" aria-label="Mehr über Ferienkurse">Mehr zum Ferienkurs <i class="fas fa-arrow-right text-xs ml-1.5"></i></AppButton>
           <AppButton :to="{ path: '/contact', query: {subject: `Anfrage Ferienkurs ${businessAddress.city}`} }" variant="outline-primary" size="normal" aria-label="Platz für Ferienkurs anfragen">
            <i class="fas fa-calendar-check text-xs mr-1.5"></i> Jetzt Platz anfragen
          </AppButton>
        </template>
      </OfferSection>


      <!-- Preisübersicht & Kontakt Sektionen bleiben ähnlich, aber ggf. als eigene Komponenten für Sauberkeit -->
      <PageSectionsPriceTable :city="businessAddress.city" @show-interest="showInterestModal" />
      <PageSectionsContactCta :city="businessAddress.city" />

    </div>

    <!-- Interesse vormerken Modal -->
    <ModalInterestForm
      :is-open="showInterest"
      :offer-name="interestOffer"
      @close="closeInterestModal"
      @submit-interest="submitInterest"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRuntimeConfig } from '#app' // useHead wird durch useMySeoMeta ersetzt
import { useMySeoMeta } from '~/composables/useMySeoMeta'
import AppButton from '~/components/AppButton.vue'
import { NuxtLink, NuxtImg } from '#components' // NuxtImg hier nicht direkt verwendet, aber in OfferSection
import dayjs from 'dayjs'

// Import der neuen Sektions-Komponenten
import PageSectionsAvailabilityBanner from '~/components/PageSections/AvailabilityBanner.vue'
import OfferSection from '~/components/PageSections/OfferSection.vue' // Neue Komponente
import PageSectionsPriceTable from '~/components/PageSections/PriceTable.vue' // Neue Komponente
import PageSectionsContactCta from '~/components/PageSections/ContactCta.vue' // Neue Komponente
import ModalInterestForm from '~/components/ModalInterestForm.vue' // Neue Komponente


const route = useRoute()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl as string
const businessAddress = config.public.businessAddress as { city: string; street: string; zip: string; country: string; latitude?: string, longitude?: string }

// SEO Konfiguration
const pageTitle = `Pony-Angebote ${businessAddress.city}: Ponyreiten, Reittherapie, Geburtstage & Kurse`
const pageDescription = `Entdecken Sie unsere vielfältigen Pony-Angebote in ${businessAddress.city} & Leonberg: Ponyreiten für Kinder, Reittherapie (bald!), Kindergeburtstage, Ferienkurse und Shetty-Wanderungen.`
const pageKeywords = [
  `Ponyhof ${businessAddress.city} Angebote`,
  `Ponyreiten ${businessAddress.city}`,
  `Reittherapie Kinder ${businessAddress.city}`,
  `Pony Kindergeburtstag ${businessAddress.city}`,
  `Ferienkurs Reiten ${businessAddress.city}`,
  `Ausritte Ponys ${businessAddress.city}`,
  `Shetty Wanderung ${businessAddress.city}`,
  `Zwergenwanderung ${businessAddress.city}`,
  `Pferdegestützte Therapie ${businessAddress.city}`,
  `Pony Erlebnisse ${businessAddress.city}`,
  'Reiten lernen Kinder Renningen',
]
const ogImageUrl = `${siteUrl}/images/og-angebote-ponyreiten-renningen.webp` // Spezifisches OG-Bild für diese Seite erstellen

// Basis-Offer-Daten für LD+JSON
const baseOfferLd = (name: string, description: string, urlPath: string, price?: string, imagePath?: string) => ({
  '@type': 'Service', // oder 'Event' für Geburtstage/Ferienkurse
  name: `${name} in ${businessAddress.city}`,
  description: `${description} auf unserem Ponyhof in ${businessAddress.city}.`,
  url: `${siteUrl}${urlPath}`,
  image: imagePath ? `${siteUrl}${imagePath}` : ogImageUrl,
  provider: {
    '@type': 'Organization',
    name: `Leben ist ein Ponyhof ${businessAddress.city}`,
    url: siteUrl,
  },
  areaServed: {
    '@type': 'AdministrativeArea', // Genauer als nur 'City'
    name: `${businessAddress.city}, Baden-Württemberg`, // Region hinzufügen
    address: { // Adresse des Anbieters
        '@type': 'PostalAddress',
        streetAddress: businessAddress.street,
        addressLocality: businessAddress.city,
        postalCode: businessAddress.zip,
        addressCountry: businessAddress.country
    }
  },
  ...(price && {
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: price,
      availability: 'https://schema.org/InStock', // Anpassen, z.B. LimitedAvailability
      validFrom: dayjs().format('YYYY-MM-DD'),
    }
  }),
  // Für Events zusätzlich:
  ...(name.toLowerCase().includes('geburtstag') || name.toLowerCase().includes('ferienkurs') ? {
    '@type': 'Event', // Überschreibt Service
    startDate: dayjs().format('YYYY-MM-DD') + "T09:00", // Platzhalter, anpassen oder dynamisch machen
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
      }
    },
    organizer: {
      '@type': 'Person',
      name: 'Sarah Handte',
      url: `${siteUrl}/about`
    }
  } : {})
});

useMySeoMeta({
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords,
  ogImage: ogImageUrl,
  ogImageAlt: `Vielfältige Pony-Angebote auf dem Ponyhof in ${businessAddress.city}`,
  ogType: 'website', // Oder 'CollectionPage', wenn man es als Sammlung von Angeboten sieht
  ldJson: [
    { // Haupt-LD+JSON für die Angebotsseite als CollectionPage
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: pageTitle,
      description: pageDescription,
      url: `${siteUrl}${route.path}`,
      inLanguage: 'de-DE',
      isPartOf: {
        '@type': 'WebSite',
        url: siteUrl,
        name: `Leben ist ein Ponyhof ${businessAddress.city}`,
      },
      publisher: {
        '@type': 'Organization',
        name: `Leben ist ein Ponyhof ${businessAddress.city}`,
        logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logos/logo.png` },
        telephone: config.public.businessAddress.telephone,
        address: {
            '@type': 'PostalAddress',
            streetAddress: businessAddress.street,
            addressLocality: businessAddress.city,
            postalCode: businessAddress.zip,
            addressCountry: businessAddress.country
        }
      },
      mainEntity: {
        '@type': 'ItemList',
        name: `Unsere Pony-Angebote in ${businessAddress.city}`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, item: baseOfferLd('Reittherapie & Heilpädagogisches Reiten', 'Pferdegestützte Förderung für Kinder (ab 2026)', '/blog/wirkung-reittherapie', undefined, '/images/Pferde/Therapie-mit-Ball.webp') },
          { '@type': 'ListItem', position: 2, item: baseOfferLd('Ponyreiten & Ausritte', 'Sicheres und geführtes Ponyreiten für Kinder', '/blog/ponyreiten', '25', '/images/ponyreiten/Napoleon-mit-Sattel.webp') },
          { '@type': 'ListItem', position: 3, item: baseOfferLd('Pony-Kindergeburtstage', 'Unvergessliche Geburtstagsfeiern mit Ponys', '/blog/kindergeburtstag', '120', '/images/Einhorn_Pinjata.webp') },
          { '@type': 'ListItem', position: 4, item: baseOfferLd('Shetty-Wanderung', 'Naturabenteuer mit unseren Shetlandponys für die Familie', '/blog/shetty-wanderung', '35', '/images/shetty-wanderung.jpeg') },
          { '@type': 'ListItem', position: 5, item: baseOfferLd('Zwergen-Wanderung (Mini Zwergen Bande)', 'Erster Ponykontakt für Kinder von 3-6 Jahren', '/blog/zwergen-bande', '30', '/images/mini-zwergenbande.webp') },
          { '@type': 'ListItem', position: 6, item: baseOfferLd('Ferienkurse mit Ponys', 'Spiel, Spaß und Lernen in den Schulferien', '/blog/ferienkurse', '149', '/images/blog/ferienkurse/Basteln_Hufeisen_copy.webp') },
        ],
      },
    },
    // Du könntest hier noch ein separates LD+JSON für 'SportsActivityLocation' hinzufügen,
    // wenn diese Seite auch als generelle Info über den Standort dienen soll.
    // Das globale in nuxt.config.ts deckt das aber schon gut ab.
  ]
})

const showInterest = ref(false)
const interestOffer = ref('')

const showInterestModal = (offerName: string) => {
  interestOffer.value = offerName
  showInterest.value = true
}
const closeInterestModal = () => {
  showInterest.value = false
}
const submitInterest = (formData: { name: string, email: string }) => {
  // Hier würde die Logik stehen, um das Interesse zu speichern/senden
  console.log(`Interesse für "${interestOffer.value}" vorgemerkt:`, formData)
  // alert(`Vielen Dank für Ihr Interesse an "${interestOffer.value}"! Wir werden Sie informieren.`)
  closeInterestModal()
}
</script>

<style scoped>
.page-header {
  @apply text-center py-10 md:py-14 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800/70 dark:to-gray-800/90;
  border-bottom: 1px solid theme('colors.gray.200');
}
.dark .page-header {
  border-bottom-color: theme('colors.gray.700');
}

.breadcrumb {
  @apply container mx-auto px-4 py-3.5 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800/30 border-b border-gray-200 dark:border-gray-700;
}
.breadcrumb ol {
  @apply list-none p-0 inline-flex items-center space-x-1.5;
}
.breadcrumb li:not(:last-child)::after {
  content: '›'; /* Geändert zu einem Pfeil */
  @apply ml-1.5 text-gray-400 dark:text-gray-500;
}
.breadcrumb a {
  @apply hover:text-primary-color dark:hover:text-primary-light transition-colors;
}
.breadcrumb li[aria-current='page'] {
  @apply font-medium text-gray-700 dark:text-gray-200;
}

/* Allgemeine Stile für offer-section und Preistabelle werden in den Komponenten selbst definiert */
</style>