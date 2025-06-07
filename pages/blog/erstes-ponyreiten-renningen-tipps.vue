<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">
        {{ pageContent.title }}
      </h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        {{ pageContent.subtitle }}
      </p>
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
        Die Aufregung ist groß, das Herz klopft ein bisschen schneller – das erste Mal Ponyreiten ist ein ganz besonderes Erlebnis für Kinder! Auf unserem Ponyhof in <strong>{{ businessAddress.city }}</strong> möchten wir diesen Moment unvergesslich machen und sowohl den kleinen Reitanfängern als auch ihren Eltern Sicherheit und Freude vermitteln.
      </p>

      <figure class="my-8">
        <NuxtImg
          :src="pageContent.mainImage.src"
          :alt="pageContent.mainImage.alt"
          class="blog-image w-full max-w-2xl mx-auto rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          @click="lightbox.open(pageContent.mainImage.src, pageContent.mainImage.alt)"
          loading="eager" format="webp" quality="80" :width="pageContent.mainImage.width" :height="pageContent.mainImage.height" densities="1x 2x"
        />
        <figcaption class="text-center text-sm mt-2 text-gray-500 dark:text-gray-400">
          Behutsames Kennenlernen beim ersten Ponyreiten in {{ businessAddress.city }}.
        </figcaption>
      </figure>

      <h2>Vorbereitung: Was Eltern tun können</h2>
      <p>
        Eine gute Vorbereitung kann helfen, die Aufregung in positive Vorfreude zu verwandeln:
      </p>
      <ul>
        <li><strong>Passende Kleidung:</strong> Ziehen Sie Ihrem Kind bequeme, lange Hosen (z.B. Leggings oder Jogginghose) und feste, geschlossene Schuhe an. Ein Fahrradhelm ist Pflicht – wir haben aber auch Leihhelme vor Ort auf unserem Hof in {{ businessAddress.city }}.</li>
        <li><strong>Über Pferde sprechen:</strong> Lesen Sie gemeinsam Bücher über Ponys oder schauen Sie kindgerechte Filme. Erzählen Sie positive Geschichten und erklären Sie, dass Ponys liebe Tiere sind, aber auch Respekt brauchen.</li>
        <li><strong>Ängste ernst nehmen:</strong> Hat Ihr Kind Bedenken? Sprechen Sie darüber und versichern Sie ihm, dass alles ganz langsam und sicher abläuft und es zu nichts gezwungen wird.</li>
      </ul>

      <h2>Auf dem Ponyhof in {{ businessAddress.city }}: Die ersten Schritte</h2>
      <p>
        Bei uns beginnt das Abenteuer Ponyreiten ganz sanft:
      </p>
      <ol>
        <li><strong>Das Kennenlernen:</strong> Zuerst darf Ihr Kind das Pony in Ruhe begrüßen, es beobachten und vielleicht schon vorsichtig streicheln. Unsere Ponys sind den Umgang mit Kindern gewöhnt und sehr geduldig.</li>
        <li><strong>Putzen und Striegeln:</strong> Gemeinsam machen wir das Pony hübsch! Mit weichen Bürsten wird das Fell gepflegt. Das schafft Vertrauen und eine erste Verbindung.</li>
        <li><strong>Der große Moment – Aufsteigen:</strong> Mit unserer Hilfe steigt Ihr Kind sicher auf das Pony. Wir achten darauf, dass es sich wohlfühlt.</li>
        <li><strong>Geführte Runden:</strong> Die ersten Schritte auf dem Ponyrücken sind immer geführt. Langsam und sicher erkunden wir den Platz oder machen eine kleine Runde auf unserem Hofgelände in {{ businessAddress.city }}. Der Fokus liegt auf dem Gefühl für die Bewegung und dem Spaß.</li>
      </ol>

      <figure class="my-8">
        <!-- KORRIGIERTES NuxtImg TAG -->
        <NuxtImg
          src="/images/ponyreiten/Napoleon-mit-Sattel.webp"
          :alt="`Kind sitzt stolz auf Shetty Napoleon beim Ponyreiten in ${businessAddress.city}`"
          class="blog-image w-full max-w-xl mx-auto rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          @click="lightbox.open('/images/ponyreiten/Napoleon-mit-Sattel.webp', `Sicheres, geführtes Ponyreiten in ${businessAddress.city}`)"
          loading="lazy" format="webp" quality="75" width="600" height="800" densities="1x 2x"
        />
        <!-- HTML-Kommentar hier, NACH dem schließenden > des Tags oder außerhalb: -->
        <!-- Das ist unser zweites Bild für diesen Artikel -->
        <figcaption class="text-center text-sm mt-2 text-gray-500 dark:text-gray-400">
          Stolze kleine Reiter beim Ponyreiten auf unserem Hof in {{ businessAddress.city }}.
        </figcaption>
      </figure>

      <h2>Tipps für entspannte Eltern</h2>
      <ul>
        <li><strong>Bleiben Sie ruhig und positiv:</strong> Ihre Ausstrahlung überträgt sich auf Ihr Kind.</li>
        <li><strong>Vertrauen Sie uns und Ihrem Kind:</strong> Wir haben Erfahrung und Ihr Kind schafft das!</li>
        <li><strong>Nicht drängen:</strong> Jedes Kind hat sein eigenes Tempo.</li>
        <li><strong>Loben und ermutigen:</strong> Jeder kleine Schritt ist ein Erfolg.</li>
        <li><strong>Genießen Sie den Moment:</strong> Es ist ein besonderes Erlebnis!</li>
      </ul>

      <h2>Mehr als nur Reiten: Was Ihr Kind beim Ponykontakt in {{ businessAddress.city }} lernt</h2>
      <p>
        Der Umgang mit Ponys fördert so viel mehr als nur das Reiten selbst. Ihr Kind trainiert Balance und Koordination, stärkt sein Selbstvertrauen, lernt Verantwortung zu übernehmen und entwickelt Empathie für ein anderes Lebewesen. Und das alles spielerisch und mit viel Freude hier bei uns in {{ businessAddress.city }}.
      </p>

      <hr />

      <p class="text-lg font-semibold">Lust auf das erste Pony-Abenteuer in {{ businessAddress.city }} bekommen?</p>
      <p>
        Wir freuen uns darauf, Ihrem Kind die wunderbare Welt der Ponys näherzubringen. Vereinbaren Sie gerne eine <NuxtLink :to="{path: '/contact', query: {subject: `Anfrage Schnupperstunde Ponyreiten ${businessAddress.city}`}}">Schnupperstunde für Ponyreiten</NuxtLink> bei uns in {{ businessAddress.city }} oder informieren Sie sich über unsere weiteren <NuxtLink to="/angebote">Angebote</NuxtLink>.
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
// Der <script setup> Teil bleibt unverändert wie in der vorherigen Antwort.
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
  title: `Das erste Mal Ponyreiten in ${businessAddress.city}`,
  subtitle: "Tipps für aufgeregte Kids & entspannte Eltern auf unserem Ponyhof.",
  navTitle: "Erstes Ponyreiten Tipps",
  readTime: "ca. 6 Min. Lesezeit",
  publishDate: '2024-08-05',
  mainImage: {
    src: '/images/mini-zwergenbande.webp',
    alt: `Kind lernt Pony auf dem Ponyhof in ${businessAddress.city} kennen`,
    width: 800,
    height: 533,
  },
});

