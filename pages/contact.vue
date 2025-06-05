<template>
  <div class="container mx-auto px-4 py-8 md:py-12">
    <section class="page-header text-center mb-8">
      <h1 class="text-3xl md:text-4xl font-bold mb-3 text-gray-800 dark:text-white">Kontakt</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Fragen zu Angeboten, Terminen oder einfach nur Hallo sagen? Wir freuen uns auf deine
        Nachricht!
      </p>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb mb-8">
      <ol class="flex text-sm text-gray-500 dark:text-gray-400 space-x-2">
        <li><NuxtLink to="/" class="hover:underline">Startseite</NuxtLink></li>
        <li>/</li>
        <li aria-current="page" class="font-semibold">Kontakt</li>
      </ol>
    </nav>

    <!-- Hauptinhalt mit Spalten auf größeren Bildschirmen -->
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <!-- Kontaktformular: 3/5 der Breite auf großen Bildschirmen -->
      <section
        class="lg:col-span-3 contact-form-section bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700/50"
      >
        <!-- Überschrift für das Formular -->
        <h2
          class="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center"
        >
          <i class="fas fa-paper-plane text-primary-color dark:text-primary-light mr-3"></i>
          Schreib uns
        </h2>

        <!-- Erfolg / Fehler -->
        <div
          v-if="submitStatus === 'success'"
          class="mb-8 p-5 bg-green-50 border border-green-200 text-green-800 dark:bg-green-900/30 dark:border-green-600/50 dark:text-green-200 rounded-lg"
        >
          <div class="flex flex-col sm:flex-row items-center">
            <div class="flex-shrink-0 mr-3 mb-3 sm:mb-0">
              <i class="fas fa-check-circle text-3xl text-green-500 dark:text-green-400"></i>
            </div>
            <div>
              <p class="font-semibold text-lg">Nachricht erfolgreich gesendet!</p>
              <p class="text-sm mt-1">
                Vielen Dank für deine Nachricht. Wir werden uns so schnell wie möglich bei dir
                melden.
              </p>
            </div>
          </div>
        </div>

        <div
          v-if="submitStatus === 'error'"
          class="mb-8 p-5 bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/30 dark:border-red-600/50 dark:text-red-200 rounded-lg"
        >
          <div class="flex flex-col sm:flex-row items-center">
            <div class="flex-shrink-0 mr-3 mb-3 sm:mb-0">
              <i class="fas fa-exclamation-circle text-3xl text-red-500 dark:text-red-400"></i>
            </div>
            <div>
              <p class="font-semibold text-lg">Fehler beim Senden!</p>
              <p class="text-sm mt-1">
                {{
                  errorMessage ||
                  'Bitte versuche es später noch einmal oder kontaktiere uns direkt per E-Mail.'
                }}
              </p>
            </div>
          </div>
        </div>

        <!-- Formular -->
        <form v-if="submitStatus !== 'success'" @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Name und Email in einer Reihe auf größeren Bildschirmen -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <!-- Name -->
            <div>
              <label
                for="contact-name"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-user text-gray-400 dark:text-gray-500"></i>
                </div>
                <input
                  id="contact-name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="form-input pl-10"
                  :disabled="isLoading"
                  placeholder="Dein vollständiger Name"
                />
              </div>
            </div>

            <!-- E-Mail -->
            <div>
              <label
                for="contact-email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                E-Mail <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-envelope text-gray-400 dark:text-gray-500"></i>
                </div>
                <input
                  id="contact-email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="form-input pl-10"
                  :disabled="isLoading"
                  placeholder="deine.email@beispiel.de"
                />
              </div>
            </div>
          </div>

          <!-- Betreff -->
          <div>
            <label
              for="contact-subject"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Betreff (Optional)
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas fa-tag text-gray-400 dark:text-gray-500"></i>
              </div>
              <input
                id="contact-subject"
                v-model="formData.subject"
                type="text"
                class="form-input pl-10"
                :disabled="isLoading"
                placeholder="Worum geht es?"
              />
            </div>
          </div>

          <!-- Nachricht -->
          <div>
            <label
              for="contact-message"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Deine Nachricht <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <div class="absolute top-3 left-3 flex items-start pointer-events-none">
                <i class="fas fa-comment-alt text-gray-400 dark:text-gray-500"></i>
              </div>
              <textarea
                id="contact-message"
                v-model="formData.message"
                rows="6"
                required
                class="form-textarea pl-10"
                :disabled="isLoading"
                placeholder="Schreib uns dein Anliegen..."
              ></textarea>
            </div>
          </div>

          <!-- Consent mit verbessertem Layout -->
          <div
            class="pt-2 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-100 dark:border-gray-600/40"
          >
            <label
              for="contact-consent"
              class="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 cursor-pointer"
            >
              <div class="flex-shrink-0 mt-0.5">
                <input
                  id="contact-consent"
                  v-model="formData.consent"
                  type="checkbox"
                  required
                  class="form-checkbox"
                  :disabled="isLoading"
                />
              </div>
              <span class="leading-tight">
                Ich habe die
                <NuxtLink
                  to="/datenschutz"
                  class="text-primary-color dark:text-primary-light hover:underline"
                  target="_blank"
                >
                  Datenschutzerklärung
                </NuxtLink>
                gelesen und bin mit der Verarbeitung meiner Daten einverstanden.
                <span class="text-red-500">*</span>
              </span>
            </label>
          </div>

          <!-- Submit mit verbessertem Button -->
          <div class="text-center pt-4">
            <button
              type="submit"
              class="cta-button w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-8 text-base font-medium"
              :disabled="isLoading"
              :class="{ 'opacity-70 cursor-not-allowed': isLoading }"
            >
              <span v-if="!isLoading">Nachricht absenden</span>
              <span v-else class="flex items-center">
                <svg
                  class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Wird gesendet...
              </span>
              <i class="fas fa-paper-plane ml-1" v-if="!isLoading"></i>
            </button>
          </div>
        </form>

        <!-- Direkter Kontakt nach Erfolg -->
        <div v-if="submitStatus === 'success'" class="mt-8 text-center space-y-4">
          <button
            @click="resetForm"
            class="text-primary-color dark:text-primary-light hover:underline flex items-center justify-center mx-auto"
          >
            <i class="fas fa-redo mr-2"></i> Neues Formular absenden
          </button>
        </div>
      </section>

      <!-- Kontaktinformationen: 2/5 der Breite auf großen Bildschirmen -->
      <section
        class="lg:col-span-2 contact-info-section bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700/50"
      >
        <!-- Überschrift für die Kontaktinfos -->
        <h2
          class="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center"
        >
          <i class="fas fa-info-circle text-primary-color dark:text-primary-light mr-3"></i>
          Kontaktinformationen
        </h2>

        <!-- Kontaktdaten -->
        <div class="space-y-6">
          <!-- Email -->
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div
                class="w-10 h-10 rounded-full bg-primary-color/10 dark:bg-primary-light/10 flex items-center justify-center"
              >
                <i class="fas fa-envelope text-primary-color dark:text-primary-light"></i>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-base font-medium text-gray-800 dark:text-white">E-Mail</h3>
              <a
                href="mailto:daslebenisteinponyhofoffizell@gmail.com"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-color dark:hover:text-primary-light transition-colors"
              >
                daslebenisteinponyhofoffizell@gmail.com
              </a>
            </div>
          </div>

          <!-- Telefon -->
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div
                class="w-10 h-10 rounded-full bg-primary-color/10 dark:bg-primary-light/10 flex items-center justify-center"
              >
                <i class="fas fa-phone-alt text-primary-color dark:text-primary-light"></i>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-base font-medium text-gray-800 dark:text-white">Telefon</h3>
              <a
                href="tel:+49 1575 9666733"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-color dark:hover:text-primary-light transition-colors"
              >
                +49 1575 9666733
              </a>
            </div>
          </div>

          <!-- Adresse -->
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div
                class="w-10 h-10 rounded-full bg-primary-color/10 dark:bg-primary-light/10 flex items-center justify-center"
              >
                <i class="fas fa-map-marker-alt text-primary-color dark:text-primary-light"></i>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-base font-medium text-gray-800 dark:text-white">Adresse</h3>
              <p class="text-gray-600 dark:text-gray-400">
                Pfadstr. 10<br />
                71229 Leonberg<br />
                Deutschland
              </p>
            </div>
          </div>

          <!-- Öffnungszeiten -->
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div
                class="w-10 h-10 rounded-full bg-primary-color/10 dark:bg-primary-light/10 flex items-center justify-center"
              >
                <i class="fas fa-clock text-primary-color dark:text-primary-light"></i>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-base font-medium text-gray-800 dark:text-white">Erreichbarkeit</h3>
              <p class="text-gray-600 dark:text-gray-400">
                Montag - Freitag: 9:00 - 18:00 Uhr<br />
                Wochenende: Nach Vereinbarung
              </p>
            </div>
          </div>
        </div>

        <GoogleMap />

        <!-- Social Media -->
        <div class="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
          <h3 class="text-base font-medium text-gray-800 dark:text-white mb-4">Folge uns</h3>
          <div class="flex space-x-4">
            <a
              href="https://instagram.com/leben_ist_ein_ponyhof"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-pink-500 hover:bg-pink-600 text-white flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://facebook.com/LebenisteinPonyhof"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRuntimeConfig } from '#app'
