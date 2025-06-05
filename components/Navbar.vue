!-- Verbesserter Header mit Schnellkontakt -->
<template>
  <header
      class="navbar sticky top-0 z-50 bg-white dark:bg-gray-950 shadow-md transition-colors duration-300"
  >
    <div
        class="navbar-container container mx-auto px-4 py-3 flex flex-wrap items-center justify-between"
    >
      <!-- Logo - unverändert -->
      <NuxtLink
          to="/"
          class="navbar-logo group flex items-center text-lg md:text-xl font-bold text-gray-800 dark:text-white transition-opacity duration-300 ease-in-out hover:opacity-80"
      >
        <img
            src="/images/logos/logo.svg"
            alt="Pferde-Icon"
            class="logo-icon w-8 h-8 md:w-10 md:h-10 mr-2 dark:invert transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:rotate-[-5deg]"
            width="40"
            height="40"
            densities="1x 2x"
            format="svg"
        />
        Leben ist ein Ponyhof
      </NuxtLink>

      <!-- NEU: Schnellkontakt für Desktop - nach rechts ausgerichtet vor dem Toggle -->
      <div class="hidden md:flex items-center ml-auto mr-4">
        <div class="quick-contacts flex items-center space-x-3">
          <!-- Telefon -->
          <a
              href="tel:+49 1575 9666733 "
              class="quick-contact-btn flex items-center text-sm px-2.5 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-md hover:bg-green-100 dark:hover:bg-green-800/30 transition-colors"
          >
            <i class="fas fa-phone text-xs mr-1.5"></i>
            <span class="font-medium">+49 1575 9666733</span>
          </a>

          <!-- Anfrage-Button -->
          <button
              @click="openQuickInquiry"
              class="quick-contact-btn flex items-center text-sm px-2.5 py-1.5 bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light rounded-md hover:bg-primary-color/20 dark:hover:bg-primary-light/20 transition-colors"
          >
            <i class="fas fa-paper-plane text-xs mr-1.5"></i>
            <span class="font-medium">Schnellanfrage</span>
          </button>
        </div>
      </div>

      <!-- Hamburger Button - unverändert -->
      <button
          @click="toggleMenu"
          class="mobile-menu-toggle md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Menü öffnen"
      >
        <span
            class="bar block w-6 h-0.5 bg-gray-800 dark:bg-white mb-1 transition-transform duration-300"
            :class="{ 'transform rotate-45 translate-y-1.5': menuOpen }"
        ></span>
        <span
            class="bar block w-6 h-0.5 bg-gray-800 dark:bg-white transition-opacity duration-300"
            :class="{ 'opacity-0': menuOpen }"
        ></span>
        <span
            class="bar block w-6 h-0.5 bg-gray-800 dark:bg-white mt-1 transition-transform duration-300"
            :class="{ 'transform -rotate-45 -translate-y-1.5': menuOpen }"
        ></span>
      </button>

      <!-- Navigation -->
      <nav
          :class="[
          'w-full md:flex md:items-center md:w-auto mt-4 md:mt-0',
          { block: menuOpen, hidden: !menuOpen },
        ]"
          class="transition-all duration-300 ease-in-out"
      >
        <ul
            class="navbar-links flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 text-gray-700 dark:text-gray-300"
        >
          <li v-for="(item, index) in navItems" :key="index" class="md:relative">
            <NuxtLink
                :to="item.path"
                class="nav-link block py-2 md:py-0 md:px-3 transition-colors duration-300"
                :class="
                isActive(item.path)
                  ? 'active-nav-link'
                  : 'hover:text-primary-color dark:hover:text-primary-light'
              "
                @click="closeMenu"
            >
              <div class="flex items-center relative">
                <i v-if="item.icon" :class="['mr-2 text-xs', item.icon]"></i>
                {{ item.name }}

                <!-- Pill-Badge für neue Elemente -->
                <span
                    v-if="item.new"
                    class="ml-2 px-1.5 py-0.5 text-[10px] bg-primary-color dark:bg-primary-light text-white dark:text-gray-900 rounded-full"
                >
                  NEU
                </span>

                <!-- Mobile Indikator (rechts) -->
                <div class="md:hidden ml-auto" v-if="isActive(item.path)">
                  <i
                      class="fas fa-circle text-[6px] text-primary-color dark:text-primary-light"
                  ></i>
                </div>
              </div>
            </NuxtLink>

            <!-- Desktop-Indikator - Pill unterm aktiven Link -->
            <div
                v-if="isActive(item.path)"
                class="hidden md:block absolute h-1 bg-primary-color dark:bg-primary-light rounded-full transition-all duration-300 ease-in-out"
                :style="{
                bottom: '-0.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1.5rem',
              }"
            ></div>
          </li>
        </ul>

        <!-- NEU: Schnellkontakt für Mobile -->
        <div class="md:hidden mt-6 flex flex-col space-y-2 border-t border-gray-100 dark:border-gray-800 pt-4">
          <a
              href="tel:+49 1575 9666733 "
              class="quick-contact-btn flex items-center justify-center text-sm py-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-md hover:bg-green-100 dark:hover:bg-green-800/30 transition-colors"
          >
            <i class="fas fa-phone text-sm mr-2"></i>
            <span class="font-medium">+49 1575 9666733</span>
          </a>

          <button
              @click="openQuickInquiry"
              class="quick-contact-btn flex items-center justify-center text-sm py-2 bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light rounded-md hover:bg-primary-color/20 dark:hover:bg-primary-light/20 transition-colors"
          >
            <i class="fas fa-paper-plane text-sm mr-2"></i>
            <span class="font-medium">Schnellanfrage senden</span>
          </button>
        </div>

        <!-- Social Links -->
        <ul
            class="navbar-socials flex justify-center md:justify-start space-x-4 mt-4 md:mt-0 md:ml-6 text-xl text-gray-600 dark:text-gray-400"
        >
          <li>
            <a
                href="https://instagram.com/lebenisteinponyhof"
                target="_blank"
                aria-label="Instagram"
                class="hover:text-primary-color dark:hover:text-primary-light transition-colors"
            ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li>
            <a
                href="https://www.tiktok.com/@lebenisteinponyhof"
                target="_blank"
                aria-label="TikTok"
                class="hover:text-primary-color dark:hover:text-primary-light transition-colors"
            ><i class="fab fa-tiktok"></i
            ></a>
         </li>
          <li>
            <a
                href="https://www.youtube.com/@lebenisteinponyhofoffiziell"
                target="_blank"
                aria-label="YouTube"
                class="hover:text-primary-color dark:hover:text-primary-light transition-colors"
            ><i class="fab fa-youtube"></i
            ></a>
          </li>
        </ul>

        <!-- Dark Mode Toggle Button -->
        <button
            @click="toggleDark()"
            id="darkModeToggle"
            aria-label="Toggle Dark Mode"
            class="theme-toggle-btn ml-0 md:ml-4 mt-4 md:mt-0 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400 w-full md:w-auto flex items-center justify-center md:justify-start"
        >
          <!-- Dynamisches Icon basierend auf isDark -->
          <i
              :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"
              class="text-base"
              aria-hidden="true"
          ></i>
          <!-- Text ändert sich auch -->
          <span class="ml-2">{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
        </button>
      </nav>
    </div>

    <!-- NEU: Schnellanfrage-Modal -->
    <div v-if="showQuickInquiry" class="fixed inset-0 z-[100] overflow-y-auto" aria-modal="true">
      <div class="flex items-center justify-center min-h-screen px-4">
        <!-- Overlay -->
        <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="closeQuickInquiry"></div>

        <!-- Modal -->
        <div class="relative bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 shadow-xl transform transition-all">
          <button @click="closeQuickInquiry" class="absolute top-3 right-3 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <i class="fas fa-times"></i>
          </button>

          <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Schnellanfrage</h3>

          <form @submit.prevent="submitQuickInquiry" class="space-y-4">
            <!-- Name -->
            <div>
              <label for="quick-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input type="text" id="quick-name" v-model="quickInquiry.name" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 text-gray-900 dark:text-white" required>
            </div>

            <!-- Telefon oder Email -->
            <div>
              <label for="quick-contact" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Telefon oder E-Mail</label>
              <input type="text" id="quick-contact" v-model="quickInquiry.contact" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 text-gray-900 dark:text-white" required>
            </div>

            <!-- Interesse -->
            <div>
              <label for="quick-interest" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ich interessiere mich für</label>
              <select id="quick-interest" v-model="quickInquiry.interest" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 text-gray-900 dark:text-white" required>
                <option value="">Bitte wählen</option>
                <option value="Schnupperstunde">Schnupperstunde</option>
                <option value="Ponyreiten">Ponyreiten</option>
                <option value="Kindergeburtstag">Kindergeburtstag</option>
                <option value="Ferienkurs">Ferienkurs</option>
                <option value="Sonstige Anfrage">Sonstiges</option>
              </select>
            </div>

            <!-- Nachricht -->
            <div>
              <label for="quick-message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nachricht (optional)</label>
              <textarea id="quick-message" v-model="quickInquiry.message" rows="3" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 text-gray-900 dark:text-white"></textarea>
            </div>

            <!-- Submit -->
            <button type="submit" class="w-full bg-primary-color hover:bg-primary-color-dark dark:bg-primary-light dark:hover:bg-primary-light-dark text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
              Anfrage senden
            </button>

            <p class="text-xs text-gray-500 dark:text-gray-400 text-center">
              Wir melden uns innerhalb von 24 Stunden bei Ihnen!
            </p>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { NuxtLink } from '#components'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const isDark = useDark()
const toggleDark = useToggle(isDark)
const route = useRoute()

// NEU: Schnellanfrage-Modal State
const showQuickInquiry = ref(false)
const quickInquiry = ref({
  name: '',
  contact: '',
  interest: '',
  message: ''
})

// Navigation Items mit Icons und "NEU"-Markierungen
const navItems = [
  { name: 'Startseite', path: '/', icon: 'fas fa-home' },
  { name: 'Angebote', path: '/angebote', icon: 'fas fa-certificate' },
  { name: 'Unsere Pferde', path: '/horses', icon: 'fas fa-horse' },
  { name: 'Blog', path: '/blog', icon: 'fas fa-pen-nib' },
  { name: 'Über uns', path: '/about', icon: 'fas fa-users' },
  { name: 'Kontakt', path: '/contact', icon: 'fas fa-envelope' },
  { name: 'Spiel', path: '/game', icon: 'fas fa-gamepad', new: true },
]

// Prüft, ob ein Link aktiv ist (auch für Unterpfade)
const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

// NEU: Schnellanfrage-Funktionen
const openQuickInquiry = () => {
  showQuickInquiry.value = true
}

const closeQuickInquiry = () => {
  showQuickInquiry.value = false
}

const submitQuickInquiry = () => {
  // Hier den Code für die Formularübermittlung implementieren
  alert('Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen.')
  closeQuickInquiry()
  // Formular zurücksetzen
  quickInquiry.value = {
    name: '',
    contact: '',
    interest: '',
    message: ''
  }
}
</script>

<style scoped>
/* Aktive Link-Styles */
.active-nav-link {
  @apply text-primary-color dark:text-primary-light font-semibold;
  position: relative;
}

/* Hover-Animation */
.nav-link {
  position: relative;
  transition: transform 0.3s ease;
}

.nav-link:hover {
  transform: translateY(-1px);
}

.navbar-links {
  --link-spacing: 0.75rem;
}

@media (min-width: 768px) {
  .navbar-links {
    margin-right: auto;
  }
}

.dark .dark\:invert {
  filter: invert(1);
}

/* NEU: Quick Contact Styling */
.quick-contact-btn {
  transition: all 0.2s ease;
}

.quick-contact-btn:hover {
  transform: translateY(-1px);
}
</style>