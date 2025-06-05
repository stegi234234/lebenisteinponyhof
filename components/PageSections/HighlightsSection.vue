<!-- components/PageSections/HighlightsSection.vue -->
<template>
  <section
    class="highlights-section py-12 md:py-16 bg-gray-100 dark:bg-gray-900/40"
    :aria-labelledby="customHeadingId || 'highlights-heading'"
  >
    <div class="container mx-auto px-4 text-center">
      <div class="section-header mb-10 md:mb-12">
        <span
          v-if="!hideSupertitle"
          class="uppercase tracking-wider text-primary-color dark:text-primary-light text-xs sm:text-sm font-semibold"
        >
          {{ supertitle || `Unsere Pony-Erlebnisse in ${businessAddress.city}` }}
        </span>
        <h2
          :id="customHeadingId || 'highlights-heading'"
          class="text-2xl md:text-3xl font-bold mt-1.5 mb-3 text-gray-800 dark:text-white"
        >
          {{ title || `Weitere spannende Angebote in ${businessAddress.city}` }}
        </h2>
        <p
          v-if="description"
          class="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed"
        >
          {{ description }}
        </p>
      </div>

      <div v-if="currentHighlights.length > 0" class="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <HighlightCard
          v-for="highlight in currentHighlights"
          :key="highlight.title"
          :imgSrc="highlight.imgSrc"
          :altText="highlight.altText"
          :teaserText="highlight.teaserText"
          :title="highlight.title"
          :description="highlight.description"
          :link="highlight.link"
          :linkText="highlight.linkText"
          :imageWidth="highlight.imageWidth"
          :imageHeight="highlight.imageHeight"
          :placeholderImg="highlight.placeholderImg || '/images/card-placeholder-4-3.webp'"
        />
      </div>
      <div v-else class="text-gray-500 dark:text-gray-400 py-8">
        <p class="text-lg">Momentan gibt es hier keine weiteren spezifischen Empfehlungen.</p>
        <p class="text-sm mt-2">Schauen Sie bald wieder vorbei oder entdecken Sie <NuxtLink to="/angebote" class="text-primary-color hover:underline">alle unsere Angebote</NuxtLink>.</p>
      </div>

      <div v-if="showViewAllButton && currentHighlights.length > 0" class="mt-10 md:mt-12">
        <AppButton :to="{ path: '/angebote' }" variant="primary" size="lg">
          Alle Angebote in {{ businessAddress.city }} ansehen <i class="fas fa-chevron-right ml-2"></i>
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import HighlightCard from '~/components/HighlightCard.vue';
import AppButton from '~/components/AppButton.vue';
import { NuxtLink } from '#components'; // NuxtLink für den Fallback-Text
import { useRuntimeConfig } from '#app';
import type { RouteLocationRaw } from 'vue-router';

// Interface für ein einzelnes Highlight-Item, passend zur HighlightCard Komponente
interface HighlightItem {
  imgSrc: string;
  altText: string;
  teaserText?: string;
  title: string;
  description: string;
  link: RouteLocationRaw;
  linkText?: string;
  imageWidth?: number;
  imageHeight?: number;
  placeholderImg?: string | boolean;
  slug?: string; // Optionaler Slug zur Identifizierung
}

// Props für die HighlightsSection Komponente
const props = defineProps<{
  supertitle?: string;
  title?: string;
  description?: string;
  customHeadingId?: string;
  hideSupertitle?: boolean;
  highlightItems?: HighlightItem[]; // Für spezifische Highlights von außen
  showViewAllButton?: boolean;    // Um den "Alle Angebote" Button zu steuern
  excludeSlug?: string;           // Um ein bestimmtes Angebot auszuschließen (z.B. das aktuelle)
  maxItems?: number;              // Maximale Anzahl an Karten, die angezeigt werden sollen
}>();

const config = useRuntimeConfig();
const businessAddress = config.public.businessAddress;