import GoogleMap from '~/components/GoogleMap.vue'

// 1) Config
const { environmentId, apiHost, contactFormId } = useRuntimeConfig().public.formbricks as {
  environmentId: string
  apiHost: string
  contactFormId: string
}

// 2) State
const formData = ref({ name: '', email: '', subject: '', message: '', consent: false })
const isLoading = ref(false)
const submitStatus = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMessage = ref('')

// 3) Frage-IDs
const FIELD_ID = {
  name: 'rm6nhf1eehnp9u4lyk5bko73',
  email: 'dx3ajmyd331vmudo7ay1orlc',
  subject: 'fntcxf07nnjoiel5dqmxkv86',
  message: 'hlaykes27eeuvyglejazmeya',
  consent: 'd4232v8wptcumybhqtt78glj',
}

// 4) Submit-Funktion
async function handleSubmit() {
  if (!environmentId || !contactFormId) {
    errorMessage.value = 'Konfiguration unvollständig!'
    submitStatus.value = 'error'
    return
  }
  isLoading.value = true
  submitStatus.value = 'loading'
  errorMessage.value = ''

  // Antworten als Strings mappen
  const dataMap: Record<string, string> = {}
  for (const { questionId, answer } of Object.entries(FIELD_ID).map(([k, q]) => ({
    questionId: q,
    answer: (formData.value as any)[k],
  }))) {
    dataMap[questionId] = String(answer)
  }

  // Payload
  const payload = { surveyId: contactFormId, finished: true, data: dataMap }

  // Proxy-Request an unseren Server-Endpunkt
  try {
    const res = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        answers: Object.entries(dataMap).map(([questionId, answer]) => ({ questionId, answer })),
      },
    })
    submitStatus.value = 'success'
  } catch (err: any) {
    errorMessage.value = err.statusMessage || err.message || 'Unbekannter Fehler'
    submitStatus.value = 'error'
  } finally {
    isLoading.value = false
  }
}

