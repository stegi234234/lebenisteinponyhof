// pages/game.vue
<template>
  <div>
    <section
        class="page-header bg-gradient-to-br from-amber-100 via-yellow-50 to-green-100 dark:from-gray-800 dark:to-gray-900 py-16 relative overflow-hidden"
    >
      <!-- Floating Particles Background -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="floating-particle" style="left: 10%; animation-delay: 0s;">🐴</div>
        <div class="floating-particle" style="left: 20%; animation-delay: 2s;">⭐</div>
        <div class="floating-particle" style="left: 80%; animation-delay: 1s;">🌟</div>
        <div class="floating-particle" style="left: 90%; animation-delay: 3s;">🦄</div>
      </div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="quiz-title-animation">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            🐴 Pferde-Quiz Renningen
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Teste dein Wissen über unsere liebsten Vierbeiner! Erkennst du alle Pferde und weißt, was ein guter Pferdefreund wissen sollte?
          </p>
        </div>
      </div>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb bg-gray-100 dark:bg-gray-800 py-3 border-b border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-4">
        <ol class="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-2">
          <li>
            <NuxtLink to="/" class="hover:text-primary-color transition-colors flex items-center">
              <i class="fas fa-home mr-1"></i>
              Startseite
            </NuxtLink>
          </li>
          <li class="flex items-center">
            <i class="fas fa-chevron-right text-gray-400 mx-2"></i>
            <span class="text-gray-800 dark:text-white font-medium">Pferde-Quiz</span>
          </li>
        </ol>
      </div>
    </nav>

    <section class="quiz-section container mx-auto max-w-4xl px-4 py-12">
      <!-- Quiz Mode Selector -->
      <div v-if="!quizStarted" class="quiz-mode-selector mb-8">
        <h2 class="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Welches Quiz möchtest du spielen?
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
              @click="startQuiz('horse-recognition')"
              class="quiz-mode-card group bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-amber-300 dark:hover:border-amber-600 transform hover:-translate-y-2 hover:scale-105"
          >
            <div class="text-center">
              <div class="text-7xl mb-6 group-hover:animate-bounce transition-transform duration-300 filter drop-shadow-lg">🐎</div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-primary-color transition-colors">
                Welches Pferd ist das?
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Erkenne unsere Hofpferde anhand ihrer einzigartigen Persönlichkeiten und besonderen Eigenarten.
              </p>
              <div class="bg-gradient-to-r from-amber-400 to-orange-400 dark:from-amber-600 dark:to-orange-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg group-hover:shadow-xl transition-shadow">
                {{ horseQuestions.length }} Pferde zu erraten
              </div>
            </div>
          </div>

          <div
              @click="startQuiz('general')"
              class="quiz-mode-card group bg-gradient-to-br from-green-50 via-emerald-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-green-300 dark:hover:border-green-600 transform hover:-translate-y-2 hover:scale-105"
          >
            <div class="text-center">
              <div class="text-7xl mb-6 group-hover:animate-bounce transition-transform duration-300 filter drop-shadow-lg">🧠</div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-primary-color transition-colors">
                Pony-Wissen Quiz
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Teste dein Allgemeinwissen über Pferde, Reiten und das Leben auf dem Ponyhof.
              </p>
              <div class="bg-gradient-to-r from-green-400 to-blue-400 dark:from-green-600 dark:to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg group-hover:shadow-xl transition-shadow">
                {{ generalQuestions.length }} spannende Fragen
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Active Quiz -->
      <div v-if="quizStarted" class="quiz-container">
        <!-- Fancy Progress Section -->
        <div class="progress-section mb-10">
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-r from-primary-color to-secondary-color rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                {{ currentQuestionIndex + 1 }}
              </div>
              <span class="text-lg font-semibold text-gray-700 dark:text-gray-300">
                von {{ totalQuestions }}
              </span>
            </div>
            <div class="score-display flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 rounded-full">
              <i class="fas fa-star text-yellow-500"></i>
              <span class="text-lg font-bold text-primary-color dark:text-primary-light">
                {{ score }} Punkte
              </span>
            </div>
          </div>

          <div class="progress-container w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
            <div
                class="progress-bar h-full bg-gradient-to-r from-primary-color via-secondary-color to-accent-gold transition-all duration-700 ease-out relative overflow-hidden"
                :style="{ width: ((currentQuestionIndex + 1) / totalQuestions) * 100 + '%' }"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        <!-- Enhanced Question Card -->
        <div v-if="!showResults" class="question-card bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transform transition-all duration-500 hover:shadow-3xl">
          <!-- Horse Polaroid Section (Enhanced) -->
          <div v-if="currentQuizMode === 'horse-recognition'" class="horse-showcase p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
            <!-- Background Decoration -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>

            <div class="horse-polaroid-enhanced mx-auto relative">
              <div class="polaroid-frame">
                <div class="polaroid-photo">
                  <div class="horse-avatar">
                    <div class="horse-emoji-large">{{ currentQuestion.emoji }}</div>
                    <div class="horse-pattern-overlay" :class="currentQuestion.pattern"></div>
                    <div class="shimmer-effect"></div>
                  </div>
                </div>
                <div class="polaroid-text">
                  <h4 class="horse-name-mystery">Geheimnis-Pferd #{{ currentQuestionIndex + 1 }}</h4>
                  <p class="horse-description">{{ currentQuestion.description }}</p>
                </div>
              </div>

              <!-- Floating Hearts -->
              <div class="floating-hearts">
                <div class="heart" style="left: 10%; animation-delay: 0s;">💝</div>
                <div class="heart" style="left: 80%; animation-delay: 1.5s;">✨</div>
                <div class="heart" style="left: 90%; animation-delay: 3s;">💕</div>
              </div>
            </div>
          </div>

          <!-- Question Content -->
          <div class="question-content p-8">
            <div class="text-center mb-8">
              <h3 class="text-3xl font-bold text-gray-800 dark:text-white mb-6 question-fade-in">
                {{ currentQuestion.question }}
              </h3>

              <!-- General Quiz Emoji -->
              <div v-if="currentQuizMode === 'general' && currentQuestion.emoji" class="text-8xl mb-6 emoji-bounce">
                {{ currentQuestion.emoji }}
              </div>

              <!-- Hint -->
              <div v-if="currentQuestion.hint" class="hint-box bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 p-4 rounded-xl border border-yellow-200 dark:border-yellow-700/50 mx-auto max-w-md">
                <div class="flex items-center justify-center">
                  <i class="fas fa-lightbulb text-yellow-600 dark:text-yellow-400 mr-2 animate-pulse"></i>
                  <span class="text-gray-700 dark:text-gray-300 font-medium">{{ currentQuestion.hint }}</span>
                </div>
              </div>
            </div>

            <!-- Enhanced Answer Options -->
            <div class="answers-grid grid gap-4">
              <button
                  v-for="(answer, index) in currentQuestion.answers"
                  :key="index"
                  @click="selectAnswer(index)"
                  :disabled="answerSelected"
                  :class="[
                  'answer-btn-enhanced group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left transform hover:scale-105 disabled:hover:scale-100',
                  getAnswerButtonClass(index)
                ]"
              >
                <!-- Answer Content -->
                <div class="flex items-center relative z-10">
                  <div class="answer-letter-enhanced w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-5 shadow-lg transition-all duration-300 group-hover:scale-110">
                    {{ String.fromCharCode(65 + index) }}
                  </div>
                  <div class="flex-grow">
                    <span class="answer-text-enhanced font-semibold text-lg block transition-colors duration-300">
                      {{ answer.text }}
                    </span>
                  </div>
                  <div v-if="answer.emoji" class="answer-emoji-enhanced text-3xl transition-transform duration-300 group-hover:scale-125">
                    {{ answer.emoji }}
                  </div>
                </div>

                <!-- Hover Glow Effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-primary-color/10 to-secondary-color/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <!-- Selection Indicator -->
                <div v-if="answerSelected && selectedAnswer === index" class="selection-pulse absolute inset-0 rounded-2xl"></div>
              </button>
            </div>

            <!-- Enhanced Next Button -->
            <div v-if="answerSelected" class="text-center mt-10">
              <button
                  @click="nextQuestion"
                  class="next-btn-enhanced group px-10 py-4 bg-gradient-to-r from-primary-color to-secondary-color text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <span class="relative z-10 flex items-center">
                  {{ currentQuestionIndex < totalQuestions - 1 ? 'Nächste Frage' : 'Ergebnis anzeigen' }}
                  <i class="fas fa-arrow-right ml-3 transition-transform duration-300 group-hover:translate-x-1"></i>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-secondary-color to-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        <!-- Enhanced Results -->
        <div v-if="showResults" class="results-container">
          <div class="results-card-enhanced bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 text-center border border-gray-200 dark:border-gray-700 relative overflow-hidden">
            <!-- Background Celebration -->
            <div class="celebration-bg absolute inset-0 opacity-10">
              <div class="confetti-piece" style="left: 10%; top: 20%; animation-delay: 0s;">🎉</div>
              <div class="confetti-piece" style="left: 80%; top: 30%; animation-delay: 0.5s;">✨</div>
              <div class="confetti-piece" style="left: 20%; top: 70%; animation-delay: 1s;">🌟</div>
              <div class="confetti-piece" style="left: 90%; top: 80%; animation-delay: 1.5s;">🎊</div>
            </div>

            <div class="relative z-10">
              <div class="results-icon-enhanced text-9xl mb-8 animate-bounce-slow">{{ getResultsEmoji() }}</div>

              <h2 class="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                {{ getResultsTitle() }}
              </h2>

              <div class="score-display-enhanced mb-10">
                <div class="text-8xl font-bold bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent mb-4 animate-pulse-gentle">
                  {{ score }}
                </div>
                <div class="text-xl text-gray-600 dark:text-gray-400 mb-2">
                  von {{ totalQuestions * 10 }} Punkten
                </div>
                <div class="text-lg text-gray-600 dark:text-gray-400">
                  {{ correctAnswers }} von {{ totalQuestions }} Fragen richtig
                </div>

                <!-- Achievement Badges -->
                <div class="achievement-badges flex justify-center space-x-4 mt-6">
                  <div v-if="correctAnswers === totalQuestions" class="badge perfect-score">
                    <i class="fas fa-crown text-yellow-500"></i>
                    <span>Perfekt!</span>
                  </div>
                  <div v-if="correctAnswers >= totalQuestions * 0.8" class="badge high-score">
                    <i class="fas fa-star text-yellow-500"></i>
                    <span>Experte</span>
                  </div>
                  <div v-if="currentQuizMode === 'horse-recognition'" class="badge horse-expert">
                    <i class="fas fa-horse text-amber-600"></i>
                    <span>Pferdekenner</span>
                  </div>
                </div>
              </div>

              <div class="results-message-enhanced mb-10 p-8 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-600">
                <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  {{ getResultsMessage() }}
                </p>
              </div>

              <div class="results-actions space-y-4">
                <button
                    @click="restartQuiz"
                    class="action-btn-enhanced w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-primary-color to-secondary-color text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <i class="fas fa-redo mr-3"></i>
                  Nochmal spielen
                </button>
                <button
                    @click="changeQuizMode"
                    class="action-btn-enhanced w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ml-0 sm:ml-4"
                >
                  <i class="fas fa-exchange-alt mr-3"></i>
                  Anderes Quiz spielen
                </button>
              </div>

              <!-- Enhanced Share Section -->
              <div class="share-section-enhanced mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-6 font-medium">Teile dein Ergebnis:</p>
                <div class="flex justify-center space-x-4">
                  <button
                      @click="shareResult('whatsapp')"
                      class="share-btn-enhanced bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <i class="fab fa-whatsapp mr-2 text-lg"></i>
                    WhatsApp
                  </button>
                  <button
                      @click="shareResult('copy')"
                      class="share-btn-enhanced bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <i class="fas fa-copy mr-2"></i>
                    Link kopieren
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Info Section -->
      <div class="quiz-info-enhanced mt-16 grid md:grid-cols-2 gap-8">
        <div class="info-card-enhanced bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-300">
          <h3 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
            <div class="w-12 h-12 bg-gradient-to-r from-primary-color to-secondary-color rounded-full flex items-center justify-center mr-4">
              <i class="fas fa-info-circle text-white"></i>
            </div>
            Über unsere Pferde
          </h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Lerne unsere wundervollen Hofpferde kennen! Jedes Pferd hat seinen eigenen Charakter und besondere Eigenschaften.
            Von sanften Shetlandponys bis hin zu majestätischen größeren Pferden - bei uns findest du den perfekten Reitpartner.
          </p>
        </div>

        <div class="info-card-enhanced bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-300">
          <h3 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
            <div class="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
              <i class="fas fa-heart text-white"></i>
            </div>
            Pferdewissen
          </h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Erweitere dein Wissen rund um Pferde, Reitsport und die Pflege unserer vierbeinigen Freunde.
            Unser Quiz hilft dir dabei, mehr über die faszinierende Welt der Pferde zu erfahren.
          </p>
        </div>
      </div>

      <!-- Enhanced Call to Action -->
      <div class="cta-section-enhanced mt-16 text-center bg-gradient-to-r from-primary-color/10 via-secondary-color/10 to-accent-gold/10 dark:from-primary-color/20 dark:via-secondary-color/20 dark:to-accent-gold/20 p-10 rounded-3xl border border-primary-color/20 dark:border-primary-color/30 relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div class="bg-pattern w-full h-full"></div>
        </div>

        <div class="relative z-10">
          <h3 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Lust auf echtes Ponyreiten? 🐴
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Nach dem Quiz kannst du unsere Pferde auch live erleben! Buche eine Reitstunde oder einen unvergesslichen Kindergeburtstag bei uns in Renningen.
          </p>
          <NuxtLink
              to="/angebote"
              class="cta-button-enhanced inline-flex items-center px-10 py-4 bg-gradient-to-r from-primary-color to-secondary-color text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <i class="fas fa-calendar-plus mr-3"></i>
            Jetzt Termin buchen
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useHead } from '#app'

