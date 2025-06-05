module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config', // Basis-Konfiguration von Nuxt
    'plugin:vue/vue3-recommended', // Vue 3 Support
    'prettier', // Deaktiviert ESLint-Regeln, die sich mit Prettier beißen
  ],
  plugins: ['vue'],
  rules: {
    // Eigene Ergänzungen oder Overrides
    'vue/multi-word-component-names': 'off', // erlaubt Komponenten wie "index.vue"
    'vue/no-v-html': 'off', // erlaubt Nutzung von v-html
    'no-console': 'warn', // Konsole erlaubt, aber Warnung
    semi: ['error', 'never'], // falls du semi: false nutzt
    quotes: ['error', 'single'], // einheitlich einfache Anführungszeichen
  },
}
