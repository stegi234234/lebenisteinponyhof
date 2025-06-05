// pages/game.vue
<template>
  <div>
    <section
      class="page-header bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-900 py-10"
    >
      <h1 class="text-3xl md:text-4xl font-bold mb-2 text-gray-800 dark:text-white">
        Pony-Sprung-Abenteuer
      </h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Hilf unserem Pony, über die Hindernisse zu springen und sammle Sterne!
      </p>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <NuxtLink to="/">Startseite</NuxtLink>
        </li>
        <li aria-current="page">Pony-Sprung-Abenteuer</li>
      </ol>
    </nav>

    <section class="game-section container mx-auto max-w-3xl px-4 py-8 md:py-12">
      <div
        class="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700"
      >
        <!-- Schwierigkeitsauswahl -->
        <div v-if="!gameStarted" class="difficulty-selector mb-6">
          <h3
            class="text-center text-lg font-semibold mb-3 text-primary-color dark:text-primary-light"
          >
            Wähle die Schwierigkeit:
          </h3>
          <div class="flex justify-center gap-3">
            <button
              @click="selectDifficulty('easy')"
              :class="[
                'px-4 py-2 rounded-md text-white transition-all',
                difficulty === 'easy'
                  ? 'bg-green-500 scale-110 shadow-md'
                  : 'bg-green-400 hover:bg-green-500',
              ]"
            >
              <i class="fas fa-smile mr-1"></i> Leicht
            </button>
            <button
              @click="selectDifficulty('medium')"
              :class="[
                'px-4 py-2 rounded-md text-white transition-all',
                difficulty === 'medium'
                  ? 'bg-blue-500 scale-110 shadow-md'
                  : 'bg-blue-400 hover:bg-blue-500',
              ]"
            >
              <i class="fas fa-meh mr-1"></i> Mittel
            </button>
            <button
              @click="selectDifficulty('hard')"
              :class="[
                'px-4 py-2 rounded-md text-white transition-all',
                difficulty === 'hard'
                  ? 'bg-red-500 scale-110 shadow-md'
                  : 'bg-red-400 hover:bg-red-500',
              ]"
            >
              <i class="fas fa-grimace mr-1"></i> Schwer
            </button>
          </div>
        </div>

        <div
          class="tutorial-section mb-6 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600"
        >
          <h2
            class="text-lg font-semibold mb-2 text-primary-color dark:text-primary-light text-center"
          >
            So spielst du:
          </h2>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 dark:text-gray-300"
          >
            <div class="flex items-center">
              <div class="mr-2 w-10 text-center text-xl">⌨️</div>
              <div>
                Drücke <strong class="font-bold">Leertaste</strong> oder
                <strong class="font-bold">tippe/klicke</strong> zum Springen
              </div>
            </div>
            <div class="flex items-center">
              <div>Weiche verschiedenen Hindernissen aus!</div>
            </div>
            <div class="flex items-center">
              <div><strong>Rote Hindernisse</strong> bewegen sich auf und ab</div>
            </div>
            <div class="flex items-center">
              <div class="mr-2 w-10 text-center text-xl">⚡</div>
              <div><strong>Gelbe Hindernisse</strong> sind breiter und schneller</div>
            </div>
            <div class="flex items-center">
              <div class="mr-2 w-10 text-center text-xl">*</div>
              <div>Sammle Sterne für <strong>50</strong> Punkte</div>
            </div>
            <div class="flex items-center">
              <div>Sammle Karotten für <strong>25</strong> Punkte</div>
            </div>
            <div class="flex items-center">
              <div>Kleeblatt ermöglicht <strong>Doppelsprung</strong></div>
            </div>
            <div class="flex items-center">
              <div class="mr-2 w-10 text-center text-xl">❤️</div>
              <div>Herzen geben dir ein <strong>zusätzliches Leben</strong></div>
            </div>
          </div>
          <div
            v-if="isPaused"
            class="mt-3 p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-center text-xs"
          >
            <strong>Spiel pausiert!</strong> Klicke auf "Weiterspielen", um fortzufahren.
          </div>
        </div>

        <div
          class="game-stats flex flex-wrap justify-around items-center mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md text-sm font-medium"
        >
          <div>
            Punkte:
            <span class="font-bold text-primary-color dark:text-primary-light">{{ score }}</span>
          </div>
          <div>
            Highscore: <span class="font-bold">{{ highscore }}</span>
          </div>
          <div>
            Level: <span class="font-bold text-purple-500">{{ currentLevel }}</span>
          </div>
          <div>
            Leben:
            <span class="font-bold text-red-500">
              <span v-for="n in lives" :key="n" class="text-red-400 text-lg mx-[1px]">❤️</span>
            </span>
          </div>
          <div v-if="doubleJumpActive">
            PowerUp: <span class="text-green-500 text-lg">🍀</span>
            <span class="text-xs text-green-600"
            >({{ Math.ceil(doubleJumpTimeLeft / 1000) }}s)</span
            >
          </div>
          <!-- Pause Button -->
          <button
            v-if="gameRunning && !gameOver"
            @click.stop="togglePause"
            class="ml-2 text-gray-600 dark:text-gray-300 hover:text-primary-color dark:hover:text-primary-light focus:outline-none"
            title="Pause/Weiterspielen"
          >
            <i :class="isPaused ? 'fas fa-play' : 'fas fa-pause'" class="text-lg"></i>
          </button>
        </div>

        <div
          ref="gameArea"
          id="gameArea"
          :tabindex="gameRunning && !gameOver && !isPaused ? 0 : -1"
          class="game-canvas-container relative w-full h-60 sm:h-72 bg-gradient-to-b from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 border-2 border-blue-300 dark:border-blue-600 rounded-lg overflow-hidden shadow-inner cursor-pointer select-none flex items-end"
          @click="handleGameAreaClick"
          @keydown.space.prevent="handleGameAreaSpaceKey"
        >
          <!-- Neutraler Hintergrund -->
          <div
            class="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800"
          ></div>

          <!-- Dynamischer Boden -->
          <div
            class="absolute bottom-0 left-0 right-0 h-1 transition-colors duration-500"
            :class="currentLevel <= 2 ? 'bg-green-400 dark:bg-green-600' :
                    currentLevel <= 4 ? 'bg-yellow-400 dark:bg-yellow-600' :
                    'bg-red-400 dark:bg-red-600'"
          ></div>

          <!-- Pony Element -->
          <div
            ref="ponyElement"
            :class="[
              'pony absolute bottom-1 left-5 transition-all duration-200 ease-out z-10',
              ponyVisual.widthClass,
              ponyVisual.heightClass,
              { 'invulnerable-flash': isInvulnerable },
            ]"
            :style="{
              transform: `translateY(${pony.y}px) ${ponyRotation}`,
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
            }"
          >
            <NuxtImg
              v-if="!useEmoji.pony && PONY_IMG_NORMAL_SRC"
              :src="ponyVisual.imageSrc"
              alt="Spiel-Pony"
              class="w-full h-full object-contain"
              format="png" densities="1x"
              :width="PONY_COLLISION_WIDTH_BASE" :height="PONY_COLLISION_HEIGHT_BASE"
              placeholder
            @error="onImageError('pony')"
            loading="eager"
            />

            <div
              v-else
              class="text-center text-4xl sm:text-5xl w-full h-full flex items-center justify-center"
              style="filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5));"
            >
              {{ ponyVisual.emoji }}
            </div>
          </div>

          <!-- Dynamische Hindernisse -->
          <div
            v-for="obstacle in obstacles"
            :key="obstacle.id"
            :class="[
              'obstacle absolute bottom-1 flex items-end justify-center z-5 transition-all duration-100',
              obstacle.type === 'moving' ? 'animate-bounce-obstacle' : '',
              obstacle.type === 'fast' ? 'fast-obstacle' : '',
            ]"
            :style="{
              left: obstacle.x + 'px',
              height: obstacle.height + 'px',
              width: obstacle.width + 'px',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
              transform: obstacle.type === 'moving' ? `translateY(${obstacle.moveOffset || 0}px)` : 'none',
              borderRadius: obstacle.type === 'fast' ? '8px' : '0px',
            }"
          >
            <!-- Verschiedene Hindernistypen -->
            <div v-if="useEmoji.tree || !OBSTACLE_IMG_SRC"
                 class="text-center w-full h-full flex items-center justify-center"
                 :class="obstacle.type === 'moving' ? 'text-red-500' : obstacle.type === 'fast' ? 'text-yellow-500' : ''"
                 style="filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5));">
              {{ obstacle.type === 'moving' ? '🔥' : obstacle.type === 'fast' ? '⚡' : '🌲' }}
            </div>
            <div v-else
                 class="w-full h-full flex items-center justify-center relative"
                 :style="{
                   backgroundColor: obstacle.type === 'moving' ? 'rgba(239, 68, 68, 0.8)' :
                                   obstacle.type === 'fast' ? 'rgba(245, 158, 11, 0.8)' :
                                   'rgba(34, 197, 94, 0.8)',
                 }">
              <NuxtImg
                :src="OBSTACLE_IMG_SRC"
                alt="Hindernis"
                class="w-full h-auto max-h-full object-contain opacity-80"
                format="png"
                densities="1x"
                :width="obstacle.width"
                :height="obstacle.height"
                @error="onImageError('tree')"
              />
            </div>
          </div>

          <!-- Sammelobjekte -->
          <div
            v-for="item in collectibles"
            :key="item.id"
            :class="[
              'collectible absolute flex items-center justify-center z-5',
              item.type === 'star' ? 'animate-pulse-glow' : '',
              item.type === 'powerup' || item.type === 'heart' ? 'animate-bounce-smooth' : '',
              item.type === 'carrot' ? 'animate-gentle-bob' : '',
            ]"
            :style="{
              left: `${item.x}px`,
              bottom: `${item.y}px`,
              width: `${item.size}px`,
              height: `${item.size}px`,
              filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.4))',
            }"
          >
            <NuxtImg
              v-if="!useEmoji.collectibles && item.type === 'star'"
              :src="STAR_IMG_SRC"
              alt="Stern"
              class="w-full h-full object-contain"
              format="png"
              densities="1x"
              :width="item.size"
              :height="item.size"
              @error="onImageError('collectibles')"
            />
            <NuxtImg
              v-else-if="!useEmoji.collectibles && item.type === 'carrot'"
              :src="CARROT_IMG_SRC"
              alt="Karotte"
              class="w-full h-full object-contain"
              format="png"
              densities="1x"
              :width="item.size"
              :height="item.size"
              @error="onImageError('collectibles')"
            />
            <div
              v-else
              :class="item.type === 'star' ? 'text-4xl sm:text-5xl' : 'text-2xl sm:text-3xl'"
            >
              {{
                item.type === 'star'
                  ? '⭐'
                  : item.type === 'carrot'
                    ? '🥕'
                    : item.type === 'heart'
                      ? '❤️'
                      : '🍀'
              }}
            </div>
          </div>

          <!-- Level-Up Benachrichtigung -->
          <transition name="level-up">
            <div
              v-if="showLevelUp"
              class="absolute inset-0 flex items-center justify-center z-25 pointer-events-none"
            >
              <div class="level-up-notification bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg text-2xl font-bold shadow-2xl transform scale-110">
                🎉 Level {{ currentLevel }}! 🎉
              </div>
            </div>
          </transition>

          <!-- Punkteanzeige für gesammelte Items -->
          <transition-group name="point-popup">
            <div
              v-for="popup in pointPopups"
              :key="popup.id"
              class="point-popup absolute z-20 font-bold text-white text-shadow-strong"
              :class="popup.color"
              :style="{
                left: `${popup.x}px`,
                bottom: `${popup.y}px`,
              }"
            >
              {{ popup.text }}
            </div>
          </transition-group>

          <!-- Partikel-Effekte -->
          <transition-group name="particle">
            <div
              v-for="particle in jumpParticles"
              :key="particle.id"
              class="particle absolute z-5 pointer-events-none"
              :style="{
                left: `${particle.x}px`,
                bottom: `${particle.y}px`,
                transform: `scale(${particle.scale})`,
                opacity: particle.opacity,
              }"
            >
              ✨
            </div>
          </transition-group>

          <!-- Countdown Overlay -->
          <div
            v-if="countdown > 0 && !isPaused && !gameOver"
            class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-20"
          >
            <div class="countdown-number text-7xl font-bold text-white animate-pulse-scale">
              {{ countdown }}
            </div>
          </div>

          <!-- Spiel Start / Game Over / Pause Overlay -->
          <div
            v-if="(!gameRunning && !countdown) || gameOver || (isPaused && !countdown)"
            class="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm text-white p-4 z-20"
          >
            <h2 v-if="gameOver" class="text-3xl font-bold mb-2">Game Over!</h2>
            <p v-if="gameOver" class="mb-4 text-lg">Dein Score: {{ score }}</p>
            <p v-if="gameOver" class="mb-4 text-md">Level erreicht: {{ currentLevel }}</p>
            <p v-if="gameOver && score === highscore && score > 0" class="mb-4 text-yellow-400 font-bold">🎉 Neuer Highscore! 🎉</p>

            <button
              v-if="gameOver || !gameStarted"
              @click.stop="startGame"
              class="px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity text-xl focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              {{ gameOver ? 'Nochmal spielen' : 'Spiel starten' }}
            </button>

            <button
              v-if="isPaused && !gameOver"
              @click.stop="resumeGame"
              class="px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity text-xl focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Weiterspielen
            </button>

            <p v-if="!gameRunning && !gameOver && !gameStarted" class="mt-4 text-sm opacity-80">
              Klicke oder drücke Leertaste zum Starten!
            </p>
          </div>
        </div>
        <p class="text-center text-xs text-gray-500 dark:text-gray-400 mt-3">
          Tippe auf den Spielbereich oder drücke Leertaste zum Springen.
        </p>

        <!-- Anzeigetafel mit Tipps und Erfolgen -->
        <div v-if="gameStarted" class="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm">
          <h3 class="font-semibold mb-2 text-center">Spielerfolge</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div class="flex items-center">
              <i class="fas fa-trophy text-yellow-500 mr-2"></i>
              <span>Höchste Punktzahl: {{ highscore }}</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-star text-yellow-500 mr-2"></i>
              <span>Sterne gesammelt: {{ starsCollected }}</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-carrot text-orange-500 mr-2"></i>
              <span>Karotten gesammelt: {{ carrotsCollected }}</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-tree text-green-500 mr-2"></i>
              <span>Hindernisse übersprungen: {{ obstaclesJumped }}</span>
            </div>
          </div>

          <div
            v-if="gameRunning && !gameOver"
            class="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center"
          >
            <p v-if="currentLevel === 1" class="text-green-500 dark:text-green-400">
              <i class="fas fa-info-circle mr-1"></i>
              Level 1: Einfache grüne Hindernisse
            </p>
            <p v-else-if="currentLevel === 2" class="text-yellow-500 dark:text-yellow-400">
              <i class="fas fa-info-circle mr-1"></i>
              Level 2: Erste bewegliche Hindernisse erscheinen!
            </p>
            <p v-else-if="currentLevel === 3" class="text-orange-500 dark:text-orange-400">
              <i class="fas fa-info-circle mr-1"></i>
              Level 3: Schnelle gelbe Hindernisse kommen dazu!
            </p>
            <p v-else-if="currentLevel === 4" class="text-red-500 dark:text-red-400">
              <i class="fas fa-info-circle mr-1"></i>
              Level 4: Alles wird schneller und chaotischer!
            </p>
            <p v-else class="text-purple-500 dark:text-purple-400">
              <i class="fas fa-fire mr-1"></i>
              Level {{ currentLevel }}: Meister-Modus! Du bist ein Profi!
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { NuxtLink, NuxtImg } from '#components'; // NuxtImg hier explizit, da in <template> verwendet
// import { useHead } from '#app'; // ENTFERNEN
import { useMySeoMeta } from '~/composables/useMySeoMeta'; // HINZUFÜGEN
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { useRuntimeConfig } from '#app'; // HINZUGEFÜGT für siteUrl