useHead({
  title: 'Pferde-Quiz Renningen | Erkenne unsere Hofpferde | Leben ist ein Ponyhof',
  meta: [
    {
      name: 'description',
      content: 'Spiele unser interaktives Pferde-Quiz! Erkenne unsere Hofpferde Simon, Balu, Napoleon, Coco, Chica, Fiona und teste dein Pony-Wissen. Perfekt für Kinder und Pferdeliebhaber in Renningen und Umgebung.'
    },
    {
      name: 'keywords',
      content: 'Pferde Quiz Renningen, Ponyhof Quiz, Simon Balu Napoleon, Coco Chica Fiona Quiz, Pferdefreunde Renningen, Kinder Quiz Pferde, Shetlandpony Tinker Quiz, Reiterhof Spiel'
    },
    { property: 'og:title', content: 'Pferde-Quiz Renningen | Leben ist ein Ponyhof' },
    {
      property: 'og:description',
      content: 'Teste dein Pferdewissen! Erkenne unsere Hofpferde Simon, Balu, Napoleon, Coco, Chica, Fiona und lerne spielerisch alles über Ponys und Reiten.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://lebenisteinponyhof.de/game' },
    { property: 'og:image', content: 'https://lebenisteinponyhof.de/images/og-pferde-quiz.webp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Pferde-Quiz Renningen - Leben ist ein Ponyhof' },
    {
      name: 'twitter:description',
      content: 'Spiele unser interaktives Pferde-Quiz und teste dein Wissen über unsere Hofpferde Simon, Balu, Napoleon, Coco, Chica und Fiona!'
    }
  ],
  link: [{ rel: 'canonical', href: 'https://lebenisteinponyhof.de/game' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Game',
        name: 'Pferde-Quiz Renningen',
        description: 'Interaktives Quiz zum Erkennen von Hofpferden Simon, Balu, Napoleon, Coco, Chica, Fiona und Testen des Pferdewissens',
        url: 'https://lebenisteinponyhof.de/game',
        publisher: {
          '@type': 'Organization',
          name: 'Leben ist ein Ponyhof Renningen',
          url: 'https://lebenisteinponyhof.de'
        },
        genre: 'Educational Game',
        audience: {
          '@type': 'Audience',
          audienceType: 'Children and Horse Lovers'
        },
        about: [
          { '@type': 'Thing', name: 'Simon Pferd' },
          { '@type': 'Thing', name: 'Balu Pferd' },
          { '@type': 'Thing', name: 'Napoleon Shetlandpony' },
          { '@type': 'Thing', name: 'Coco Shetlandpony' },
          { '@type': 'Thing', name: 'Chica Shetlandpony' },
          { '@type': 'Thing', name: 'Fiona Tinker' }
        ]
      })
    }
  ]
})

