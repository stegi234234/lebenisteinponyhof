<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">
        Unser Pferde- & Pony-Blog aus {{ businessAddress.city }}
      </h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Aktuelle Beiträge, wertvolle Tipps rund ums
        <strong>Ponyreiten in {{ businessAddress.city }}</strong
        >, Erfahrungen und Einblicke hinter die Kulissen unseres Pony-Alltags.
      </p>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li aria-current="page">Ponyhof-Blog {{ businessAddress.city }}</li>
      </ol>
    </nav>

    <section class="blog-list-section container mx-auto px-4 py-8 md:py-12">
      <div v-if="sortedBlogPosts && sortedBlogPosts.length > 0" class="space-y-10 md:space-y-12">
        <article
          v-for="post in sortedBlogPosts"
          :key="post.slug"
          class="blog-post-item group flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <NuxtLink
            :to="`/blog/${post.slug}`"
            class="md:w-1/3 lg:w-1/4 flex-shrink-0 block rounded-lg overflow-hidden"
          >
            <NuxtImg
              :src="post.previewImage"
              :alt="post.imageAlt || `Vorschaubild für den Blog-Beitrag: ${post.title}`"
              :width="post.imageWidth || 400"
              :height="post.imageHeight || 267"
              class="w-full h-48 md:h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              format="webp"
              quality="75"
              loading="lazy"
              placeholder
              densities="1x 2x"
              sizes="(max-width: 767px) 100vw, md:33vw"
            />
          </NuxtLink>

          <div class="flex-1 flex flex-col">
            <div>
              <!-- Wrapper für den oberen Textteil, damit der Button unten bleibt -->
              <NuxtLink :to="`/blog/${post.slug}`">
                <h2
                  class="text-xl lg:text-2xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-primary-color dark:group-hover:text-primary-light transition-colors"
                >
                  {{ post.title }}
                </h2>
              </NuxtLink>
              <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">
                <i class="far fa-calendar-alt mr-1.5"></i> Veröffentlicht am
                {{ formatDate(post.date) }}
                <span v-if="post.readTime" class="mx-1.5 text-gray-300 dark:text-gray-600">|</span>
                <i v-if="post.readTime" class="far fa-clock mr-1.5"></i>
                <span v-if="post.readTime">{{ post.readTime }}</span>
              </p>
              <p
                class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3 md:line-clamp-4"
              >
                {{ post.excerpt }}
              </p>
            </div>
            <div class="mt-auto pt-2">
              <!-- mt-auto pusht den Button nach unten -->
              <AppButton
                :to="`/blog/${post.slug}`"
                size="sm"
                variant="outline-primary"
                class="group-hover:bg-primary-color/5 dark:group-hover:bg-primary-light/5"
              >
                Beitrag lesen
                <i
                  class="fas fa-arrow-right text-xs ml-1.5 transform transition-transform duration-300 group-hover:translate-x-1"
                ></i>
              </AppButton>
            </div>
          </div>
        </article>
      </div>
      <div v-else class="text-center py-16">
        <p class="text-xl text-gray-500 dark:text-gray-400 mb-6">
          Unser Ponyhof-Blog aus {{ businessAddress.city }} steckt noch in den Kinderschuhen!
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-8">
          Schauen Sie bald wieder vorbei für spannende Geschichten, Tipps rund ums Ponyreiten und
          Neuigkeiten von unserem Hof.
        </p>
        <NuxtImg
          src="/images/Pferde/Finn_fancy.webp"
          alt="Pony Finn wartet neugierig auf neue Blogeinträge"
          width="200"
          height="200"
          class="mx-auto mt-8 opacity-80 rounded-full shadow-md"
          format="webp"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useRuntimeConfig } from '#app' // useRuntimeConfig für businessAddress
  import { useMySeoMeta } from '~/composables/useMySeoMeta' // Unser SEO Composable
  import { NuxtLink, NuxtImg } from '#components'
  import AppButton from '~/components/AppButton.vue'
  import dayjs from 'dayjs'
  import 'dayjs/locale/de'
  import relativeTime from 'dayjs/plugin/relativeTime'

  dayjs.locale('de')
  dayjs.extend(relativeTime)

  const config = useRuntimeConfig()
  const businessAddress = config.public.businessAddress
  const siteUrl = config.public.siteUrl

  const pageTitle = `Ponyhof-Blog aus ${businessAddress.city}: Tipps & Neues vom Ponyreiten`
  const pageDescription = `Aktuelle Beiträge, wertvolle Tipps zum Ponyreiten in ${businessAddress.city}, Erfahrungen und Einblicke hinter die Kulissen unseres Pony-Alltags.`
  const pageKeywords = `Ponyhof Blog ${businessAddress.city}, Ponyreiten ${businessAddress.city} Blog, Pferdeblog ${businessAddress.city}, Reittipps Kinder, Stallgeschichten ${businessAddress.city}, Pferdepflege Tipps`

  useMySeoMeta({
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    ogImage: `${siteUrl}/images/og-blog-uebersicht.webp`, // **ERSTELLE DIESES BILD!**
    ogImageAlt: `Blog vom Leben ist ein Ponyhof in ${businessAddress.city} mit Tipps zum Ponyreiten`,
    ogType: 'website', // Da es eine Übersichtsseite ist
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'Blog', // Spezifischer Typ für eine Blog-Übersichtsseite
      name: pageTitle,
      description: pageDescription,
      url: `${siteUrl}/blog`,
      publisher: {
        '@type': 'Organization',
        name: `Leben ist ein Ponyhof ${businessAddress.city}`,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/images/logos/favicon.svg`,
        },
      },
      // Die einzelnen blogPosts werden idealerweise über 'hasPart' oder 'blogPost' hier verlinkt,
      // oder jede Blog-Detailseite hat ein 'isPartOf' auf diese Blog-Seite.
      // Für den Anfang ist das obige Schema gut.
    },
  })

  // Blog-Post Daten (aktualisiert und mit den neuen Posts)
  const blogPosts = ref([
    {
      slug: 'foerderung-kinder-ponyreiten-renningen',
      title: `Mehr als nur Spaß: Wie Ponyreiten in ${businessAddress.city} die Entwicklung fördert`,
      date: '2024-08-12',
      excerpt: `Erfahren Sie, wie Ponyreiten in ${businessAddress.city} nicht nur Freude bereitet, sondern auch Selbstvertrauen, Motorik und soziale Kompetenzen bei Kindern nachhaltig stärkt.`,
      previewImage: '/images/Pferde/Therapie-mit-Ball.webp',
      imageAlt: `Positive Förderung durch Ponyreiten für Kinder in ${businessAddress.city}`,
      imageWidth: 400,
      imageHeight: 600,
      readTime: 'ca. 7 Min.',
    },

    {
      slug: 'kindergeburtstag',
      title: `Unvergessliche Pony-Geburtstage in ${businessAddress.city}`,
      date: '2024-07-28',
      excerpt: `Feiern Sie den schönsten Tag im Jahr mit Ponyreiten, Spielen und Basteln auf unserem Ponyhof in ${businessAddress.city}. Ein tierisches Erlebnis!`,
      previewImage: '/images/Einhorn_Pinjata.webp',
      imageAlt: `Kindergeburtstag mit Ponys in ${businessAddress.city}`,
      imageWidth: 400,
      imageHeight: 300,
      readTime: 'ca. 5 Min.',
    },
    {
      slug: 'ponyreiten',
      title: `Ponyreiten & Ausritte in ${businessAddress.city} für Kinder`,
      date: '2025-05-10',
      excerpt: `Erleben Sie sicheres und geführtes Ponyreiten für Kinder in ${businessAddress.city}. Perfekt für Anfänger und kleine Pferdefreunde.`,
      previewImage: '/images/ponyreiten/Napoleon-mit-Sattel.webp',
      imageAlt: `Ponyreiten in ${businessAddress.city}`,
      imageWidth: 400,
      imageHeight: 400,
      readTime: 'ca. 4 Min.',
    },
    {
      slug: 'pferdealltag',
      title: 'Ein Tag im Leben unserer Pferde auf dem Hof in Renningen',
      date: '2025-01-15',
      excerpt: `Von Morgenfütterung bis Abendroutine – erfahre, wie der typische Tag unserer geliebten Ponys in ${businessAddress.city} aussieht und welche Überraschungen der Stallalltag bereithält...`,
      previewImage: '/images/Weidegang.webp',
      imageAlt: `Pferde auf der Weide in ${businessAddress.city}`,
      imageWidth: 400,
      imageHeight: 267,
      readTime: 'ca. 5 Min.',
    },
    {
      slug: 'young-horses',
      title: 'Tipps für den Umgang mit jungen Pferden (auch in Renningen)',
      date: '2025-01-10',
      excerpt: `Junge Pferde benötigen viel Geduld und gezielte Förderung. In diesem Beitrag erfährst du, wie du die richtige Balance zwischen Fordern und Fördern findest, auch auf unserem Hof in ${businessAddress.city}.`,
      previewImage: '/images/Pferde/Finn_fancy.webp',
      imageAlt: 'Junges Pferd beim Training',
      imageWidth: 400,
      imageHeight: 267,
      readTime: 'ca. 7 Min.',
    },
    {
      slug: 'winter-blog',
      title: `Winter auf dem Ponyhof in ${businessAddress.city}: Gemütlichkeit & Herausforderungen`,
      date: '2024-12-05',
      excerpt: `Die kalte Jahreszeit bringt besondere Momente und Aufgaben mit sich. So halten wir unsere Pferde auf dem Ponyhof in ${businessAddress.city} im Winter fit, gesund und glücklich.`,
      previewImage: '/images/Napoleongrafik-im-Schnee_copy.webp',
      imageAlt: `Napoleon im Schnee auf dem Ponyhof ${businessAddress.city}`,
      imageWidth: 400,
      imageHeight: 267,
      readTime: 'ca. 6 Min.',
    },
    {
      slug: 'fruehling-blog',
      title: `Frühlingserwachen in ${businessAddress.city}: Fellwechsel & Weideglück`,
      date: '2025-03-20',
      excerpt: `Endlich wieder längere Tage und grünes Gras! Alles Wichtige zum Fellwechsel, dem Anweiden und den ersten Ausritten im Frühling in ${businessAddress.city}.`,
      previewImage: '/images/Pferde/Coco.webp',
      imageAlt: `Pony auf blühender Frühlingswiese in ${businessAddress.city}`,
      imageWidth: 400,
      imageHeight: 267,
      readTime: 'ca. 5 Min.',
    },
    {
      slug: 'reittherapie',
      title: `Reittherapie in ${businessAddress.city}: Ein Einblick (Start ab 2026)`,
      date: '2025-02-10',
      excerpt: `Erfahre mehr über die Grundlagen der Reittherapie, ihre Ziele und wie Pferde positiv auf die Entwicklung von Kindern wirken können. Unser Angebot in ${businessAddress.city} startet 2026.`,
      previewImage: '/images/blog/Kind-mit-Therapiepony_copy.webp',
      imageAlt: `Kind bei der Reittherapie - Angebot bald in ${businessAddress.city}`,
      imageWidth: 400,
      imageHeight: 267,
      readTime: 'ca. 8 Min.',
    },
    // Füge hier auch Einträge für deine anderen Blog-Posts hinzu:
    // z.B. shetty-wanderung, zwergen-bande, wirkung-reittherapie, ferienkurse
    {
      slug: 'shetty-wanderung',
      title: `Shetty-Wanderung in ${businessAddress.city}: Naturerlebnis mit Mini-Ponys`,
      date: '2024-09-10', // Beispiel
      excerpt: `Entdecken Sie die malerische Umgebung von ${businessAddress.city} bei einer geführten Wanderung mit unseren charmanten Shetlandponys. Ein Spaß für die ganze Familie!`,
      previewImage: '/images/shetty-wanderung.webp',
      imageAlt: `Familie bei einer Shetty-Wanderung in ${businessAddress.city}`,
      imageWidth: 400,
      imageHeight: 300,
      readTime: 'ca. 4 Min.',
    },
    {
      slug: 'zwergen-bande',
      title: `Mini Zwergen Bande ${businessAddress.city}: Erster Ponykontakt für die Kleinsten`,
      date: '2024-09-01', // Beispiel
      excerpt: `Spielerischer erster Kontakt mit Ponys für Kinder von 3-6 Jahren in ${businessAddress.city}. Gemeinsam Ponys putzen, führen und kuscheln.`,
      previewImage: '/images/mini-zwergenbande.webp',
      imageAlt: `Kleinkind mit Mini-Shetty in ${businessAddress.city}`,
      imageWidth: 400,
      imageHeight: 280, // Anpassen
      readTime: 'ca. 3 Min.',
    },
    {
      slug: 'wirkung-reittherapie',
      title: `Die Magie der Reittherapie (Angebot in ${businessAddress.city} ab 2026)`,
      date: '2024-07-25', // Beispiel
      excerpt: `Entdecken Sie, wie Reittherapie bei Kindern Selbstbewusstsein, Motorik, soziale Kompetenz, Konzentration und Vertrauen fördert. Bald auch in ${businessAddress.city}.`,
      previewImage: '/images/Therapie-mit-Ball.webp',
      imageAlt: `Reittherapie fördert Kinder - bald in ${businessAddress.city}`,
      imageWidth: 400,
      imageHeight: 600, // Anpassen
      readTime: 'ca. 6 Min.',
    },
    {
      slug: 'ferienkurse',
      title: `Ferienkurse mit Ponys in ${businessAddress.city}: Abenteuer & Spaß`,
      date: '2024-06-15', // Beispiel
      excerpt: `Unsere Ferienkurse in ${businessAddress.city} bieten Kindern unvergessliche Tage mit Ponyreiten, Spielen in der Natur und kreativen Bastelaktionen. Jetzt Plätze sichern!`,
      previewImage: '/images/blog/ferienkurse/Basteln_Hufeisen_copy.webp',
      imageAlt: `Kinder beim Basteln im Ferienkurs auf dem Ponyhof ${businessAddress.city}`,
      imageWidth: 400,
      imageHeight: 300, // Anpassen
      readTime: 'ca. 5 Min.',
    },
  ])

  const sortedBlogPosts = computed(() => {
    return [...blogPosts.value].sort((a, b) => dayjs(b.date).unix() - dayjs(a.date).unix())
  })

  const formatDate = (dateString) => {
    return dayjs(dateString).format('DD. MMMM YYYY')
  }
</script>

<style scoped>
  /* Deine Styles bleiben hier */
  .line-clamp-3 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .md\:line-clamp-4 {
    /* Für Desktops, falls längere Exzerpte okay sind */
    @media (min-width: 768px) {
      -webkit-line-clamp: 4;
    }
  }
</style>
