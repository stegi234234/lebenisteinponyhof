// pages/blog/umgang-jungpferde.vue
<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Tipps für den Umgang mit jungen Pferden</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Geduld, Vertrauen & die richtige Förderung – So wird dein Jungpferd zum Partner.</p>
      <div class="blog-meta text-sm text-gray-500 dark:text-gray-400 mt-4">
        <span class="date mr-4"><i class="far fa-calendar mr-1"></i> {{ formattedDate }}</span>
        <span class="read-time"><i class="far fa-clock mr-1"></i> 7 Min. Lesezeit</span>
      </div>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li aria-current="page">Umgang mit Jungpferden</li>
      </ol>
    </nav>

    <article class="content container mx-auto max-w-4xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">

      <!-- Einleitungstext -->
      <div class="prose dark:prose-invert lg:prose-lg mx-auto mb-8">
        <p class="lead-paragraph text-lg">
          Junge Pferde sind wie unbeschriebene Blätter – voller Potenzial, Neugier, aber auch Unsicherheit.
          Die Ausbildung eines Jungpferdes erfordert eine besondere Herangehensweise, die auf <strong>Geduld, Vertrauen</strong>
          und positiver Verstärkung basiert. In diesem Artikel teilen wir unsere Erfahrungen und geben dir wertvolle Tipps,
          wie du dein junges Pferd Schritt für Schritt an neue Herausforderungen gewöhnst und eine starke Bindung aufbaust.
        </p>
      </div>

      <!-- Bild mit Lightbox -->
      <div class="image-container mb-8">
        <NuxtImg
          src="/images/Pferde/Kylo.webp"
          :alt="`Jungpferd Kylo im Training`"
          alt="Jungpferd im Training"
          width="800"
          height="533"
          format="webp"
          quality="70"
          @click="lightbox.open('/assets/images/jungpferd-training.webp')"
          class="rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        />
        </div>

      <!-- Zitat als besonderes Element -->
      <div class="quote-block my-10 px-6 py-8 bg-primary-color/10 dark:bg-primary-light/10 border-l-4 border-primary-color dark:border-primary-light rounded-lg text-center relative">
        <i class="fas fa-quote-left text-4xl text-primary-color/30 dark:text-primary-light/30 absolute top-4 left-4"></i>
        <p class="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 mb-4">
          „Ohne Vertrauen gibt es kein gutes Training. Junge Pferde lernen besonders schnell und nachhaltig,
          wenn du ihre Körpersignale wahrnimmst, klare Regeln aufstellst und gleichzeitig <em>spielerisch</em> und fair vorgehst."
        </p>
        <p class="text-right font-medium text-gray-600 dark:text-gray-400">– Sarah Handte</p>
      </div>

      <!-- Schlüsselprinzipien als Kacheln -->
      <div class="principles-section mt-16">
        <h2 class="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-white">
          <i class="fas fa-key mr-2 text-primary-color dark:text-primary-light"></i>
          Die 3 Schlüsselprinzipien im Umgang mit Jungpferden
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="principle-card bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 border-t-4 border-primary-color dark:border-primary-light transition-transform hover:-translate-y-1 duration-300">
            <div class="icon-container flex justify-center mb-4">
              <div class="w-16 h-16 flex items-center justify-center rounded-full bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light">
                <i class="fas fa-heart text-3xl"></i>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center text-gray-800 dark:text-white">1. Vertrauen als Basis</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Die wichtigste Grundlage für jede erfolgreiche Ausbildung. Baut eine solide Beziehung auf,
              bevor ihr mit anspruchsvollerem Training beginnt.
            </p>
          </div>

          <div class="principle-card bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 border-t-4 border-primary-color dark:border-primary-light transition-transform hover:-translate-y-1 duration-300">
            <div class="icon-container flex justify-center mb-4">
              <div class="w-16 h-16 flex items-center justify-center rounded-full bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light">
                <i class="fas fa-comments text-3xl"></i>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center text-gray-800 dark:text-white">2. Klare Kommunikation</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Lerne die Körpersprache deines Pferdes zu lesen und achte auf deine eigenen Signale.
              Konsequenz und Klarheit geben Sicherheit.
            </p>
          </div>

          <div class="principle-card bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 border-t-4 border-primary-color dark:border-primary-light transition-transform hover:-translate-y-1 duration-300">
            <div class="icon-container flex justify-center mb-4">
              <div class="w-16 h-16 flex items-center justify-center rounded-full bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light">
                <i class="fas fa-puzzle-piece text-3xl"></i>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-center text-gray-800 dark:text-white">3. Spielerisches Lernen</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Kurze, abwechslungsreiche und motivierende Trainingseinheiten fördern die Lernbereitschaft
              und vermeiden Überforderung oder Langeweile.
            </p>
          </div>
        </div>
      </div>

      <!-- Akkordeon-Menü für detaillierte Tipps -->
      <div class="detailed-tips mt-16">
        <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
          <i class="fas fa-lightbulb mr-2 text-primary-color dark:text-primary-light"></i>
          Ausführliche Tipps und Techniken
        </h2>

        <div class="space-y-4 mt-6">
          <!-- Vertrauen als Basis -->
          <div class="tip-item border dark:border-gray-600 rounded-lg overflow-hidden">
            <div
              class="tip-header p-4 flex justify-between items-center cursor-pointer bg-gray-50 dark:bg-gray-700"
              @click="toggleTip(0)"
            >
              <h3 class="text-lg font-medium text-gray-800 dark:text-white flex items-center">
                <i class="fas fa-heart text-primary-color dark:text-primary-light mr-3"></i>
                1. Vertrauen als Basis – Der Schlüssel zum Erfolg
              </h3>
              <i
                :class="[
                  tips[0].open ? 'fa-chevron-up' : 'fa-chevron-down',
                  'fas text-gray-500 dark:text-gray-400',
                ]"
              ></i>
            </div>
            <div
              v-show="tips[0].open"
              class="tip-content p-5 bg-white dark:bg-gray-800 border-t dark:border-gray-700"
            >
              <p class="text-gray-700 dark:text-gray-300 mb-3">
                Bevor du mit spezifischem Training beginnst, steht der Aufbau einer soliden Vertrauensbasis an erster Stelle.
                Dein Jungpferd muss lernen, dass es sich bei dir sicher fühlen kann.
              </p>
              <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  <strong>Täglicher Kontakt & positive Assoziationen:</strong> Verbringe viel Zeit mit deinem Pferd, auch ohne direkte Anforderungen.
                  Putzen, ruhiges Beobachten auf der Weide, gemeinsames Spazierengehen oder einfach nur Anwesenheit im Stall stärken die Bindung.
                  Verbinde deine Anwesenheit mit positiven Erlebnissen (z.B. eine kleine Krauleinheit, ein freundliches Wort).
                </li>
                <li>
                  <strong>Behutsame Berührung & Gewöhnung:</strong> Beginne mit sanften Berührungen an unempfindlichen Stellen (Hals, Schulter)
                  und arbeite dich langsam vor. Lobe dein Pferd, wenn es ruhig bleibt. Gewöhne es schrittweise an das Halfter, das Putzzeug
                  und später auch an den Sattel oder das Longiergeschirr – immer in kleinen, stressfreien Schritten.
                </li>
                <li>
                  <strong>Ruhiges Umfeld schaffen:</strong> Junge Pferde reagieren sensibel auf ihre Umgebung. Sorge für eine möglichst
                  ruhige und entspannte Atmosphäre während eurer gemeinsamen Zeit. Vermeide Hektik, laute Geräusche oder plötzliche Bewegungen,
                  besonders am Anfang.
                </li>
              </ul>
            </div>
          </div>

          <!-- Die richtige Körpersprache -->
          <div class="tip-item border dark:border-gray-600 rounded-lg overflow-hidden">
            <div
              class="tip-header p-4 flex justify-between items-center cursor-pointer bg-gray-50 dark:bg-gray-700"
              @click="toggleTip(1)"
            >
              <h3 class="text-lg font-medium text-gray-800 dark:text-white flex items-center">
                <i class="fas fa-comments text-primary-color dark:text-primary-light mr-3"></i>
                2. Die richtige Körpersprache – Klar und fair kommunizieren
              </h3>
              <i
                :class="[
                  tips[1].open ? 'fa-chevron-up' : 'fa-chevron-down',
                  'fas text-gray-500 dark:text-gray-400',
                ]"
              ></i>
            </div>
            <div
              v-show="tips[1].open"
              class="tip-content p-5 bg-white dark:bg-gray-800 border-t dark:border-gray-700"
            >
              <p class="text-gray-700 dark:text-gray-300 mb-3">
                Pferde kommunizieren hauptsächlich über Körpersprache. Lerne, die Signale deines Pferdes zu lesen (Ohrenstellung,
                Schweifhaltung, Muskelspannung) und achte gleichzeitig auf deine eigene Ausstrahlung.
              </p>
              <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  <strong>Sei präsent und ruhig:</strong> Atme tief durch und sei mental bei deinem Pferd. Deine innere Ruhe überträgt sich.
                </li>
                <li>
                  <strong>Klare, faire Signale:</strong> Setze deine Körpersprache bewusst ein. Eine aufrechte, aber entspannte Haltung
                  signalisiert Führung, ohne zu bedrohen. Vermeide es, direkt auf dein Pferd zuzustürmen oder es anzustarren.
                </li>
                <li>
                  <strong>Raum respektieren:</strong> Achte auf den persönlichen Raum deines Pferdes. Wenn es zurückweicht,
                  gib ihm kurz den Raum und versuche es dann erneut mit mehr Ruhe.
                </li>
                <li>
                  <strong>Konsequenz ist wichtig:</strong> Klare Regeln, die immer gelten, geben dem Jungpferd Sicherheit und Orientierung.
                  Sei konsequent, aber immer fair und ohne Gewalt.
                </li>
              </ul>
            </div>
          </div>

          <!-- Spielerisches Training -->
          <div class="tip-item border dark:border-gray-600 rounded-lg overflow-hidden">
            <div
              class="tip-header p-4 flex justify-between items-center cursor-pointer bg-gray-50 dark:bg-gray-700"
              @click="toggleTip(2)"
            >
              <h3 class="text-lg font-medium text-gray-800 dark:text-white flex items-center">
                <i class="fas fa-puzzle-piece text-primary-color dark:text-primary-light mr-3"></i>
                3. Spielerisches Training – Lernen mit Freude
              </h3>
              <i
                :class="[
                  tips[2].open ? 'fa-chevron-up' : 'fa-chevron-down',
                  'fas text-gray-500 dark:text-gray-400',
                ]"
              ></i>
            </div>
            <div
              v-show="tips[2].open"
              class="tip-content p-5 bg-white dark:bg-gray-800 border-t dark:border-gray-700"
            >
              <p class="text-gray-700 dark:text-gray-300 mb-3">
                Besonders junge Pferde lernen am besten, wenn das Training abwechslungsreich ist und Spaß macht.
                Überfordere dein Pferd nicht mit zu langen Einheiten.
              </p>
              <ol class="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  <strong>Führtraining als Grundlage:</strong> Beginne mit einfachen Führübungen auf dem Platz oder im Gelände.
                  Übe Anhalten, Rückwärtsrichten und das Folgen auf beiden Händen. Variiere den Untergrund und baue kleine Hindernisse
                  (Stangen, Plane) ein, sobald Vertrauen da ist.
                </li>
                <li>
                  <strong>Bodenarbeit & Gelassenheit:</strong> Nutze Pylonen, Stangen, Planen oder Flatterbänder, um dein Pferd spielerisch
                  an neue Reize zu gewöhnen (Gelassenheitstraining). Elemente aus dem Horsemanship oder Zirkuslektionen können ebenfalls
                  motivierend sein.
                </li>
                <li>
                  <strong>Target-Training:</strong> Mit einem "Target" (z.B. einem Ball an einem Stock) kannst du deinem Pferd beibringen,
                  auf Kommando Objekte zu berühren oder dir zu folgen. Das fördert die Mitarbeit und Konzentration.
                </li>
                <li>
                  <strong>Positives Verstärken:</strong> Lobe dein Pferd sofort für gewünschtes Verhalten – verbal, mit einer Streicheleinheit
                  oder einem kleinen Leckerli (sparsam einsetzen!). Beende jede Trainingseinheit mit einem Erfolgserlebnis.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <!-- Expert-Tipp Karte -->
      <div class="expert-tip mt-16 bg-green-50 dark:bg-green-900/30 rounded-xl shadow-lg overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/4 bg-green-100 dark:bg-green-800/50 flex items-center justify-center p-6">
            <div class="text-center">
              <i class="fas fa-star text-green-600 dark:text-green-400 text-4xl mb-3"></i>
              <h3 class="text-xl font-bold text-green-800 dark:text-green-300">Extra-Tipp</h3>
            </div>
          </div>
          <div class="md:w-3/4 p-6">
            <p class="text-green-800 dark:text-green-200 mb-0">
              <strong>Beobachte dein Pferd genau!</strong> Kurze Trainingseinheiten (10-15 Minuten) mit hoher Konzentration
              sind oft effektiver als lange, ermüdende Lektionen. Achte auf Anzeichen von Müdigkeit oder Überforderung und
              mache rechtzeitig eine Pause oder beende das Training positiv.
            </p>
          </div>
        </div>
      </div>

      <!-- Fazit -->
      <div class="conclusion mt-16 p-8 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
        <h2 class="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
          <i class="fas fa-check-circle mr-2 text-primary-color dark:text-primary-light"></i>
          Fazit
        </h2>
        <p class="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
          Der Umgang mit jungen Pferden ist eine unglaublich bereichernde Erfahrung. Mit Geduld, Einfühlungsvermögen,
          klarer Kommunikation und einer positiven Herangehensweise legst du den Grundstein für eine lebenslange Partnerschaft.
          Denke daran: Jeder Schritt zählt, und die Beziehung zu deinem Pferd ist wichtiger als schnelle Trainingserfolge.
        </p>
      </div>

      <!-- Kontakt-Box -->
      <div class="contact-box mt-10 flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600">
        <div class="md:w-3/4">
          <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Hast du Fragen zur Jungpferdeausbildung?</h3>
          <p class="text-gray-600 dark:text-gray-300">Wir helfen dir gerne mit individuellen Tipps für dein Jungpferd.</p>
        </div>
        <div class="md:w-1/4 mt-4 md:mt-0 text-center">
          <AppButton
            :to="{ path: '/contact', query: { subject: 'Frage Jungpferde' } }"
            variant="primary"
            size="lg"
          >
            Kontaktiere uns <i class="fas fa-envelope ml-2"></i>
          </AppButton>
        </div>
      </div>

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
import { useHead, useRoute } from '#imports'
import { NuxtLink, NuxtImg } from '#components'
import { useLightbox } from '~/composables/useLightbox'
import AppButton from '~/components/AppButton.vue'
import dayjs from 'dayjs'
import 'dayjs/locale/de'

