<template>
  <div>
    <section
        class="page-header py-10 md:py-16 bg-gray-100 dark:bg-gray-800 text-center border-b border-gray-200 dark:border-gray-700"
    >
      <h1 class="text-3xl md:text-4xl font-bold mb-2">
        Unsere Pferde & Ponys in {{ businessAddress.city }}
      </h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Lernt die vierbeinigen Stars unseres Ponyhofs in {{ businessAddress.city }} kennen! Entdeckt
        ihre einzigartigen Persönlichkeiten und erfahrt, wie ihr bei ihrer täglichen Pflege helfen
        und eine wunderbare Zeit beim
        <strong>Ponyreiten in {{ businessAddress.city }}</strong> verbringen könnt.
      </p>
    </section>

    <nav
        aria-label="Breadcrumb"
        class="breadcrumb bg-gray-200 dark:bg-gray-700 py-2 px-4 text-sm text-gray-600 dark:text-gray-400 container mx-auto my-4 rounded"
    >
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center">
          <NuxtLink to="/" class="hover:text-primary-color">Startseite</NuxtLink>
          <span class="mx-2">›</span>
        </li>
        <li
            class="flex items-center text-gray-500 dark:text-gray-500 font-semibold"
            aria-current="page"
        >
          Unsere Pferde in {{ businessAddress.city }}
        </li>
      </ol>
    </nav>

    <section class="horses container mx-auto px-4 py-8 md:py-12">
      <p
          class="text-center text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
      >
        Jedes unserer Pferde und Ponys hat seinen ganz eigenen Kopf und unendlich viel Charme. Bei
        uns auf dem Hof in <strong>{{ businessAddress.city }}</strong> lernt ihr nicht nur, wie man
        sicher die ersten Runden beim <strong>Ponyreiten</strong> dreht, sondern auch, wie man ein
        Pony liebevoll striegelt, ihm aufmerksam zuhört und seine Bedürfnisse erkennt. Die
        gemeinsame Zeit bei der Pflege ist oft genauso wertvoll wie das Reiten selbst und stärkt die
        wunderbare Bindung zwischen Mensch und Tier. Kommt vorbei zum
        <strong>Ponyreiten in {{ businessAddress.city }}</strong> und werdet Freunde mit Simon,
        Balu, Napoleon & Co.!
      </p>
      <div class="horses-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="horse in horses"
            :key="horse.slug"
            class="horse-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden text-center transform hover:-translate-y-1.5 transition-transform duration-300 flex flex-col"
        >
          <NuxtImg
              :src="horse.image"
              :alt="`${horse.name} - unser ${horse.name.toLowerCase().includes('shetty') ? 'Shetty' : 'Pferd'} für Ponyreiten in ${businessAddress.city}`"
              :width="horse.imageWidth || 400"
              :height="horse.imageHeight || 300"
              class="w-full h-64 object-cover cursor-pointer"
              @click="
              lightbox.open(
                horse.image,
                horse.lightboxCaption ||
                  `Lerne ${horse.name} beim Ponyreiten in ${businessAddress.city} kennen!`
              )
            "
              format="webp"
              quality="75"
              loading="lazy"
              densities="1x 2x"
              sizes="sm:100vw md:50vw lg:33vw"
          />
          <div class="p-5 flex flex-col flex-grow">
            <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {{ horse.name }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 flex-grow min-h-[7em]">
              {{ horse.description }}
            </p>
            <div
                v-if="horse.gallery && horse.gallery.length > 0"
                class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700"
            >
              <button
                  @click="openHorseGallery(horse)"
                  class="text-sm text-primary-color hover:underline font-medium flex items-center justify-center mx-auto group"
              >
                <i
                    class="fas fa-images mr-2 transition-transform duration-300 group-hover:scale-110"
                ></i>
                Bildergalerie von {{ horse.name.split(' ')[1] || horse.name }}
              </button>
            </div>
            <NuxtLink
                v-else-if="horse.slug && !(horse.gallery && horse.gallery.length > 0)"
                :to="`/pferde/${horse.slug}`"
                class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 text-primary-color hover:underline text-sm font-medium"
            >
              Mehr über {{ horse.name.split(' ')[1] || horse.name }}
              <i class="fas fa-arrow-right text-xs"></i>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <AppButton :to="{ path: '/angebote', hash: '#ponyreiten' }" variant="primary" size="lg">
          Jetzt Ponyreiten in {{ businessAddress.city }} erleben!
        </AppButton>
      </div>
    </section>

    <!-- Allgemeine Pferde-Galerie -->
    <HorseImageGallery
        :images="generalHorseGallery"
        :horseName="`unseren Pferden und Ponys in ${businessAddress.city}`"
        class="container mx-auto px-4 pb-12"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead, useRuntimeConfig } from '#imports'
