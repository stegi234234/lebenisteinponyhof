<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Mini Zwergen Bande</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Spielerischer Ponykontakt mit Putzen, Kuscheln & Spaß für die Kleinsten (ca. 4-8 Jahre).
        <!-- "Erster" klingt sehr nach einem definierten Produkt -->
      </p>
      <div class="blog-meta text-sm text-gray-500 dark:text-gray-400 mt-4">
        <span class="date mr-4"><i class="far fa-calendar mr-1"></i> {{ formattedDate }}</span>
        <span class="read-time"><i class="far fa-clock mr-1"></i> ca. 3 Min. Lesezeit</span>
      </div>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <NuxtLink to="/">Startseite</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/Angebote">Angebote</NuxtLink>
        </li>
        <li aria-current="page">Pony-Geburtstag</li>
      </ol>
    </nav>
    <article
      class="content container mx-auto max-w-3xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md prose dark:prose-invert prose-a:text-primary-color dark:prose-a:text-primary-light prose-headings:font-semibold prose-headings:text-gray-800 dark:prose-headings:text-white"
    >
      <p>
        Schon die Allerkleinsten lieben Ponys! Unsere "Mini Zwergen Bande" ist für Kinder im Alter
        von etwa 4 bis 8 Jahren gedacht, die auf spielerische und kindgerechte Weise erste
        Erfahrungen mit unseren sanften Shetlandponys sammeln möchten. Im Mittelpunkt stehen die
        Begegnung, das Fühlen und der gemeinsame Spaß, weniger das Reitenlernen im klassischen Sinn.
        <!-- "konzipiert" und "hier geht es nicht ums Reiten lernen..." etwas weicher formuliert -->
      </p>

      <h2>Was erleben die Kinder bei den Pony-Treffen?</h2>
      <!-- "in der Mini Zwergen Bande" ersetzt durch neutraleres "bei den Pony-Treffen" -->
      <ul>
        <li>
          <strong>Behutsames Kennenlernen:</strong> Die Kinder dürfen die Ponys begrüßen, beobachten
          und erste Kontakte knüpfen.
        </li>
        <li>
          <strong>Putzen & Striegeln:</strong> Mit weichen Bürsten lernen die Kinder, wie man ein
          Pony pflegt und verwöhnt. Das fördert die Feinmotorik und schafft Vertrauen.
        </li>
        <li>
          <strong>Kuscheln & Fühlen:</strong> Das warme Fell spüren, den Atem des Ponys hören –
          wichtige Sinneserfahrungen.
        </li>
        <li>
          <strong>Kleine Spiele:</strong> Altersgerechte Spiele mit oder rund um die Ponys, die den
          Spaßfaktor erhöhen.
        </li>
        <li>
          <strong>Geführte Momente:</strong> Eventuell ein paar Schritte geführt werden oder kleine
          Aufgaben mit dem Pony am Boden lösen.
        </li>
      </ul>
      <p>
        Im Vordergrund stehen immer die Sicherheit, das Wohlbefinden der Kinder und der Tiere sowie
        die Freude am Miteinander.
      </p>

      <h2>Ein paar Infos zu unseren Treffen:</h2>
      <!-- "Details zum Angebot" ersetzt -->
      <ul>
        <li><strong>Ideal für:</strong> Kinder von ca. 4 bis 8 Jahren.</li>
        <li><strong>Dauer eines Treffens:</strong> Meist ca. 1 Stunde.</li>
        <li>
          <strong>Unkostenbeitrag:</strong> Für Futter, Pflege und Material freuen wir uns über
          einen kleinen Beitrag. Details gerne auf Anfrage.
          <!-- "Kosten: 20€ pro Kind" entfernt/umformuliert. Dies ist die wichtigste Änderung. -->
        </li>
        <li>
          <strong>Gruppengröße:</strong> Wir halten die Gruppen bewusst klein, um auf jedes Kind
          eingehen zu können.
        </li>
        <li>
          <strong>Mitzubringen:</strong> Feste Schuhe und wetterfeste Kleidung. Ein Fahrradhelm ist
          für eventuelle geführte Momente auf dem Ponyrücken ratsam. Je nach Anlass und Absprache
          vielleicht auch etwas für ein gemeinsames Picknick.
          <!-- "Verpflegung für ein Picnik" etwas weicher -->
        </li>
      </ul>

      <hr />

      <p><strong>Interesse an unseren Pony-Erlebnissen?</strong></p>
      <!-- "Mini Zwergen Bande" durch neutraleres Wort ersetzt -->
      <p>
        Wenn ihr Lust habt, euren Kindern einen ersten, positiven Kontakt mit Ponys zu ermöglichen,
        meldet euch gerne. Wir können dann schauen, wann die nächsten Treffen geplant sind oder ob
        wir eine kleine Gruppe zusammenbekommen.
        <!-- "Bitte erfragen Sie die nächsten Termine oder vereinbaren Sie eine Gruppenstunde." weicher formuliert -->
      </p>
      <p>
        <NuxtLink to="/contact?subject=Anfrage Pony-Treffen Kinder" class="font-semibold">
          Kontakt & Terminanfrage
        </NuxtLink>
        <!-- Link-Text und Subject angepasst -->
      </p>

      <!-- Share Buttons etc. können bleiben, sind eher Standard-Blog-Features -->
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

      <p class="mt-8 text-center not-prose">
        <NuxtLink to="/blog" class="back-link ..."> ← Zurück zum Blog </NuxtLink>
      </p>
    </article>

