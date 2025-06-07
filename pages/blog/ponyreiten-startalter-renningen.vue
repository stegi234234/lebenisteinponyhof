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
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li aria-current="page">{{ pageContent.navTitle || pageContent.title }}</li>
      </ol>
    </nav>

    <article class="content container mx-auto max-w-3xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md prose dark:prose-invert prose-a:text-primary-color dark:prose-a:text-primary-light prose-headings:text-gray-800 dark:prose-headings:text-white">
      <p class="lead-paragraph text-lg">
        Viele Eltern in <strong>{{ businessAddress.city }}</strong> und Umgebung fragen sich: "Ab welchem Alter ist mein Kind bereit für das erste Ponyreiten?" Diese Frage ist absolut berechtigt, denn ein positiver erster Kontakt mit Pferden kann die Grundlage für eine lebenslange Leidenschaft legen. Auf unserem Ponyhof "Leben ist ein Ponyhof" in {{ businessAddress.city }} haben wir viel Erfahrung mit kleinen Reitanfängern und möchten Ihnen hier einige Anhaltspunkte geben.
      </p>

      <figure class="my-8">
        <NuxtImg
          :src="pageContent.mainImage.src"
          :alt="pageContent.mainImage.alt"
          class="blog-image w-full max-w-2xl mx-auto rounded-lg shadow-md cursor-pointer"
          @click="lightbox.open(pageContent.mainImage.src, pageContent.mainImage.alt)"
          loading="eager" format="webp" quality="80" :width="pageContent.mainImage.width" :height="pageContent.mainImage.height" densities="1x 2x"
          sizes="(max-width: 767px) 100vw, 768px"
        />
        <figcaption class="text-center text-sm mt-2 text-gray-500 dark:text-gray-400">
          Behutsamer Erstkontakt: Kinder lernen Ponys auf unserem Hof in {{ businessAddress.city }} kennen.
        </figcaption>
      </figure>

      <h2>Das "richtige" Alter gibt es nicht – die Reife zählt!</h2>
      <p>
        Es gibt keine starre Altersgrenze für das erste <strong>Ponyreiten in {{ businessAddress.city }}</strong>. Viel wichtiger als das biologische Alter sind die individuelle Entwicklung und Reife des Kindes:
      </p>
      <ul>
        <li><strong>Körperliche Entwicklung:</strong> Kann das Kind bereits für eine gewisse Zeit ruhig sitzen und sich festhalten? Ist eine grundlegende Körperspannung vorhanden? Für unsere "Mini Zwergen Bande" in {{ businessAddress.city }} sind Kinder ab ca. 3-4 Jahren oft schon bereit für erste geführte Kontakte und kurze Momente auf dem Ponyrücken.</li>
        <li><strong>Emotionale Reife:</strong> Zeigt das Kind Interesse an Tieren und speziell an Pferden? Kann es einfachen Anweisungen folgen? Ist es neugierig und nicht übermäßig ängstlich?</li>
        <li><strong>Konzentrationsfähigkeit:</strong> Auch kurze Reiteinheiten erfordern ein gewisses Maß an Konzentration.</li>
      </ul>
      <p>
        Generell lässt sich sagen, dass Kinder <strong>ab etwa 3-4 Jahren</strong> erste spielerische Erfahrungen beim geführten Ponyreiten sammeln können. Für intensiveren Unterricht oder längere Ausritte ist ein Alter ab ca. 6-7 Jahren oft passender.
      </p>

      <h2>Was erwartet Ihr Kind beim ersten Ponyreiten in {{ businessAddress.city }}?</h2>
      <p>
        Bei uns auf dem "Leben ist ein Ponyhof" in {{ businessAddress.city }} legen wir größten Wert auf einen sanften und positiven Einstieg:
      </p>
      <ol>
        <li><strong>Kennenlernen & Vertrauen aufbauen:</strong> Zuerst darf das Kind das Pony in Ruhe begrüßen, streicheln und seine Wärme spüren. (Bild: `/images/mini-zwergenbande.webp` könnte hier passen)</li>
        <li><strong>Putzen & Pflegen:</strong> Gemeinsam wird das Pony gestriegelt und für das Reiten vorbereitet. Das schafft eine erste Verbindung und macht riesigen Spaß.</li>
        <li><strong>Sicher aufsteigen:</strong> Mit viel Geduld und Unterstützung helfen wir dem Kind auf den Ponyrücken.</li>
        <li><strong>Geführtes Reiten:</strong> Die ersten Runden sind immer geführt. Wir achten darauf, dass sich das Kind sicher fühlt und die Bewegungen des Ponys genießen kann. Kleine Spiele oder das Reiten durch einen einfachen Parcours auf unserem Platz in {{ businessAddress.city }} sorgen für Abwechslung.</li>
        <li><strong>Lob & positive Verstärkung:</strong> Jeder kleine Erfolg wird gefeiert!</li>
      </ol>

      <figure class="my-8">
        <NuxtImg
          src="/images/ponyreiten/Napoleon-mit-Sattel-2.webp"
          :alt="`Sicheres geführtes Ponyreiten für Anfänger auf unserem Hof in ${businessAddress.city}`"
          class="blog-image w-full max-w-xl mx-auto rounded-lg shadow-md cursor-pointer"
          @click="lightbox.open('/images/ponyreiten/Napoleon-mit-Sattel-2.webp', `Napoleon ist ein beliebtes Pony für Anfänger in ${businessAddress.city}`)"
          loading="lazy" format="webp" quality="75" width="400" height="300" densities="1x 2x"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 600px"
        />
        <figcaption class="text-center text-sm mt-2 text-gray-500 dark:text-gray-400">
          Geführtes Reiten auf unseren braven Ponys bietet Sicherheit für die ersten Reitversuche in {{ businessAddress.city }}.
        </figcaption>
      </figure>

      <h2>Vorteile des frühen Ponykontakts</h2>
      <p>
        Ein früher, positiver Kontakt mit Ponys kann die Entwicklung Ihres Kindes in vielerlei Hinsicht bereichern:
      </p>
      <ul>
        <li>Förderung von Gleichgewicht und Körpergefühl.</li>
        <li>Stärkung des Selbstbewusstseins.</li>
        <li>Aufbau von Verantwortungsgefühl und Empathie.</li>
        <li>Liebe zur Natur und zu Tieren entdecken.</li>
      </ul>
      <p>
        Unser Angebot für <strong>Ponyreiten in {{ businessAddress.city }}</strong> ist darauf ausgelegt, diese positiven Aspekte spielerisch zu vermitteln.
      </p>

      <hr />

      <p class="text-lg font-semibold">Sind Sie bereit für das erste Pony-Abenteuer Ihres Kindes in {{ businessAddress.city }}?</p>
      <p>
        Wir laden Sie herzlich ein, unseren Ponyhof in {{ businessAddress.city }} zu besuchen und uns kennenzulernen. Für die ganz Kleinen empfehlen wir unsere <NuxtLink :to="{path: '/blog/zwergen-bande'}">Mini Zwergen Bande</NuxtLink> oder eine individuelle <NuxtLink :to="{path: '/contact', query: {subject: `Anfrage Schnupperstunde Ponyreiten ${businessAddress.city}`}}">Schnupperstunde für Ponyreiten</NuxtLink>.
      </p>
      <p>
        Für ältere Kinder und fortgeschrittenere Reiter bieten wir ebenfalls passende <NuxtLink :to="{path: '/angebote', hash:'#ponyreiten'}">Reitangebote und Ausritte in {{ businessAddress.city }}</NuxtLink> an.
      </p>

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
import { ref, computed } from 'vue';
import { useRoute, useRuntimeConfig } from '#app';
import { useMySeoMeta } from '~/composables/useMySeoMeta';
import { NuxtLink, NuxtImg } from '#components';
import { useLightbox } from '~/composables/useLightbox';
import dayjs from 'dayjs';
import 'dayjs/locale/de';