// Quiz State
const quizStarted = ref(false)
const currentQuizMode = ref('')
const currentQuestionIndex = ref(0)
const score = ref(0)
const correctAnswers = ref(0)
const selectedAnswer = ref(null)
const answerSelected = ref(false)
const showResults = ref(false)

// Enhanced Horse Recognition Questions (mit echten Charakteristiken)
const horseQuestions = ref([
  {
    question: "Welches Pferd ist das?",
    description: "Ein sanfter Riese mit großem Herzen. Für alles zu haben, außer Springen – das ist unter seiner Würde. Heimlicher Titel: 'Therapeutischer Kuschelexperte'.",
    emoji: "🐴",
    pattern: "simon-pattern",
    answers: [
      { text: "Simon", correct: true, emoji: "💝" },
      { text: "Balu", correct: false },
      { text: "Napoleon", correct: false },
      { text: "Fiona", correct: false }
    ],
    hint: "Dieser sanfte Riese schmollt, wenn er nicht genug Aufmerksamkeit bekommt."
  },
  {
    question: "Welches Pferd ist das?",
    description: "Simons BFF und heimlicher Spaßvogel. Wird beim Reiten zum eleganten Gentleman, wiehert aber seinen Spiegel im Stall an – er denkt, da steht ein anderes Pferd!",
    emoji: "🐎",
    pattern: "balu-pattern",
    answers: [
      { text: "Simon", correct: false },
      { text: "Balu", correct: true, emoji: "🤵" },
      { text: "Coco", correct: false },
      { text: "Sleepy", correct: false }
    ],
    hint: "Ohren kraulen ist sein heimliches Laster, und er ist sehr verwirrt von Spiegeln."
  },
  {
    question: "Welches Shetlandpony ist das?",
    description: "Klein, frech und zu schlau für sein eigenes Wohl. Unser Shetty-Houdini öffnet Türen, Boxen und wahrscheinlich bald auch Kühlschränke. Trägt das Selbstbewusstsein eines Dressurhengstes!",
    emoji: "🦄",
    pattern: "napoleon-pattern",
    answers: [
      { text: "Coco", correct: false },
      { text: "Chica", correct: false },
      { text: "Napoleon", correct: true, emoji: "👑" },
      { text: "Pucki", correct: false }
    ],
    hint: "Seine Größe täuscht – er ist ein Masterplaner und Miniaturrebel!"
  },
  {
    question: "Welches Shetlandpony ist das?",
    description: "Die Zen-Meisterin unserer Shettys. Steht während des Putzens oft mit geschlossenen Augen da und genießt die Streicheleinheiten wie eine Spa-Behandlung. Könnte Yoga-Kurse für Ponys leiten.",
    emoji: "🧘‍♀️",
    pattern: "coco-pattern",
    answers: [
      { text: "Chica", correct: false },
      { text: "Coco", correct: true, emoji: "🧘‍♀️" },
      { text: "Pucki", correct: false },
      { text: "Napoleon", correct: false }
    ],
    hint: "Diese Entspannungsexpertin und Kuschelprofi ist eine wahre Ruheexpertin."
  },
  {
    question: "Welches Shetlandpony ist das?",
    description: "Unser quirliges Energiebündel mit der Neugier eines Detektivs. Immer die Erste, die neue Dinge untersuchen muss. Hat eine mysteriöse Affinität zu bunten Mützen und stiehlt sie bei Gelegenheit.",
    emoji: "🕵️‍♀️",
    pattern: "chica-pattern",
    answers: [
      { text: "Napoleon", correct: false },
      { text: "Coco", correct: false },
      { text: "Chica", correct: true, emoji: "🕵️‍♀️" },
      { text: "Fiona", correct: false }
    ],
    hint: "Detektiv auf vier Hufen, Mützendieb und Sonnenschein – sie ist ein Neugiermonster!"
  },
  {
    question: "Welches Shetlandpony ist das?",
    description: "Unser pelziger Entertainer! Trägt mit Vorliebe Futterschüsseln durchs Gelände wie ein Kellner beim Roomservice. Hat eine besondere Begabung, genau dann süß auszusehen, wenn es Leckerlis geben könnte.",
    emoji: "🍽️",
    pattern: "pucki-pattern",
    answers: [
      { text: "Chica", correct: false },
      { text: "Napoleon", correct: false },
      { text: "Pucki", correct: true, emoji: "🍽️" },
      { text: "Coco", correct: false }
    ],
    hint: "Room-Service-Experte und Meister des bettelnden Blicks – einfach undurchschaubar!"
  },
  {
    question: "Welches Pferd ist das?",
    description: "Unsere Tinker-Lady mit wallender Mähne und der Attitüde einer Prinzessin. Seit 2024 bereichert sie unser Team mit elegantem Stolzieren und dem Talent, immer dann fotogen auszusehen, wenn jemand die Kamera zückt.",
    emoji: "📸",
    pattern: "fiona-pattern",
    answers: [
      { text: "Coco", correct: false },
      { text: "Fiona", correct: true, emoji: "👸" },
      { text: "Chica", correct: false },
      { text: "Sleepy", correct: false }
    ],
    hint: "Die Fotogene mit dem besonderen Gespür für Kameras – eine echte Instagram-Ready Diva!"
  },
  {
    question: "Welches Pferd ist das?",
    description: "Lebt nach dem Motto: 'Warum heute galoppieren, wenn man auch morgen traben kann?' Seine Spezialität: strategische Pausen und das unübertroffene Talent, selbst beim Fressen entspannt auszusehen. Ein wahrer Zen-Künstler!",
    emoji: "😴",
    pattern: "sleepy-pattern",
    answers: [
      { text: "Simon", correct: false },
      { text: "Sleepy", correct: true, emoji: "😴" },
      { text: "Balu", correct: false },
      { text: "Pucki", correct: false }
    ],
    hint: "Der Philosoph unter den Ponys, Meister der Entschleunigung und Anti-Stress-Coach."
  }
])

