<!-- components/CtaSection.vue -->
<template>
  <section class="cta-section bg-gradient-primary text-white py-12 md:py-16 text-center">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">Bereit für ein Pferde-Abenteuer?</h2>
      <p class="max-w-xl mx-auto mb-8 opacity-90">
        Egal ob Kindergeburtstag, Ferienkurs oder individuelle Förderung – wir freuen uns auf euch!
      </p>
      <NuxtLink to="/contact" class="inline-block bg-white text-primary-color px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
        Jetzt Kontakt aufnehmen
      </NuxtLink>
    </div>
  </section>
</template>
<script setup>
import { NuxtLink } from '#components';
</script>