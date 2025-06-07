<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Die Magie der Reittherapie</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        5 Wege, wie Pferde Kindern helfen können, zu wachsen und aufzublühen.
      </p>
      <div class="blog-meta text-sm text-gray-500 dark:text-gray-400 mt-4">
        <span class="date mr-4"><i class="far fa-calendar mr-1"></i> {{ formattedDate }}</span>
        <span class="read-time"><i class="far fa-clock mr-1"></i> 6 Min. Lesezeit</span>
      </div>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li aria-current="page">Wirkung Reittherapie</li>
      </ol>
    </nav>

    <article
      class="content container mx-auto max-w-3xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md prose dark:prose-invert prose-a:text-primary-color dark:prose-a:text-primary-light prose-headings:text-gray-800 dark:prose-headings:text-white"
    >
      <p>
        Pferde haben eine ganz besondere Ausstrahlung – ruhig, stark und gleichzeitig unglaublich
        sensibel. Genau diese Eigenschaften machen sie zu wundervollen Partnern in der
        therapeutischen Arbeit mit Kindern. Aber wie genau wirkt Reittherapie eigentlich? Hier sind
        5 zentrale Bereiche, in denen die Begegnung mit dem Pferd wahre Wunder bewirken kann:
      </p>

      <h2>1. Stärkung des Selbstbewusstseins & Selbstvertrauens</h2>
      <p>
        Ein großes Tier wie ein Pferd zu führen, zu putzen oder gar darauf zu sitzen, ist für ein
        Kind eine enorme Leistung. Jede gemeisterte Aufgabe, sei sie noch so klein, stärkt das
        Gefühl "Ich kann das!". Das Pferd gibt dabei ehrliches, non-verbales Feedback und nimmt das
        Kind so an, wie es ist. Diese Erfolgserlebnisse bauen Selbstvertrauen auf, das sich oft auch
        auf andere Lebensbereiche überträgt.
      </p>
      <blockquote>
        "Ein Pony zu führen, fühlt sich an, als könnte man die ganze Welt lenken!" - Ein Zitat, das
        die Erfahrung gut beschreibt.
      </blockquote>

      <h2>2. Förderung der Motorik & Körperwahrnehmung</h2>
      <p>
        Beim Reiten werden Muskeln angesprochen, die sonst selten genutzt werden. Die
        dreidimensionalen Schwingungen des Pferderückens trainieren Balance, Koordination und
        Rumpfstabilität auf natürliche Weise. Das Kind lernt, seinen Körper bewusst wahrzunehmen und
        einzusetzen, um im Gleichgewicht zu bleiben. Auch beim Putzen oder Führen werden Grob- und
        Feinmotorik geschult.
      </p>

      <h2>3. Verbesserung der sozialen Kompetenz & Empathie</h2>
      <p>
        Pferde sind Meister der non-verbalen Kommunikation. Kinder lernen, die feinen Signale des
        Tieres zu deuten und darauf angemessen zu reagieren. Sie müssen Bedürfnisse erkennen (Hat
        das Pony Durst? Ist es müde?), Grenzen respektieren und Verantwortung für ein anderes
        Lebewesen übernehmen. Das fördert Einfühlungsvermögen, Rücksichtnahme und Teamfähigkeit –
        wichtige soziale Kompetenzen.
      </p>

      <!-- Weiteres Bild -->
      <figure class="my-6 not-prose flex flex-col items-center">
        <!-- Bild darf gern in einem Wrapper-Div bleiben, wenn du Breite brauchst -->
        <div class="max-w-[300px]">
          <NuxtImg
            src="/images/Therapie-mit-Ball.webp"
            alt="Kind in der Reittherapie mit Ball auf dem Pferd"
            class="w-full h-auto rounded-lg shadow-md cursor-pointer"
            @click="
              lightbox.open(
                '/images/Therapie-mit-Ball.webp',
                'Gezielte Übungen mit dem Ball fördern Motorik und Selbstvertrauen.'
              )
            "
            loading="lazy"
            format="webp"
            quality="75"
            width="400"
            height="600"
            densities="1x 2x"
          />
        </div>

        <!-- figcaption jetzt DIREKT im figure, letzter Child → gültig -->
        <figcaption class="text-center text-xs mt-2 text-gray-500 dark:text-gray-400">
          Gezielte Übungen mit dem Ball fördern Motorik und Selbstvertrauen.
        </figcaption>
      </figure>

      <h2>4. Steigerung der Konzentration & Aufmerksamkeit</h2>
      <p>
        Der Umgang mit Pferden erfordert Präsenz im Hier und Jetzt. Das Kind muss sich auf das Tier
        und die Aufgabe konzentrieren, seine Umgebung wahrnehmen und aufmerksam bleiben. Ablenkungen
        treten in den Hintergrund. Diese Fokussierung, oft spielerisch verpackt, kann Kindern
        helfen, ihre Konzentrationsfähigkeit generell zu verbessern.
      </p>

      <h2>5. Aufbau von Vertrauen & emotionaler Regulation</h2>
      <p>
        Die ruhige, nicht wertende Art der Pferde schafft eine vertrauensvolle Atmosphäre. Kinder
        können Ängste abbauen und lernen, ihre eigenen Emotionen besser zu verstehen und zu
        regulieren. Das Pferd dient als "Co-Therapeut", der Sicherheit gibt und hilft, emotionale
        Blockaden zu lösen. Die körperliche Nähe beim Putzen oder Reiten kann zudem beruhigend und
        erdend wirken.
      </p>

      <hr />

      <p><strong>Unser Ansatz bei "Leben ist ein Ponyhof":</strong></p>
      <p>
        Bei uns steht das Kind mit seinen individuellen Bedürfnissen im Mittelpunkt. Sarah nutzt
        ihre pädagogische Erfahrung und die Weiterbildung zur Reittherapeutin, um die Einheiten
        spielerisch und förderorientiert zu gestalten. Unsere Ponys sind dabei geduldige und
        einfühlsame Partner.
      </p>
      <p>
        Möchten Sie mehr darüber erfahren, ob Reittherapie für Ihr Kind geeignet ist?
        <NuxtLink to="/contact?subject=Beratung Reittherapie"
          >Kontaktieren Sie uns gerne für ein unverbindliches Gespräch!</NuxtLink
        >
      </p>

      <!-- Share Buttons -->
      <div
        class="blog-share-buttons mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center not-prose"
      >
        <h3 class="text-base font-semibold mb-3 text-gray-600 dark:text-gray-400">
          Teilen Sie diesen Beitrag:
        </h3>
        <div class="flex justify-center gap-3 flex-wrap">
          <a
            :href="`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`"
            target="_blank"
            class="share-button facebook bg-[#3b5998] text-white px-4 py-2 rounded-full text-xs hover:opacity-90 transition-opacity"
            ><i class="fab fa-facebook-f mr-1"></i> Facebook</a
          >
          <a
            :href="`https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareText}`"
            target="_blank"
            class="share-button twitter bg-[#1da1f2] text-white px-4 py-2 rounded-full text-xs hover:opacity-90 transition-opacity"
            ><i class="fab fa-twitter mr-1"></i> Twitter</a
          >
          <a
            :href="`https://pinterest.com/pin/create/button/?url=${currentUrl}&media=${encodedOgImageUrl}&description=${shareText}`"
            target="_blank"
            class="share-button pinterest bg-[#bd081c] text-white px-4 py-2 rounded-full text-xs hover:opacity-90 transition-opacity"
            ><i class="fab fa-pinterest-p mr-1"></i> Pinterest</a
          >
          <a
            :href="`https://api.whatsapp.com/send?text=${shareText} ${currentUrl}`"
            target="_blank"
            class="share-button whatsapp bg-[#25d366] text-white px-4 py-2 rounded-full text-xs hover:opacity-90 transition-opacity"
            ><i class="fab fa-whatsapp mr-1"></i> WhatsApp</a
          >
        </div>
      </div>

      <p class="mt-8 text-center not-prose">
        <NuxtLink
          to="/blog"
          class="back-link inline-block text-sm bg-gray-200 dark:bg-gray-600 px-5 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
        >
          ← Zurück zum Blog
        </NuxtLink>
      </p>
    </article>
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
  const pageTitle = 'Die Magie der Reittherapie: 5 Wege, wie Pferde Kindern helfen'
  const pageDescription =
    'Entdecken Sie, wie Reittherapie bei Kindern Selbstbewusstsein, Motorik, soziale Kompetenz, Konzentration und Vertrauen fördert. Angebot in Renningen/Leonberg.'
  const pageImage = `${siteUrl}/images/Therapie-mit-Ball.webp` // Hauptbild für Sharing - BITTE ERSETZEN
  const publishDate = '2024-07-25' // Aktuelles Datum als Beispiel
  const formattedDate = computed(() => dayjs(publishDate).format('DD. MMMM YYYY'))

  const shareText = encodeURIComponent(pageTitle)
  const encodedOgImageUrl = encodeURIComponent(pageImage)

  useHead({
    title: pageTitle,
    titleTemplate: '%s | Leben ist ein Ponyhof Blog',
    meta: [
      { name: 'description', content: pageDescription },
      {
        name: 'keywords',
        content:
          'Reittherapie Wirkung, heilpädagogisches Reiten Vorteile, Förderung Kinder Pferde, Selbstbewusstsein Pferd, Motorik Reiten, soziale Kompetenz Tiere, Konzentration fördern, Vertrauen aufbauen, Reittherapie Renningen, Reittherapie Leonberg',
      },
      // --- OG & Twitter ---
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:url', content: currentUrl.value },
      { property: 'og:image', content: pageImage }, // Platzhalter ersetzen!
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: `${publishDate}T10:00:00+02:00` }, // Zeit anpassen
      { property: 'article:author', content: 'Sarah Handte' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDescription },
      { name: 'twitter:image', content: pageImage }, // Platzhalter ersetzen!
    ],
    link: [{ rel: 'canonical', href: currentUrl.value }],
    // --- Schema.org ---
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: pageTitle,
          description: pageDescription,
          image: pageImage, // Platzhalter ersetzen!
          datePublished: publishDate,
          author: { '@type': 'Person', name: 'Sarah Handte', url: `${siteUrl}/about` }, // Link zur Autorin
          publisher: {
            '@type': 'Organization',
            name: 'Leben ist ein Ponyhof',
            logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logos/favicon.svg` },
          },
          mainEntityOfPage: { '@type': 'WebPage', '@id': currentUrl.value },
          // Optional: Keywords als about
          about: [
            { '@type': 'Thing', name: 'Reittherapie' },
            { '@type': 'Thing', name: 'Heilpädagogisches Reiten' },
            { '@type': 'Thing', name: 'Kinderförderung' },
            { '@type': 'Thing', name: 'Pferdegestützte Therapie' },
          ],
        }),
      },
    ],
  })
</script>

<style>
  /* Tailwind Prose kümmert sich drum */
</style>