// Enhanced General Quiz Questions
const generalQuestions = ref([
  {
    question: "Wie nennt man ein junges Pferd?",
    emoji: "🍼",
    answers: [
      { text: "Kalb", correct: false },
      { text: "Welpe", correct: false },
      { text: "Fohlen", correct: true, emoji: "🐴" },
      { text: "Küken", correct: false }
    ],
    hint: "Es ist kein Hundebaby und definitiv kein Vogel!"
  },
  {
    question: "Was fressen Pferde am liebsten?",
    emoji: "🌾",
    answers: [
      { text: "Fleisch", correct: false },
      { text: "Gras und Heu", correct: true, emoji: "🌿" },
      { text: "Fisch", correct: false },
      { text: "Schokolade", correct: false }
    ],
    hint: "Pferde sind Pflanzenfresser und lieben grüne Sachen!"
  },
  {
    question: "Welche Gangart ist die schnellste beim Pferd?",
    emoji: "🏃‍♂️",
    answers: [
      { text: "Schritt", correct: false },
      { text: "Trab", correct: false },
      { text: "Galopp", correct: true, emoji: "💨" },
      { text: "Hüpfen", correct: false }
    ],
    hint: "Bei Pferderennen sieht man diese Gangart am häufigsten."
  },
  {
    question: "Wie heißt das Zuhause von Pferden?",
    emoji: "🏠",
    answers: [
      { text: "Hundehütte", correct: false },
      { text: "Stall", correct: true, emoji: "🏚️" },
      { text: "Nest", correct: false },
      { text: "Höhle", correct: false }
    ],
    hint: "Dort werden die Pferde gefüttert und gepflegt – und gemistet!"
  },
  {
    question: "Was trägt man beim Reiten auf dem Kopf?",
    emoji: "🛡️",
    answers: [
      { text: "Mütze", correct: false },
      { text: "Reithelm", correct: true, emoji: "⛑️" },
      { text: "Hut", correct: false },
      { text: "Nichts", correct: false }
    ],
    hint: "Sicherheit ist beim Reiten sehr wichtig – besonders für den Kopf!"
  },
  {
    question: "Wie viele Beine hat ein Pferd?",
    emoji: "🦵",
    answers: [
      { text: "Zwei", correct: false },
      { text: "Drei", correct: false },
      { text: "Vier", correct: true, emoji: "4️⃣" },
      { text: "Sechs", correct: false }
    ],
    hint: "Zähl mal nach – wie viele Hufe hörst du beim Galopp?"
  },
  {
    question: "Was ist Napoleon in unserem Stall bekannt als?",
    emoji: "🎭",
    answers: [
      { text: "Schlafmütze", correct: false },
      { text: "Shetty-Houdini", correct: true, emoji: "🗝️" },
      { text: "Futterspezi", correct: false },
      { text: "Kuschelprofi", correct: false }
    ],
    hint: "Er öffnet Türen, Boxen und wahrscheinlich bald auch Kühlschränke!"
  },
  {
    question: "Womit putzt man ein Pferd?",
    emoji: "🧽",
    answers: [
      { text: "Mit Seife und Schwamm", correct: false },
      { text: "Mit Putzbürsten", correct: true, emoji: "🪥" },
      { text: "Mit einem Staubsauger", correct: false },
      { text: "Gar nicht", correct: false }
    ],
    hint: "Pferde lieben es, wenn man sie jeden Tag damit pflegt!"
  },
  {
    question: "Was macht Chica am liebsten?",
    emoji: "🎩",
    answers: [
      { text: "Schlafen", correct: false },
      { text: "Mützen klauen", correct: true, emoji: "🕵️‍♀️" },
      { text: "Türen öffnen", correct: false },
      { text: "Spiegel anwiehern", correct: false }
    ],
    hint: "Sie ist unser quirliges Energiebündel mit einer besonderen Sammelleidenschaft!"
  },
  {
    question: "Wer ist bei uns der 'Zen-Meister' unter den Ponys?",
    emoji: "🧘‍♀️",
    answers: [
      { text: "Napoleon", correct: false },
      { text: "Sleepy", correct: true, emoji: "😴" },
      { text: "Chica", correct: false },
      { text: "Pucki", correct: false }
    ],
    hint: "Er lebt nach dem Motto: 'Warum heute galoppieren, wenn man auch morgen traben kann?'"
  }
])