const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl;
const businessAddress = config.public.businessAddress;


// SEO Meta-Daten mit useMySeoMeta
useMySeoMeta({
  title: `Pony-Sprung-Abenteuer Spiel | Ponyhof ${businessAddress.city}`,
  description: `Spiele unser lustiges Pony-Sprung-Abenteuer! Hilf dem Pony beim Ponyreiten über Hindernisse in ${businessAddress.city} und sammle Punkte.`,
  keywords: [
    `Pony Spiel ${businessAddress.city}`,
    `Pferdespiel Kinder ${businessAddress.city}`,
    `Jump and Run Pony`,
    `Browsergame Ponyhof ${businessAddress.city}`,
    'Online Spiel Pferde',
  ],
  ogImage: `${siteUrl}/images/og-pony-spiel-renningen.webp`, // Spezifisches OG Bild für das Spiel erstellen!
  ogImageAlt: `Pony-Sprung-Abenteuer Spiel vom Ponyhof in ${businessAddress.city}`,
  ogType: 'article', // 'article' passt gut für eine Spieleseite, da es spezifischer Inhalt ist
  articleDetails: { // Optionale Artikeldetails, wenn du es als eine Art "Produkt"-Seite siehst
    // publishedTime: '2024-01-01T10:00:00+01:00', // Ein fiktives Veröffentlichungsdatum
    // authorName: 'Leben ist ein Ponyhof Team',
    section: 'Spiele',
  }
  // Optional: LD+JSON für SoftwareApplication, wenn du es sehr detailliert machen willst.
  // Für ein einfaches Spiel ist das aber oft Overkill. Das Article-Schema reicht.
});

