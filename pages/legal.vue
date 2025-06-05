// pages/haftung-teilnahme.vue
<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Teilnahmehinweise & Haftungsinformationen</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Wichtige Informationen zur Teilnahme an pferdegestützten pädagogischen Angeboten
      </p>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <NuxtLink to="/">Startseite</NuxtLink>
        </li>
        <li aria-current="page">Teilnahmehinweise</li>
      </ol>
    </nav>

    <div
      class="content container mx-auto max-w-3xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md prose dark:prose-invert prose-a:text-primary-color dark:prose-a:text-primary-light prose-headings:font-semibold prose-headings:text-gray-800 dark:prose-headings:text-white"
    >
      <div
        class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6 border-l-4 border-blue-400 dark:border-blue-600"
      >
        <p class="font-medium mb-0">
          Die folgenden Hinweise dienen der Sicherheit und dem Wohlbefinden aller Teilnehmenden.
          Mit der Teilnahme an meinen pädagogischen Angeboten erkennen Sie diese Bedingungen an.
        </p>
      </div>

      <h2 class="!mt-0">1. Sicherheitshinweise und Haftung</h2>
      <p>
        Die Teilnahme an allen pferdegestützten Angeboten erfolgt auf eigene Gefahr. Bei Aktivitäten mit Tieren
        besteht trotz aller Sorgfalt und Aufsicht ein gewisses Restrisiko, das nicht vollständig
        ausgeschlossen werden kann.
      </p>
      <p>
        Ich, Sarah Handte, übernehme keine Haftung für leicht fahrlässig verursachte Schäden.
        Für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Schäden,
        die auf Vorsatz oder grober Fahrlässigkeit beruhen, bleibe ich nach den gesetzlichen Bestimmungen
        selbstverständlich haftbar.
      </p>

      <h2>2. Empfehlung zum Versicherungsschutz</h2>
      <p>
        Zum eigenen Schutz empfehle ich allen Teilnehmenden, über eine Unfallversicherung und
        private Haftpflichtversicherung zu verfügen. Bei Minderjährigen liegt die Verantwortung
        für einen angemessenen Versicherungsschutz bei den Erziehungsberechtigten.
      </p>

      <h2>3. Gesundheit & gemeinsame Regeln</h2>
      <p>
        Für eine harmonische Gruppendynamik und den respektvollen Umgang mit den Tieren bitte ich darum,
        mich vor Beginn über etwaige gesundheitliche Einschränkungen, Allergien oder Besonderheiten
        der teilnehmenden Kinder zu informieren.
      </p>
      <p>
        Bei Erkrankungen oder wenn sich ein Kind nicht an grundlegende Regeln zum Schutz der Gruppe
        und der Tiere halten kann, behalte ich mir vor, die Teilnahme zum Wohl aller Beteiligten
        vorübergehend auszusetzen. Bei bereits bezahlten Angeboten bemühe ich mich in solchen Fällen um
        einen Ersatztermin.
      </p>

      <h2>4. Begleitung und Aufsicht</h2>
      <p>
        Während der pädagogischen Angebote übernehme ich die Aufsicht im Rahmen der pädagogischen
        Aktivitäten. Bei gemeinsamen Veranstaltungen mit Eltern/Erziehungsberechtigten bleibt die
        grundsätzliche Aufsichtspflicht jedoch bei diesen. Für einen reibungslosen und sicheren Ablauf
        bitte ich alle Beteiligten, den Anweisungen bezüglich Sicherheit und Umgang mit den Tieren zu folgen.
      </p>

      <h2>5. Absagen und Terminänderungen</h2>
      <p>
        Ich bitte um Verständnis, dass eine Planung der Angebote nur möglich ist, wenn verbindliche Zusagen
        eingehalten werden. Eine Abmeldung ist bis 48 Stunden vor dem vereinbarten Termin kostenfrei möglich.
        Bei späteren Absagen bemühe ich mich um einen Ersatztermin, kann jedoch die bereits geleisteten
        Vorbereitungen nicht rückerstatten.
      </p>
      <p>
        Bei Erkrankungen mit ärztlicher Bescheinigung finde ich gemeinsam mit Ihnen eine kulante Lösung.
        Flexible Angebotspakete können in der Regel innerhalb des vereinbarten Zeitraums nachgeholt werden.
      </p>
      <p>
        Um Missverständnisse zu vermeiden, bitte ich darum, Absagen per Nachricht (SMS, WhatsApp, E-Mail) mitzuteilen.
      </p>

      <h2>6. Witterungsbedingungen</h2>
      <p>
        Die Angebote finden grundsätzlich bei jedem Wetter statt. Bitte denken Sie an angemessene
        Kleidung (dem Wetter entsprechend, feste Schuhe). Bei extremen Wetterbedingungen, die ein
        sicheres Durchführen der Aktivitäten nicht ermöglichen (Unwetter, Gewitter, starker Sturm),
        bemühe ich mich rechtzeitig um Information und alternative Termine.
      </p>

      <h2>7. Fotos und Dokumentation</h2>
      <p>
        Um die pädagogische Arbeit zu dokumentieren und für Erziehungsberechtigte sichtbar zu machen,
        erstelle ich gelegentlich Fotos oder kurze Videos der Aktivitäten. Mit Ihrer Teilnahme stimmen
        Sie zu, dass diese Aufnahmen für folgende Zwecke verwendet werden dürfen:
      </p>
      <ul>
        <li>Dokumentation der pädagogischen Arbeit</li>
        <li>Vorstellung der Angebote auf meiner Website</li>
        <li>Darstellung in sozialen Medien (Instagram, TikTok)</li>
      </ul>
      <p>
        Diese Einwilligung können Sie jederzeit für die Zukunft widerrufen. Falls Sie oder Ihr Kind nicht
        fotografiert werden möchten, teilen Sie mir dies bitte vor Beginn mit.
      </p>

      <h2>8. Sorgsamer Umgang</h2>
      <p>
        Ich bitte alle Teilnehmenden um einen respektvollen Umgang mit den verwendeten Materialien
        und den Tieren. Die pädagogischen Materialien und Ausrüstungsgegenstände stehen während der
        Angebote zur gemeinsamen Nutzung zur Verfügung.
      </p>

      <h2>9. Anpassung der Angebote</h2>
      <p>
        Als pädagogische Fachkraft passe ich die Aktivitäten stets an die Bedürfnisse, Interessen und
        Fähigkeiten der teilnehmenden Kinder an. Dies kann gelegentlich zu kurzfristigen Änderungen im
        geplanten Ablauf führen, um für alle ein positives Erlebnis zu ermöglichen.
      </p>

      <h2>10. Gemeinsames Miteinander</h2>
      <p>
        Die vorliegenden Hinweise sollen einen harmonischen und sicheren Ablauf aller Angebote gewährleisten.
        Bei Unklarheiten oder Fragen stehe ich Ihnen jederzeit gerne zur Verfügung. Gemeinsam finden wir
        für alle Belange eine passende Lösung.
      </p>
      <p>
        Mit der Teilnahme an meinen pädagogischen Angeboten erkennen Sie diese Teilnahmehinweise an.
        Ich freue mich auf eine vertrauensvolle Zusammenarbeit und wertvolle gemeinsame Erlebnisse
        mit den Ponys!
      </p>

      <div
        class="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg mt-8 border border-gray-200 dark:border-gray-700"
      >
        <p class="font-medium mb-2">Haben Sie Fragen zu diesen Hinweisen?</p>
        <p class="mb-0">
          <NuxtLink to="/contact" class="inline-flex items-center">
            Sprechen Sie mich gerne persönlich an
            <svg
              class="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </NuxtLink>
        </p>
      </div>

      <p class="text-sm mt-8">Stand: {{ currentDate }}</p>
    </div>
  </div>
