<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Ferienkurse: Natur & Ponys erleben</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Spiel, Spaß und Pferdeverstand – Unsere Kurse für pferdebegeisterte Kids in den Schulferien.
      </p>
      <div class="blog-meta text-sm text-gray-500 dark:text-gray-400 mt-4">
        <span class="date mr-4"><i class="far fa-calendar mr-1"></i> {{ formattedDate }}</span>
        <span class="read-time"><i class="far fa-clock mr-1"></i> 6 Min. Lesezeit</span>
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
      class="content container mx-auto max-w-3xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md prose dark:prose-invert prose-a:text-primary-color dark:prose-a:text-primary-light prose-headings:text-gray-800 dark:prose-headings:text-white"
    >
      <p>
        Die Schulferien sind die perfekte Zeit, um neue Abenteuer zu erleben! Unsere Ferienkurse
        bieten pferdebegeisterten Kindern die Möglichkeit, tief in die Welt der Ponys einzutauchen,
        Freundschaften zu schließen und ganz nebenbei viel über Natur und Tiere zu lernen. Weg vom
        Bildschirm, rein in den Stall und auf die Wiese!
      </p>

      <h2>Was erwartet die Kinder im Ferienkurs?</h2>
      <!-- Bastel-Impressionen aus dem Ferienkurs -->
<div class="my-10 space-y-6">
  <p class="text-center text-lg text-gray-700 dark:text-gray-300 font-medium">
    Kreative Bastelaktionen gehören bei uns einfach dazu! 🖍️✨
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <NuxtImg
      src="/images/blog/ferienkurse/regenbogen-bastelbild-1.webp"
      alt="Bunt verzierter Holz-Regenbogen mit Glitzersteinen"
      class="rounded-xl shadow-md object-cover"
      width="800"
      height="600"
      format="webp"
      quality="85"
      loading="lazy"
    />
    <NuxtImg
      src="/images/blog/ferienkurse/glitzersteine-bastelset.webp"
      alt="Bastelset mit bunten Glitzersteinen"
      class="rounded-xl shadow-md object-cover"
      width="800"
      height="600"
      format="webp"
      quality="85"
      loading="lazy"
    />
    <NuxtImg
      src="/images/blog/ferienkurse/filzstifte-fuer-kinder.webp"
      alt="Filzstifte in vielen Farben für die kreative Gestaltung"
      class="rounded-xl shadow-md object-cover"
      width="800"
      height="600"
      format="webp"
      quality="85"
      loading="lazy"
    />
    <NuxtImg
      src="/images/blog/ferienkurse/regenbogen-bastelbild-2.webp"
      alt="Einhorn mit Regenbogen aus Holz bunt bemalt und beklebt"
      class="rounded-xl shadow-md object-cover"
      width="800"
      height="600"
      format="webp"
      quality="85"
      loading="lazy"
    />
  </div>
