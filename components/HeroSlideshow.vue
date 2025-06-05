<template>
  <section 
    class="hero relative min-h-[60vh] h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden"
    @mouseenter="pauseAutoplay" 
    @mouseleave="resumeAutoplay"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <!-- Slideshow Container -->
    <div class="hero-slideshow absolute inset-0 w-full h-full">
      <!-- Background Slides -->
      <div 
        v-for="(slide, index) in slides" 
        :key="slide.id"
        :class="[
          'slide absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out',
          index === activeIndex ? 'opacity-100' : 'opacity-0'
        ]"
      >
        <img
          :src="slide.imageSrc"
          :alt="slide.alt"
          class="w-full h-full object-cover object-center"
          loading="eager"
          @load="handleImageLoad(index)"
        />
        <!-- Responsive overlay -->
        <div class="absolute inset-0 bg-black/30 sm:bg-black/40"></div>
      </div>
    </div>

    <!-- Hero Content - Fully Responsive Overlay Box -->
    <div class="hero-content relative z-20 flex items-center justify-center h-full p-3 xs:p-4 sm:p-6">
      <div class="content-overlay bg-black/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-6 sm:p-8 lg:p-12 w-full max-w-[90vw] sm:max-w-4xl text-center text-white border border-white/10">
        <!-- Main Headline -->
        <h1 class="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-[1.1] tracking-tight">
          <span class="block sm:inline">Reittherapie &</span>
          <span class="block sm:inline"> Pony-Erlebnisse</span>
        </h1>
        
        <!-- Subtitle - Responsive sizing -->
        <p class="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-4 xs:mb-6 sm:mb-8 max-w-none sm:max-w-3xl mx-auto leading-relaxed opacity-90 px-2 sm:px-0">
          Entdecke bei uns spielerisch die Welt der Pferde. Individuelle Förderung, 
          unvergessliche Kindergeburtstage und Ferienspaß mit Herz und Huf.
        </p>

        <!-- CTA Button - Responsive sizing -->
        <div class="mb-4 xs:mb-6">
          <AppButton 
            variant="primary"
            size="lg"
            :to="{ name: 'angebote' }"
            class="px-4 xs:px-6 sm:px-8 py-3 xs:py-4 text-sm xs:text-base sm:text-lg font-semibold w-full xs:w-auto"
          >
            Unsere Angebote entdecken
          </AppButton>
        </div>

        <!-- Disclaimer - Responsive text -->
        <p class="text-xs xs:text-sm lg:text-base text-white/80 max-w-none sm:max-w-2xl mx-auto px-2 sm:px-0">
          <span class="text-yellow-300">Hinweis:</span> Website im Aufbau. Für Anfragen bitte 
          <NuxtLink :to="{ name: 'contact' }" class="text-primary-light hover:underline font-medium">
            Kontakt
          </NuxtLink> aufnehmen.
        </p>
      </div>
    </div>

    <!-- Responsive Slide Navigation -->
    <div class="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
      <div class="flex space-x-1.5 xs:space-x-2 sm:space-x-3">
        <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          @click="goToSlide(index)"
          :class="[
            'rounded-full transition-all duration-300',
            'w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3',
            index === activeIndex 
              ? 'bg-white scale-110 sm:scale-125' 
              : 'bg-white/50 hover:bg-white/75'
          ]"
          :aria-label="`Zu Slide ${index + 1} wechseln`"
        />
      </div>
    </div>

    <!-- Navigation Arrows - Hidden on small screens -->
    <button
      @click="previousSlide"
      class="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 p-1.5 sm:p-2 text-white/70 hover:text-white transition-colors duration-300 hidden sm:block"
      aria-label="Vorheriges Bild"
    >
      <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button
      @click="nextSlide"
      class="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 p-1.5 sm:p-2 text-white/70 hover:text-white transition-colors duration-300 hidden sm:block"
      aria-label="Nächstes Bild"
    >
      <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { NuxtLink } from '#components'
import AppButton from '~/components/AppButton.vue'
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()

interface Slide {
  id: string
  imageSrc: string
  alt: string
  width: number
  height: number
}

