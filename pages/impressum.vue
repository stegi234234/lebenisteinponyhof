<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Impressum</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Angaben gemäß § 5 Telemediengesetz (TMG) und § 18 Abs. 2 Medienstaatsvertrag (MStV)
      </p>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li aria-current="page">Impressum</li>
      </ol>
    </nav>

    <div
      class="content container mx-auto max-w-3xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <!-- Übersichtskarte bleibt gut für schnellen Zugriff -->
      <div class="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-lg mb-8 shadow-sm">
        <h2 class="font-bold text-lg mb-3 text-primary-color dark:text-primary-light">Auf einen Blick</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          <div class="flex items-start">
            <div class="mt-1 mr-3 text-primary-color dark:text-primary-light shrink-0 w-5 text-center">
              <i class="fas fa-user"></i>
            </div>
            <div>
              <h3 class="font-medium text-sm text-gray-700 dark:text-gray-200">Anbieterin</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ businessAddress.responsiblePerson || 'Sarah Handte' }}</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="mt-1 mr-3 text-primary-color dark:text-primary-light shrink-0 w-5 text-center">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h3 class="font-medium text-sm text-gray-700 dark:text-gray-200">Adresse</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ businessAddress.street }}, {{ businessAddress.zip }} {{ businessAddress.city }}</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="mt-1 mr-3 text-primary-color dark:text-primary-light shrink-0 w-5 text-center">
              <i class="fas fa-phone"></i>
            </div>
            <div>
              <h3 class="font-medium text-sm text-gray-700 dark:text-gray-200">Telefon</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <a :href="`tel:${phoneNumberForLink}`" class="hover:underline">{{ phoneNumberDisplay }}</a>
              </p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="mt-1 mr-3 text-primary-color dark:text-primary-light shrink-0 w-5 text-center">
              <i class="fas fa-envelope"></i>
            </div>
            <div>
              <h3 class="font-medium text-sm text-gray-700 dark:text-gray-200">E-Mail</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <a :href="`mailto:${businessAddress.email}`" class="hover:underline">{{ businessAddress.email }}</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="prose dark:prose-invert prose-sm sm:prose-base max-w-none prose-a:text-primary-color dark:prose-a:text-primary-light prose-headings:font-semibold prose-headings:text-gray-800 dark:prose-headings:text-white"
      >
        <h2 class="!mt-0 text-xl font-semibold">
          Anbieterin und Verantwortliche für den Inhalt dieser Website:
        </h2>
        <p>
          <strong>{{ businessAddress.responsiblePerson || 'Sarah Handte' }}</strong><br />
          {{ businessAddress.jobTitle || 'Pädagogische Fachkraft und Erzieherin' }}<br />
          {{ businessAddress.street }}<br />
          {{ businessAddress.zip }} {{ businessAddress.city }}<br />
          Deutschland
        </p>

        <h2 class="text-xl font-semibold">Kontakt:</h2>
        <p>
          Telefon: <a :href="`tel:${phoneNumberForLink}`">{{ phoneNumberDisplay }}</a><br />
          E-Mail: <a :href="`mailto:${businessAddress.email}`">{{ businessAddress.email }}</a>
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          (Bitte beachten Sie, dass wir während der Arbeit mit den Pferden und Kindern nicht immer sofort telefonisch erreichbar sind. Wir rufen aber gerne zurück oder antworten auf Ihre E-Mail.)
        </p>

        <h2 class="text-xl font-semibold">Umsatzsteuer:</h2>
        <p>
          {{ businessAddress.vatInfo || 'Gemäß § 19 UStG wird als Kleinunternehmerin keine Umsatzsteuer ausgewiesen.' }}
        </p>

        <h2 class="text-xl font-semibold">Redaktionell verantwortlich gemäß § 18 Abs. 2 MStV:</h2>
        <p>
          {{ businessAddress.responsiblePerson || 'Sarah Handte' }}<br />
          {{ businessAddress.street }}<br />
          {{ businessAddress.zip }} {{ businessAddress.city }}
        </p>
        <p class="text-sm bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border border-gray-200 dark:border-gray-600">
          <i class="fas fa-info-circle text-primary-color dark:text-primary-light mr-2"></i>
          <em>Hinweis: Die technische Umsetzung, das Design und die Wartung der Website erfolgen durch Tim Steegmüller. Für die Inhalte ist ausschließlich Sarah Handte verantwortlich.</em>
        </p>

        <h2 class="text-xl font-semibold">Berufsrechtliche Angaben (falls zutreffend):</h2>
        <p>
          Berufsbezeichnung: {{ businessAddress.jobTitle || 'Erzieherin' }} (verliehen in der Bundesrepublik Deutschland).
          Sarah Handte arbeitet als pädagogische Fachkraft im Bereich der pferdegestützten Pädagogik und absolviert derzeit eine Weiterbildung zur Reittherapeutin.
          <!-- Ggf. zuständige Kammer oder Aufsichtsbehörde nennen, falls für Erzieher oder Reitpädagogen relevant -->
        </p>

        <h2 class="text-xl font-semibold">Berufshaftpflichtversicherung (WICHTIG für Pferdebetriebe!):</h2>
        <p>
          Name und Sitz des Versicherers: [Name des Versicherers], [Musterstraße 1, PLZ Musterstadt, Deutschland]<br />
          Geltungsraum der Versicherung: [z.B. Deutschlandweit]
          <br /><em>(Hinweis: Bitte unbedingt deine tatsächlichen Versicherungsdaten eintragen! Eine Berufshaftpflicht ist für den Umgang mit Pferden und Kindern unerlässlich.)</em>
        </p>

        <h2 class="text-xl font-semibold">Streitschlichtung:</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p>
          Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2 class="text-xl font-semibold">Haftung für Inhalte:</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h2 class="text-xl font-semibold">Haftung für Links:</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        <h2 class="text-xl font-semibold">Urheberrecht:</h2>
        <p>
          Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autorin bzw. Erstellerin. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht von der Betreiberin erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>

        <h2 class="text-xl font-semibold">Bildnachweise:</h2>
        <p>
          Die auf dieser Website verwendeten Bilder und Medien stammen, soweit nicht anders angegeben, aus eigenen Aufnahmen (Copyright © Sarah Handte und/oder Tim Steegmüller) oder sind lizenzfreie Werke von Plattformen wie Unsplash, Pexels oder Pixabay (genaue Nennung, falls spezifische Lizenzen dies erfordern). Logos und Markenzeichen Dritter sind Eigentum der jeweiligen Rechteinhaber. Für eingebettete Inhalte von Social Media Plattformen gelten die jeweiligen Urheberrechtsbestimmungen dieser Plattformen. Spezifische Bildnachweise (falls erforderlich): [Hier könnten spezifische Credits stehen, z.B. "Foto von Pony auf Weide von Max Mustermann / Pexels"]
        </p>

        <h2 class="text-xl font-semibold">Hinweis zu Preisen und Angeboten:</h2>
        <p>
          Alle auf dieser Webseite genannten Preise sind Endpreise. Aufgrund der Kleinunternehmerregelung gemäß § 19 UStG erheben wir keine Umsatzsteuer und weisen diese daher auch nicht aus.
        </p>
        <p>
          Wir bemühen uns, alle Preisangaben und Angebotsdetails aktuell zu halten. <strong>Aufgrund von technischen Aktualisierungen oder individuellen Anpassungen können die auf der Webseite dargestellten Preise und Angebotsumfänge in Einzelfällen von den finalen Konditionen abweichen. Maßgeblich sind stets die Angaben in einem individuellen Angebot oder einer Buchungsbestätigung.</strong> Wir bitten um Ihr Verständnis.
        </p>


        <div class="mt-8 bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
          <div class="flex items-center text-gray-700 dark:text-gray-300 mb-2">
            <i class="fas fa-clock mr-2 text-primary-color dark:text-primary-light"></i>
            <p class="font-medium text-sm">Stand dieser Informationen</p>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ currentDate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useMySeoMeta } from '~/composables/useMySeoMeta';
