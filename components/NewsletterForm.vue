<template>
  <div class="newsletter-section py-8 bg-gray-50 dark:bg-gray-900/30 border-t border-gray-100 dark:border-gray-800">
    <div class="newsletter-container container mx-auto max-w-4xl px-4">
      <div class="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
        <div class="newsletter-content flex flex-col md:flex-row items-center gap-6">
          <!-- Text Section -->
          <div class="md:w-1/2 text-left">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
              <i class="fas fa-envelope-open-text text-primary-color dark:text-primary-light mr-2 text-base"></i>
              Newsletter abonnieren
            </h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Erfahre als Erste/r von freien Plätzen und neuen Angeboten.
            </p>

            <!-- Success / Error -->
            <div
                v-if="submitStatus === 'success'"
                class="mt-3 p-2 bg-green-50 border border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-800 dark:text-green-400 rounded-md text-xs"
            >
              <strong>Vielen Dank für deine Anmeldung!</strong>
            </div>
            <div
                v-if="submitStatus === 'error'"
                class="mt-3 p-2 bg-red-50 border border-red-200 text-red-700 dark:bg-red-900/30 dark:border-red-800 dark:text-red-400 rounded-md text-xs"
            >
              <strong>Fehler:</strong> {{ errorMessage || 'Bitte versuche es später erneut.' }}
            </div>
          </div>

          <!-- Form -->
          <form
              v-if="submitStatus !== 'success'"
              id="newsletter-form"
              @submit.prevent="handleSubmit"
              class="md:w-1/2 w-full"
          >
            <div class="newsletter-form-fields flex flex-col sm:flex-row gap-2">
              <!-- Email Field -->
              <div class="form-group flex-1">
                <label for="newsletter-email" class="sr-only">Deine E-Mail</label>
                <input
                    type="email"
                    id="newsletter-email"
                    v-model="formData.email"
                    placeholder="Deine E-Mail"
                    required
                    class="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white dark:bg-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-primary-color/50 dark:focus:ring-primary-light/50 focus:border-transparent focus:outline-none"
                    :disabled="isLoading"
                />
              </div>
              
              <!-- Submit Button -->
              <button
                  type="submit"
                  class="px-4 py-2 bg-primary-color hover:bg-primary-color-dark dark:bg-primary-light dark:hover:bg-primary-light-dark text-white dark:text-gray-900 rounded-md transition-colors duration-300 font-medium text-sm flex items-center justify-center"
                  :disabled="isLoading"
              >
                <span v-if="!isLoading">Abonnieren</span>
                <span v-else>
                  <i class="fas fa-spinner fa-spin mr-1"></i>
                </span>
              </button>
            </div>

            <!-- Consent Checkbox - Simplified -->
            <div class="form-check flex items-start gap-2 mt-3">
              <input
                  type="checkbox"
                  id="newsletter-consent"
                  v-model="formData.consent"
                  required
                  class="mt-0.5 w-4 h-4 text-primary-color bg-white border-gray-300 rounded focus:ring-primary-color"
                  :disabled="isLoading"
              />
              <label for="newsletter-consent" class="text-xs text-gray-600 dark:text-gray-400 leading-tight">
                Ich akzeptiere die <NuxtLink to="/datenschutz" class="text-primary-color dark:text-primary-light hover:underline">Datenschutzerklärung</NuxtLink> und möchte den Newsletter erhalten.
              </label>
            </div>
          </form>

          <!-- Success Message -->
          <div v-else class="md:w-1/2 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
            <i class="fas fa-check-circle text-green-500 dark:text-green-400 text-xl mb-2"></i>
            <p class="text-green-800 dark:text-green-300 text-sm">
              Vielen Dank für deine Anmeldung! Bitte bestätige deine E-Mail-Adresse.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRuntimeConfig } from '#app'
import { NuxtLink } from '#components'

const config = useRuntimeConfig().public.formbricks
const environmentId = config.environmentId as string
const apiHost = config.apiHost as string
const newsletterFormId = config.newsletterFormId as string

const formData = ref({ name: '', email: '', consent: false })
const isLoading = ref(false)
const submitStatus = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMessage = ref('')

// Frage-IDs aus deinem Survey
const FIELD_ID = {
  name:    'e9pmxj5pusvuiptjrijfgqr',
  email:   'ys2l6j81p0c9h57q10768vqx',
  consent: 'h0njxgi7ad86jbkptet5xs3x'
}

async function handleSubmit() {
  // Validierung
  if (!formData.value.consent) {
    errorMessage.value = 'Bitte stimme der Datenschutzerklärung zu.'
    submitStatus.value = 'error'
    return
  }

  isLoading.value = true
  submitStatus.value = 'loading'
  errorMessage.value = ''

  // build data map (strings)
  const dataMap: Record<string, string> = {}
  dataMap[FIELD_ID.name] = formData.value.name // Hier wird der Name-Wert beibehalten, falls die API das erfordert
  dataMap[FIELD_ID.email] = formData.value.email
  dataMap[FIELD_ID.consent] = String(formData.value.consent)

  // prepare payload
  const payload = {
    surveyId: newsletterFormId,
    finished: true,
    data: dataMap
  }

  try {
    const response = await fetch(
        `${apiHost}/api/v1/client/${environmentId}/responses`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
    )
    const text = await response.text()
    if (!response.ok) {
      throw new Error(text)
    }
    submitStatus.value = 'success'
    // reset form
    formData.value = { name: '', email: '', consent: false }
  } catch (err: any) {
    console.error('[Newsletter] Error:', err)
    errorMessage.value = err.message || 'Fehler bei der Anmeldung.'
    submitStatus.value = 'error'
  } finally {
    isLoading.value = false
  }
}
</script>