// --- Asset Pfade & Konfiguration ---
const PONY_IMG_NORMAL_SRC = '/images/kenney/pony.png'
const PONY_IMG_HIT_SRC = '/images/kenney/pony-hit.png'
const OBSTACLE_IMG_SRC = '/images/kenney/tree.png'
const STAR_IMG_SRC = '/images/kenney/star.png'
const CARROT_IMG_SRC = '/images/kenney/carrot.png'

const useEmoji = ref({ pony: false, tree: false, collectibles: false })
const onImageError = (type) => {
  console.warn(
    `Spiel: Bild für Typ "${type}" konnte nicht geladen werden. Fallback zu Emoji aktiviert.`
  )
  if (useEmoji.value.hasOwnProperty(type)) {
    useEmoji.value[type] = true
  }
}

// --- Schwierigkeitseinstellungen ---
const difficulty = ref('easy')
const difficultySettings = {
  easy: {
    baseObstacleSpeed: 3.0,
    jumpPower: 20,
    baseObstacleSpawnTime: 2800,
    collectibleSpawnTime: 2500,
    powerupSpawnTime: 12000,
    heartSpawnTime: 20000,
    obstacleHeightMax: 45,
    gravity: 0.7,
    speedIncreaseRate: 0.1,
    levelUpThreshold: 300,
  },
  medium: {
    baseObstacleSpeed: 3.8,
    jumpPower: 18,
    baseObstacleSpawnTime: 2400,
    collectibleSpawnTime: 2700,
    powerupSpawnTime: 15000,
    heartSpawnTime: 30000,
    obstacleHeightMax: 50,
    gravity: 0.8,
    speedIncreaseRate: 0.15,
    levelUpThreshold: 250,
  },
  hard: {
    baseObstacleSpeed: 4.5,
    jumpPower: 18,
    baseObstacleSpawnTime: 2200,
    collectibleSpawnTime: 2700,
    powerupSpawnTime: 18000,
    heartSpawnTime: 45000,
    obstacleHeightMax: 55,
    gravity: 0.9,
    speedIncreaseRate: 0.2,
    levelUpThreshold: 200,
  },
}