const slides = ref<Slide[]>([
  {
    id: 'weidegang',
    imageSrc: '/images/Highlightcard/Weidegang.webp',
    alt: `Ponys genießen den Weidegang im satten Frühlingsgras auf dem Ponyhof`,
    width: 1536,
    height: 1024,
  },
  {
    id: 'balu-galopp',
    imageSrc: '/images/Pferde/Balu.webp',
    alt: `Pferd Balu galoppiert voller Energie über die Koppel`,
    width: 1536,
    height: 1024,
  },
  {
    id: 'napoleon-neugierig',
    imageSrc: '/images/Pferde/Tim_Napoleon_Ballon.webp',
    alt: `Neugieriger Blick von Shetty Napoleon auf dem Ponyhof`,
    width: 1536,
    height: 1024,
  },
  {
    id: 'sarah-pferd',
    imageSrc: '/images/team/Sarah.webp',
    alt: `Sarah Handte, Inhaberin von Leben ist ein Ponyhof, mit einem ihrer Pferde`,
    width: 1322,
    height: 1762,
  },
  {
    id: 'geburtstag-pinata',
    imageSrc: '/images/Einhorn_Pinjata.png',
    alt: `Kindergeburtstag mit bunter Einhorn-Piñata auf dem Ponyhof`,
    width: 1200,
    height: 900,
  },
])

// State
const activeIndex = ref(0)
const intervalTime = 5000

// Autoplay
let autoplayTimer: NodeJS.Timeout | null = null
let isPausedByUser = false

// Touch handling
const touchStartX = ref(0)
const touchEndX = ref(0)
const minSwipeDistance = 50

// Methods
const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % slides.value.length
}

const previousSlide = () => {
  activeIndex.value = activeIndex.value === 0 ? slides.value.length - 1 : activeIndex.value - 1
}

const goToSlide = (index: number) => {
  activeIndex.value = index
  isPausedByUser = true
  resetAutoplay()
  setTimeout(() => { 
    isPausedByUser = false
    resumeAutoplay()
  }, intervalTime * 2)
}

const handleImageLoad = (index: number) => {
  if (index === 0) {
    startAutoplay()
  }
}

const startAutoplay = () => {
  if (autoplayTimer) clearInterval(autoplayTimer)
  if (slides.value.length > 1 && !isPausedByUser) {
    autoplayTimer = setInterval(nextSlide, intervalTime)
  }
}

const pauseAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
  isPausedByUser = true
}

const resumeAutoplay = () => {
  isPausedByUser = false
  startAutoplay()
}

const resetAutoplay = () => {
  if (autoplayTimer) clearInterval(autoplayTimer)
  if (!isPausedByUser && slides.value.length > 1) {
    autoplayTimer = setInterval(nextSlide, intervalTime)
  }
}

// Touch handlers
const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.changedTouches[0].screenX
}

const handleTouchMove = (e: TouchEvent) => {
  e.preventDefault()
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX.value = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const distance = touchStartX.value - touchEndX.value
  
  if (Math.abs(distance) > minSwipeDistance) {
    if (distance > 0) {
      nextSlide()
    } else {
      previousSlide()
    }
  }
}

// Lifecycle
onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  if (autoplayTimer) clearInterval(autoplayTimer)
})
</script>

<style scoped>
/* Custom breakpoint for extra small screens */
@media (min-width: 475px) {
  .xs\:text-base { font-size: 1rem; }
  .xs\:text-lg { font-size: 1.125rem; }
  .xs\:text-xl { font-size: 1.25rem; }
  .xs\:text-2xl { font-size: 1.5rem; }
  .xs\:text-3xl { font-size: 1.875rem; }
  .xs\:p-4 { padding: 1rem; }
  .xs\:p-6 { padding: 1.5rem; }
  .xs\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .xs\:py-4 { padding-top: 1rem; padding-bottom: 1rem; }
  .xs\:mb-4 { margin-bottom: 1rem; }
  .xs\:mb-6 { margin-bottom: 1.5rem; }
  .xs\:space-x-2 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.5rem; }
  .xs\:w-auto { width: auto; }
  .xs\:w-2\.5 { width: 0.625rem; }
  .xs\:h-2\.5 { height: 0.625rem; }
  .xs\:bottom-4 { bottom: 1rem; }
}

/* Ultra-responsive content overlay */
.content-overlay {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
}

/* Smooth transitions */
.slide {
  will-change: opacity;
}

/* Enhanced hover effects for touch devices */
@media (hover: hover) {
  .transform:hover {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .slide,
  .transform,
  .transition-all,
  .transition-opacity,
  .transition-colors {
    transition: none !important;
    animation: none !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .content-overlay {
    background: rgba(0, 0, 0, 0.9);
    border: 2px solid white;
  }
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .content-overlay {
    margin: 0.75rem;
    padding: 1rem;
  }
  
  .hero-content h1 {
    font-size: 1.75rem;
    line-height: 1.2;
  }
  
  .hero-content p {
    font-size: 0.875rem;
  }
}

@media (max-width: 375px) {
  .content-overlay {
    margin: 0.5rem;
    padding: 0.75rem;
  }
  
  .hero-content h1 {
    font-size: 1.5rem;
  }
}
</style>