// Computed Properties
const currentQuestion = computed(() => {
  const questions = currentQuizMode.value === 'horse-recognition' ? horseQuestions.value : generalQuestions.value
  return questions[currentQuestionIndex.value]
})

const totalQuestions = computed(() => {
  return currentQuizMode.value === 'horse-recognition' ? horseQuestions.value.length : generalQuestions.value.length
})

// Methods
const startQuiz = (mode) => {
  currentQuizMode.value = mode
  quizStarted.value = true
  resetQuizState()
}

const resetQuizState = () => {
  currentQuestionIndex.value = 0
  score.value = 0
  correctAnswers.value = 0
  selectedAnswer.value = null
  answerSelected.value = false
  showResults.value = false
}

const selectAnswer = (answerIndex) => {
  if (answerSelected.value) return

  selectedAnswer.value = answerIndex
  answerSelected.value = true

  const isCorrect = currentQuestion.value.answers[answerIndex].correct
  if (isCorrect) {
    score.value += 10
    correctAnswers.value++
  }
}

const nextQuestion = () => {
  if (currentQuestionIndex.value < totalQuestions.value - 1) {
    currentQuestionIndex.value++
    selectedAnswer.value = null
    answerSelected.value = false
  } else {
    showResults.value = true
  }
}

const getAnswerButtonClass = (index) => {
  if (!answerSelected.value) {
    return 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-primary-color dark:hover:border-primary-light hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer hover:shadow-lg'
  }

  const isSelected = selectedAnswer.value === index
  const isCorrect = currentQuestion.value.answers[index].correct

  if (isSelected && isCorrect) {
    return 'border-green-500 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 text-green-800 dark:text-green-200 shadow-lg'
  } else if (isSelected && !isCorrect) {
    return 'border-red-500 bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-900/50 dark:to-rose-900/50 text-red-800 dark:text-red-200 shadow-lg'
  } else if (isCorrect) {
    return 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300'
  } else {
    return 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
  }
}