const selectDifficulty = (level) => {
  difficulty.value = level
}

// --- Dynamische Schwierigkeit ---
const currentLevel = ref(1)
const showLevelUp = ref(false)

const currentSpeed = computed(() => {
  const baseSpeed = difficultySettings[difficulty.value].baseObstacleSpeed
  const speedIncrease = difficultySettings[difficulty.value].speedIncreaseRate
  return baseSpeed + (currentLevel.value - 1) * speedIncrease
})

const currentObstacleSpawnTime = computed(() => {
  const baseTime = difficultySettings[difficulty.value].baseObstacleSpawnTime
  return Math.max(1500, baseTime - (currentLevel.value - 1) * 200)
})

// --- Kollisionsgrößen ---
const PONY_COLLISION_WIDTH_BASE = 48
const PONY_COLLISION_HEIGHT_BASE = 48
const OBSTACLE_COLLISION_WIDTH = 35
const OBSTACLE_COLLISION_HEIGHT_MIN = 35
const OBSTACLE_COLLISION_HEIGHT_MAX = computed(
  () => difficultySettings[difficulty.value].obstacleHeightMax
)
const STAR_COLLECTIBLE_SIZE = 40
const CARROT_COLLECTIBLE_SIZE = 30
const POWERUP_COLLECTIBLE_SIZE = 35
const HEART_COLLECTIBLE_SIZE = 35

// --- Anzeigegrößen ---
const PONY_DISPLAY_WIDTH_CLASS = 'w-12'
const PONY_DISPLAY_HEIGHT_CLASS = 'h-12'

// --- Refs & Spielzustand ---
const gameArea = ref(null)
const ponyElement = ref(null)

const score = ref(0)
const highscore = useLocalStorage('ponyGameHighscore_v7', 0)
const lives = ref(3)

// Spielflow-Status
const gameStarted = ref(false)
const gameRunning = ref(false)
const gameOver = ref(false)
const isPaused = ref(false)
const countdown = ref(0)

// Statistik-Tracking
const starsCollected = ref(0)
const carrotsCollected = ref(0)
const obstaclesJumped = ref(0)

// Features
const isInvulnerable = ref(false)
const invulnerabilityTimeLeft = ref(0)
const doubleJumpActive = ref(false)
const doubleJumpTimeLeft = ref(0)
const canDoubleJump = ref(false)

// Visuelle Effekte
const pointPopups = ref([])
const jumpParticles = ref([])
let nextPopupId = 0
let nextParticleId = 0

