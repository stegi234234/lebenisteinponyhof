<template>
  <div
    class="flex flex-col min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-800 dark:text-gray-200 transition-colors duration-300"
  >
    <!-- 
      Die Navbar verwaltet ihren internen Zustand (z.B. ob das mobile Menü offen ist)
      und den Dark Mode Toggle selbst. Das useDark() Composable in der Navbar
      setzt die 'dark' Klasse automatisch auf das <html> Element.
    -->
    <Navbar />

    <!-- Hauptinhalt der Seite -->
    <main class="flex-grow">
      <slot /> <!-- Hier wird der Inhalt der aktuellen Seite geladen -->
    </main>

    <!-- Globale Komponenten, die auf jeder Seite erscheinen sollen -->
    <NewsletterForm />
    <Footer />
    <BackToTopButton />
    <LightboxModal />
    <CookieBanner />
  </div>
</template>

<script setup lang="ts">
// Es werden keine lokalen Refs oder Funktionen mehr für menuOpen, isDark, toggleDark oder nav benötigt.
// Diese Logik ist jetzt in Navbar.vue und MobileDrawer.vue gekapselt.

import Navbar from '~/components/Navbar.vue';
import NewsletterForm from '~/components/NewsletterForm.vue';
import Footer from '~/components/Footer.vue';
import BackToTopButton from '~/components/BackToTopButton.vue';
import LightboxModal from '~/components/LightboxModal.vue';
import CookieBanner from '~/components/CookieBanner.vue';

// Die Klasse 'dark' am Root-Div (oben im Template) ist optional,
// da Tailwind's dark: Präfix auf die Klasse im <html>-Tag reagiert,
// die von useDark() (in Navbar.vue) gesetzt wird.
// Ich lasse sie hier mal weg, um es sauberer zu halten.
// Wenn du spezifische Styles für das Root-Layout im Dark Mode brauchst,
// die nicht über Tailwind's dark: Präfixe an Kindelementen abgedeckt sind,
// könntest du sie wieder hinzufügen und den isDark-Status z.B. über einen Store
// oder provide/inject holen. Fürs Erste sollte es ohne gehen.
</script>

<style scoped>
/* 
  Die Transition für das MobileDrawer wird jetzt direkt in der MobileDrawer.vue Komponente gehandhabt,
  da das Element dort konditional gerendert wird.
  Daher sind die .slide-* Klassen hier nicht mehr notwendig.
*/

/* Globale Übergangsfarben für den Dark Mode werden idealerweise in deiner globalen CSS
   (z.B. tailwind.css oder einem assets/css/main.css) auf dem body oder html Element definiert,
   oder direkt über die dark: Präfixe von Tailwind an den jeweiligen Elementen.
   Die 'transition-colors duration-300' Klasse am Root-Div hier ist schon ein guter Anfang.
*/
.dark\:bg-dark-bg {
  /* Stelle sicher, dass du eine Farbe namens 'dark-bg' in deiner tailwind.config.js definiert hast,
     z.B. ein sehr dunkles Grau oder Schwarz.
     Beispiel:
     theme: {
       extend: {
         colors: {
           'dark-bg': '#111827', // z.B. gray-900
         }
       }
     }
     Wenn nicht, ersetze es durch eine Standard-Tailwind-Klasse wie dark:bg-gray-900
  */
  background-color: theme('colors.gray.900'); /* Fallback, falls dark-bg nicht definiert ist */
}
</style>