const getResultsEmoji = () => {
  const percentage = (correctAnswers.value / totalQuestions.value) * 100
  if (percentage === 100) return '🏆'
  if (percentage >= 90) return '🥇'
  if (percentage >= 75) return '🥈'
  if (percentage >= 60) return '🥉'
  if (percentage >= 40) return '🌟'
  return '📚'
}

const getResultsTitle = () => {
  const percentage = (correctAnswers.value / totalQuestions.value) * 100
  if (percentage === 100) return 'Perfekte Leistung!'
  if (percentage >= 90) return 'Pferdeexperte!'
  if (percentage >= 75) return 'Sehr gut gemacht!'
  if (percentage >= 60) return 'Gut gemacht!'
  if (percentage >= 40) return 'Das war ein Anfang!'
  return 'Übung macht den Meister!'
}

const getResultsMessage = () => {
  const percentage = (correctAnswers.value / totalQuestions.value) * 100
  const mode = currentQuizMode.value === 'horse-recognition' ? 'unsere Hofpferde' : 'das Pferdewissen'

  if (percentage === 100) {
    return `🎉 Unglaublich! Du hast alle Fragen richtig beantwortet! Du kennst ${mode} besser als manche unserer Ponys sich selbst! 🌟`
  } else if (percentage >= 90) {
    return `Wow! Du kennst ${mode} wirklich sehr gut. Du bist ein echter Pferdeprofi! Ein paar weitere Besuche bei uns und du wirst zum Pferde-Guru! 🌟`
  } else if (percentage >= 75) {
    return `Super Leistung! Du hast schon sehr viel über ${mode} gelernt. Mit deinem Wissen könntest du glatt als Ponyhof-Guide arbeiten! 👏`
  } else if (percentage >= 60) {
    return `Nicht schlecht! Du bist auf einem guten Weg. Mit etwas mehr Zeit im Sattel wirst du zum Experten! 💪`
  } else if (percentage >= 40) {
    return `Das ist ein guter Anfang! Schau gerne öfter bei uns vorbei, um mehr zu lernen. Unsere Ponys freuen sich immer über neue Freunde! 🐴`
  } else {
    return `Keine Sorge, jeder fängt mal an! Besuche uns gerne und lerne unsere Pferde persönlich kennen. Sie sind noch viel charmanter in echt! 🤗`
  }
}

const restartQuiz = () => {
  resetQuizState()
  showResults.value = false
}

const changeQuizMode = () => {
  quizStarted.value = false
  resetQuizState()
}