// Rotation des Ponys
const ponyRotation = computed(() => {
  if (pony.value.isJumping) {
    if (pony.value.velocityY < -5) return 'rotate(-15deg)'
    if (pony.value.velocityY > 5) return 'rotate(10deg)'
    return 'rotate(-5deg)'
  }
  return 'rotate(0deg)'
})

let gameLoopIntervalId = null
let obstacleTimeoutId = null
let collectibleTimeoutId = null
let powerupTimeoutId = null
let heartTimeoutId = null
let countdownIntervalId = null

const pony = ref({
  y: 0,
  velocityY: 0,
  isJumping: false,
  jumpPower: 18,
  gravity: 0.8,
  baseY: 0,
  canDoubleJump: false,
  hasDoubleJumped: false,
  width: PONY_COLLISION_WIDTH_BASE,
  height: PONY_COLLISION_HEIGHT_BASE,
})

const ponyVisual = computed(() => {
  let imgSrcToUse = PONY_IMG_NORMAL_SRC
  let emojiToUse = '🐴'
  if (gameOver.value && PONY_IMG_HIT_SRC) {
    imgSrcToUse = PONY_IMG_HIT_SRC
    emojiToUse = '😵'
  } else if (isInvulnerable.value) {
    emojiToUse = '⚡'
  }
  return {
    imageSrc: imgSrcToUse,
    emoji: emojiToUse,
    widthClass: PONY_DISPLAY_WIDTH_CLASS,
    heightClass: PONY_DISPLAY_HEIGHT_CLASS,
  }
})

const obstacles = ref([])
let nextObstacleId = 0

const collectibles = ref([])
let nextCollectibleId = 0

// --- Level-System ---
const checkLevelUp = () => {
  const threshold = difficultySettings[difficulty.value].levelUpThreshold
  const newLevel = Math.floor(score.value / threshold) + 1

  if (newLevel > currentLevel.value) {
    currentLevel.value = newLevel
    showLevelUp.value = true

    // Level-Up Benachrichtigung für 2 Sekunden anzeigen
    setTimeout(() => {
      showLevelUp.value = false
    }, 2000)

    // Bonus für Level-Up
    score.value += 100
    showPointPopup(200, 100, '+100 Level Bonus!', 'text-purple-400 text-xl')
  }
}

// --- Hindernistyp-Bestimmung ---
const getObstacleType = () => {
  if (currentLevel.value === 1) return 'normal'

  const random = Math.random()
  if (currentLevel.value >= 4) {
    // Ab Level 4: Alle Typen möglich
    if (random < 0.5) return 'normal'
    if (random < 0.75) return 'moving'
    return 'fast'
  } else if (currentLevel.value >= 3) {
    // Ab Level 3: Normal und beweglich
    if (random < 0.6) return 'normal'
    if (random < 0.85) return 'moving'
    return 'fast'
  } else if (currentLevel.value >= 2) {
    // Ab Level 2: Normal und beweglich
    if (random < 0.7) return 'normal'
    return 'moving'
  }

  return 'normal'
}

// --- Spielfunktionen ---
const startGame = () => {
  console.log('Spiel: startGame aufgerufen')

  pony.value.jumpPower = difficultySettings[difficulty.value].jumpPower
  pony.value.gravity = difficultySettings[difficulty.value].gravity

  // Reset
  score.value = 0
  currentLevel.value = 1
  lives.value = 3
  starsCollected.value = 0
  carrotsCollected.value = 0
  obstaclesJumped.value = 0
  pony.value.y = pony.value.baseY
  pony.value.velocityY = 0
  pony.value.isJumping = false
  pony.value.hasDoubleJumped = false
  obstacles.value = []
  collectibles.value = []
  pointPopups.value = []
  jumpParticles.value = []
  isInvulnerable.value = false
  invulnerabilityTimeLeft.value = 0
  doubleJumpActive.value = false
  doubleJumpTimeLeft.value = 0
  canDoubleJump.value = false
  gameOver.value = false
  isPaused.value = false
  gameStarted.value = true
  showLevelUp.value = false

  clearTimersAndIntervals()

  // Countdown
  countdown.value = 3
  countdownIntervalId = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(countdownIntervalId)
      countdownIntervalId = null

      gameRunning.value = true
      if (gameArea.value) {
        gameArea.value.focus()
      }

      gameLoopIntervalId = setInterval(gameLoop, 16) // 60 FPS
      scheduleNextObstacle()
      scheduleNextCollectible()
      schedulePowerupCollectible()
      scheduleHeartCollectible()
    }
  }, 800)
}

const togglePause = () => {
  if (gameOver.value || countdown.value > 0) return
  if (isPaused.value) {
    resumeGame()
  } else {
    pauseGame()
  }
}

const pauseGame = () => {
  if (isPaused.value) return
  isPaused.value = true
  gameRunning.value = false
  clearTimersAndIntervals(false)
}

const resumeGame = () => {
  if (!isPaused.value) return
  isPaused.value = false
  countdown.value = 3
  countdownIntervalId = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(countdownIntervalId)
      countdownIntervalId = null
      gameRunning.value = true
      if (gameArea.value) {
        gameArea.value.focus()
      }
      gameLoopIntervalId = setInterval(gameLoop, 16)
      scheduleNextObstacle()
      scheduleNextCollectible()
      schedulePowerupCollectible()
      scheduleHeartCollectible()
    }
  }, 800)
}