import { NuxtLink } from '#components';
import { useRuntimeConfig } from '#app';
import dayjs from 'dayjs';
import 'dayjs/locale/de';

dayjs.locale('de');

const config = useRuntimeConfig();
const businessAddress = computed(() => ({ // Mache businessAddress zu einem computed, um auf Änderungen in der Config zu reagieren (obwohl selten)
  ...config.public.businessAddress,
  responsiblePerson: 'Sarah Handte', // Kann auch aus Config kommen
  jobTitle: 'Pädagogische Fachkraft und Erzieherin', // Kann auch aus Config kommen
  vatInfo: 'Gemäß § 19 UStG wird als Kleinunternehmerin keine Umsatzsteuer ausgewiesen.', // Kann auch aus Config kommen
}));

const phoneNumberDisplay = computed(() => businessAddress.value.telephone || '+49 1575 9666733');
const phoneNumberForLink = computed(() => phoneNumberDisplay.value.replace(/[\s/]+/g, ''));


const currentDate = ref('');
onMounted(() => {
  currentDate.value = dayjs().format('DD. MMMM YYYY');
});

useMySeoMeta({
  title: `Impressum | ${config.public.siteName}`,
  description: `Impressum und Anbieterkennzeichnung für ${config.public.siteName} - ${businessAddress.value.responsiblePerson}, Ihr Ponyhof für Ponyreiten in ${businessAddress.value.city}.`,
  keywords: `Impressum Ponyhof ${businessAddress.value.city}, Anbieterkennzeichnung ${businessAddress.value.city}, ${businessAddress.value.responsiblePerson} Kontakt, rechtliche Hinweise Ponyreiten`,
  meta: [{ name: 'robots', content: 'index, follow' }], // Impressum sollte indexierbar sein
  ogImage: `${config.public.siteUrl}/images/og-impressum-ponyhof.webp`,
  ogImageAlt: `Impressum von ${config.public.siteName}`,
});
</script>

<style scoped>
.prose h2 {
  margin-top: 1.5em; /* Etwas weniger Abstand als Standard-Prose für bessere Lesbarkeit bei vielen H2s */
  padding-bottom: 0.3em;
  border-bottom: 1px solid theme('colors.gray.200');
}
.dark .prose h2 {
  border-bottom-color: theme('colors.gray.700');
}
.prose h2:first-of-type {
  margin-top: 0 !important;
}
.prose p,
.prose li {
  margin-bottom: 0.8em; /* Etwas kompakter */
  line-height: 1.65;
}
</style>