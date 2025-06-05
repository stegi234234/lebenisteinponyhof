<template>
  <ClientOnly>
    <div
      v-if="consent.isBannerOpen.value"
      id="cookieBanner"
      class="cookie-banner fixed bottom-0 left-0 right-0 w-full bg-white/95 dark:bg-gray-900/95 text-gray-800 dark:text-white p-4 shadow-2xl z-[9999] animate-slideUp border-t-4 border-primary-color"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookieBannerTitle"
      aria-describedby="cookieBannerDescription"
    >
      <div class="cookie-content container mx-auto max-w-5xl">
        <div class="flex items-center mb-4">
          <div class="rounded-full bg-primary-color/10 p-2.5 mr-3 shadow-sm">
            <i class="fas fa-cookie-bite text-primary-color text-2xl"></i>
          </div>
          <div>
            <h3 id="cookieBannerTitle" class="text-lg font-semibold text-primary-color">Wir respektieren deine Privatsphäre</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">Deine Auswahl wird für 6 Monate gespeichert.</p>
          </div>
        </div>

        <p id="cookieBannerDescription" class="text-sm mb-5">
          Diese Website verwendet Cookies und ähnliche Technologien, um dein Nutzererlebnis zu verbessern,
          die Websiteleistung zu analysieren und dir relevante Inhalte anzuzeigen.
          Bitte wähle aus, welche Cookies du akzeptieren möchtest.
        </p>

        <div class="cookie-tabs mb-4">
          <div class="flex border-b border-gray-200 dark:border-gray-700" role="tablist" aria-label="Cookie Einstellungen Tabs">
            <button
              @click="activeTab = 'simple'"
              :class="tabButtonClasses('simple')"
              role="tab"
              :aria-selected="activeTab === 'simple'"
              aria-controls="simple-cookie-panel"
              id="simple-cookie-tab"
            >
              Übersicht
            </button>
            <button
              @click="activeTab = 'detailed'"
              :class="tabButtonClasses('detailed')"
              role="tab"
              :aria-selected="activeTab === 'detailed'"
              aria-controls="detailed-cookie-panel"
              id="detailed-cookie-tab"
            >
              Detaillierte Einstellungen
            </button>
          </div>
        </div>

        <!-- Einfache Ansicht -->
        <div
          v-show="activeTab === 'simple'"
          id="simple-cookie-panel"
          role="tabpanel"
          aria-labelledby="simple-cookie-tab"
          class="cookie-settings space-y-4 mb-5 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700/50"
        >
          <CookieOption
            id="essentialCookiesSimple"
            label="Notwendige Cookies"
            description="Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert werden."
            :checked="true"
            :disabled="true"
            badge="Immer aktiv"
            :accent-color="accentColor"
          />
          <CookieOption
            id="analyticsCookiesSimple"
            label="Analyse-Cookies"
            description="Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren. Alle Daten werden anonymisiert erhoben."
            v-model="localConsentChoices.analytics"
            :accent-color="accentColor"
          />
          <CookieOption
            id="marketingCookiesSimple"
            label="Marketing- & Externe Medien-Cookies"
            description="Ermöglichen die Einbindung von Social Media Inhalten, Videos und interaktiven Karten. Diese Dienste können Informationen über Ihre Nutzung sammeln."
            v-model="localConsentChoices.marketing"
            :accent-color="accentColor"
          />
        </div>

        <!-- Detaillierte Ansicht -->
        <div
          v-show="activeTab === 'detailed'"
          id="detailed-cookie-panel"
          role="tabpanel"
          aria-labelledby="detailed-cookie-tab"
          class="cookie-detailed-settings mb-5 space-y-4"
        >
          <CookieDetailSection
            title="Notwendige Cookies"
            :is-open="openSections.essential"
            @toggle="toggleSection('essential')"
            :is-checked="true"
            :is-disabled="true"
            :accent-color="accentColor"
          >
            <p class="text-sm mb-3">
              Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unverzichtbar...
            </p>
            <CookieTable :cookies="essentialCookiesData" />
          </CookieDetailSection>

          <CookieDetailSection
            title="Analyse-Cookies"
            :is-open="openSections.analytics"
            @toggle="toggleSection('analytics')"
            v-model:isChecked="localConsentChoices.analytics"
            :accent-color="accentColor"
          >
            <p class="text-sm mb-3">
              Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen...
            </p>
            <CookieTable :cookies="analyticsCookiesData" />
          </CookieDetailSection>

          <CookieDetailSection
            title="Marketing- & Externe Medien-Cookies"
            :is-open="openSections.marketing"
            @toggle="toggleSection('marketing')"
            v-model:isChecked="localConsentChoices.marketing"
            :accent-color="accentColor"
          >
            <p class="text-sm mb-3">
              Diese Cookies werden von externen Anbietern wie YouTube, Instagram und TikTok gesetzt...
            </p>
            <CookieTable :cookies="marketingCookiesData" />
          </CookieDetailSection>
        </div>

        <div class="cookie-buttons grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <button @click="handleAcceptSelected" class="cookie-btn">
            <i class="fas fa-check-circle mr-2"></i> Ausgewählte speichern
          </button>
          <button @click="handleAcceptAll" class="cookie-btn primary">
            <i class="fas fa-check-double mr-2"></i> Alle akzeptieren
          </button>
          <button @click="handleRejectNonEssential" class="cookie-btn">
            <i class="fas fa-ban mr-2"></i> Nur notwendige
          </button>
        </div>

        <div class="cookie-footer text-xs text-center text-gray-500 dark:text-gray-400 flex justify-center gap-x-4 gap-y-1 flex-wrap">
          <NuxtLink to="/datenschutz" class="underline hover:text-primary-color">Datenschutzerklärung</NuxtLink>
          <NuxtLink to="/impressum" class="underline hover:text-primary-color">Impressum</NuxtLink>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useCookieConsent, type ConsentState } from '~/composables/useCookieConsent';