<section class="related-posts container mx-auto max-w-4xl px-4 py-8 md:py-12 mt-8">
  <h2 class="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-white">Das könnte auch gefallen:</h2>
  
  <div class="related-posts-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Post 1: Geführtes Ponyreiten -->
    <div class="related-post group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
      <!-- Farbiger Header oben -->
      <div class="h-3 bg-primary-color dark:bg-primary-light"></div>
      
      <div class="p-5">
        <!-- Icon -->
        <div class="mb-4 flex justify-center">
          <div class="w-14 h-14 rounded-full bg-primary-color/10 dark:bg-primary-light/20 flex items-center justify-center">
            <i class="fas fa-horse text-2xl text-primary-color dark:text-primary-light"></i>
          </div>
        </div>
        
        <!-- Titel -->
        <h3 class="text-md font-semibold mb-2 text-center text-gray-800 dark:text-white">Geführtes Ponyreiten</h3>
        
        <!-- Beschreibung -->
        <p class="text-xs text-gray-600 dark:text-gray-400 text-center mb-4">Erste Reiterfahrungen für die Kleinen.</p>
        
        <!-- Link -->
        <div class="flex justify-center">
          <NuxtLink to="/blog/ponyreiten" class="read-more text-xs font-medium text-primary-color dark:text-primary-light hover:underline flex items-center">
            Mehr erfahren
            <i class="fas fa-arrow-right ml-1 text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <!-- Post 2: Shetty-Kindergeburtstag -->
    <div class="related-post group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
      <!-- Farbiger Header oben -->
      <div class="h-3 bg-pink-400 dark:bg-pink-500"></div>
      
      <div class="p-5">
        <!-- Icon -->
        <div class="mb-4 flex justify-center">
          <div class="w-14 h-14 rounded-full bg-pink-400/10 dark:bg-pink-500/20 flex items-center justify-center">
            <i class="fas fa-birthday-cake text-2xl text-pink-400 dark:text-pink-500"></i>
          </div>
        </div>
        
        <!-- Titel -->
        <h3 class="text-md font-semibold mb-2 text-center text-gray-800 dark:text-white">Shetty-Kindergeburtstag</h3>
        
        <!-- Beschreibung -->
        <p class="text-xs text-gray-600 dark:text-gray-400 text-center mb-4">Feiern Sie mit uns einen unvergesslichen Tag.</p>
        
        <!-- Link -->
        <div class="flex justify-center">
          <NuxtLink to="/blog/kindergeburtstag" class="read-more text-xs font-medium text-pink-400 dark:text-pink-500 hover:underline flex items-center">
            Mehr erfahren
            <i class="fas fa-arrow-right ml-1 text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <!-- Post 3: Ferienkurse -->
    <div class="related-post group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
      <!-- Farbiger Header oben -->
      <div class="h-3 bg-amber-400 dark:bg-amber-500"></div>
      
      <div class="p-5">
        <!-- Icon -->
        <div class="mb-4 flex justify-center">
          <div class="w-14 h-14 rounded-full bg-amber-400/10 dark:bg-amber-500/20 flex items-center justify-center">
            <i class="fas fa-sun text-2xl text-amber-400 dark:text-amber-500"></i>
          </div>
        </div>
        
        <!-- Titel -->
        <h3 class="text-md font-semibold mb-2 text-center text-gray-800 dark:text-white">Ferienkurse</h3>
        
        <!-- Beschreibung -->
        <p class="text-xs text-gray-600 dark:text-gray-400 text-center mb-4">Spannende Ponytage in den Schulferien.</p>
        
        <!-- Link -->
        <div class="flex justify-center">
          <NuxtLink to="/blog/ferienkurse" class="read-more text-xs font-medium text-amber-400 dark:text-amber-500 hover:underline flex items-center">
            Mehr erfahren
            <i class="fas fa-arrow-right ml-1 text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</template>

