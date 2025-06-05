<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Statische Infoseite</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Dies ist eine Beispiel-Infoseite, die statisch generiert wird.
      </p>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li aria-current="page">Statische Infoseite</li>
      </ol>
    </nav>

    <article class="content container mx-auto max-w-3xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md prose dark:prose-invert prose-a:text-primary-color dark:prose-a:text-primary-light prose-headings:text-gray-800 dark:prose-headings:text-white">
      <p>
        Willkommen auf unserer statischen Infoseite! Dieser Inhalt wird beim Build-Prozess
        als HTML-Datei generiert und direkt ausgeliefert, was zu sehr schnellen Ladezeiten führt.
      </p>
      <p>
        Hier könnten Informationen stehen, die sich nicht häufig ändern, wie z.B.:
      </p>
      <ul>
        <li>Details zu einem bestimmten Angebot, das immer gleich bleibt.</li>
        <li>Eine spezielle Landingpage für eine Kampagne.</li>
        <li>Ausführliche Hintergrundinformationen zu einem Thema.</li>
      </ul>
      <p>
        Da diese Seite mit <code>{ prerender: true }</code> in den <code>routeRules</code>
        deiner <code>nuxt.config.ts</code> konfiguriert ist, wird sie beim Ausführen von
        <code>npm run generate</code> (oder <code>npm run build</code>, wenn Prerendering Teil des Build-Prozesses ist)
        erstellt.
      </p>

      <div class="mt-8 text-center">
        <AppButton :to="{ path: '/' }" variant="primary">
          Zurück zur Startseite
        </AppButton>
      </div>
    </article>
  </div>
</template>

<script setup>
import { NuxtLink } from '#components'; // NuxtLink wird automatisch importiert, aber explizit ist okay
import AppButton from '~/components/AppButton.vue'; // Stelle sicher, dass der Pfad korrekt ist
import { useMySeoMeta } from '~/composables/useMySeoMeta'; // Dein SEO Composable

// SEO für diese Seite
useMySeoMeta({
  title: 'Statische Infoseite',
  description: 'Eine Beispiel-Infoseite, die statisch mit Nuxt 3 generiert wird, um schnelle Ladezeiten zu gewährleisten.',
  keywords: 'statische Seite, Nuxt 3, Prerendering, Infoseite, Beispiel',
  ogImage: 'https://lebenisteinponyhof.de/images/og-default.webp', // Ersetze dies ggf. durch ein spezifisches Bild
  ogType: 'article' // oder 'website', je nach Inhalt
});
</script>

<style scoped>
/* Page Header und Breadcrumb Styles wie in deinen anderen Seiten, falls nötig */
.page-header {
  @apply text-center py-8 md:py-12 bg-gray-50 dark:bg-gray-800/50;
}
.breadcrumb {
  @apply container mx-auto px-4 py-3 text-sm text-gray-500 dark:text-gray-400;
}
.breadcrumb ol {
  @apply list-none p-0 inline-flex items-center space-x-1.5;
}
.breadcrumb li:not(:last-child)::after {
  content: '/';
  @apply ml-1.5 text-gray-400 dark:text-gray-500;
}
.breadcrumb a {
  @apply hover:text-primary-color dark:hover:text-primary-light;
}
.breadcrumb li[aria-current='page'] {
  @apply font-medium text-gray-700 dark:text-gray-200;
}
/* Weitere Styles für prose etc. werden global oder durch Tailwind Prose Plugin gehandhabt */
</style>