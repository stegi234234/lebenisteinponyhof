<template>
  <div v-if="horse">
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">{{ horse.name }}</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Lerne {{ horse.name.split(' ')[1] || horse.name }} besser kennen!
      </p>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li><NuxtLink to="/horses">Unsere Pferde</NuxtLink></li>
        <li aria-current="page">{{ horse.name }}</li>
      </ol>
    </nav>

    <article
      class="content container mx-auto max-w-3xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-1/2">
          <!-- KORRIGIERTES NuxtImg TAG -->
          <NuxtImg
            :src="horse.image"
            :alt="`Bild von ${horse.name}`"
            :width="horse.imageWidth || 800"
            :height="horse.imageHeight || 600"
            format="webp"
            quality="80"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
            densities="1x 2x"
            @click="lightbox.open(horse.image, horse.lightboxCaption || horse.name)"
          />
          <!-- HTML-Kommentare wären hier, außerhalb des Tags, OK: -->
          <!-- Fallback-Breite: 800px, Fallback-Höhe: 600px -->
        </div>
        <div class="md:w-1/2 prose dark:prose-invert">
          <h2 class="text-2xl font-semibold mb-4 !mt-0">{{ horse.name }} im Detail</h2>
          <p>{{ horse.description }}</p>
          <!-- Hier könnten weitere Details zum Pferd stehen -->
          <!--
          <h3>Steckbrief:</h3>
          <ul>
            <li><strong>Rasse:</strong> {{ horse.breed || 'Unbekannt' }}</li>
            <li><strong>Alter:</strong> {{ horse.age || 'Unbekannt' }} Jahre</li>
            <li><strong>Besonderheiten:</strong> {{ horse.specialNotes || 'Keine speziellen Notizen' }}</li>
          </ul>
          -->
          <p class="mt-6">
            Komm vorbei und lerne {{ horse.name.split(' ')[0] }} persönlich auf unserem Ponyhof in
            Renningen kennen! Wir bieten
            <NuxtLink to="/angebote#ponyreiten" class="text-primary-color hover:underline"
              >Ponyreiten</NuxtLink
            >
            und viele weitere
            <NuxtLink to="/angebote" class="text-primary-color hover:underline">Angebote</NuxtLink>
            für Kinder.
          </p>
        </div>
      </div>

      <div class="mt-12 text-center">
        <AppButton :to="{ path: '/horses' }" variant="outline-primary">
          <i class="fas fa-arrow-left mr-2"></i> Zurück zur Pferdeübersicht
        </AppButton>
      </div>
    </article>
  </div>
  <div v-else class="text-center py-16">
    <h1 class="text-2xl font-semibold">Pferd nicht gefunden</h1>
    <p class="text-gray-600 dark:text-gray-400 mt-4">
      Dieses Pferd konnten wir leider nicht finden.
      <NuxtLink to="/horses" class="text-primary-color hover:underline"
        >Zurück zur Übersicht.</NuxtLink
      >
    </p>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute, showError, useRuntimeConfig } from '#app'
  import { useHead } from '#imports'
  import { NuxtLink, NuxtImg } from '#components'
  import { useLightbox } from '~/composables/useLightbox'
  import AppButton from '~/components/AppButton.vue'
  // KORRIGIERTER IMPORT: Nur 'horses' importieren, wenn 'Horse' direkt in dieser Datei definiert wird
  // oder 'Horse' muss in 'data/horses.ts' exportiert werden.
  import { horses } from '~/data/horses' // Importiere die Daten
  import type { Horse } from '~/data/horses' // Importiere den Typ explizit, wenn er in data/horses.ts exportiert wird

  const lightbox = useLightbox()
  const route = useRoute()
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl

  const horse = computed<Horse | undefined>(() => {
    return horses.find((h) => h.slug === route.params.slug)
  })

  if (!horse.value) {
    showError({ statusCode: 404, statusMessage: 'Pferd nicht gefunden', fatal: true })
  }

  // SEO für die Detailseite (useHead bleibt gleich wie zuvor)
  useHead(() => {
    if (!horse.value) return {}

    const title = `${horse.value.name} | Unsere Pferde | Leben ist ein Ponyhof Renningen`
    const description = `Lerne ${horse.value.name} kennen: ${horse.value.description.substring(0, 150)}... Erlebe Ponyreiten und mehr in Renningen.`
    const imageUrl = `${siteUrl}${horse.value.image}`
    const pageUrl = `${siteUrl}${route.fullPath}`

    return {
      title,
      meta: [
        { name: 'description', content: description },
        {
          name: 'keywords',
          content: `${horse.value.name}, Pferd, Pony, ${horse.value.slug}, Ponyhof Renningen, Ponyreiten Renningen`,
        },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: imageUrl },
        { property: 'og:url', content: pageUrl },
        { property: 'og:type', content: 'profile' },
        { property: 'profile:first_name', content: horse.value.name.split(' ')[0] },

        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: imageUrl },
      ],
      link: [{ rel: 'canonical', href: pageUrl }],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'IndividualProduct',
            name: horse.value.name,
            description: horse.value.description,
            image: imageUrl,
            url: pageUrl,
            offers: {
              '@type': 'Offer',
              priceCurrency: 'EUR',
              price: '0',
              availability: 'https://schema.org/InStock',
              url: `${siteUrl}/angebote`,
            },
            subjectOf: {
              '@type': 'Organization',
              name: 'Leben ist ein Ponyhof Renningen',
              url: siteUrl,
            },
          }),
        },
      ],
    }
  })
</script>

<style scoped>
  /* Stile bleiben gleich */
  .page-header,
  .breadcrumb,
  .content {
  }
</style>
