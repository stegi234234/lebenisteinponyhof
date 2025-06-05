<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">{{ pageContent.title }}</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">{{ pageContent.subtitle }}</p>
      <div class="blog-meta text-sm text-gray-500 dark:text-gray-400 mt-4">
        <span class="date mr-4"><i class="far fa-calendar mr-1"></i> {{ formattedDate }}</span>
        <span class="read-time"><i class="far fa-clock mr-1"></i> {{ pageContent.readTime }}</span>
      </div>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li>
          <NuxtLink to="/blog">Ponyhof-Blog {{ businessAddress.city }}</NuxtLink>
        </li>
        <li aria-current="page">{{ pageContent.navTitle || pageContent.title }}</li>
      </ol>
    </nav>

    <article
      class="content container mx-auto max-w-3xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg prose dark:prose-invert prose-lg prose-a:text-primary-color dark:prose-a:text-primary-light prose-headings:text-gray-800 dark:prose-headings:text-white"
    >
      <p class="lead text-xl !mb-8">
        Viele Eltern in <strong>{{ businessAddress.city }}</strong> und Umgebung wünschen sich für
        ihre Kinder nicht nur eine Freizeitbeschäftigung, die Spaß macht, sondern auch einen echten
        Mehrwert für deren Entwicklung bietet. Genau hier setzt unser Angebot für
        <strong>Ponyreiten in {{ businessAddress.city }}</strong> an! Denn der Umgang mit Pferden
        ist so viel mehr als nur ein Hobby – er ist eine Schule fürs Leben.
      </p>

      <figure class="my-10">
        <NuxtImg
          :src="pageContent.mainImage.src"
          :alt="pageContent.mainImage.alt"
          class="blog-image w-full max-w-2xl mx-auto rounded-xl shadow-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          @click="lightbox.open(pageContent.mainImage.src, pageContent.mainImage.alt)"
          loading="eager"
          format="webp"
          quality="80"
          :width="pageContent.mainImage.width"
          :height="pageContent.mainImage.height"
          densities="1x 2x"
          sizes="(max-width: 767px) 100vw, 768px"
        />
        <figcaption class="text-center text-sm mt-3 text-gray-500 dark:text-gray-400">
          Spielerische Förderung beim Ponyreiten auf unserem Hof in {{ businessAddress.city }}.
        </figcaption>
      </figure>

      <h2>
        <i class="fas fa-horse-head text-primary-color mr-2"></i>Körperliche Stärkung durch
        Ponyreiten
      </h2>
      <p>
        Das Sitzen auf dem Ponyrücken ist ein fantastisches Training für den gesamten Körper. Selbst
        beim geführten <strong>Ponyreiten für Anfänger in {{ businessAddress.city }}</strong> werden
        Muskeln aktiviert, die im Alltag oft vernachlässigt werden. Ihr Kind profitiert von:
      </p>
      <ul>
        <li>
          <strong>Verbessertem Gleichgewichtssinn:</strong> Die Bewegungen des Ponys erfordern
          ständige Balanceanpassungen.
        </li>
        <li>
          <strong>Gestärkter Rumpfmuskulatur:</strong> Eine gute Körperspannung ist essenziell, um
          sicher im Sattel zu sitzen.
        </li>
        <li>
          <strong>Geförderter Koordination:</strong> Das Zusammenspiel von Armen, Beinen und dem
          gesamten Körper wird geschult.
        </li>
        <li>
          <strong>Entwickelter Körperwahrnehmung:</strong> Kinder lernen, ihren Körper bewusster zu
          spüren und einzusetzen.
        </li>
      </ul>
      <p>
        Auch die Pflege der Ponys vor und nach dem Reiten, wie das Striegeln oder das Führen, trägt
        zur Entwicklung von Grob- und Feinmotorik bei.
      </p>

      <blockquote
        class="!border-l-primary-color !bg-amber-50 dark:!bg-amber-900/30 !p-6 !rounded-lg !my-8"
      >
        <p class="!mt-0 !text-lg !italic">
          "Es ist erstaunlich zu sehen, wie Kinder aufblühen, wenn sie Verantwortung für ein Pony
          übernehmen und die ersten Reiterfolge feiern. Das stärkt ungemein!"
        </p>
        <cite class="!block !text-right !font-medium !text-gray-600 dark:!text-gray-400"
          >- Sarah Handte, Ponyhof {{ businessAddress.city }}</cite
        >
      </blockquote>

      <h2>
        <i class="fas fa-heart text-pink-500 mr-2"></i>Emotionale und soziale Kompetenzen wachsen
        mit
      </h2>
      <p>
        Die Beziehung zwischen einem Kind und einem Pony ist einzigartig und fördert wichtige
        emotionale und soziale Fähigkeiten:
      </p>
      <ul>
        <li>
          <strong>Selbstvertrauen & Selbstwirksamkeit:</strong> Ein großes Tier wie ein Pony zu
          "kontrollieren" und zu versorgen, gibt Kindern ein starkes Gefühl von "Ich kann das!".
          Jeder kleine Erfolg beim Ponyreiten in {{ businessAddress.city }} ist ein Booster für das
          Selbstbewusstsein.
        </li>
        <li>
          <strong>Verantwortungsbewusstsein:</strong> Kinder lernen, dass ein Pony Bedürfnisse hat
          und Pflege benötigt. Sie übernehmen spielerisch Verantwortung für ein anderes Lebewesen.
        </li>
        <li>
          <strong>Empathie & Einfühlungsvermögen:</strong> Pferde sind Meister der nonverbalen
          Kommunikation. Kinder werden sensibilisiert, die feinen Signale des Tieres zu deuten und
          darauf rücksichtsvoll zu reagieren.
        </li>
        <li>
          <strong>Geduld & Ausdauer:</strong> Nicht alles klappt auf Anhieb. Der Umgang mit Pferden
          lehrt Geduld und die Fähigkeit, auch bei kleinen Rückschlägen dranzubleiben.
        </li>
        <li>
          <strong>Abbau von Ängsten:</strong> In der sicheren und liebevollen Umgebung unseres Hofes
          in {{ businessAddress.city }} können Kinder anfängliche Unsicherheiten überwinden.
        </li>
        <li>
          <strong>Teamfähigkeit:</strong> Oft finden Aktivitäten in kleinen Gruppen statt, was die
          Zusammenarbeit und Rücksichtnahme fördert.
        </li>
      </ul>

      <figure class="my-10">
        <NuxtImg
          src="/images/hero/sarah-und-nero.jpg"
          :alt="`Vertrauensvolle Interaktion zwischen Sarah und Pony Nero – Basis für die Förderung von Kindern in ${businessAddress.city}`"
          class="blog-image w-full max-w-xl mx-auto rounded-xl shadow-xl cursor-pointer"
          @click="
            lightbox.open(
              '/images/hero/sarah-und-nero.jpg',
              `Eine starke Bindung ist der Schlüssel zur erfolgreichen pferdegestützten Förderung in ${businessAddress.city}`
            )
          "
          loading="lazy"
          format="webp"
          quality="80"
          width="800"
          height="1066"
          densities="1x 2x"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 60vw, 500px"
        />
        <figcaption class="text-center text-sm mt-3 text-gray-500 dark:text-gray-400">
          Die tiefe Verbindung zwischen Mensch und Pferd ist Grundlage unserer pädagogischen Arbeit
          in {{ businessAddress.city }}.
        </figcaption>
      </figure>

      <h2><i class="fas fa-brain text-blue-500 mr-2"></i>Kognitive Anregung und Naturerleben</h2>
      <p>Der Ponyhof in {{ businessAddress.city }} ist auch ein Ort des Lernens und Entdeckens:</p>
      <ul>
        <li>
          <strong>Konzentration & Fokus:</strong> Der Umgang mit dem Pony und die Reitübungen
          erfordern Aufmerksamkeit und Präsenz im Moment.
        </li>
        <li>
          <strong>Lernen mit allen Sinnen:</strong> Kinder erfahren Wissenswertes über Pferde, ihre
          Pflege und ihr Verhalten nicht nur theoretisch, sondern praktisch.
        </li>
        <li>
          <strong>Naturverbundenheit:</strong> Unsere Ausritte und Aktivitäten finden in der schönen
          Natur rund um {{ businessAddress.city }} statt. Kinder entwickeln ein Bewusstsein für ihre
          Umwelt.
        </li>
        <li>
          <strong>Stressabbau und Ausgleich:</strong> Die ruhige Ausstrahlung der Pferde und die
          Bewegung an der frischen Luft wirken entspannend und sind ein wunderbarer Ausgleich zum
          Alltag.
        </li>
      </ul>

      <hr class="!my-10" />

      <div class="cta-box bg-primary-color/10 dark:bg-primary-light/10 p-6 rounded-lg text-center">
        <h2 class="text-2xl font-semibold text-primary-color dark:text-primary-light mb-4">
          Möchten Sie die positive Wirkung von Ponyreiten auf Ihr Kind selbst erleben?
        </h2>
        <p class="text-gray-700 dark:text-gray-300 mb-6">
          Auf unserem Ponyhof in <strong>{{ businessAddress.city }}</strong> bieten wir vielfältige
          Möglichkeiten, vom Schnupperreiten bis zu regelmäßigen Fördereinheiten. Entdecken Sie, wie
          Ihr Kind durch den liebevollen Kontakt mit unseren Ponys wachsen und aufblühen kann.
        </p>
        <AppButton
          :to="{
            path: '/contact',
            query: { subject: `Anfrage Ponyreiten zur Förderung ${businessAddress.city}` },
          }"
          variant="primary"
          size="lg"
        >
          Jetzt Ponyreiten in {{ businessAddress.city }} anfragen
          <i class="fas fa-arrow-right ml-2"></i>
        </AppButton>
      </div>

      <!-- Social-Media & Kontakt Box -->
      <div
        class="social-contact-box mt-10 flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600"
      >
        <div class="md:w-3/4">
          <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Folge uns auf Instagram und TikTok!
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Für tägliche Einblicke in unser Pferdeleben. Habt ihr Fragen zum Pferdealltag?
          </p>
        </div>
        <div class="md:w-1/4 mt-4 md:mt-0 text-center">
          <div class="flex flex-col space-y-2">
            <AppButton
              href="https://www.instagram.com/lebenisteinponyhof"
              target="_blank"
              variant="outline-primary"
            >
              <i class="fab fa-instagram mr-2"></i> Instagram
            </AppButton>
            <AppButton :to="{ path: '/contact' }" variant="primary"> Kontaktiere uns </AppButton>
          </div>
        </div>
      </div>

      <div
        class="blog-share-buttons mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center not-prose"
      >
        <h3 class="text-base font-semibold mb-3 text-gray-600 dark:text-gray-400">
          Diesen Beitrag teilen:
        </h3>
        <div class="flex justify-center gap-3 flex-wrap">
          <a
            :href="`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-button facebook inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            ><i class="fab fa-facebook-f mr-1.5"></i> Facebook</a
          >
          <a
            :href="`https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodedShareText}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-button twitter inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
            ><i class="fab fa-twitter mr-1.5"></i> Twitter</a
          >
          <a
            :href="`https://api.whatsapp.com/send?text=${encodedShareText}%20${currentUrl}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-button whatsapp inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
            ><i class="fab fa-whatsapp mr-1.5"></i> WhatsApp</a
          >
          <a
            :href="`mailto:?subject=${encodedShareText}&body=${currentUrl}`"
            class="share-button email inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            ><i class="fas fa-envelope mr-1.5"></i> E-Mail</a
          >
          <a
            :href="`https://pinterest.com/pin/create/button/?url=${currentUrl}&media=${encodedOgImageUrl}&description=${encodedShareText}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-button pinterest inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            ><i class="fab fa-pinterest-p mr-1.5"></i> Pinterest</a
          >
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
  import { useRoute, useRuntimeConfig } from '#app'
  import { useMySeoMeta } from '~/composables/useMySeoMeta'
  import { NuxtLink, NuxtImg } from '#components'
  import { useLightbox } from '~/composables/useLightbox'
  import AppButton from '~/components/AppButton.vue' // Importiere AppButton
  import dayjs from 'dayjs'
  import 'dayjs/locale/de'

  dayjs.locale('de')

  const lightbox = useLightbox()
  const route = useRoute()
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl
  const businessAddress = config.public.businessAddress

  const pageContent = ref({
    title: `Mehr als nur Spaß: Wie Ponyreiten in ${businessAddress.city} die Entwicklung Ihres Kindes fördert`,
    subtitle: `Entdecken Sie die vielfältigen positiven Auswirkungen unserer pferdegestützten Angebote in ${businessAddress.city} auf Körper, Geist und Seele.`,
    navTitle: 'Förderung durch Ponyreiten',
    readTime: 'ca. 7 Min. Lesezeit',
    publishDate: '2024-08-12',
    mainImage: {
      src: '/images/Pferde/Therapie-mit-Ball.webp',
      alt: `Kind bei einer entwicklungsfördernden Übung mit Ball auf dem Pony in ${businessAddress.city} - Ponyreiten fördert`,
      width: 800,
      height: 1200,
    },
  })

  const formattedDate = computed(() => dayjs(pageContent.value.publishDate).format('DD. MMMM YYYY'))
  const currentUrlForHead = `${siteUrl}${route.path}` // Für Share Buttons

  useMySeoMeta({
    title: pageContent.value.title,
    description: `Erfahren Sie, wie Ponyreiten in ${businessAddress.city} auf unserem Hof nicht nur Spaß macht, sondern auch Selbstvertrauen, Motorik, soziale Kompetenzen und Konzentration bei Kindern nachhaltig stärkt.`,
    keywords: `Ponyreiten Förderung Kinder ${businessAddress.city}, Entwicklung Kind Pferde ${businessAddress.city}, Selbstbewusstsein stärken Pferd ${businessAddress.city}, Reitpädagogik ${businessAddress.city}, Pferdegestützte Angebote ${businessAddress.city}`,
    ogImage: `${siteUrl}${pageContent.value.mainImage.src}`, // Verwende das Hauptbild oder ein spezielles OG-Bild
    ogImageAlt: `Positive Auswirkungen von Ponyreiten auf Kinder in ${businessAddress.city}`,
    ogType: 'article',
    articleDetails: {
      publishedTime: `${pageContent.value.publishDate}T09:00:00+02:00`,
      authorName: 'Sarah Handte',
      section: 'Pferdegestützte Förderung',
      tags: [
        'Ponyreiten',
        'Kinderentwicklung',
        'Förderung',
        businessAddress.city,
        'Pädagogik',
        'Selbstvertrauen',
      ],
    },
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: pageContent.value.title,
      image: `${siteUrl}${pageContent.value.mainImage.src}`,
      datePublished: `${pageContent.value.publishDate}T09:00:00+02:00`,
      author: { '@type': 'Person', name: 'Sarah Handte' },
      publisher: {
        '@type': 'Organization',
        name: `Leben ist ein Ponyhof ${businessAddress.city}`,
        logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo.png` },
      },
      description: `Erfahren Sie, wie Ponyreiten in ${businessAddress.city} auf unserem Hof nicht nur Spaß macht, sondern auch Selbstvertrauen, Motorik, soziale Kompetenzen und Konzentration bei Kindern nachhaltig stärkt.`,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}${route.fullPath}` },
      about: [
        { '@type': 'Thing', name: 'Ponyreiten' },
        { '@type': 'Thing', name: 'Kindliche Entwicklung' },
        { '@type': 'Thing', name: 'Pferdegestützte Förderung' },
        { '@type': 'Place', name: businessAddress.city },
      ],
    },
  })
</script>

<style scoped>
  .lead-paragraph {
    @apply !text-lg !font-normal; /* Tailwind Prose überschreiben für größere Lead-Para */
  }
  .prose h2 {
    @apply !mb-4 !mt-10; /* Mehr Abstand vor H2 */
  }
  .prose ul,
  .prose ol {
    @apply !my-5;
  }
  .prose li {
    @apply !my-1.5;
  }
  .cta-box h2 {
    @apply !mt-0; /* Kein oberer Margin für H2 in der CTA-Box */
  }
</style>
