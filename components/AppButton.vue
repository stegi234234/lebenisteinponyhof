<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="buttonClasses"
    :aria-disabled="disabled"
    :event="disabled ? '' : 'click'"
    @click="handleClick"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';
// NuxtLink wird für programmatische Nutzung hier importiert, das ist korrekt.
import { NuxtLink } from '#components';

const props = defineProps({
  to: { type: [String, Object], default: null },
  type: { type: String, default: 'button' },
  variant: {
    type: String,
    default: 'primary',
    // Optional: Validator für erlaubte Varianten
    // validator: (value) => ['primary', 'outline-primary', 'secondary', 'outline-white'].includes(value)
  },
  size: {
    type: String,
    default: 'normal',
    // validator: (value) => ['sm', 'normal', 'lg', 'xl'].includes(value)
  },
  disabled: { type: Boolean, default: false },
  fullWidth: { type: Boolean, default: false }
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
  if (props.disabled) {
    event.preventDefault();
    return;
  }
  emit('click', event);
};

const buttonClasses = computed(() => {
  let classes = [
    'inline-flex items-center justify-center font-semibold', // Basis-Flex und Schriftstärke
    'rounded-full transition-all duration-200 ease-out shadow-md', // Basis-Styling
    'focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900', // Fokus-Styling
    // Sanfterer Hover-Effekt, wenn nicht disabled
    props.disabled ? '' : 'transform hover:-translate-y-px active:translate-y-0 active:shadow-sm',
  ];

  if (props.disabled) {
    classes.push('opacity-60 cursor-not-allowed shadow-none hover:transform-none'); // hover:transform-none, um den translate-y-Effekt zu negieren
  }

  // Größen
  switch (props.size) {
    case 'sm':
      classes.push('px-5 py-2 text-xs');
      break;
    case 'lg':
      classes.push('px-8 py-3.5 text-base md:text-lg');
      break;
    case 'xl': // XL-Größe, die du verwendet hast
      classes.push('px-10 py-4 text-lg md:text-xl');
      break;
    default: // 'normal'
      classes.push('px-6 py-3 text-sm md:text-base');
      break;
  }

  // Varianten
  switch (props.variant) {
    case 'primary':
      classes.push(
        'bg-gradient-to-r from-pink-500 to-orange-400', // Light-Mode Verlauf
        'text-white', // Textfarbe für Light-Mode -> KONTRAST!
        'dark:from-pink-400 dark:to-orange-300', // Dark-Mode Verlauf
        // Für den helleren Dark-Mode Verlauf ist Weiß meist auch gut lesbar.
        // Alternativ ein sehr dunkles Grau, falls der Verlauf sehr hell ist:
        // 'dark:text-gray-900' oder 'dark:text-pink-900' (teste, was besser aussieht)
        // Ich belasse es bei Weiß, da der Dark-Mode Verlauf nicht extrem hell ist.
        'dark:text-white',
        props.disabled ? '' : 'hover:brightness-110 dark:hover:brightness-125', // Hover-Effekt über Helligkeit
        'focus:ring-pink-500/70 dark:focus:ring-pink-400/70'
      );
      break;
    case 'outline-primary':
      classes.push(
        'text-primary-color dark:text-primary-light',
        'border-2 border-primary-color dark:border-primary-light',
        'bg-transparent', // Wichtig für Outline
        props.disabled ? '' : 'hover:bg-primary-color/10 dark:hover:bg-primary-light/10',
        'focus:ring-primary-color/70 dark:focus:ring-primary-light/70'
      );
      break;
    case 'secondary':
      classes.push(
        'bg-gray-200 dark:bg-gray-700',
        'text-gray-700 dark:text-gray-200',
        props.disabled ? '' : 'hover:bg-gray-300 dark:hover:bg-gray-600',
        'focus:ring-gray-500/70 dark:focus:ring-gray-400/70'
      );
      break;
    case 'outline-white': // Deine Variante für CTAs auf dunklem Hintergrund
      classes.push(
        'text-white',
        'border-2 border-white',
        'bg-transparent', // Oder eine leichte Transparenz für den Hintergrund
        props.disabled ? '' : 'hover:bg-white/10 dark:hover:bg-white/20', // Leichter Hover-Effekt
        'focus:ring-white/70'
      );
      break;
    // Du könntest hier weitere Varianten hinzufügen
  }

  if (props.fullWidth) {
    classes.push('w-full');
  }

  return classes.join(' ');
});
</script>

<style scoped>
/* Keine spezifischen Styles hier nötig, Tailwind regelt das.
   Wenn du aber sehr spezifische, nicht per Utility-Klasse erreichbare
   Stylings pro Variante bräuchtest, könntest du sie hier mit Klassen hinzufügen.
   Zum Beispiel:
   .btn-primary-variant { ... }
   .btn-secondary-variant { ... }
   Und diese Klassen dann im `buttonClasses` computed hinzufügen.
   Aber für dein aktuelles Setup ist das nicht notwendig.
*/
</style>