dayjs.locale('de')

const lightbox = useLightbox()
const route = useRoute()
const siteUrl = 'https://lebenisteinponyhof.de'
const currentUrl = computed(() => `${siteUrl}${route.path}`)
const pageTitle = 'Tipps für den Umgang mit jungen Pferden'
const pageDescription = 'Geduld, Vertrauen & die richtige Förderung: Erfahre, wie du eine starke Bindung zu deinem Jungpferd aufbaust und es fair ausbildest.'
const pageImage = `${siteUrl}/images/Balu.webp` // Generischer Platzhalter
const publishDate = '2025-01-10'
const formattedDate = computed(() => dayjs(publishDate).format('DD. MMMM YYYY'))

const shareText = encodeURIComponent(pageTitle)
const encodedOgImageUrl = encodeURIComponent(pageImage)

useHead({
  title: pageTitle,
  titleTemplate: '%s | Leben ist ein Ponyhof Blog',
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: 'Jungpferde Ausbildung, Jungpferd Training, Vertrauen aufbauen Pferd, Bodenarbeit Jungpferd, Gelassenheitstraining, positive Verstärkung Pferd, Führtraining, junge Pferde fördern' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:url', content: currentUrl.value },
    { property: 'og:image', content: pageImage },
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: `${publishDate}T09:00:00+01:00` },
    { property: 'article:author', content: 'Sarah Handte' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: pageImage },
  ],
  link: [{ rel: 'canonical', href: currentUrl.value }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": pageTitle,
        "description": pageDescription,
        "image": pageImage,
        "datePublished": publishDate,
        "author": { "@type": "Person", "name": "Sarah Handte", "url": `${siteUrl}/about` },
        "publisher": {
          "@type": "Organization",
          "name": "Leben ist ein Ponyhof",
          "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/images/logos/favicon.svg`
          }
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": currentUrl.value }
      })
    }
  ]
})

// Tipps Daten mit State für Accordion
const tips = ref([
  { open: true },  // Vertrauen als Basis
  { open: false }, // Die richtige Körpersprache
  { open: false }  // Spielerisches Training
])

// Toggle Funktion für Accordion
const toggleTip = (index) => {
  tips.value[index].open = !tips.value[index].open
}

// Ähnliche Beiträge - entfernt, da sie auf eigene Assets verweisen
</script>

<style scoped>
/* Lead-Paragraph */
.lead-paragraph {
  font-weight: 500;
  color: theme('colors.gray.700');
}
.dark .lead-paragraph {
  color: theme('colors.gray.200');
}

/* Quote Block */
.quote-block {
  position: relative;
}

/* Principle Cards */
.principle-card {
  transition: all 0.3s ease;
}

/* Tips Accordion */
.tip-header {
  transition: background-color 0.2s ease;
}
.tip-header:hover {
  background-color: theme('colors.gray.100');
}
.dark .tip-header:hover {
  background-color: theme('colors.gray.600');
}

/* Share Buttons */
.share-button {
  transition: all 0.2s ease;
}
.share-button:hover {
  transform: translateY(-2px);
}
</style>