const jump = () => {
  if (!gameRunning.value || gameOver.value) return

  if (!pony.value.isJumping) {
    // Erster Sprung mit Partikel-Effekt
    pony.value.isJumping = true
    pony.value.velocityY = -pony.value.jumpPower
    pony.value.hasDoubleJumped = false
    canDoubleJump.value = doubleJumpActive.value
    createJumpParticles()
  } else if (canDoubleJump.value && !pony.value.hasDoubleJumped) {
    // Doppelsprung
    pony.value.velocityY = -pony.value.jumpPower * 0.85
    pony.value.hasDoubleJumped = true
    createJumpParticles()
    showPointPopup(pony.value.width + 20, pony.value.y, '⬆️', 'text-green-400')
  }
}

const createJumpParticles = () => {
  const ponyLeftEdge = 20
  for (let i = 0; i < 3; i++) {
    jumpParticles.value.push({
      id: nextParticleId++,
      x: ponyLeftEdge + Math.random() * 20 - 10,
      y: 5 + Math.random() * 10,
      scale: 0.5 + Math.random() * 0.5,
      opacity: 1,
    })
  }

  setTimeout(() => {
    jumpParticles.value = jumpParticles.value.filter(p => p.id < nextParticleId - 3)
  }, 500)
}

const handleGameAreaClick = () => {
  if (!gameRunning.value || gameOver.value) {
    if (!gameRunning.value && !gameOver.value) {
      if (!gameStarted.value || isPaused.value) {
        startGame()
      } else if (isPaused.value) {
        resumeGame()
      }
    }
  } else {
    jump()
  }
}

const handleGameAreaSpaceKey = () => {
  if (!gameRunning.value || gameOver.value) {
    if (!countdown.value) {
      startGame()
    }
  } else {
    jump()
  }
}

const gameLoop = () => {
  if (!gameRunning.value) return

  // Level-Up prüfen
  checkLevelUp()

  // Unverwundbarkeit und PowerUps
  if (isInvulnerable.value) {
    invulnerabilityTimeLeft.value -= 16
    if (invulnerabilityTimeLeft.value <= 0) {
      isInvulnerable.value = false
    }
  }

  if (doubleJumpActive.value) {
    doubleJumpTimeLeft.value -= 16
    if (doubleJumpTimeLeft.value <= 0) {
      doubleJumpActive.value = false
      canDoubleJump.value = false
    }
  }

  // Partikel animieren
  for (let i = jumpParticles.value.length - 1; i >= 0; i--) {
    jumpParticles.value[i].y += 1
    jumpParticles.value[i].opacity -= 0.05
    if (jumpParticles.value[i].opacity <= 0) {
      jumpParticles.value.splice(i, 1)
    }
  }

  // Punkteanzeige-Popups
  for (let i = pointPopups.value.length - 1; i >= 0; i--) {
    pointPopups.value[i].y += 1.5
    pointPopups.value[i].opacity -= 0.025
    if (pointPopups.value[i].opacity <= 0) {
      pointPopups.value.splice(i, 1)
    }
  }

  // Pony-Physik
  pony.value.velocityY += pony.value.gravity
  pony.value.y += pony.value.velocityY

  const gameAreaHeight = gameArea.value?.clientHeight || 288

  if (pony.value.y >= pony.value.baseY) {
    pony.value.y = pony.value.baseY
    pony.value.velocityY = 0
    if (pony.value.isJumping) {
      pony.value.isJumping = false
      pony.value.hasDoubleJumped = false
    }
  }
  if (pony.value.y < -(gameAreaHeight - pony.value.height - pony.value.baseY)) {
    pony.value.y = -(gameAreaHeight - pony.value.height - pony.value.baseY)
    pony.value.velocityY = pony.value.gravity
  }

  const ponyLeftEdge = 20
  const ponyRect = {
    x: ponyLeftEdge,
    y: gameAreaHeight - pony.value.height - pony.value.baseY + pony.value.y,
    width: pony.value.width,
    height: pony.value.height,
  }

  // Hindernisse verarbeiten (mit beweglichen Hindernissen)
  for (let i = obstacles.value.length - 1; i >= 0; i--) {
    const obs = obstacles.value[i]

    // Bewegungsgeschwindigkeit je nach Typ
    let speed = currentSpeed.value
    if (obs.type === 'fast') speed *= 1.5

    obs.x -= speed

    // Bewegliche Hindernisse auf und ab bewegen
    if (obs.type === 'moving') {
      obs.moveTime = (obs.moveTime || 0) + 16
      obs.moveOffset = Math.sin(obs.moveTime * 0.005) * 15 // 15px hoch/runter
    }

    if (obs.x + obs.width < ponyLeftEdge && !obs.counted) {
      obstacles.value[i].counted = true
      obstaclesJumped.value++

      // Mehr Punkte für schwierigere Hindernisse
      let points = 10
      if (obs.type === 'moving') points = 15
      if (obs.type === 'fast') points = 20

      score.value += points

      if (score.value % 100 === 0) {
        showPointPopup(obs.x - 20, 50, `+${score.value} Punkte!`, 'text-yellow-300 text-lg')
      }
    }

    if (obs.x + obs.width < -10) {
      obstacles.value.splice(i, 1)
    }

    const obsRect = {
      x: obs.x,
      y: gameAreaHeight - obs.height + (obs.moveOffset || 0),
      width: obs.width,
      height: obs.height,
    }

    if (checkCollision(ponyRect, obsRect) && !isInvulnerable.value) {
      lives.value--
      obstacles.value.splice(i, 1)
      isInvulnerable.value = true
      invulnerabilityTimeLeft.value = 2000
      showPointPopup(ponyLeftEdge, pony.value.y - 10, '💥', 'text-red-500 text-2xl')

      if (lives.value <= 0 && !gameOver.value) {
        endGame()
        return
      }
    }
  }

  // Sammelobjekte verarbeiten
  for (let i = collectibles.value.length - 1; i >= 0; i--) {
    const item = collectibles.value[i]
    item.x -= currentSpeed.value * 0.9
    if (item.x + item.size < -10) {
      collectibles.value.splice(i, 1)
    }
    const itemRect = {
      x: item.x,
      y: gameAreaHeight - item.size - item.y,
      width: item.size,
      height: item.size,
    }
    if (checkCollision(ponyRect, itemRect)) {
      if (item.type === 'star') {
        score.value += 50
        starsCollected.value++
        showPointPopup(item.x, item.y, '+50', 'text-yellow-300')
      } else if (item.type === 'carrot') {
        score.value += 25
        carrotsCollected.value++
        showPointPopup(item.x, item.y, '+25', 'text-orange-400')
      } else if (item.type === 'powerup') {
        doubleJumpActive.value = true
        doubleJumpTimeLeft.value = 15000
        canDoubleJump.value = true
        score.value += 30
        showPointPopup(item.x, item.y, '🍀 Doppelsprung!', 'text-green-400')
      } else if (item.type === 'heart') {
        lives.value = Math.min(lives.value + 1, 5)
        score.value += 40
        showPointPopup(item.x, item.y, '❤️ +1 Leben!', 'text-red-400')
      }
      collectibles.value.splice(i, 1)
    }
  }

  if (score.value > highscore.value) highscore.value = score.value
}