const shareResult = (platform) => {
  const percentage = Math.round((correctAnswers.value / totalQuestions.value) * 100)
  const quizType = currentQuizMode.value === 'horse-recognition' ? 'Pferde-Erkennungs-Quiz' : 'Pony-Wissen-Quiz'
  const text = `Ich habe gerade das ${quizType} bei Leben ist ein Ponyhof gespielt und ${percentage}% richtig beantwortet! 🐴✨ Teste auch dein Pferdewissen: https://lebenisteinponyhof.de/game`

  if (platform === 'whatsapp') {
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
  } else if (platform === 'copy') {
    navigator.clipboard.writeText(text).then(() => {
      alert('Link wurde in die Zwischenablage kopiert! 📋✨')
    }).catch(() => {
      alert('Link konnte nicht kopiert werden')
    })
  }
}

// Shuffle questions on mount
onMounted(() => {
  // Shuffle questions for variety
  horseQuestions.value = horseQuestions.value.sort(() => Math.random() - 0.5)
  generalQuestions.value = generalQuestions.value.sort(() => Math.random() - 0.5)
})
</script>

<style scoped>
/* Enhanced Floating Animations */
.floating-particle {
  position: absolute;
  font-size: 2rem;
  opacity: 0.6;
  animation: float-enhanced 15s infinite ease-in-out;
  pointer-events: none;
}

@keyframes float-enhanced {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.3;
  }
  25% {
    transform: translateY(-20px) rotate(90deg);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
    opacity: 0.6;
  }
  75% {
    transform: translateY(-30px) rotate(270deg);
    opacity: 0.9;
  }
}