</div>

      <p>
        Wir gestalten ein buntes und pädagogisch wertvolles Programm, das auf die jeweilige
        Altersgruppe und die Jahreszeit abgestimmt ist. Im Vordergrund stehen immer der Spaß und der
        respektvolle Umgang mit den Tieren und der Natur. Mögliche Inhalte sind:
      </p>
      <ul>
        <li>
          <strong>Pferdepflege & Handling:</strong> Richtiges Putzen, Führen, Satteln und Trensen
          lernen.
        </li>
        <li>
          <strong>Bodenarbeit & Horsemanship:</strong> Vertrauensübungen, Körpersprache der Pferde
          verstehen, kleine Zirkuslektionen.
        </li>
        <li>
          <strong>Reiten:</strong> Je nach Kurs und Vorkenntnissen geführtes Reiten, Longenarbeit
          oder erste freie Reitübungen in der Bahn oder im Gelände.
        </li>
        <li>
          <strong>Theorie-Einheiten:</strong> Spielerisch Wissen vermitteln über Pferderassen,
          Fütterung, Haltung und Gesundheit.
        </li>
        <li>
          <strong>Naturerkundung & Spiele:</strong> Ausflüge in den Wald, Schatzsuchen, Teamspiele
          rund um den Hof.
        </li>
        <li>
          <strong>Kreativwerkstatt:</strong> Basteln mit Naturmaterialien, z.B. Traumfänger,
          Stockpferde oder Bemalen von Hufeisen.
        </li>
      </ul>

      <h2>Für wen sind die Kurse geeignet?</h2>
      <p>
        Unsere Ferienkurse richten sich in der Regel an Kinder im Alter von 6 bis 12 Jahren. Wir
        versuchen, die Gruppen altershomogen zu gestalten. Vorkenntnisse im Reiten sind meist nicht
        erforderlich, die Freude am Umgang mit Tieren und der Natur steht im Vordergrund. Wir bieten
        sowohl Halbtags- als auch Ganztagskurse an, je nach Ferienzeitraum.
      </p>

      <h2>Warum ein Ferienkurs bei uns?</h2>
      <ul>
        <li>
          <strong>Kleine Gruppengrößen:</strong> Individuelle Betreuung und viel Raum für Fragen.
        </li>
        <li>
          <strong>Erfahrene Leitung:</strong> Sarah bringt ihr pädagogisches Wissen als Erzieherin
          ein.
        </li>
        <li><strong>Brave Ponys:</strong> Unsere Tiere sind kinderlieb und gut ausgebildet.</li>
        <li>
          <strong>Ganzheitlicher Ansatz:</strong> Wir vermitteln mehr als nur Reiten – es geht um
          Beziehung, Verständnis und Verantwortung.
        </li>
        <li>
          <strong>Viel frische Luft:</strong> Bewegung und Erlebnisse in der Natur statt vor dem
          Bildschirm.
        </li>
      </ul>

      <hr />

      <p><strong>Aktuelle Termine & Anmeldung:</strong></p>
      <p>
        Die Termine für die nächsten Schulferien werden rechtzeitig hier auf der Website und auf
        unseren Social-Media-Kanälen bekannt gegeben. Da die Plätze begrenzt sind, empfiehlt sich
        eine frühzeitige Anfrage.
      </p>
      <p>
        <NuxtLink to="/contact?subject=Anfrage Ferienkurs" class="font-semibold"
          >Informationen und Termine anfragen</NuxtLink
        >
      </p>
    </article>

    <div
      class="blog-share-buttons mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center not-prose"
    >
      <h3 class="text-base font-semibold mb-3 text-gray-600 dark:text-gray-400">
        Diesen Beitrag teilen:
      </h3>
      <!-- Share Buttons -->
      <div
        class="blog-share-buttons mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center"
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
          >
            <i class="fab fa-facebook-f mr-1.5"></i> Facebook
          </a>
          <a
            :href="`https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodedShareText}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-button twitter inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
          >
            <i class="fab fa-twitter mr-1.5"></i> Twitter
          </a>
          <a
            :href="`https://api.whatsapp.com/send?text=${encodedShareText}%20${currentUrl}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-button whatsapp inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
          >
            <i class="fab fa-whatsapp mr-1.5"></i> WhatsApp
          </a>
          <a
            :href="`mailto:?subject=${encodedShareText}&body=${currentUrl}`"
            class="share-button email inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            <i class="fas fa-envelope mr-1.5"></i> E-Mail
          </a>
          <a
            :href="`https://pinterest.com/pin/create/button/?url=${currentUrl}&media=${encodedOgImageUrl}&description=${encodedShareText}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-button pinterest inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <i class="fab fa-pinterest-p mr-1.5"></i> Pinterest
          </a>
        </div>
      </div>
      <p class="mt-8 text-center not-prose">
        <NuxtLink to="/blog" class="back-link ..."> ← Zurück zum Blog </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
  import { useHead, useRoute } from '#imports'
  import { computed } from 'vue'
  import { NuxtLink, NuxtImg } from '#components'
  import { useLightbox } from '~/composables/useLightbox'
  import dayjs from 'dayjs'
  import 'dayjs/locale/de'
  dayjs.locale('de')

  const lightbox = useLightbox()
  const route = useRoute()
  const siteUrl = 'https://lebenisteinponyhof.de' // Domain anpassen
  const currentUrl = computed(() => `${siteUrl}${route.path}`)
  const pageTitle = 'Ferienkurse mit Pferden & Ponys (Renningen/Leonberg)'
  const pageDescription =
    'Erlebnisreiche Ferienkurse für Kinder: Reiten lernen, Natur entdecken, Pferde verstehen und Spaß haben bei Sarah Handte.'
  const pageImage = `${siteUrl}/images/Chica-angemalt.webp` // Hauptbild - BITTE ERSETZEN
  const publishDate = '2024-07-28' // Beispiel
  const formattedDate = computed(() => dayjs(publishDate).format('DD. MMMM YYYY'))

  const shareText = encodeURIComponent('Tolle Ferienkurse auf dem Ponyhof!')
  const encodedOgImageUrl = encodeURIComponent(pageImage)

  useHead({
    title: pageTitle,
    titleTemplate: '%s | Leben ist ein Ponyhof Blog',
    meta: [
      { name: 'description', content: pageDescription },
      {
        name: 'keywords',
        content:
          'Ferienkurs Pferde Renningen, Ferienkurs Reiten Leonberg, Reiterferien Kinder, Ponycamp, Ferienprogramm Tiere, Reiten lernen Ferien, Pferde verstehen Kinder',
      },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:url', content: currentUrl.value },
      { property: 'og:image', content: pageImage }, // Platzhalter ersetzen!
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: `${publishDate}T09:00:00+02:00` },
      { property: 'article:author', content: 'Sarah Handte' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDescription },
      { name: 'twitter:image', content: pageImage }, // Platzhalter ersetzen!
    ],
    link: [{ rel: 'canonical', href: currentUrl.value }],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Ferienkurse: Natur & Ponys erleben',
          description: pageDescription,
          image: pageImage, // Platzhalter ersetzen!
          datePublished: publishDate,
          author: { '@type': 'Person', name: 'Sarah Handte', url: `${siteUrl}/about` },
          publisher: {
            /* ... */
          },
          mainEntityOfPage: { '@type': 'WebPage', '@id': currentUrl.value },
          about: [
            { '@type': 'Event', name: 'Ferienkurs mit Pferden für Kinder' },
            {
              '@type': 'Place',
              name: 'Leben ist ein Ponyhof',
              address: 'Pfadstr. 10, 71229 Leonberg',
            },
          ],
        }),
      },
    ],
  })
</script>

<style>
  /* Prose Klassen aktiv */
</style>