const showPointPopup = (x, y, text, colorClass) => {
  pointPopups.value.push({
    id: nextPopupId++,
    x,
    y,
    text,
    color: colorClass,
    opacity: 1,
  })

  setTimeout(() => {
    const index = pointPopups.value.findIndex((p) => p.id === nextPopupId - 1)
    if (index !== -1) {
      pointPopups.value.splice(index, 1)
    }
  }, 1500)
}

const checkCollision = (rect1, rect2) => {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  )
}

const scheduleNextObstacle = () => {
  if (!gameRunning.value || gameOver.value || !gameArea.value) return

  obstacleTimeoutId = setTimeout(
    () => {
      const gameAreaWidth = gameArea.value?.clientWidth
      if (!gameAreaWidth) {
        scheduleNextObstacle()
        return
      }

      const obstacleType = getObstacleType()
      let obsHeight = Math.floor(
        Math.random() * (OBSTACLE_COLLISION_HEIGHT_MAX.value - OBSTACLE_COLLISION_HEIGHT_MIN + 1)
      ) + OBSTACLE_COLLISION_HEIGHT_MIN

      let obsWidth = OBSTACLE_COLLISION_WIDTH

      // Schnelle Hindernisse sind breiter
      if (obstacleType === 'fast') {
        obsWidth = OBSTACLE_COLLISION_WIDTH * 1.5
      }

      obstacles.value.push({
        id: nextObstacleId++,
        x: gameAreaWidth,
        width: obsWidth,
        height: obsHeight,
        type: obstacleType,
        counted: false,
        moveTime: 0,
        moveOffset: 0,
      })
      scheduleNextObstacle()
    },
    currentObstacleSpawnTime.value
  )
}

const scheduleNextCollectible = () => {
  if (!gameRunning.value || gameOver.value || !gameArea.value) return

  const dynamicSpawnTime = difficultySettings[difficulty.value].collectibleSpawnTime - Math.min(1000, score.value)

  collectibleTimeoutId = setTimeout(
    () => {
      const gameAreaWidth = gameArea.value?.clientWidth
      if (!gameAreaWidth) {
        scheduleNextCollectible()
        return
      }

      const type = Math.random() < 0.65 ? 'star' : 'carrot'
      const itemSize = type === 'star' ? STAR_COLLECTIBLE_SIZE : CARROT_COLLECTIBLE_SIZE

      collectibles.value.push({
        id: nextCollectibleId++,
        type,
        x: gameAreaWidth + Math.floor(Math.random() * 150),
        y: Math.floor(Math.random() * (gameArea.value.clientHeight / 2.5)) + itemSize,
        size: itemSize,
      })
      scheduleNextCollectible()
    },
    Math.max(1200, dynamicSpawnTime)
  )
}

const schedulePowerupCollectible = () => {
  if (!gameRunning.value || gameOver.value || !gameArea.value) return

  const powerupSpawnTime =
    difficultySettings[difficulty.value].powerupSpawnTime - Math.min(3000, score.value * 5)

  powerupTimeoutId = setTimeout(
    () => {
      const gameAreaWidth = gameArea.value?.clientWidth
      if (!gameAreaWidth) {
        schedulePowerupCollectible()
        return
      }

      collectibles.value.push({
        id: nextCollectibleId++,
        type: 'powerup',
        x: gameAreaWidth + Math.floor(Math.random() * 100),
        y:
          Math.floor(Math.random() * (gameArea.value.clientHeight / 2)) +
          POWERUP_COLLECTIBLE_SIZE,
        size: POWERUP_COLLECTIBLE_SIZE,
      })

      schedulePowerupCollectible()
    },
    Math.max(8000, powerupSpawnTime)
  )
}

const scheduleHeartCollectible = () => {
  if (!gameRunning.value || gameOver.value || !gameArea.value) return

  const heartSpawnTime = difficultySettings[difficulty.value].heartSpawnTime

  heartTimeoutId = setTimeout(() => {
    const gameAreaWidth = gameArea.value?.clientWidth
    if (!gameAreaWidth) {
      scheduleHeartCollectible()
      return
    }

    collectibles.value.push({
      id: nextCollectibleId++,
      type: 'heart',
      x: gameAreaWidth + Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * (gameArea.value.clientHeight / 2.5)) + HEART_COLLECTIBLE_SIZE,
      size: HEART_COLLECTIBLE_SIZE,
    })

    scheduleHeartCollectible()
  }, heartSpawnTime)
}