/* Enhanced Title Animation */
.quiz-title-animation {
  animation: fade-in-up 1s ease-out;
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Enhanced Progress Bar */
.progress-container {
  position: relative;
  background: linear-gradient(90deg, #f3f4f6, #e5e7eb);
}

.progress-bar {
  position: relative;
  background: linear-gradient(90deg, #ff3b7d, #fda085, #ffd700);
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

/* Enhanced Polaroid Effects */
.horse-polaroid-enhanced {
  max-width: 350px;
  perspective: 1000px;
}

.polaroid-frame {
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border-radius: 20px;
  box-shadow:
      0 25px 50px rgba(0, 0, 0, 0.15),
      0 10px 25px rgba(0, 0, 0, 0.1),
      inset 0 1px 3px rgba(255, 255, 255, 0.8);
  transform: rotate(-3deg);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  padding: 20px 20px 40px 20px;
  position: relative;
  overflow: hidden;
}

.polaroid-frame:hover {
  transform: rotate(0deg) scale(1.05);
  box-shadow:
      0 35px 60px rgba(0, 0, 0, 0.2),
      0 15px 30px rgba(0, 0, 0, 0.15);
}

.polaroid-photo {
  position: relative;
  width: 250px;
  height: 250px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f0f2f5 0%, #e2e8f0 100%);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: inset 0 5px 15px rgba(0, 0, 0, 0.1);
}

.horse-avatar {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.horse-emoji-large {
  font-size: 6rem;
  z-index: 3;
  position: relative;
  filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.3));
  animation: gentle-bounce 3s infinite ease-in-out;
}

@keyframes gentle-bounce {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.horse-pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.4;
  border-radius: 15px;
  z-index: 1;
}

/* Enhanced Horse Patterns */
.simon-pattern {
  background: radial-gradient(circle at 30% 30%, #8B4513 0%, #D2691E 40%, transparent 70%);
}

.balu-pattern {
  background: radial-gradient(circle at 40% 20%, #654321 0%, #8B4513 50%, transparent 80%);
}

.napoleon-pattern {
  background: linear-gradient(45deg, #000 25%, #fff 25%, #fff 50%, #000 50%, #000 75%, #fff 75%);
  background-size: 30px 30px;
}

.coco-pattern {
  background: linear-gradient(to bottom, #D2691E 0%, #8B4513 20%, #D2691E 21%, #D2691E 100%);
}

.chica-pattern {
  background: radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000 100%);
}

.pucki-pattern {
  background: conic-gradient(from 0deg, #8B4513, #D2691E, #CD853F, #8B4513);
}

.fiona-pattern {
  background: linear-gradient(45deg, #4a5568, #2d3748, #1a202c, #2d3748);
  background-size: 40px 40px;
}

.sleepy-pattern {
  background: radial-gradient(ellipse at center, #a0aec0 0%, #718096 50%, #4a5568 100%);
}

.shimmer-effect {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer-rotate 4s infinite;
  z-index: 2;
}

@keyframes shimmer-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.polaroid-text {
  text-align: center;
  margin-top: 15px;
}

.horse-name-mystery {
  font-family: 'Comic Sans MS', cursive;
  font-size: 1rem;
  font-weight: bold;
  color: #4a5568;
  margin-bottom: 5px;
}

.horse-description {
  font-family: 'Comic Sans MS', cursive;
  font-size: 0.85rem;
  color: #718096;
  line-height: 1.4;
}

/* Floating Hearts */
.floating-hearts {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.heart {
  position: absolute;
  font-size: 1.5rem;
  opacity: 0.7;
  animation: float-heart 6s infinite ease-in-out;
}

@keyframes float-heart {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0;
  }
  25% {
    opacity: 0.8;
    transform: translateY(-20px) scale(1.2);
  }
  50% {
    opacity: 1;
    transform: translateY(-40px) scale(1);
  }
  75% {
    opacity: 0.6;
    transform: translateY(-60px) scale(0.8);
  }
}

/* Enhanced Question Animations */
.question-fade-in {
  animation: fade-in 0.8s ease-out;
}

.emoji-bounce {
  animation: emoji-bounce 2s infinite ease-in-out;
}

@keyframes emoji-bounce {
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  25% {
    transform: scale(1.1) rotate(5deg);
  }
  75% {
    transform: scale(0.95) rotate(-5deg);
  }
}

/* Enhanced Hint Box */
.hint-box {
  animation: hint-glow 2s infinite ease-in-out;
}

@keyframes hint-glow {
  0%, 100% {
    box-shadow: 0 4px 8px rgba(245, 158, 11, 0.2);
  }
  50% {
    box-shadow: 0 8px 16px rgba(245, 158, 11, 0.4);
  }
}

/* Enhanced Answer Buttons */
.answer-btn-enhanced {
  position: relative;
  overflow: hidden;
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  backdrop-filter: blur(10px);
}

.answer-letter-enhanced {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  flex-shrink: 0;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.answer-text-enhanced {
  transition: all 0.3s ease;
}

.answer-emoji-enhanced {
  flex-shrink: 0;
}

/* Selection Animation */
.selection-pulse {
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
  animation: selection-pulse 1.5s infinite;
}

@keyframes selection-pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.02);
  }
}

/* Enhanced Results */
.results-card-enhanced {
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  backdrop-filter: blur(20px);
  animation: results-appear 1s cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes results-appear {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(50px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.celebration-bg {
  position: absolute;
  inset: 0;
}

.confetti-piece {
  position: absolute;
  font-size: 2rem;
  animation: confetti-fall 3s infinite ease-in-out;
}

@keyframes confetti-fall {
  0% {
    transform: translateY(-20px) rotate(0deg);
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(100px) rotate(360deg);
    opacity: 0;
  }
}

.results-icon-enhanced {
  filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.2));
}

.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.score-display-enhanced {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(248, 250, 252, 0.05));
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.animate-pulse-gentle {
  animation: pulse-gentle 4s infinite ease-in-out;
}

@keyframes pulse-gentle {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Achievement Badges */
.achievement-badges {
  gap: 1rem;
}

.badge {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: linear-gradient(145deg, #ffffff, #f1f5f9);
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 0.875rem;
  font-weight: bold;
  color: #4a5568;
  animation: badge-appear 0.8s ease-out;
}

.badge i {
  margin-right: 0.5rem;
}

@keyframes badge-appear {
  0% {
    opacity: 0;
    transform: scale(0) rotate(180deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.perfect-score {
  background: linear-gradient(145deg, #fbbf24, #f59e0b);
  color: white;
}

.high-score {
  background: linear-gradient(145deg, #3b82f6, #1d4ed8);
  color: white;
}

.horse-expert {
  background: linear-gradient(145deg, #d97706, #b45309);
  color: white;
}

/* Enhanced Info Cards */
.info-card-enhanced {
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  backdrop-filter: blur(10px);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.info-card-enhanced:hover {
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

/* Enhanced CTA Section */
.cta-section-enhanced {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(248, 250, 252, 0.05));
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
}

.bg-pattern {
  background-image:
      radial-gradient(circle at 25% 25%, rgba(255, 59, 125, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(253, 160, 133, 0.1) 0%, transparent 50%);
  background-size: 200px 200px;
  animation: pattern-float 20s infinite linear;
}

@keyframes pattern-float {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

.cta-button-enhanced {
  background: linear-gradient(145deg, #ff3b7d, #fda085);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
}

.cta-button-enhanced::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.cta-button-enhanced:hover::before {
  left: 100%;
}

/* Enhanced Action Buttons */
.action-btn-enhanced {
  background: linear-gradient(145deg, #ff3b7d, #fda085);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
}

.action-btn-enhanced::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
}

.action-btn-enhanced:hover::after {
  width: 300px;
  height: 300px;
}

/* Enhanced Share Buttons */
.share-btn-enhanced {
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
}

.share-btn-enhanced::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.share-btn-enhanced:hover::before {
  transform: translateX(100%);
}

/* Dark Mode Adjustments */
@media (prefers-color-scheme: dark) {
  .polaroid-frame {
    background: linear-gradient(145deg, #374151, #4b5563);
    box-shadow:
        0 25px 50px rgba(0, 0, 0, 0.4),
        0 10px 25px rgba(0, 0, 0, 0.3),
        inset 0 1px 3px rgba(255, 255, 255, 0.1);
  }

  .polaroid-photo {
    background: linear-gradient(135deg, #4b5563 0%, #374151 100%);
  }

  .horse-name-mystery, .horse-description {
    color: #d1d5db;
  }

  .answer-btn-enhanced {
    background: linear-gradient(145deg, #374151, #4b5563);
  }

  .results-card-enhanced, .info-card-enhanced {
    background: linear-gradient(145deg, #374151, #4b5563);
  }

  .badge {
    background: linear-gradient(145deg, #4b5563, #6b7280);
    color: #f3f4f6;
  }
}

/* Responsive Design */
@media (max-width: 640px) {
  .horse-polaroid-enhanced {
    max-width: 280px;
  }

  .polaroid-photo {
    width: 200px;
    height: 200px;
  }

  .horse-emoji-large {
    font-size: 4rem;
  }

  .answers-grid {
    grid-template-columns: 1fr;
  }

  .achievement-badges {
    flex-direction: column;
    align-items: center;
  }
}
</style>