const formattedDate = computed(() => dayjs(pageContent.value.publishDate).format('DD. MMMM YYYY'));

useMySeoMeta({
  title: pageContent.value.title,
  description: `Tipps und Infos für das erste Ponyreiten Ihres Kindes in ${businessAddress.city}. So wird der erste Kontakt mit Ponys zu einem positiven Erlebnis.`,
  keywords: `erstes Ponyreiten ${businessAddress.city}, Reiten Anfänger Kinder ${businessAddress.city}, Tipps Ponyreiten Kinder, Ponyhof ${businessAddress.city} Anfänger`,
  ogImage: `${siteUrl}${pageContent.value.mainImage.src}`,
  ogImageAlt: pageContent.value.mainImage.alt,
  ogType: 'article',
  articleDetails: {
    publishedTime: `${pageContent.value.publishDate}T09:00:00+02:00`,
    authorName: 'Sarah Handte',
    section: 'Ponyreiten Tipps',
    tags: ['Ponyreiten', 'Anfänger', 'Kinder', businessAddress.city, 'Tipps'],
  },
  ldJson: [
    {
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
      'description': `Tipps und Infos für das erste Ponyreiten Ihres Kindes in ${businessAddress.city}. So wird der erste Kontakt mit Ponys zu einem positiven Erlebnis.`,
      'mainEntityOfPage': { '@type': 'WebPage', '@id': `${siteUrl}${route.fullPath}` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': `Wie bereite ich mein Kind auf das erste Ponyreiten in ${businessAddress.city} vor?`,
      'description': 'Eine Anleitung für Eltern, um Kindern einen entspannten und freudigen ersten Kontakt mit Ponys zu ermöglichen.',
      'step': [
        { '@type': 'HowToStep', 'text': 'Passende Kleidung auswählen (feste Schuhe, lange Hose).' },
        { '@type': 'HowToStep', 'text': 'Positiv über Pferde sprechen und Ängste des Kindes ernst nehmen.' },
        { '@type': 'HowToStep', 'text': 'Das Kind das Pony in Ruhe kennenlernen und streicheln lassen.' },
        { '@type': 'HowToStep', 'text': 'Beim Putzen und Striegeln helfen lassen, um Vertrauen aufzubauen.' },
        { '@type': 'HowToStep', 'text': 'Sicher und mit Unterstützung auf das geführte Pony aufsteigen lassen.' },
        { '@type': 'HowToStep', 'text': 'Als Elternteil Ruhe bewahren und das Kind loben und ermutigen.' }
      ],
      'estimatedCost': { '@type': 'MonetaryAmount', 'currency': 'EUR', 'value': '25' },
      'supply': [
        { '@type': 'HowToSupply', 'name': 'Feste Schuhe' },
        { '@type': 'HowToSupply', 'name': 'Lange Hose' },
        { '@type': 'HowToSupply', 'name': 'Reit- oder Fahrradhelm (Leihhelme verfügbar)' }
      ],
      'tool': [
        { '@type': 'HowToTool', 'name': 'Putzzeug (wird gestellt)' },
        { '@type': 'HowToTool', 'name': 'Geduldiges Pony (wird gestellt)' }
      ]
    }
  ]
});
</script>

<style scoped>
.lead-paragraph {
  @apply text-lg font-medium text-gray-700 dark:text-gray-300;
}
</style>