// Standard-Highlights, die als Fallback oder für die Startseite dienen könnten
// WICHTIG: Ersetze die PLATZHALTER-Pfade mit deinen tatsächlichen Bildpfaden!
const allPossibleHighlights: Record<string, HighlightItem> = {
  ponyreiten: {
    slug: 'ponyreiten',
    imgSrc: "/images/cards/ponyreiten-teaser.webp",
    altText: `Kind beim geführten Ponyreiten in ${businessAddress.city}`,
    teaserText: "Sicher im Sattel",
    title: `Ponyreiten in ${businessAddress.city}`,
    description: `Erste Reiterfahrungen sammeln, Ausritte genießen oder individuelle Förderung – Spaß und Sicherheit für kleine Pferdefreunde in ${businessAddress.city}.`,
    link: { path: '/angebote', hash: '#ponyreiten' },
    linkText: "Mehr zum Ponyreiten",
    imageWidth: 400, imageHeight: 300
  },
  kindergeburtstag: {
    slug: 'kindergeburtstag',
    imgSrc: "/images/cards/kindergeburtstag-teaser.webp",
    altText: `Fröhliche Kinder feiern einen Pony-Geburtstag in ${businessAddress.city}`,
    teaserText: "Die beste Party!",
    title: `Kindergeburtstage in ${businessAddress.city}`,
    description: `Ein unvergesslicher Tag mit Ponys, Spielen und Basteln. Das Highlight für jedes Geburtstagskind in der Region ${businessAddress.city}.`,
    link: { path: '/blog/kindergeburtstag' },
    linkText: "Infos zum Pony-Geburtstag",
    imageWidth: 400, imageHeight: 300
  },
  ferienkurse: {
    slug: 'ferienkurse',
    imgSrc: "/images/cards/ferienkurs-teaser.webp",
    altText: `Kinder haben Spaß im Ferienkurs auf dem Ponyhof in ${businessAddress.city}`,
    teaserText: "Ferien-Abenteuer",
    title: `Ferienkurse (${businessAddress.city})`,
    description: `Spielerisch Pferde verstehen, Natur erleben und neue Freunde finden. Unsere Ferienkurse in ${businessAddress.city} sind voller Spaß und Lernen.`,
    link: { path: '/blog/ferienkurse' },
    linkText: "Details & Termine",
    imageWidth: 400, imageHeight: 300
  },
  reittherapie: {
    slug: 'reittherapie',
    imgSrc: "/images/cards/reittherapie-teaser.webp",
    altText: `Kind in der pferdegestützten Therapie in ${businessAddress.city}`,
    teaserText: "Förderung mit Herz",
    title: `Reittherapie (bald in ${businessAddress.city})`,
    description: `Individuelle pferdegestützte Förderung zur Stärkung von Körper und Seele. Unser Angebot startet bald in ${businessAddress.city}.`,
    link: { path: '/angebote', hash: '#reittherapie' },
    linkText: "Mehr erfahren",
    imageWidth: 400, imageHeight: 300
  },
  'shetty-wanderung': {
    slug: 'shetty-wanderung',
    imgSrc: "/images/cards/shetty-wanderung-teaser.webp",
    altText: `Familie bei einer Shetty-Wanderung in ${businessAddress.city}`,
    teaserText: "Natur pur erleben",
    title: `Shetty-Wanderung in ${businessAddress.city}`,
    description: `Entdecken Sie die Umgebung von ${businessAddress.city} an der Hand unserer charmanten Shetlandponys. Ein tierisch schöner Ausflug.`,
    link: { path: '/blog/shetty-wanderung' },
    linkText: "Zur Shetty-Wanderung",
    imageWidth: 400, imageHeight: 300
  },
  'zwergen-bande': {
    slug: 'zwergen-bande',
    imgSrc: "/images/cards/zwergenbande-teaser.webp",
    altText: `Kleinkinder mit Mini-Shettys in ${businessAddress.city}`,
    teaserText: "Für die Kleinsten",
    title: `Mini Zwergen Bande (${businessAddress.city})`,
    description: `Spielerischer erster Ponykontakt für Kinder von 3-6 Jahren. Putzen, führen und kuscheln mit unseren sanften Mini-Shettys.`,
    link: { path: '/blog/zwergen-bande' },
    linkText: "Zur Zwergen Bande",
    imageWidth: 400, imageHeight: 300
  },
};

const currentHighlights = computed(() => {
  let itemsToDisplay: HighlightItem[];

  if (props.highlightItems && props.highlightItems.length > 0) {
    itemsToDisplay = props.highlightItems;
  } else {
    // Filtere basierend auf excludeSlug aus allen möglichen Highlights
    itemsToDisplay = Object.entries(allPossibleHighlights)
      .filter(([slug]) => slug !== props.excludeSlug)
      .map(([, item]) => item);
  }

  // Limitiere auf maxItems, falls gesetzt, ansonsten Standard (z.B. 3 oder 4)
  const limit = props.maxItems || (props.excludeSlug ? 3 : 4); // Wenn exkludiert, zeige 3 "andere", sonst vielleicht 4 auf Startseite
  return itemsToDisplay.slice(0, limit);
});

</script>

<style scoped>
.highlights-section {
  /* Du könntest hier einen subtilen Hintergrund-Pattern oder eine Textur hinzufügen,
     um die Sektion optisch etwas vom Standard-Hintergrund abzuheben. */
}

.section-header {
  /* Stellt sicher, dass der Header genügend Raum hat */
}

.cards-container {
  /* Das Grid-Layout von Tailwind ist hier schon sehr effektiv.
     Keine zusätzlichen Styles sind unbedingt nötig, es sei denn,
     du möchtest spezifische Effekte für die Kartenreihe als Ganzes. */
}

/* XL-Grid Anpassung, falls gewünscht (aus deinem vorherigen Code übernommen) */
@media (min-width: 1280px) { /* Tailwind's xl breakpoint */
  .cards-container.xl\:grid-cols-4 .highlight-card-link {
    /* Wenn du bei 4 Spalten die Karten individuell anpassen müsstest.
       Normalerweise nicht nötig, wenn die HighlightCard selbst responsiv ist. */
  }
}
</style>