<template>
  <!-- Glassmorphism Back to Top Button mit Progress Ring -->
  <transition name="fade-bounce">
    <div
      v-show="showButton"
      class="back-to-top-container fixed bottom-4 xs:bottom-6 right-4 xs:right-6 z-[100]"
    >
      <!-- Progress Ring Background -->
      <svg
        class="progress-ring absolute inset-0 w-14 h-14 xs:w-16 xs:h-16 transform -rotate-90"
        viewBox="0 0 56 56"
      >
        <!-- Background Circle -->
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="rgba(255, 255, 255, 0.1)"
          stroke-width="2"
          fill="none"
          class="drop-shadow-sm"
        />
        <!-- Progress Circle -->
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="url(#gradient)"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="progressOffset"
          class="progress-circle transition-all duration-300 ease-out drop-shadow-md"
        />
        <!-- Gradient Definition -->
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#8B5CF6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#EC4899;stop-opacity:1" />
          </linearGradient>
        </defs>
      </svg>

      <!-- Main Button -->
      <button
        @click="scrollToTop"
        @mouseenter="onHover"
        @mouseleave="onLeave"
        class="main-button relative w-14 h-14 xs:w-16 xs:h-16 rounded-full backdrop-blur-md bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-primary-color/25 dark:hover:shadow-primary-light/25 transition-all duration-500 ease-out group"
        :class="[
          isHovered 
            ? 'scale-110 bg-gradient-to-br from-primary-color/90 to-pink-500/90 dark:from-primary-light/90 dark:to-pink-400/90 border-transparent' 
            : ''
        ]"
        aria-label="Zurück nach oben scrollen"
        title="Zurück nach oben"
      >
        <!-- Ripple Effect -->
        <div 
          v-if="showRipple"
          class="absolute inset-0 rounded-full bg-white/30 animate-ping"
          @animationend="showRipple = false"
        ></div>

        <!-- Icon Container -->
        <div class="relative flex items-center justify-center w-full h-full">
          <!-- Arrow Icon -->
          <svg
            class="w-5 h-5 xs:w-6 xs:h-6 transition-all duration-300 ease-out"
            :class="[
              isHovered 
                ? 'text-white transform -translate-y-0.5 scale-110' 
                : 'text-gray-700 dark:text-gray-300'
            ]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
              class="drop-shadow-sm"
            />
          </svg>

          <!-- Floating Particles (on hover) -->
          <div
            v-if="isHovered"
            class="absolute inset-0 pointer-events-none"
          >
            <div
              v-for="i in 3"
              :key="i"
              class="absolute w-1 h-1 bg-white/60 rounded-full animate-float"
              :style="{
                left: `${20 + (i * 20)}%`,
                top: `${15 + (i * 15)}%`,
                animationDelay: `${i * 0.2}s`
              }"
            ></div>
          </div>
        </div>

        <!-- Glow Effect -->
        <div
          class="absolute inset-0 rounded-full transition-opacity duration-500"
          :class="[
            isHovered 
              ? 'opacity-100 bg-gradient-to-br from-primary-color/20 to-pink-500/20 dark:from-primary-light/20 dark:to-pink-400/20 blur-xl scale-150' 
              : 'opacity-0'
          ]"
        ></div>
      </button>

      <!-- Tooltip -->
      <div
        v-if="isHovered"
        class="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900/90 dark:bg-white/90 text-white dark:text-gray-900 text-xs font-medium rounded-lg shadow-lg backdrop-blur-sm whitespace-nowrap transform transition-all duration-300 ease-out"
      >
        Nach oben
        <div class="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90 dark:border-t-white/90"></div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'

// Reactive state
const showButton = ref(false)
const isHovered = ref(false)
const showRipple = ref(false)

// Scroll position
const { y } = useWindowScroll()

// Progress calculation
const scrollThreshold = 400
const circumference = 2 * Math.PI * 24 // radius = 24

const scrollProgress = computed(() => {
  if (typeof window === 'undefined') return 0
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight
  return Math.min((y.value / totalHeight) * 100, 100)
})

const progressOffset = computed(() => {
  const progress = scrollProgress.value
  return circumference - (progress / 100) * circumference
})

// Button visibility
watch(y, () => {
  showButton.value = y.value > scrollThreshold
}, { immediate: true })

// Event handlers
const scrollToTop = () => {
  showRipple.value = true
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  
  // Haptic feedback if supported
  if ('vibrate' in navigator) {
    navigator.vibrate(50)
  }
}

const onHover = () => {
  isHovered.value = true
}

const onLeave = () => {
  isHovered.value = false
}
</script>

<style scoped>
/* Enhanced fade-bounce animation */
.fade-bounce-enter-active {
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.fade-bounce-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-bounce-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.6) rotate(-10deg);
}

.fade-bounce-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.fade-bounce-enter-to,
.fade-bounce-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1) rotate(0deg);
}

/* Progress circle animation */
.progress-circle {
  filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
}

/* Floating particles animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
  25% {
    transform: translateY(-8px) scale(1.1);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-15px) scale(0.9);
    opacity: 0.6;
  }
  75% {
    transform: translateY(-10px) scale(1.05);
    opacity: 0.4;
  }
}

.animate-float {
  animation: float 2s ease-in-out infinite;
}

/* Enhanced hover effects */
.main-button {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.main-button:hover {
  box-shadow: 
    0 20px 40px -12px rgba(0, 0, 0, 0.25),
    0 0 20px rgba(59, 130, 246, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Dark mode optimizations */
@media (prefers-color-scheme: dark) {
  .main-button:hover {
    box-shadow: 
      0 20px 40px -12px rgba(0, 0, 0, 0.5),
      0 0 20px rgba(139, 92, 246, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .back-to-top-container {
    transform: scale(0.9);
  }
}

/* Reduced motion accessibility */
@media (prefers-reduced-motion: reduce) {
  .fade-bounce-enter-active,
  .fade-bounce-leave-active,
  .main-button,
  .progress-circle,
  .animate-float {
    transition: none !important;
    animation: none !important;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .main-button {
    background: rgba(0, 0, 0, 0.9);
    border: 2px solid white;
  }
  
  .main-button:hover {
    background: #000;
  }
}

/* Custom breakpoint for extra small screens */
@media (min-width: 475px) {
  .xs\:bottom-6 { bottom: 1.5rem; }
  .xs\:right-6 { right: 1.5rem; }
  .xs\:w-16 { width: 4rem; }
  .xs\:h-16 { height: 4rem; }
  .xs\:w-6 { width: 1.5rem; }
  .xs\:h-6 { height: 1.5rem; }
}
</style>