import { NuxtLink } from '#components'; // Expliziter Import für Klarheit

// Hilfskomponenten (optional, für bessere Struktur)
// Du müsstest diese Komponenten erstellen, wenn du sie nutzen willst.
// Ich lasse den Code erstmal ohne sie, um es einfacher zu halten, aber so könnte es aussehen:
// import CookieOption from './CookieOption.vue';
// import CookieDetailSection from './CookieDetailSection.vue';
// import CookieTable from './CookieTable.vue';

// Hilfskomponenten direkt hier definieren, um externe Dateien zu vermeiden
const CookieOption = defineComponent({
  props: {
    id: String,
    label: String,
    description: String,
    checked: Boolean,
    disabled: Boolean,
    badge: String,
    accentColor: String,
    modelValue: Boolean, // Für v-model
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const internalChecked = computed({
      get: () => props.modelValue !== undefined ? props.modelValue : props.checked,
      set: (val) => emit('update:modelValue', val),
    });
    return () => h('div', { class: 'cookie-option flex items-start gap-3 p-3 bg-white dark:bg-gray-700/50 rounded-md border border-gray-200 dark:border-gray-600/50' }, [
      h('div', { class: 'mt-1' }, [
        h('input', {
          type: 'checkbox',
          id: props.id,
          checked: internalChecked.value,
          disabled: props.disabled,
          class: `h-5 w-5 rounded text-${props.accentColor || 'primary-color'} border-gray-300 dark:border-gray-500 focus:ring-${props.accentColor || 'primary-color'}/50 dark:bg-gray-600 dark:checked:bg-${props.accentColor || 'primary-color'}`,
          onChange: (e: Event) => {
            if (props.modelValue !== undefined) {
              internalChecked.value = (e.target as HTMLInputElement).checked;
            }
          }
        }),
      ]),
      h('label', { for: props.id, class: 'text-sm flex-1 cursor-pointer' }, [
        h('div', { class: 'flex items-center justify-between' }, [
          h('strong', { class: 'block text-gray-800 dark:text-white' }, props.label),
          props.badge && h('span', { class: `ml-2 px-2 py-0.5 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs rounded-full whitespace-nowrap` }, props.badge),
        ]),
        h('span', { class: 'text-gray-600 dark:text-gray-400 text-xs block mt-1' }, props.description),
      ]),
    ]);
  },
});

