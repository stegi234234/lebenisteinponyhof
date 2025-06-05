<template>
  <footer
    class="bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 py-8 border-t border-gray-200 dark:border-gray-800 mt-auto"
  >
    <div class="footer-content container mx-auto px-4 text-center">
      <p class="mb-4">© {{ new Date().getFullYear() }} Sarah Handte - Leben ist ein Ponyhof</p>
      <div class="social-links flex justify-center space-x-5 mb-4 text-2xl">
        <a
          href="https://instagram.com/lebenisteinponyhof"
          target="_blank"
          aria-label="Instagram"
          class="hover:text-primary-color dark:hover:text-primary-light transition-colors"
          ><i class="fab fa-instagram"></i
        ></a>
        <a
          href="https://www.tiktok.com/@lebenisteinponyhof"
          target="_blank"
          aria-label="TikTok"
          class="hover:text-primary-color dark:hover:text-primary-light transition-colors"
          ><i class="fab fa-tiktok"></i
        ></a>
        <a
          href="https://www.youtube.com/@lebenisteinponyhofoffiziell"
          target="_blank"
          aria-label="YouTube"
          class="hover:text-primary-color dark:hover:text-primary-light transition-colors"
          ><i class="fab fa-youtube"></i
        ></a>
      </div>
      <nav class="footer-links text-sm space-x-3 md:space-x-6 mb-4">
        <NuxtLink
          to="/impressum"
          class="hover:text-primary-color dark:hover:text-primary-light transition-colors"
          >Impressum</NuxtLink
        >
        <span class="text-gray-400 dark:text-gray-600">|</span>
        <NuxtLink
          to="/datenschutz"
          class="hover:text-primary-color dark:hover:text-primary-light transition-colors"
          >Datenschutz</NuxtLink
        >
        <span class="text-gray-400 dark:text-gray-600">|</span>
        <NuxtLink
          to="/faq"
          class="hover:text-primary-color dark:hover:text-primary-light transition-colors"
          >FAQ</NuxtLink
        >
        <span class="text-gray-400 dark:text-gray-600">|</span>
        <NuxtLink
          to="/legal#haftungsausschluss"
          class="hover:text-primary-color dark:hover:text-primary-light transition-colors"
          >Haftungsausschluss</NuxtLink
        >
      </nav>
      <div>
        <button
          @click="consent.openCookieSettings()"
          class="text-xs text-gray-500 dark:text-gray-400 hover:text-primary-color dark:hover:text-primary-light underline transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-color/50 rounded-sm"
          aria-label="Cookie-Einstellungen anpassen"
        >
          <i class="fas fa-cookie-bite mr-1"></i> Cookie-Einstellungen anpassen
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import { NuxtLink } from '#components'
  import { useCookieConsent } from '~/composables/useCookieConsent' // Importiere das Consent Composable

  const consent = useCookieConsent()
</script>

<style scoped>
  footer {
    /* mt-auto im Template sorgt dafür, dass der Footer unten bleibt, wenn der Hauptinhalt kürzer ist.
     Die min-h-screen und flex-grow im Layout sind dafür ebenfalls wichtig. */
  }
</style>
