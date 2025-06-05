<template>
  <section
    aria-labelledby="contact-cta-heading"
    class="bg-gradient-to-r from-primary-color/10 to-secondary-color/5 dark:from-primary-light/10 dark:to-secondary-color/10 p-6 md:p-10 rounded-xl text-center shadow-inner border border-primary-color/20 dark:border-primary-light/20"
  >
    <h2 id="contact-cta-heading" class="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
      <i class="fas fa-envelope-open-text text-primary-color dark:text-primary-light mr-2.5 text-2xl" aria-hidden="true"></i>
      Fragen oder spezielle Wünsche zu unseren Pony-Angeboten in {{ city }}?
    </h2>
    <p class="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
      Wir beraten Sie gerne persönlich und stellen ein individuelles Pony-Erlebnis für Sie
      zusammen. Kontaktieren Sie uns noch heute – wir freuen uns auf Ihre Nachricht oder Ihren Anruf!
    </p>
    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
      <AppButton
        :href="`tel:${phoneNumberForLink}`"
        tag="a"
        variant="secondary"
        size="lg"
        class="!bg-green-500 hover:!bg-green-600 !text-white dark:!bg-green-600 dark:hover:!bg-green-700"
        :aria-label="`Rufen Sie uns an unter ${phoneNumberDisplay} für Pony-Angebote in ${city}`"
      >
        <i class="fas fa-phone-alt mr-2.5" aria-hidden="true"></i>
        {{ phoneNumberDisplay }}
      </AppButton>
      <AppButton
        :to="{ path: '/contact', query: {subject: `Allgemeine Anfrage Ponyhof ${city}`} }"
        variant="primary"
        size="lg"
        :aria-label="`Senden Sie uns eine schriftliche Anfrage für Pony-Angebote in ${city}`"
      >
        <i class="fas fa-paper-plane mr-2.5" aria-hidden="true"></i>
        Schriftliche Anfrage
      </AppButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import AppButton from '~/components/AppButton.vue';
import { useRuntimeConfig } from '#app';

const props = defineProps<{
  city: string;
}>();

const config = useRuntimeConfig();
const phoneNumberDisplay = ref(config.public.businessAddress.telephone || '+49 1575 9666733');
const phoneNumberForLink = computed(() => phoneNumberDisplay.value.replace(/[\s/]+/g, ''));
</script>