import { useLightbox } from '~/composables/useLightbox'
import AppButton from '~/components/AppButton.vue'
import HorseImageGallery from '~/components/HorseImageGallery.vue'
import { horses as horsesData } from '~/data/horses.js'

const lightbox = useLightbox()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const businessAddress = config.public.businessAddress

const horses = ref(horsesData)

// Allgemeine Galerie mit den Bildern aus der Shetty-Wanderung (ohne Chica-Rucksack)
const generalHorseGallery = ref([
  {
    src: '/images/galerie/Napoleon_Kranz.webp',
    alt: `Festlich geschmücktes Shetty in der Reithalle in ${businessAddress.city}`,
    width: 800,
    height: 1000,
    caption: 'Auch im Winter ein Spaß: Weihnachts-Shetty',
  },
  {
    src: '/images/galerie/Kylo_Weihnachten.webp',
    alt: `Kylo mit Weihnachtsmütze in der Reithalle in ${businessAddress.city}`,
    width: 700,
    height: 900,
    caption: 'Gut eingepackt für kühle Tage',
  },
  {
    src: '/images/galerie/Pucki_Sulky.webp',
  
    alt: `Sarah fährt mit einem Shetty und Kutsche in der Umgebung von ${businessAddress.city}`,
    width: 900,
    height: 650,
    caption: 'Manchmal gehts auch mit der Kutsche los!',
  },
  {
    src: '/images/galerie/Napoleon_verpackt.webp',
    alt: `Lustig verkleidetes Shetty als Geschenkpaket für eine Veranstaltung in ${businessAddress.city}`,
    width: 1000,
    height: 600,
    caption: 'Ein Pony als Überraschung',
  },
  {
    src: '/images/galerie/Sleepy_Haareschneiden.webp',
    alt: `Nahaufnahme eines schwarzen Shetlandponys mit Halfter in ${businessAddress.city}`,
    width: 750,
    height: 1000,
    caption: 'Sanfter Blick eines unserer Shettys',
  },
  {
    src: '/images/blog/shetty-wanderung/Chica_mit_Rucksack_2.webp',
    alt: `Zwei Shetlandponys mit Packtaschen grasen auf einer Wiese bei ${businessAddress.city}`,
    width: 1200,
    height: 800,
    caption: 'Picknickpause auf der Wanderung',
  },
])

const openHorseGallery = (horse) => {
  if (horse.gallery && horse.gallery.length > 0) {
    const lightboxItems = horse.gallery.map((img) => ({
      src: img.src,
      caption: img.caption || img.alt,
    }))
    lightbox.openGallery(lightboxItems, 0)
  }
}

const pageTitleForHead = `Unsere Pferde & Ponys für Ponyreiten in ${businessAddress.city}`
const pageDescriptionForHead = `Lernen Sie unsere lieben Pferde und Ponys kennen! Perfekte Partner für unvergessliches Ponyreiten, Kindergeburtstage und Reittherapie in ${businessAddress.city}.`
const ogImageForHead = `${siteUrl}/images/og-unsere-pferde-renningen.webp`
const canonicalUrl = `${siteUrl}/horses`

useHead({
  title: 'Unsere Pferde & Ponys | Leben ist ein Ponyhof',
  meta: [
    {
      name: 'description',
      content:
          'Lerne unsere Pferde & Ponys kennen! Simon, Balu, Napoleon und viele mehr – entdecke ihre einzigartigen Charaktere und Geschichten auf dem Ponyhof.',
    },
    {
      name: 'keywords',
      content:
          'Pferde, Ponys, Simon, Balu, Napoleon, Coco, Chica, Pucki, Fiona, Sleepy, Shetlandpony, Tinker, Pferdepersönlichkeiten, Pferdesteckbrief',
    },
    { property: 'og:title', content: 'Unsere Pferde & Ponys | Leben ist ein Ponyhof' },
    {
      property: 'og:image',
      content: 'https://lebenisteinponyhof.de/images/Pferde/webp/Simon.webp',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'canonical', href: 'https://lebenisteinponyhof.de/horses' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Unsere Pferde & Ponys',
        description: 'Lerne die Pferde und Ponys von Leben ist ein Ponyhof kennen.',
        url: 'https://lebenisteinponyhof.de/horses',
        mainEntity: horses.value.map((horse) => ({
          '@type': 'Person',
          name: horse.name,
          description: horse.description,
          image: `https://lebenisteinponyhof.de${horse.image}`,
        })),
      }),
    },
  ],
})
</script>

<style scoped>
.horse-card {
  box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.dark .horse-card {
  box-shadow:
      0 4px 6px -1px rgba(255, 255, 255, 0.05),
      0 2px 4px -2px rgba(255, 255, 255, 0.05);
}

.horse-card .p-5 {
  min-height: 130px;
}
</style>