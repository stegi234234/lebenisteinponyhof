<template>
  <section class="welcome-section py-16 md:py-20 bg-white dark:bg-gray-800/80" aria-labelledby="welcome-heading">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
        <div class="lg:w-1/2 relative isolate order-2 lg:order-1">
          <div class="absolute top-0 right-0 w-32 h-32 bg-pink-400/10 dark:bg-pink-200/10 blur-2xl rounded-full -z-10 transform translate-x-1/3 -translate-y-1/3 lg:translate-x-0 lg:-translate-x-1/4"></div>
          <NuxtLink :to="{ path: '/about' }" :aria-label="`Mehr über Sarah & Nero von Leben ist ein Ponyhof ${businessAddress.city}`">
            <div class="aspect-[3/4] lg:aspect-[4/5] max-h-[600px] lg:max-h-[700px] mx-auto lg:mx-0 max-w-md lg:max-w-none overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-100 dark:ring-white/10 border border-white/60 dark:border-white/10 transition-transform hover:scale-105 duration-300">
              <NuxtImg
                src="/images/hero/sarah-und-nero.webp"
                :alt="`Sarah Handte mit ihrem schwarzen Pony Nero – Ihr Partner für unvergessliches Ponyreiten in ${businessAddress.city}`"
                class="w-full h-full object-cover object-top"
                loading="eager"
                format="webp"
                quality="85"
                width="800"
                height="1066"
                densities="1x 2x"
                sizes="xs:100vw sm:80vw md:60vw lg:500px"
              />
            </div>
          </NuxtLink>
        </div>
        <div class="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
          <!-- Die H1 sollte auf der Startseite (pages/index.vue) über useHead oder im Template dort definiert sein. -->
          <!-- Hier verwenden wir eine H2, die die Kernaussage der Sektion unterstreicht. -->
          <h2 id="welcome-heading" class="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-4 text-gray-800 dark:text-white leading-tight">
            Herzlich willkommen zum Ponyreiten in {{ businessAddress.city }}!
            <span class="block text-primary-color dark:text-primary-light mt-1 text-2xl md:text-3xl">Bei Leben ist ein Ponyhof</span>
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Träumt Ihr Kind von einem Abenteuer auf dem Ponyrücken? Bei uns in <strong>{{ businessAddress.city }}</strong> wird dieser Traum wahr!
            Wir bieten unvergessliches <NuxtLink :to="{ path: '/angebote', hash: '#ponyreiten'}" class="font-semibold text-primary-color hover:underline">Ponyreiten in {{ businessAddress.city }}</NuxtLink> und
            einzigartige Erlebnisse mit unseren liebevollen Ponys. Entdecken Sie unsere pferdegestützten Angebote,
            zauberhafte Kindergeburtstage und spannende Ferienkurse – alles direkt hier in der Region {{ businessAddress.city }} und Leonberg.
          </p>
          <div class="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8 justify-center lg:justify-start">
            <AppButton :to="{ path: '/about' }" variant="primary" size="lg">
              Mehr über uns erfahren <i class="fas fa-arrow-right ml-2"></i>
            </AppButton>
            <AppButton :to="{ path: '/angebote' }" variant="outline-primary" size="lg">
              Alle Pony-Angebote <i class="fas fa-horse-head ml-2"></i>
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { NuxtLink, NuxtImg } from '#components';
import AppButton from '~/components/AppButton.vue';
import { useRuntimeConfig } from '#app'; // useRuntimeConfig importieren

const config = useRuntimeConfig();
const businessAddress = config.public.businessAddress;
</script>