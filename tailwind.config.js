// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: 'class',
  safelist: [
    'dark',
    'dark:bg-gray-800',
    'dark:bg-gray-900',
    'dark:bg-amber-900/30',
    'dark:bg-amber-800/30',
    'dark:bg-green-900/30',
    'dark:text-white',
    'dark:text-gray-300',
    'dark:text-gray-400',
    'dark:border-gray-700',
    'dark:border-amber-800/30',
    'hover:bg-amber-600',
    'hover:bg-green-700',
    'hover:bg-gray-300',
    'hover:text-primary-color',
    'hover:text-white',
    'hover:from-purple-600',
    'hover:to-pink-600',
    'hover:bg-primary-color/10',
    'hover:bg-primary-color-dark',
    'hover:bg-white/10',
    'dark:hover:text-primary-light',
    'dark:hover:bg-amber-700',
    'dark:hover:bg-gray-600',
    'dark:hover:bg-primary-light-dark',
    'bg-amber-500',
    'bg-green-600',
    'bg-gray-200',
    'bg-white/95',
    'text-primary-color',
    'text-primary-light',
    'text-amber-600',
    'text-amber-800',
    'text-gray-600',
    'text-gray-700',
    'text-gray-800',
    'text-white',
    'rounded-xl',
    'border',
    'border-gray-100',
    'border-amber-200',
    'shadow-sm',
    'shadow-lg',
    'opacity-0',
    'opacity-100',
    'translate-x-0',
    'translate-x-full',
    'bg-white',
    'text-gray-600',
    'text-gray-700',
    'text-gray-800',
    'border-gray-100',

    // --- Neue Klassen für Back-to-Top Button ---
    'fixed', 'bottom-6', 'right-6', 'z-[100]', 'w-16', 'h-16', 'rounded-full',
    'backdrop-blur-md', 'border-white/10', 'border-white/20', 'shadow-2xl',
    'shadow-purple-500/25', 'focus:ring-4', 'focus:ring-purple-500/50',
    'focus:ring-offset-2', 'transform', 'scale-110', 'transition-all',
    'duration-300', 'duration-500', 'duration-700', 'ease-out', 'group',
    'bg-white/10', 'bg-white/5', 'hover:shadow-xl', 'hover:scale-110',
    'absolute', 'inset-0', '-rotate-90', 'stroke-dasharray', 'stroke-dashoffset',
    'bg-gradient-to-br', 'from-purple-500/20', 'to-pink-500/20',
    'from-purple-500/30', 'to-pink-500/30', 'whitespace-nowrap',
    'bg-gray-900/90', 'backdrop-blur-sm', 'border-white/10',
    'border-l-4', 'border-r-4', 'border-t-4', 'border-l-transparent',
    'border-r-transparent', 'border-t-gray-900/90', 'animate-ping',
    'pointer-events-none', 'opacity-20', 'opacity-1', 'filter', 'drop-shadow',

    // --- Game Komponente Klassen ---
    'game-canvas-container', 'bg-gradient-to-b', 'from-blue-100', 'to-blue-200',
    'from-blue-900', 'to-blue-800', 'border-blue-300', 'border-blue-600',
    'h-60', 'h-72', 'sm:h-72', 'cursor-pointer', 'select-none',
    'items-end', 'overflow-hidden', 'touch-action-manipulation',
    'bottom-1', 'left-5', 'z-10', 'z-5', 'z-20', 'z-25',
    'w-12', 'h-12', 'object-cover', 'object-contain',
    'transition-transform', 'duration-200', 'duration-100',
    'bg-black/40', 'bg-black/60', 'backdrop-blur-sm', 'text-7xl',
    'text-4xl', 'text-5xl', 'text-2xl', 'text-3xl',
    'bg-gradient-primary', 'hover:opacity-90', 'bg-gray-100', 'bg-gray-700',
    'rounded-md', 'text-sm', 'font-medium', 'text-primary-color',
    'text-primary-light', 'text-red-500', 'text-red-400',
    'text-green-500', 'text-green-600', 'text-yellow-500', 'text-orange-500',
    'text-purple-500', 'text-blue-500', 'mx-[1px]',

    // Game Difficulty & Level
    'bg-green-500', 'bg-green-400', 'hover:bg-green-500',
    'bg-blue-500', 'bg-blue-400', 'hover:bg-blue-500',
    'bg-red-500', 'bg-red-400', 'hover:bg-red-500',
    'shadow-md', 'bg-green-400', 'bg-green-600', 'bg-yellow-400',
    'bg-yellow-600', 'bg-red-400', 'bg-red-600', 'h-1',

    // Game Elements & Effects
    'animate-bounce', 'animate-pulse', 'w-1', 'h-1', 'bg-white', 'rounded-full',
    'animate-bounce-obstacle', 'animate-pulse-glow', 'animate-bounce-smooth',
    'animate-gentle-bob', 'invulnerable-flash', 'fast-obstacle',
    'animate-pulse-scale', 'level-up-notification', 'bg-gradient-to-r',
    'from-purple-500', 'to-pink-500', 'px-8', 'py-4', 'font-bold',
    'point-popup', 'text-shadow-strong', 'text-yellow-300', 'text-orange-400',
    'text-green-400', 'text-red-500', 'text-purple-400', 'text-lg', 'text-xl',

    // --- Horse Gallery Klassen ---
    'horse-image-gallery', 'border-t-2', 'border-primary-color/20',
    'border-primary-light/20', 'columns-2', 'columns-3', 'columns-4', 'columns-5',
    'sm:columns-3', 'md:columns-4', 'lg:columns-5', 'gap-3', 'gap-4', 'md:gap-4',
    'space-y-3', 'space-y-4', 'md:space-y-4', 'break-inside-avoid',
    'hover:shadow-2xl', 'hover:scale-[1.03]', 'ease-in-out',
    'bg-gradient-to-t', 'from-black/60', 'via-transparent', 'to-transparent',
    'group-hover:opacity-100', 'transition-opacity', 'p-3', 'flex-col',
    'justify-end', 'text-xs', 'font-medium', 'truncate', 'justify-center',
    'items-center', 'fa-search-plus', 'opacity-70', 'group-hover:opacity-100',

    // --- Horse Cards & Pages ---
    'horse-card', 'horses-container', 'grid-cols-1', 'grid-cols-2', 'grid-cols-3',
    'sm:grid-cols-2', 'lg:grid-cols-3', 'gap-8', 'overflow-hidden',
    'hover:-translate-y-1.5', 'transition-transform', 'flex-col', 'flex-grow',
    'h-64', 'text-xl', 'font-semibold', 'mb-2', 'text-gray-800',
    'min-h-[7em]', 'mt-auto', 'pt-4', 'border-t', 'border-gray-100',
    'border-gray-700', 'justify-center', 'group-hover:scale-110',
    'hover:underline', 'fa-images', 'fa-arrow-right',

    // --- Blog & Content Klassen ---
    'prose', 'prose-invert', 'prose-lg', 'lg:prose-lg', 'not-prose',
    'lead', 'lead-paragraph', '!text-lg', '!font-normal', '!mb-8',
    'float-right-container', 'my-6', 'my-8', 'my-10', 'my-12', 'my-16',
    'max-w-xs', 'max-w-xl', 'max-w-2xl', 'max-w-3xl', 'max-w-4xl',
    'ml-6', 'mb-4', 'clear-right', 'clear-both', 'mx-auto',
    'page-header', 'py-10', 'py-16', 'md:py-16', 'text-center',
    'border-b', 'border-gray-200', 'border-gray-700',

    // --- Navigation & Breadcrumbs ---
    'breadcrumb', 'bg-gray-200', 'bg-gray-700', 'py-2', 'px-4',
    'text-gray-600', 'text-gray-400', 'container', 'mx-auto', 'my-4',
    'rounded', 'list-none', 'p-0', 'inline-flex', 'items-center',
    'hover:text-primary-color', 'mx-2', 'text-gray-500', 'font-semibold',

    // --- Accordion & FAQ ---
    'info-accordion', 'accordion-item', 'bg-gray-50', 'bg-gray-700/30',
    'accordion-header', 'w-full', 'text-left', 'justify-between',
    'items-center', 'text-lg', 'accordion-content', 'mt-4', 'text-gray-300',
    'grid', 'md:grid-cols-2', 'gap-6', 'space-y-1', 'space-y-4',
    'faq-item', 'faq-question', 'faq-answer', 'pt-0',
    'fa-chevron-up', 'fa-chevron-down',

    // --- Highlights & Features ---
    'highlights', 'py-8', 'px-6', 'rounded-xl', 'highlight-item',
    'mb-4', 'mb-2', 'mb-6', 'mb-8', 'testimonials',
    'blockquote', 'italic', 'footer',

    // --- Booking & CTA Sections ---
    'booking-section', 'border-t', 'pt-8', 'cta-section', 'flex-col',
    'sm:flex-row', 'related-experiences', 'experience-card', 'back-link',
    'inline-block', 'px-5', 'py-2.5', 'rounded-full', 'hover:bg-gray-300',
    'hover:bg-gray-600', 'transition-colors', 'shadow', 'hover:shadow-md',
    'fa-arrow-left',

    // --- Share Buttons ---
    'blog-share-buttons', 'share-btn', 'bg-blue-500', 'hover:bg-blue-600',
    'bg-green-500', 'hover:bg-green-600', 'fab', 'fa-facebook-f',
    'fa-whatsapp', 'mr-2',

    // --- Blog Meta & Images ---
    'blog-meta', 'date', 'mr-4', 'read-time', 'far', 'fa-calendar',
    'fa-clock', 'mr-1', 'blog-image', 'rounded-2xl', 'hover:scale-[1.02]',
    'figcaption', 'mt-3', 'mt-2', 'loading-eager', 'loading-lazy',
    'format-webp', 'quality-85', 'quality-80', 'quality-75',
    'densities-1x', 'densities-2x',

    // --- Layout & Spacing ---
    'container', 'px-4', 'py-8', 'py-12', 'md:py-12',
    'mt-4', 'mt-6', 'mt-8', 'mt-10', 'mt-12', 'mt-16',
    'mb-3', 'mb-6', 'mb-8', 'mb-10', 'pb-12',

    // --- Responsive Breakpoints ---
    'sm:text-3xl', 'md:text-4xl', 'sm:text-5xl', 'md:grid-cols-2',
    'lg:grid-cols-3', 'sm:grid-cols-2', 'xs:50vw', 'sm:33vw',
    'md:25vw', 'lg:20vw', 'sm:100vw', 'md:50vw', 'lg:33vw',

    // --- Icons & FontAwesome ---
    'fas', 'far', 'fab', 'fa-smile', 'fa-meh', 'fa-grimace',
    'fa-pause', 'fa-play', 'fa-trophy', 'fa-star', 'fa-carrot',
    'fa-tree', 'fa-info-circle', 'fa-thumbs-up', 'fa-fire',
    'fa-phone', 'fa-envelope', 'fa-calendar-plus',

    // --- Dark Mode Variants ---
    'dark:bg-gray-800', 'dark:bg-gray-700', 'dark:bg-gray-900',
    'dark:text-white', 'dark:text-gray-300', 'dark:text-gray-400',
    'dark:border-gray-700', 'dark:border-gray-600', 'dark:hover:bg-gray-600',
    'dark:focus:ring-offset-gray-900', 'dark:text-primary-light',
    'dark:from-gray-800', 'dark:to-gray-900', 'dark:from-blue-900',
    'dark:to-blue-800', 'dark:border-blue-600',

    // --- Utility Classes ---
    'leading-relaxed', 'leading-normal', 'text-shadow-md', 'text-shadow-strong',
    'will-change-transform', 'will-change-left', 'user-select-none',
    'focus:outline-none', 'focus:ring-2', 'focus:ring-white/50',
    'focus:ring-offset-2', 'focus:ring-offset-gray-900',
    'tabindex-0', 'role-button',

    // --- Existing Angebote Classes ---
    'bg-gradient-to-r',
    'from-yellow-50',
    'to-amber-50',
    'border-amber-200',
    'bg-green-500',
    'text-green-500',
    'bg-amber-500',
    'hover:bg-amber-600',
    'bg-gradient-to-br',
    'from-white',
    'border-amber-100',
    'bg-amber-100',
    'text-amber-600',
    'bg-yellow-50',
    'border-yellow-100',
    'text-yellow-600',
    'text-yellow-800',
    'bg-green-100',
    'text-green-600',
    'from-primary-color/10',
    'to-primary-color/5',

    // --- Performance & Browser Support ---
    'transform-gpu', 'backface-visibility-hidden'
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#ff3b7d',
        'primary-light': '#ff79a8',
        'secondary-color': '#fda085',
        'accent-color': '#4a90e2',
        'accent-gold': '#ffd700',
        'accent-gold-dark': '#d4af37',
        'dark-bg': '#111827',
        'dark-card': '#1f2937',
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
      
      // Erweiterte Animationen für neue Komponenten
      animation: {
        // Bestehende Animationen
        'kenburns-1': 'kenburns-1 24s infinite ease-in-out',
        'kenburns-2': 'kenburns-2 24s infinite ease-in-out',
        'kenburns-3': 'kenburns-3 24s infinite ease-in-out',
        'kenburns-4': 'kenburns-4 24s infinite ease-in-out',
        'ticker-move': 'ticker-move 45s linear infinite',
        horseMove: 'horseMove 3s infinite alternate ease-in-out',
        float: 'float 20s linear infinite',
        fadeInOut: 'fadeInOut 3s infinite',
        slideUp: 'slideUp 0.5s forwards ease-out',
        
        // Neue Animationen für Game & Components
        'pulse-glow': 'pulse-glow 1.5s infinite ease-in-out',
        'bounce-smooth': 'bounce-smooth 1.5s infinite ease-in-out',
        'gentle-bob': 'gentle-bob 2s infinite ease-in-out',
        'bounce-obstacle': 'bounce-obstacle 1s infinite ease-in-out',
        'pulse-scale': 'pulse-scale-improved 0.8s infinite ease-in-out',
        'flash': 'flash-improved 0.2s infinite alternate',
        'rotate-glow': 'rotate-glow 2s linear infinite',
        'custom-bounce': 'custom-bounce 1s infinite',
        'particle-float': 'particle-float 1.5s infinite'
      },
      
      keyframes: {
        // Bestehende Keyframes
        'kenburns-1': {
          '0%': { transform: 'scale(1.05) translate(1%, 1%)', opacity: 0 },
          '5%': { opacity: 1 },
          '25%': { transform: 'scale(1.15) translate(-1%, -1%)', opacity: 1 },
          '30%, 100%': { opacity: 0 },
        },
        'kenburns-2': {
          '0%, 25%': { opacity: 0 },
          '30%': { transform: 'scale(1.05) translate(-1%, 1%)', opacity: 1 },
          '50%': { transform: 'scale(1.15) translate(1%, -1%)', opacity: 1 },
          '55%, 100%': { opacity: 0 },
        },
        'kenburns-3': {
          '0%, 50%': { opacity: 0 },
          '55%': { transform: 'scale(1.05) translate(1%, -1%)', opacity: 1 },
          '75%': { transform: 'scale(1.15) translate(-1%, 1%)', opacity: 1 },
          '80%, 100%': { opacity: 0 },
        },
        'kenburns-4': {
          '0%, 75%': { opacity: 0 },
          '80%': { transform: 'scale(1.05) translate(-1%, -1%)', opacity: 1 },
          '95%': { transform: 'scale(1.15) translate(1%, 1%)', opacity: 1 },
          '100%': { opacity: 0 },
        },
        'ticker-move': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        horseMove: {
          '0%': { transform: 'translate(-50%, -50%) rotate(-5deg) translateX(-5px)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(5deg) translateX(5px)' },
        },
        float: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: 0 },
          '10%': { opacity: 0.05 },
          '90%': { opacity: 0.05 },
          '100%': { transform: 'translateY(-100px) rotate(360deg)', opacity: 0 },
        },
        fadeInOut: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '50%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(0.5)' },
        },
        slideUp: { 
          from: { transform: 'translateY(100%)' }, 
          to: { transform: 'translateY(0)' } 
        },
        
        // Neue Keyframes für Game & Components
        'pulse-glow': {
          '0%, 100%': {
            transform: 'scale(1)',
            filter: 'brightness(1) drop-shadow(1px 1px 3px rgba(0,0,0,0.4))'
          },
          '50%': {
            transform: 'scale(1.1)',
            filter: 'brightness(1.2) drop-shadow(2px 2px 6px rgba(255,255,0,0.3))'
          }
        },
        'bounce-smooth': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'gentle-bob': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-3px) rotate(2deg)' },
          '75%': { transform: 'translateY(-1px) rotate(-1deg)' }
        },
        'bounce-obstacle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        'pulse-scale-improved': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
            textShadow: '0 0 20px rgba(255,255,255,0.5)'
          },
          '50%': {
            transform: 'scale(1.15)',
            opacity: '0.9',
            textShadow: '0 0 30px rgba(255,255,255,0.8)'
          }
        },
        'flash-improved': {
          '0%': {
            opacity: '1',
            filter: 'brightness(1) drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
          },
          '100%': {
            opacity: '0.4',
            filter: 'brightness(1.5) drop-shadow(2px 2px 8px rgba(255,255,255,0.5))'
          }
        },
        'rotate-glow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'custom-bounce': {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translateY(0)' },
          '40%, 43%': { transform: 'translateY(-8px)' },
          '70%': { transform: 'translateY(-4px)' },
          '90%': { transform: 'translateY(-2px)' }
        },
        'particle-float': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0) scale(0)'
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(-20px) scale(1)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-40px) scale(0)'
          }
        }
      },
      
      dropShadow: {
        'glow': '0 0 6px rgba(139, 92, 246, 0.5)',
        'strong': [
          '0 2px 4px rgba(0, 0, 0, 0.8)',
          '0 0 8px rgba(255, 255, 255, 0.3)'
        ]
      },
      
      backdropBlur: {
        'xs': '2px'
      },
      
      zIndex: {
        '100': '100'
      },
      
      typography: (theme) => ({
        /* ... dein typography ... */
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}