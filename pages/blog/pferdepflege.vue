// pages/horses.vue
<script setup>
  import { ref } from 'vue'
  import { useHead } from '#imports'
  import { NuxtLink, NuxtImg } from '#components'
  import { useLightbox } from '~/composables/useLightbox'

  const lightbox = useLightbox()

  // Pferde-Daten mit kinderfreundlichen Beschreibungen und Fokus auf Pflege
const horses = ref([
  {
    name: 'Pferd Simon',
    slug: 'simon',
    image: '/images/Pferde/Simon.webp',
    width: 1280,
    height: 853,
    description:
      'Simon ist unser großer Kuschelbär! Er liebt es, wenn du sein weiches Fell striegelst und ihm Geschichten erzählst. Nur beim Springen ist er ein kleiner Angsthase.',
    lightboxCaption:
      'Simon – Ein sanfter Riese, der ausgiebige Putz- und Schmuseeinheiten genießt.',
  },
  {
    name: 'Pferd Balu',
    slug: 'balu',
    image: '/images/Pferde/Balu.webp',
    width: 1920,
    height: 1280,
    description:
      'Balu ist Simons bester Freund und ein echter Fels in der Brandung. Nach einem Ausritt freut er sich riesig über eine erfrischende Dusche und saubere Hufe.',
    lightboxCaption:
      'Balu – Unser zuverlässiger Freund, der sich nach dem Reiten gerne verwöhnen lässt.',
  },
  {
    name: 'Shetty Napoleon',
    slug: 'napoleon',
    image: '/images/Pferde/Napoleon.webp',
    width: 1536,
    height: 2048,
    description:
      'Unser Napoleon ist ein super schlauer Frechdachs! Er zeigt dir gerne, wie man Türen öffnet (wenn er Leckerlis dafür kriegt) und liebt es, wenn seine wilde Mähne gekämmt wird.',
    lightboxCaption: 'Napoleon – Der pfiffige Ausbrecherkönig, der für Leckerlis fast alles tut!',
  },
  {
    name: 'Shetty Coco',
    slug: 'coco',
    image: '/images/Pferde/Coco.webp',
    width: 1200,
    height: 900,
    description:
      'Coco ist die Ruhe selbst. Sie schnarcht manchmal leise beim Putzen und genießt jede Streicheleinheit. Ihre Mähne zu flechten macht besonders viel Spaß!',
    lightboxCaption: 'Coco – Unsere entspannte Shetty-Dame, die jede Zuwendung liebt.',
  },
  {
    name: 'Shetty Chica',
    slug: 'chica',
    image: '/images/Pferde/Chica.webp',
    width: 1000,
    height: 750,
    description:
      'Chica ist ein richtiges Energiebündel und lernt super gerne neue Tricks. Beim Striegeln kitzelt sie manchmal ein bisschen, aber sie ist ganz lieb dabei.',
    lightboxCaption: 'Chica – Unsere neugierige und trickreiche Spielkameradin.',
  },
  {
    name: 'Shetty Pucki',
    slug: 'pucki',
    image: '/images/Pferde/Pucki.webp',
    width: 1600,
    height: 1200,
    description:
      'Pucki ist unser flauschigster Freund und ein echter Schlaumeier. Er trägt gerne seine Futterschüssel herum und liebt es, wenn man ihm den dicken Winterpelz ausbürstet.',
    lightboxCaption: 'Pucki – Der schlaue Knuddelbär, der sich über liebevolle Pflege freut.',
  },
  {
    name: 'Pferd Fiona',
    slug: 'fiona',
    image: '/images/Pferde/Fiona.webp',
    width: 1700,
    height: 1133,
    description:
      'Fiona ist unsere sanfte Tinker-Stute. Sie hat wunderschöne lange Haare an den Beinen, die besondere Pflege brauchen. Sie ist dabei immer ganz brav und geduldig.',
    lightboxCaption: 'Fiona – Unsere geduldige Tinker-Schönheit mit prächtigem Behang.',
  },
  {
    name: 'Shetty Sleepy',
    slug: 'sleepy',
    image: '/images/Pferde/Sleepy.webp',
    width: 1400,
    height: 1050,
    description:
      'Sleepy macht seinem Namen manchmal alle Ehre und döst gerne in der Sonne. Aber für eine ausgiebige Bürstenmassage oder ein Leckerli ist er immer zu haben!',
    lightboxCaption: 'Sleepy – Unser entspannter Genießer, der Streicheleinheiten liebt.',
  },
])


  // useHead bleibt gleich wie in deiner vorherigen Version für horses.vue
  useHead({
    title: 'Unsere Pferde & Ponys | Leben ist ein Ponyhof',
    meta: [
      {
        name: 'description',
        content:
          'Lerne unsere Pferde & Ponys kennen! Simon, Balu, Napoleon und viele mehr – entdecke ihre einzigartigen Charaktere und wie du bei ihrer Pflege helfen kannst.',
      }, // Angepasst
      {
        name: 'keywords',
        content:
          'Pferde, Ponys, Pferdepflege Kinder, Simon, Balu, Napoleon, Coco, Chica, Pucki, Fiona, Sleepy, Shetlandpony, Tinker, Pferdepersönlichkeiten, Pferdesteckbrief',
      }, // Angepasst
      { property: 'og:title', content: 'Unsere Pferde & Ponys | Leben ist ein Ponyhof' },
      {
        property: 'og:image',
        content: 'https://lebenisteinponyhof.de/images/Pferde/Simon.webp',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'canonical', href: 'https://lebenisteinponyhof.de/horses' }],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Unsere Pferde & Ponys',
          description:
            'Lerne die Pferde und Ponys von Leben ist ein Ponyhof kennen, die Kinder bei der Pflege und im Umgang mit Tieren begleiten.', // Angepasst
          url: 'https://lebenisteinponyhof.de/horses',
          mainEntity: horses.value.map((horse) => ({
            '@type': 'Person', // Oder spezifischer, wenn Schema.org eine "Pet" oder "Animal" Entität besser unterstützt
            name: horse.name,
            description: horse.description,
            image: `https://lebenisteinponyhof.de${horse.image}`,
          })),
        }),
      },
    ],
  })