const CookieDetailSection = defineComponent({
  props: {
    title: String,
    isOpen: Boolean,
    isChecked: Boolean,
    isDisabled: Boolean,
    accentColor: String,
  },
  emits: ['toggle', 'update:isChecked'],
  setup(props, { emit, slots }) {
    const internalChecked = computed({
      get: () => props.isChecked,
      set: (val) => emit('update:isChecked', val),
    });
    return () => h('div', { class: 'border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden' }, [
      h('div', { class: 'bg-gray-100 dark:bg-gray-800 px-4 py-3 flex justify-between items-center' }, [
        h('div', { class: 'flex items-center gap-3' }, [
          h('input', {
            type: 'checkbox',
            checked: internalChecked.value,
            disabled: props.isDisabled,
            class: `h-5 w-5 rounded text-${props.accentColor || 'primary-color'} border-gray-300 dark:border-gray-500 focus:ring-${props.accentColor || 'primary-color'}/50 dark:bg-gray-600 dark:checked:bg-${props.accentColor || 'primary-color'}`,
            onChange: (e: Event) => internalChecked.value = (e.target as HTMLInputElement).checked,
            'aria-label': `Schalte ${props.title} ${internalChecked.value ? 'aus' : 'ein'}`
          }),
          h('h4', { class: 'font-medium text-gray-800 dark:text-white' }, props.title),
        ]),
        h('button', {
          onClick: () => emit('toggle'),
          class: 'p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 rounded-md focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-primary-color',
          'aria-expanded': props.isOpen,
          'aria-label': `${props.isOpen ? 'Schließe' : 'Öffne'} Details für ${props.title}`
        }, [
          h('i', { class: `fas transition-transform duration-200 ${props.isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}` }),
        ]),
      ]),
      props.isOpen && h('div', { class: 'p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700' }, slots.default ? slots.default() : ''),
    ]);
  },
});

interface CookieData { name: string; provider: string; purpose: string; duration: string; }
const CookieTable = defineComponent({
  props: {
    cookies: Array as () => CookieData[],
  },
  setup(props) {
    return () => h('div', { class: 'overflow-x-auto -mx-4 px-4' }, [ // Negativer Margin für vollen Scrollbereich auf kleinen Screens
      h('table', { class: 'w-full text-xs border-collapse min-w-[480px]' }, [ // min-width für bessere Lesbarkeit auf kleinen Screens
        h('thead', {}, [
          h('tr', { class: 'bg-gray-50 dark:bg-gray-800 text-left' }, [
            h('th', { class: 'border border-gray-300 dark:border-gray-600 p-2 font-semibold' }, 'Name'),
            h('th', { class: 'border border-gray-300 dark:border-gray-600 p-2 font-semibold' }, 'Anbieter'),
            h('th', { class: 'border border-gray-300 dark:border-gray-600 p-2 font-semibold' }, 'Zweck'),
            h('th', { class: 'border border-gray-300 dark:border-gray-600 p-2 font-semibold' }, 'Speicherdauer'),
          ]),
        ]),
        h('tbody', {}, props.cookies?.map(cookie =>
          h('tr', { class: 'odd:bg-white dark:odd:bg-gray-900 even:bg-gray-50/50 dark:even:bg-gray-800/50' }, [
            h('td', { class: 'border border-gray-300 dark:border-gray-600 p-2' }, cookie.name),
            h('td', { class: 'border border-gray-300 dark:border-gray-600 p-2' }, cookie.provider),
            h('td', { class: 'border border-gray-300 dark:border-gray-600 p-2' }, cookie.purpose),
            h('td', { class: 'border border-gray-300 dark:border-gray-600 p-2' }, cookie.duration),
          ])
        )),
      ]),
    ]);
  },
});


const consent = useCookieConsent();
const accentColor = 'primary-color'; // Deine Akzentfarbe, z.B. 'pink-500' oder 'primary-color'