</template>

<script setup>
import { useMySeoMeta } from '~/composables/useMySeoMeta'; // HINZUGEFÜGT
import { NuxtLink } from '#components';
import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#app';
import dayjs from 'dayjs';
import 'dayjs/locale/de';

dayjs.locale('de');

const config = useRuntimeConfig();
const businessAddress = config.public.businessAddress; // Für den Fall, dass du es im Text brauchst
const siteUrl = config.public.siteUrl;

const currentDate = ref('');
onMounted(() => {
  currentDate.value = dayjs().format('DD. MMMM YYYY');
});

// SEO Meta-Daten mit useMySeoMeta
useMySeoMeta({
  title: `Teilnahmehinweise & Haftung | Ponyreiten ${businessAddress.city}`,
  description: `Wichtige Teilnahmehinweise und Haftungsinformationen für pferdegestützte Angebote und Ponyreiten auf dem Ponyhof in ${businessAddress.city}.`,
  keywords: `Teilnahmebedingungen Ponyhof ${businessAddress.city}, Haftung Ponyreiten ${businessAddress.city}, AGB Pferde, Regeln Ponyhof`,
  meta: [{ name: 'robots', content: 'noindex, follow' }], // Behalte dies bei, da es rechtliche Infos sind
  ogImage: `${siteUrl}/images/og-rechtliches-ponyhof.webp`, // Generisches OG-Bild
  ogImageAlt: `Rechtliche Hinweise von Leben ist ein Ponyhof ${businessAddress.city}`,
});
</script>

<style>
/* Prose Klassen für Styling der Teilnahmebedingungen */
.prose h2 {
  margin-top: 2em;
  padding-bottom: 0.3em;
  border-bottom: 1px solid theme('colors.gray.200');
}

.prose h2:first-of-type {
  margin-top: 0 !important;
}

.dark .prose h2 {
  border-bottom-color: theme('colors.gray.700');
}

.prose p,
.prose li {
  margin-bottom: 1em;
  line-height: 1.7;
}

.prose ul {
  margin-left: 1.5em;
  list-style-type: disc;
}

.prose li {
  margin-bottom: 0.5em;
}
</style>