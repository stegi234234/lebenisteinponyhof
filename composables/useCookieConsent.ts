// composables/useCookieConsent.ts
import { ref, readonly, onMounted, onUnmounted, watch, computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const COOKIE_CONSENT_KEY = 'cookie_consent_lebenisteinponyhof_v2' // v2 beibehalten oder erhöhen bei Strukturänderung

export interface ConsentState {
  analytics: boolean
  marketing: boolean
  timestamp: number | null
}

const defaultConsentValues: ConsentState = {
  analytics: false,
  marketing: false,
  timestamp: null,
}

let globalStoredConsent: ReturnType<typeof useLocalStorage<ConsentState>> | null = null
const globalIsBannerOpen = ref(false)

function initializeConsentState() {
  if (process.client && !globalStoredConsent) {
    globalStoredConsent = useLocalStorage<ConsentState>(COOKIE_CONSENT_KEY, defaultConsentValues, {
      mergeDefaults: (storageValue, defaults) => {
        const result = { ...defaults, ...storageValue };
        if (storageValue.timestamp === undefined && Object.keys(storageValue).length > 0) { // Nur Banner zeigen, wenn alter Consent existiert aber ohne Timestamp
          result.timestamp = null;
        } else if (Object.keys(storageValue).length === 0) { // Neuer Nutzer
            result.timestamp = null;
        }
        return result;
      },
    });

    if (globalStoredConsent.value.timestamp === null) {
      globalIsBannerOpen.value = true
    }
  }
}

export function useCookieConsent() {
  initializeConsentState()

  const consentState = computed(() => globalStoredConsent?.value || defaultConsentValues)
  const isBannerOpen = computed(() => globalIsBannerOpen.value)

  const hasConsentForAnalytics = computed(() => consentState.value.analytics)
  const hasConsentForMarketing = computed(() => consentState.value.marketing)

  const openCookieSettings = () => {
    if (process.client) {
      globalIsBannerOpen.value = true
    }
  }

  const saveConsent = (options: { analytics: boolean; marketing: boolean }) => {
    if (process.client && globalStoredConsent) {
      globalStoredConsent.value = {
        ...globalStoredConsent.value,
        analytics: options.analytics,
        marketing: options.marketing,
        timestamp: Date.now(),
      }
      globalIsBannerOpen.value = false
      // Globales Event dispatchen, damit andere Teile der App reagieren können
      window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: globalStoredConsent.value }));
    }
  }

  if (process.client) {
    watch(
      () => globalStoredConsent?.value,
      (newValue, oldValue) => {
        if (newValue && newValue.timestamp !== null && globalIsBannerOpen.value) {
          globalIsBannerOpen.value = false
        }
        // Dispatche Event nur, wenn sich der Wert tatsächlich geändert hat,
        // um Endlosschleifen bei manchen Browsern/Extensions zu vermeiden
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: newValue }));
        }
      },
      { deep: true }
    )

    const handleOpenSettingsEvent = () => {
      openCookieSettings();
    }
    // Event Listener für das Öffnen des Banners von anderen Komponenten, z.B. Footer
    onMounted(() => {
        window.addEventListener('openCookieSettingsManual', handleOpenSettingsEvent);
    });
    onUnmounted(() => {
        window.removeEventListener('openCookieSettingsManual', handleOpenSettingsEvent);
    });
  }

  return {
    consentState: readonly(consentState),
    hasConsentForAnalytics,
    hasConsentForMarketing,
    hasAnalyticsConsent: hasConsentForAnalytics, // Alias
    hasMarketingConsent: hasConsentForMarketing, // Alias
    openCookieSettings,
    saveConsent,
    isBannerOpen,
    _rawStoredConsent: process.client && globalStoredConsent ? readonly(globalStoredConsent) : readonly(ref(defaultConsentValues)),
  }
}
export const useConsent = useCookieConsent; // Alias