// 5) Formular zurücksetzen
function resetForm() {
  formData.value = { name: '', email: '', subject: '', message: '', consent: false }
  submitStatus.value = 'idle'
  errorMessage.value = ''
}
</script>

<style scoped>
.form-input,
.form-textarea {
  @apply block w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white shadow-sm transition duration-150 ease-in-out;
  @apply focus:ring-2 focus:ring-offset-1 focus:ring-primary-color/50 focus:border-primary-color focus:outline-none;
  @apply disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:opacity-70 disabled:cursor-not-allowed;
  @apply hover:border-gray-400 dark:hover:border-gray-500;
}
.form-textarea {
  @apply min-h-[120px] leading-relaxed;
}
.form-checkbox {
  @apply h-5 w-5 text-primary-color bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded transition-colors;
  @apply focus:ring-2 focus:ring-primary-color/40 focus:outline-none dark:focus:ring-offset-gray-800;
  @apply disabled:opacity-70 disabled:cursor-not-allowed;
  @apply hover:border-primary-color/70 dark:hover:border-primary-light/70;
}
.cta-button {
  @apply bg-primary-color text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300;
  @apply hover:bg-primary-color/90 dark:hover:bg-primary-light/90 transform hover:-translate-y-0.5;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color dark:focus:ring-primary-light;
}
</style>