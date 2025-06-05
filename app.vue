<template>
  <div>
    <CookieBanner /> <!-- Wird angezeigt, wenn consent.isBannerOpen.value true ist -->
    <NuxtLayout>
      <NuxtLoadingIndicator color="#ff3b7d" :height="3" /> <!-- Höhe hinzugefügt für bessere Sichtbarkeit -->
      <NuxtPage />
    </NuxtLayout>
    <!-- Optional: BackToTopButton hier global einfügen, wenn er auf allen Seiten sein soll -->
    <BackToTopButton />
  </div>
</template>

<script setup>
// NuxtLayout, NuxtPage, NuxtLoadingIndicator werden von Nuxt automatisch bereitgestellt
// und müssen NICHT explizit importiert werden, wenn sie im Template verwendet werden.
// import { NuxtLayout, NuxtPage, NuxtLoadingIndicator } from '#components'; // Dieser Import ist unnötig

import CookieBanner from '~/components/CookieBanner.vue';
import BackToTopButton from '~/components/BackToTopButton.vue'; // Falls hier platziert
import { useCookieConsent } from '~/composables/useCookieConsent';
import { onMounted } from 'vue';

const consent = useCookieConsent();

onMounted(() => {
  if (process.client) {
    // Die Logik, ob der Banner initial geöffnet wird, steckt bereits im CookieBanner
    // und dem Composable useCookieConsent (isBannerOpen).
    // Ein expliziter Aufruf von openCookieSettings() hier ist meist nicht nötig,
    // es sei denn, du hast eine sehr spezifische Logik, die das erfordert.
    // Normalerweise prüft das Composable selbst, ob schon ein Consent gespeichert ist.

    // Beispiel: Wenn du beim ersten Besuch IMMER die Einstellungen zeigen willst,
    // auch wenn der Banner später automatisch öffnen würde:
    // if (!consent.hasMadeChoice.value) { // Annahme: `hasMadeChoice` existiert im Composable
    //   consent.openCookieSettings();
    // }
    // Oder, wenn der Banner nicht von selbst öffnet und du ihn beim ersten Mal erzwingen willst:
    // const storedConsent = localStorage.getItem('cookie_consent_lebenisteinponyhof_v1');
    // if (!storedConsent) {
    //   consent.openCookieSettings(); // Oder eine andere Methode, die `isBannerOpen` auf true setzt
    // }
  }
});
</script>

<style>
/* Globale Styles, die nicht in tailwind.css sind oder die Tailwind überschreiben sollen */
/* Zum Beispiel für den NuxtLoadingIndicator, wenn du die Farbe nicht per Prop setzen willst */
/*
.nuxt-loading-indicator {
  background-color: #ff3b7d !important;
  height: 3px !important;
}
*/

/* Basis-Styling für einen sanften Scroll-Effekt, falls gewünscht */
html {
  scroll-behavior: smooth;
}

/* Stelle sicher, dass der Body und das Nuxt-Root-Element die volle Höhe einnehmen,
   damit der Footer korrekt am unteren Rand bleibt, wenn der Inhalt kurz ist. */
body, #__nuxt {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Der Hauptinhalt soll wachsen, um den verfügbaren Platz auszufüllen */
#__nuxt > div:first-child { /* Das div, das NuxtLayout umschließt */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
/* NuxtLayout selbst soll auch wachsen */
.nuxt-layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
/* Der Container für NuxtPage (oft ein <main> oder <div> im Layout) sollte auch wachsen */
/* Dies hängt von deiner Layout-Struktur ab. Wenn dein Default-Layout ein <main> hat: */
/* main {
  flex-grow: 1;
} */

</style>