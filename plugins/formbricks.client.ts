// plugins/formbricks.client.ts
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import formbricks from '@formbricks/js' // Standard-Import beibehalten

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig().public.formbricks

  if (!config?.environmentId || !config?.apiHost) {
    console.warn('⚠️ Formbricks: environmentId oder apiHost fehlt in der Nuxt-Config. Formbricks wird nicht initialisiert.')
    // Optional: Dummy-Formbricks-Objekt bereitstellen, um Fehler in der App zu vermeiden, falls $formbricks erwartet wird
    nuxtApp.provide('formbricks', {
      track: (eventName: string, data?: any, isFinishedSubmission?: boolean) => console.warn(`Formbricks nicht initialisiert. Event "${eventName}" ignoriert.`, data, isFinishedSubmission),
      // Hier könntest du weitere Methoden von Formbricks als Dummies hinzufügen, falls deine App sie aufruft
    })
    return
  }

  try {
    await formbricks.init({
      environmentId: config.environmentId,
      apiHost: config.apiHost,
      // Versuche, hier Konfigurationsoptionen hinzuzufügen, falls in der Doku für @formbricks/js welche existieren,
      // um In-App-Features zu deaktivieren oder den Sync-Fehler zu umgehen.
      // Z.B. (SPEKULATIV, nach Doku prüfen!):
      // surveysEnabled: false, // oder ähnliches
    })
    console.log('✅ Formbricks (Standard Modul) global initialisiert.')
    nuxtApp.provide('formbricks', formbricks)
  } catch (error: any) {
    console.error('❌ Formbricks - Fehler bei der Initialisierung im Plugin:', error.message || error)
    // Prüfen, ob es der bekannte Sync-Fehler ist, der evtl. ignoriert werden kann,
    // wenn nur Website-Formulare genutzt werden.
    const errorMessage = String(error.message || error);
    if (errorMessage.includes("Could not initialize formbricks") || errorMessage.includes("/in-app/sync")) {
      console.warn("⚠️ Formbricks: Initialisierung des In-App-Moduls fehlgeschlagen (wahrscheinlich /sync Fehler). Formbricks wird dennoch für Website-Formulare bereitgestellt, Funktionalität könnte aber eingeschränkt sein.");
      // $formbricks trotzdem bereitstellen, damit deine Formular-Submits noch eine Chance haben,
      // da diese oft einen anderen Endpunkt als /sync verwenden.
      nuxtApp.provide('formbricks', formbricks);
    } else {
      // Für andere, unerwartete Fehler:
      console.error("❌ Formbricks: Kritischer und unerwarteter Initialisierungsfehler. Dummy-Formbricks wird bereitgestellt.");
      nuxtApp.provide('formbricks', {
        track: (eventName: string, data?: any, isFinishedSubmission?: boolean) => console.warn(`Formbricks kritisch fehlgeschlagen. Event "${eventName}" ignoriert.`, data, isFinishedSubmission),
      })
    }
  }
})