<script setup>
  import { useHead, useRoute } from '#imports'
  import { computed } from 'vue'
  import { NuxtLink, NuxtImg } from '#components'
  // import { useLightbox } from '~/composables/useLightbox' // Wenn nicht aktiv genutzt, kann es raus
  import dayjs from 'dayjs'
  import 'dayjs/locale/de'
  dayjs.locale('de')

  // const lightbox = useLightbox() // Wenn nicht aktiv genutzt, kann es raus
  const route = useRoute()
  const siteUrl = 'https://lebenisteinponyhof.de' // Domain anpassen
  const currentUrl = computed(() => `${siteUrl}${route.path}`)

  // Angepasste Titel und Beschreibungen
  const pageTitle = 'Mini Zwergen Bande: Pony-Erlebnisse für Kinder (ca. 4-8 J.)'
  const pageDescription =
    'Spielerischer Kontakt mit Ponys für Kinder von ca. 4-8 Jahren in der Region Renningen/Leonberg. Gemeinsam putzen, kuscheln und eine schöne Zeit mit unseren lieben Shettys verbringen.'
  const pageImage = `${siteUrl}/images/Balu.webp` // Angepasste URL für das Bild
  const publishDate = '2024-08-15'
  const formattedDate = computed(() => dayjs(publishDate).format('DD. MMMM YYYY'))

  const shareText = encodeURIComponent('Schöne Pony-Erlebnisse für Kinder!') // Allgemeiner
  const encodedOgImageUrl = encodeURIComponent(pageImage)

  useHead({
    title: pageTitle,
    titleTemplate: '%s | Leben ist ein Ponyhof Blog',
    meta: [
      { name: 'description', content: pageDescription },
      {
        name: 'keywords',
        content:
          'Ponyfreunde Kinder, Ponykontakt Kinder, Ponys für Kinder Renningen, Ponyerlebnisse Leonberg, Shetlandponys Kinder, Freizeit mit Ponys',
        // "Reiten ab 4 Jahre" entfernt, da es sehr nach Dienstleistung klingt
      },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:url', content: currentUrl.value },
      { property: 'og:image', content: pageImage },
      { property: 'og:type', content: 'article' }, // 'article' ist gut, da es eher informativ wirkt
      { property: 'article:published_time', content: `${publishDate}T09:00:00+02:00` },
      { property: 'article:author', content: 'Sarah Handte' }, // Name ist ok, wirkt persönlich
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'canonical', href: currentUrl.value }],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting', // Bleibt bei BlogPosting, da es weniger kommerziell ist als "Service" oder "Event" mit Preis
          headline: 'Mini Zwergen Bande: Pony-Erlebnisse für Kinder (ca. 4-8 Jahre)',
          description: pageDescription,
          image: pageImage,
          datePublished: publishDate,
          author: { '@type': 'Person', name: 'Sarah Handte', url: `${siteUrl}/about` },
          // publisher, mainEntityOfPage etc. können bleiben, sind Standard für Blogartikel
        }),
      },
    ],
  })
</script>

<style>
  /* Prose Klassen aktiv */
</style>