dayjs.locale('de');

const lightbox = useLightbox();
const route = useRoute();
const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl;
const businessAddress = config.public.businessAddress;

const pageContent = ref({
  title: `Ponyreiten ${businessAddress.city}: Das perfekte Alter für den Start`,
  subtitle: "Wann ist Ihr Kind bereit für das erste Abenteuer auf dem Ponyrücken? Infos und Tipps von unserem Ponyhof.",
  navTitle: "Startalter Ponyreiten",
  readTime: "ca. 5 Min. Lesezeit",
  publishDate: '2024-08-19', // Beispiel-Datum
  mainImage: {
    src: '/images/Pferde/Coco-angemalt-1.webp', // Wähle ein passendes, einladendes Bild
    alt: `Kind macht erste Erfahrungen beim Ponyreiten auf dem Hof in ${businessAddress.city}`,
    width: 1200, // Anpassen
    height: 800,  // Anpassen
  },
});
const formattedDate = computed(() => dayjs(pageContent.value.publishDate).format('DD. MMMM YYYY'));

useMySeoMeta({
  title: pageContent.value.title,
  description: `Ab welchem Alter ist Ponyreiten in ${businessAddress.city} sinnvoll? Erfahren Sie, was Ihr Kind bei uns erwartet und wie wir den ersten Kontakt zum Pony gestalten.`,
  keywords: `Ponyreiten Alter ${businessAddress.city}, Reiten Kinder ab wann ${businessAddress.city}, Ponyhof Anfänger ${businessAddress.city}, Schnupperreiten Kinder ${businessAddress.city}, Reiten lernen ${businessAddress.city}`,
  ogImage: `${siteUrl}${pageContent.value.mainImage.src}`,
  ogImageAlt: `Informationen zum Startalter für Ponyreiten in ${businessAddress.city}`,
  ogType: 'article',
  articleDetails: {
    publishedTime: `${pageContent.value.publishDate}T09:00:00+02:00`,
    authorName: 'Sarah Handte',
    section: 'Ponyreiten für Anfänger',
    tags: ['Ponyreiten', 'Kinder', 'Anfänger', businessAddress.city, 'Altersempfehlung', 'Reitstart'],
  },
  ldJson: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': pageContent.value.title,
    'image': `${siteUrl}${pageContent.value.mainImage.src}`,
    'datePublished': `${pageContent.value.publishDate}T09:00:00+02:00`,
    'author': { '@type': 'Person', 'name': 'Sarah Handte' },
    'publisher': {
      '@type': 'Organization',
      'name': `Leben ist ein Ponyhof ${businessAddress.city}`,
      'logo': { '@type': 'ImageObject', 'url': `${siteUrl}/images/logos/favicon.svg` }
    },
    'description': `Ab welchem Alter ist Ponyreiten in ${businessAddress.city} sinnvoll? Erfahren Sie, was Ihr Kind bei uns erwartet und wie wir den ersten Kontakt zum Pony gestalten.`,
    'mainEntityOfPage': { '@type': 'WebPage', '@id': `${siteUrl}${route.fullPath}` },
    'about': [
      { "@type": "Thing", "name": "Ponyreiten für Kinder" },
      { "@type": "Thing", "name": "Altersempfehlung Reiten" },
      { "@type": "Place", "name": businessAddress.city }
    ]
  }
});
</script>

<style scoped>
.lead-paragraph {
  @apply text-lg font-medium text-gray-700 dark:text-gray-300;
}
</style>