const localConsentChoices = ref<ConsentState>({
  analytics: false,
  marketing: false,
  timestamp: null, // timestamp wird hier nicht direkt gesetzt
});

const activeTab = ref<'simple' | 'detailed'>('simple');
const openSections = ref({
  essential: true,
  analytics: false,
  marketing: false,
});

const tabButtonClasses = (tabName: 'simple' | 'detailed') => [
  'py-2.5 px-4 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-primary-color rounded-t-md',
  activeTab.value === tabName
    ? 'border-b-2 border-primary-color text-primary-color font-semibold bg-white dark:bg-gray-800/80'
    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50',
];

const toggleSection = (section: keyof typeof openSections.value) => {
  openSections.value[section] = !openSections.value[section];
};

watch(() => consent.isBannerOpen.value, (isOpen, wasOpen) => {
  if (isOpen) {
    localConsentChoices.value.analytics = consent.consentState.value?.analytics || false;
    localConsentChoices.value.marketing = consent.consentState.value?.marketing || false;
    if (!wasOpen) {
      activeTab.value = 'simple';
      openSections.value = { essential: true, analytics: false, marketing: false };
    }
  }
}, { immediate: true });

const handleAcceptAll = () => {
  consent.saveConsent({ analytics: true, marketing: true });
};

const handleAcceptSelected = () => {
  consent.saveConsent({
    analytics: localConsentChoices.value.analytics,
    marketing: localConsentChoices.value.marketing,
  });
};

const handleRejectNonEssential = () => {
  consent.saveConsent({ analytics: false, marketing: false });
};

// Cookie Daten für die Tabellen
const essentialCookiesData: CookieData[] = [
  { name: 'ponyhof_consent', provider: 'Leben ist ein Ponyhof', purpose: 'Speichert Ihre Cookie-Einstellungen', duration: '6 Monate' },
  { name: 'session_cookie', provider: 'Leben ist ein Ponyhof', purpose: 'Sitzungsverwaltung', duration: 'Bis zum Schließen des Browsers' },
];
const analyticsCookiesData: CookieData[] = [
  { name: '_ga', provider: 'Google Analytics', purpose: 'Registriert eine eindeutige ID zur Erstellung statistischer Daten', duration: '2 Jahre' },
  { name: '_gat', provider: 'Google Analytics', purpose: 'Limitiert die Anfragerate', duration: '1 Tag' },
  { name: '_gid', provider: 'Google Analytics', purpose: 'Registriert eine eindeutige ID zur Erstellung statistischer Daten', duration: '1 Tag' },
];
const marketingCookiesData: CookieData[] = [
  { name: 'VISITOR_INFO1_LIVE', provider: 'YouTube', purpose: 'Schätzt die Bandbreite des Benutzers', duration: '6 Monate' },
  { name: 'YSC', provider: 'YouTube', purpose: 'Registriert eine eindeutige ID für Statistiken zu YouTube-Videos', duration: 'Sitzung' },
  { name: 'GPS', provider: 'YouTube', purpose: 'Registriert eine eindeutige ID auf mobilen Geräten', duration: '1 Tag' },
  { name: 'NID', provider: 'Google Maps', purpose: 'Registriert eine eindeutige ID für Präferenzen und Dienste', duration: '6 Monate' },
];

</script>

<style scoped>
.animate-slideUp {
  animation: slideUp 0.4s ease-out forwards;
}

@keyframes slideUp {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.cookie-btn {
  @apply sm:flex-1 py-2.5 px-4 rounded-full text-sm font-medium flex items-center justify-center transition-all duration-200 ease-out
         border border-transparent
         focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900;
}
.cookie-btn:not(.primary) {
  @apply bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200
         hover:bg-gray-200 dark:hover:bg-gray-600
         focus:ring-gray-400 dark:focus:ring-gray-500;
}
.cookie-btn.primary {
  @apply bg-primary-color text-white
         hover:bg-opacity-90
         focus:ring-primary-color;
}

/* Responsive Tabellen auf sehr kleinen Bildschirmen */
@media (max-width: 640px) {
  .cookie-buttons {
    @apply grid-cols-1; /* Buttons untereinander */
  }
}
</style>