const endGame = () => {
  if (gameOver.value) return
  console.log('Spiel: Spiel beendet! Score:', score.value)
  gameRunning.value = false
  gameOver.value = true
  clearTimersAndIntervals()
  if (gameArea.value) {
    gameArea.value.blur()
  }
}

const clearTimersAndIntervals = (clearCountdown = true) => {
  clearInterval(gameLoopIntervalId)
  gameLoopIntervalId = null
  clearTimeout(obstacleTimeoutId)
  obstacleTimeoutId = null
  clearTimeout(collectibleTimeoutId)
  collectibleTimeoutId = null
  clearTimeout(powerupTimeoutId)
  powerupTimeoutId = null
  clearTimeout(heartTimeoutId)
  heartTimeoutId = null

  if (clearCountdown) {
    clearInterval(countdownIntervalId)
    countdownIntervalId = null
  }
}

onMounted(() => {
  pony.value.baseY = 0
})

onUnmounted(() => {
  clearTimersAndIntervals()
})
</script>

<style scoped>
.pony,
.obstacle,
.collectible {
  user-select: none;
  pointer-events: none;
  will-change: transform, left;
}

.game-canvas-container {
  touch-action: manipulation;
}

.game-canvas-container:focus-visible {
  outline: 3px solid theme('colors.primary-color');
  outline-offset: 2px;
}

/* Hinderniss-spezifische Animationen */
.animate-bounce-obstacle {
  animation: bounce-obstacle 1s infinite ease-in-out;
}

@keyframes bounce-obstacle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.fast-obstacle {
  animation: fast-glow 0.5s infinite alternate;
}

@keyframes fast-glow {
  0% {
    filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3)) brightness(1);
  }
  100% {
    filter: drop-shadow(2px 2px 8px rgba(245, 158, 11, 0.6)) brightness(1.1);
  }
}

/* Level-Up Animation */
.level-up-notification {
  animation: level-up-bounce 2s ease-out;
}

@keyframes level-up-bounce {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  20% {
    transform: scale(1.2);
    opacity: 1;
  }
  40% {
    transform: scale(0.9);
  }
  60% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.level-up-enter-active {
  animation: level-up-bounce 2s ease-out;
}

.level-up-leave-active {
  animation: level-up-fade 0.5s ease-in;
}

@keyframes level-up-fade {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.1);
    opacity: 0;
  }
}

/* Verbesserte Animationen */
.animate-pulse-glow {
  animation: pulse-glow 1.5s infinite ease-in-out;
}

@keyframes pulse-glow {
  0%, 100% {
    transform: scale(1);
    filter: brightness(1) drop-shadow(1px 1px 3px rgba(0,0,0,0.4));
  }
  50% {
    transform: scale(1.1);
    filter: brightness(1.2) drop-shadow(2px 2px 6px rgba(255,255,0,0.3));
  }
}

.animate-bounce-smooth {
  animation: bounce-smooth 1.5s infinite ease-in-out;
}

@keyframes bounce-smooth {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-gentle-bob {
  animation: gentle-bob 2s infinite ease-in-out;
}

@keyframes gentle-bob {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-3px) rotate(2deg);
  }
  75% {
    transform: translateY(-1px) rotate(-1deg);
  }
}

/* Unverwundbarkeitseffekt verbessert */
.invulnerable-flash {
  animation: flash-improved 0.2s infinite alternate;
}

@keyframes flash-improved {
  0% {
    opacity: 1;
    filter: brightness(1) drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
  }
  100% {
    opacity: 0.4;
    filter: brightness(1.5) drop-shadow(2px 2px 8px rgba(255,255,255,0.5));
  }
}

/* Countdown Animation verbessert */
.animate-pulse-scale {
  animation: pulse-scale-improved 0.8s infinite ease-in-out;
}

@keyframes pulse-scale-improved {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
    text-shadow: 0 0 20px rgba(255,255,255,0.5);
  }
  50% {
    transform: scale(1.15);
    opacity: 0.9;
    text-shadow: 0 0 30px rgba(255,255,255,0.8);
  }
}

/* Punkt-Popup Animationen verbessert */
.point-popup {
  transition: transform 0.3s ease-out, opacity 0.3s ease-in-out;
  pointer-events: none;
}

.text-shadow-strong {
  text-shadow:
    0 2px 4px rgba(0, 0, 0, 0.8),
    0 0 8px rgba(255, 255, 255, 0.3);
}

.point-popup-enter-active {
  animation: popup-appear-improved 0.3s;
}

.point-popup-leave-active {
  animation: popup-fade-improved 0.5s;
}

@keyframes popup-appear-improved {
  0% {
    transform: scale(0.3) translateY(10px);
    opacity: 0;
  }
  50% {
    transform: scale(1.1) translateY(-5px);
    opacity: 1;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

@keyframes popup-fade-improved {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-30px) scale(0.8);
    opacity: 0;
  }
}

/* Partikel-Effekte */
.particle {
  animation: particle-fade 0.5s ease-out forwards;
}

.particle-enter-active {
  animation: particle-spawn 0.3s ease-out;
}

.particle-leave-active {
  animation: particle-fade 0.2s ease-in;
}

@keyframes particle-spawn {
  0% {
    transform: scale(0) translateY(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) translateY(-5px);
    opacity: 1;
  }
  100% {
    transform: scale(1) translateY(-10px);
    opacity: 1;
  }
}

@keyframes particle-fade {
  0% {
    transform: scale(1) translateY(-10px);
    opacity: 1;
  }
  100% {
    transform: scale(0.3) translateY(-25px);
    opacity: 0;
  }
}
</style>