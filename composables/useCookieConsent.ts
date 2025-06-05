// composables/useCookieConsent.ts
import { ref, readonly, onMounted, watch, computed } from 'vue' // computed hinzugefügt
import { useLocalStorage } from '@vueuse/core'

const COOKIE_CONSENT_KEY = 'cookie_consent_lebenisteinponyhof_v1'

const defaultConsentValues = {
  analytics: false,
  marketing: false,
  timestamp: null,
}

// Diese Variablen werden jetzt innerhalb der Composable-Funktion deklariert,
// damit sie bei jedem Aufruf von useCookieConsent() neu initialisiert werden,
// aber useLocalStorage sorgt dafür, dass sie denselben Speicherort nutzen.
// Um einen globalen reaktiven Zustand zu haben, der von mehreren Komponenten geteilt wird,
// deklarieren wir storedConsent außerhalb, initialisieren es aber erst im Client-Kontext
// oder innerhalb der Composable-Funktion. Für useLocalStorage ist es sicherer, es innerhalb zu lassen.

let storedConsentSingleton = null // Für Singleton-Verhalten

export function useCookieConsent() {
  // Stelle sicher, dass useLocalStorage nur einmal pro Client-Instanz initialisiert wird,
  // um das Singleton-Verhalten von LocalStorage zu gewährleisten.
  if (process.client && !storedConsentSingleton) {
    storedConsentSingleton = useLocalStorage(COOKIE_CONSENT_KEY, defaultConsentValues, {
      mergeDefaults: true,
      // Wichtig für SSR-Kontext, wenn man es serverseitig lesen/schreiben wollte (nicht für localStorage)
      // Du kannst auch { serverDefaults: () => defaultConsentValues } verwenden,
      // wenn du useLocalStorage serverseitig nutzen möchtest, was hier aber nicht der Fall ist.
    })
  }
  // Auf dem Server oder wenn schon initialisiert, verwende das Singleton oder einen Fallback
  const storedConsent = process.client ? storedConsentSingleton : ref(defaultConsentValues)

  const _consentFlags = ref({
    analytics: storedConsent.value?.analytics ?? defaultConsentValues.analytics,
    marketing: storedConsent.value?.marketing ?? defaultConsentValues.marketing,
  })

  const updateInternalConsentFlags = (newStoredConsentValue) => {
    const currentVal =
      newStoredConsentValue && typeof newStoredConsentValue === 'object'
        ? newStoredConsentValue
        : defaultConsentValues
    _consentFlags.value.analytics = !!currentVal.analytics
    _consentFlags.value.marketing = !!currentVal.marketing
  }

  // Initialisierung und Watcher nur auf dem Client ausführen
  if (process.client) {
    onMounted(() => {
      updateInternalConsentFlags(storedConsent.value)
    })

    watch(
      storedConsent,
      (newValue) => {
        updateInternalConsentFlags(newValue)
      },
      { deep: true }
    )
  }

  const openCookieSettings = () => {
    if (process.client) {
      localStorage.removeItem(COOKIE_CONSENT_KEY)
      // Reset storedConsent auf Default, um den Banner zu triggern
      // (wird den Watcher im CookieBanner selbst triggern, wenn er auf _rawStoredConsent lauscht)
      if (storedConsentSingleton) {
        // Nur wenn es schon initialisiert war
        storedConsentSingleton.value = { ...defaultConsentValues, timestamp: null } // timestamp null, um Neusetzen zu erzwingen
      }
      window.dispatchEvent(new CustomEvent('show-cookie-banner'))
    }
  }

  const setConsent = (newAnalytics: boolean, newMarketing: boolean) => {
    if (process.client && storedConsent.value) {
      // Sicherstellen, dass storedConsent existiert
      storedConsent.value = {
        analytics: newAnalytics,
        marketing: newMarketing,
        timestamp: Date.now(),
      }
    }
  }

  return {
    hasConsentForAnalytics: computed(() => _consentFlags.value.analytics),
    hasConsentForMarketing: computed(() => _consentFlags.value.marketing),
    getConsent: (type: 'analytics' | 'marketing') => {
      const currentVal =
        storedConsent.value && typeof storedConsent.value === 'object'
          ? storedConsent.value
          : defaultConsentValues
      return !!currentVal[type]
    },
    openCookieSettings,
    setConsent,
    _rawStoredConsent: readonly(storedConsent), // Nur lesbar machen für externe Watcher
  }
}