</script>

<template>
  <!-- Das Template für pages/horses.vue bleibt strukturell gleich wie in der vorherigen Antwort.
       Es verwendet die oben definierten `horses`-Daten in der v-for Schleife.
       Stelle sicher, dass die <NuxtImg> Komponente die Props :width="horse.width" und :height="horse.height" verwendet.
  -->
  <div>
    <section
      class="page-header py-10 md:py-16 bg-gray-100 dark:bg-gray-800 text-center border-b border-gray-200 dark:border-gray-700"
    >
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Unsere Pferde & Ponys</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Entdecke die einzigartigen Persönlichkeiten unserer geliebten Vierbeiner und erfahre, wie du
        bei ihrer Pflege helfen kannst!
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
          Unsere Pferde
        </li>
      </ol>
    </nav>

    <section class="horses container mx-auto px-4 py-8 md:py-12">
      <div class="horses-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="horse in horses"
          :key="horse.name"
          class="horse-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden text-center transform hover:-translate-y-1.5 transition-transform duration-300 flex flex-col"
        >
          <NuxtImg
            :src="horse.image"
            :alt="'Bild von ' + horse.name"
            :width="horse.width"
            :height="horse.height"
            format="webp"
            quality="75"
            loading="lazy"
            densities="1x 2x"
            sizes="sm:100vw md:50vw lg:33vw"
            class="w-full h-64 object-cover cursor-pointer"
            @click="lightbox.open(horse.image, horse.lightboxCaption || horse.name)"
          />
          <div class="p-5 flex flex-col flex-grow">
            <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {{ horse.name }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 flex-grow min-h-[4.5em]">
              {{ horse.description }}
            </p>
            {/* min-h leicht erhöht für potenziell längere Texte */} {/*
            <AppButton
              :to="`/pferde/${horse.slug}`"
              size="sm"
              variant="outline-primary"
              class="mt-4 self-center"
              >Mehr über {{ horse.name.split(' ')[1] || horse.name }}</AppButton
            >
            */}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

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
    /* min-height: 130px;  Wird jetzt durch min-h-[4.5em] in Tailwind-Klasse oben gesteuert */
  }
  .min-h-\[4\.5em\] {
    /* Stellt sicher, dass diese Klasse vorhanden ist oder generiert wird */
    min-height: 4.5em;
  }
</style>
