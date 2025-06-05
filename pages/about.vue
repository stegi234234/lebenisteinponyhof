<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Wer wir sind</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Die Menschen und Vierbeiner hinter dem Ponyhof-Chaos (und ja, wir lieben es!)
      </p>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <NuxtLink to="/">Startseite</NuxtLink>
        </li>
        <li aria-current="page">Über Uns</li>
      </ol>
    </nav>

    <div class="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <!-- Sarah im Fokus -->
      <section
        class="team-member-focus flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <NuxtImg
          src="/images/team/Sarah.webp"
          alt="Sarah Handte - Angehende Reitpädagogik & Pferdeliebhaberin"
          class="w-full md:w-1/3 h-auto max-h-96 object-cover rounded-lg shadow-sm cursor-pointer"
          @click="
            lightbox.open('/images/team/Sarah.webp', 'Sarah Handte - Angehende Reitpädagogik')
          "
          format="webp"
          quality="75"
          loading="lazy"
          width="400"
          height="500"
          densities="1x 2x"
          placeholder="/images/team/Sarah.webp"
        />
        <div class="flex-1">
          <h2 class="text-2xl lg:text-3xl font-semibold mb-3 text-primary-color">Sarah Handte</h2>
          <h3 class="text-lg font-medium text-gray-500 dark:text-gray-400 mb-5">
            Kinder-Chaosmanagerin & Ponyhof-Chefin
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Sarah ist Herz, Seele und wandelndes Kraftpaket von "Leben ist ein Ponyhof". Ihre
            Pferdeleidenschaft? Grenzt an liebevolle Besessenheit – seit 2019 teilt sie ihr Leben
            offiziell mit eigenen Pferden, inoffiziell war sie schon als Kind "das Mädchen, das nur
            von Ponys spricht". Begonnen hat alles mit zwei Shettys (die übrigens nie nach dem Motto
            "aus den Augen, aus dem Sinn" leben und ALLES mitbekommen).
          </p>
          <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Mittlerweile gehören auch Tinker-Diva Fiona sowie die Ponys Sleepy ("Ja, der Name ist
            Programm... manchmal") und Pucki zur tierischen Großfamilie. Sarah jongliert täglich
            zwischen Heugabeln, Kinderfragen und Futtermarotten ihrer Vierbeiner – und das mit einem
            Lächeln im Gesicht!
          </p>
          <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Beruflich hat Sarah die praxisintegrierte Ausbildung zur Erzieherin (PiA) mit Bravour
            gemeistert und arbeitet seit September 2024 hauptberuflich als Erzieherin. Dort nutzt
            sie ihre Fähigkeiten: Kinderaugen zum Leuchten zu bringen. Und nein, sie hat noch nie
            versehentlich ein Kind mit "Komm, mein Pony!" angesprochen... zumindest nicht oft.
          </p>
          <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Als wäre das nicht genug, engagiert sich Sarah ehrenamtlich in der Jungschar und beim
            Gemeindefest. Aktuell absolviert sie nebenbei noch eine Ausbildung zur Reittherapeutin
            bei igogo.
          </p>
          <blockquote
            class="mt-5 text-sm italic border-l-4 border-primary-color/50 pl-3 text-gray-600 dark:text-gray-400"
          >
            "Mein Traumjob? Den hab ich schon: Mit Kindern und Pferden arbeiten, die beide ehrlich,
            unvoreingenommen und manchmal herrlich chaotisch sind. Wenn ein zurückhaltendes Kind zum
            ersten Mal einem Pony ins Ohr flüstert – das ist unbezahlbar!"
          </blockquote>
        </div>
      </section>

      <!-- Tim -->
      <section
        class="team-member-focus flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
      >
        <NuxtImg
          src="/images/team/Tim.webp"
          alt="Tim Steegmüller - Unterstützung & Technik"
          class="w-full md:w-1/3 h-auto max-h-96 object-cover rounded-lg shadow-sm cursor-pointer"
          @click="lightbox.open('/images/team/Tim.webp', 'Tim Steegmüller - Technik & Stallhilfe')"
          format="webp"
          quality="75"
          loading="lazy"
          width="400"
          height="500"
          densities="1x 2x"
          placeholder="/images/Balu.webp"
        />
        <div class="flex-1 md:text-right">
          <h2 class="text-2xl lg:text-3xl font-semibold mb-3">Tim Steegmüller</h2>
          <h3 class="text-lg font-medium text-gray-500 dark:text-gray-400 mb-4">
            Technik-Guru, Mistgabel-Schwinger & Social-Media-Magier
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Tim ist unser Mann für alles mit Stecker, Screen oder Speicherkarte. Als Technik-Experte
            sorgt er dafür, dass unsere Online-Präsenz auf Instagram, TikTok und YouTube nicht aus
            den 90ern stammt. Seine berühmtesten Worte: "Moment, das muss ich schnell filmen!" –
            meist wenn eines der Ponys wieder einen Unfug plant. Am Wochenende hilft er dann im
            Stall und ist manchmal auch mit dabei um Sarah zu unterstützen. 2020 hat er den
            Basispass (Pferdeführerschein) Kurs bei der FN absolviert.
          </p>
          <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Neben Tastatur und Kamera schwingt Tim täglich die Mistgabel und versorgt seine eigenen
            Pferdekumpels Simon, Balu und Napoleon. Er behauptet steif und fest, dass er niemals
            heimlich mit den Pferden redet – aber wir haben Beweise! Tim ist der lebende Beweis,
            dass auch Techniknerds plötzlich zu Pferdeliebhabern werden können, wenn sie nur lange
            genug dem Charme der Vierbeiner ausgesetzt sind.
          </p>
        </div>
      </section>

      <!-- Philosophie -->
      <section
        class="philosophy text-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-8 md:p-12 rounded-lg shadow-inner my-12 border border-gray-200 dark:border-gray-700"
      >
        <div class="text-4xl text-primary-color mb-4"><i class="fas fa-seedling"></i></div>
        <h2 class="text-2xl md:text-3xl font-semibold mb-4">Unsere Herangehensweise</h2>
        <p class="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
          Unsere Philosophie ist einfach: Echte Begegnungen zwischen Kindern und Pferden schaffen –
          ohne Filter, ohne Bildschirm, dafür mit allen Sinnen. Hier darf gelacht, gestaunt und auch
          mal eine schmutzige Hose geholt werden. Ponys sind keine Instagram-Kulisse, sondern
          lebendige Lehrer mit vier Hufen und einem großen Herzen. Wir setzen auf Respekt,
          Achtsamkeit und den Mut, auch mal etwas Neues zu versuchen. Und ja, manchmal folgt auf ein
          großes "Ich trau mich nicht!" ein noch größeres "Ich hab's geschafft!" – diese Momente
          machen unsere Arbeit so besonders.
        </p>
      </section>

      <!-- Unsere Pferde -->
      <section class="our-horses">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Die vierbeinige Chaostruppe
        </h2>
        <p class="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
          Jedes unserer Pferde hat einen eigenen Charakter – von "Hauptsache, es gibt Futter" bis
          "Ich muss ALLES untersuchen, besonders Taschen". Lernt unsere pelzigen Persönlichkeiten
          kennen!
        </p>
        <div class="horse-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="horse in horses"
            :key="horse.slug"
            :id="horse.slug"
            class="horse-card flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
          >
            <NuxtImg
              :src="horse.image"
              :alt="'Bild von ' + horse.name"
              class="w-full h-56 object-cover cursor-pointer"
              @click="lightbox.open(horse.image, horse.caption || horse.name)"
              format="webp"
              quality="70"
              loading="lazy"
              :width="horse.imgWidth || 400"
              :height="horse.imgHeight || 300"
              densities="1x 2x"
              :placeholder="horse.placeholder || '/images/Balu.webp'"
            />
            <div class="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h3 class="text-lg font-semibold mb-1">{{ horse.name }}</h3>
                <p class="text-xs text-gray-600 dark:text-gray-400 mb-3">{{ horse.description }}</p>
              </div>
              <div
                class="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400"
              >
                <span
                  v-for="(tag, index) in horse.tags"
                  :key="index"
                  class="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-0.5 mr-1 mb-1"
                  >#{{ tag }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Besuchsmöglichkeiten -->
      <section class="visit-us text-center mt-12">
        <h2 class="text-2xl md:text-3xl font-semibold mb-4">Hier findest du uns:</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-2">
          Sarah - Leben ist ein Ponyhof<br />
          Kriegsbäume 2<br />
          71272 Renningen
        </p>
        <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
          Möchtest du mehr über unsere Angebote erfahren oder einen Termin vereinbaren?
          <br class="hidden md:inline" />Wir freuen uns auf deine
          <NuxtLink to="/contact" class="text-primary-color hover:underline font-semibold"
            >Nachricht
          </NuxtLink>
          !
        </p>

        <div
          class="map-container border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm max-w-3xl mx-auto"
        >
          <div v-if="canLoadMap && mapsEmbedUrl" class="w-full h-72 md:h-96">
            <iframe
              :src="mapsEmbedUrl"
              title="Standort Leben ist ein Ponyhof in Renningen"
              class="w-full h-full border-0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
          <div
            v-else
            class="w-full h-72 md:h-96 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center rounded-lg p-4 text-center"
          >
            <i class="fas fa-map-marked-alt text-4xl text-gray-400 dark:text-gray-500 mb-3"></i>
            <p v-if="!googleMapsApiKey" class="text-red-500 dark:text-red-400 text-sm mb-3">
              Kartenanzeige nicht konfiguriert. API-Schlüssel fehlt.
            </p>
            <p v-else class="text-gray-600 dark:text-gray-400 mb-3 text-sm">
              Um die interaktive Karte anzuzeigen, akzeptieren Sie bitte die "Marketing"-Cookies.
            </p>
            <button
              @click="triggerOpenCookieSettings"
              class="text-sm text-primary-color dark:text-primary-light underline hover:no-underline"
            >
              Cookie-Einstellungen anpassen
            </button>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
              (Durch das Laden der Karte werden Daten an Google übertragen.)
            </p>
          </div>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
          Hinweis: Termine nur nach vorheriger Vereinbarung. (Sonst sind wir nämlich gerade beim
          Ausmisten. Glamourös, nicht wahr?)
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
  import { NuxtLink, NuxtImg } from '#components'
  import { useLocalStorage } from '@vueuse/core'
  // useRuntimeConfig und googleMapsApiKey werden jetzt NICHT MEHR für die Karten-URL gebraucht
  import { useHead } from '#app' // useRuntimeConfig nur, falls du es für was anderes brauchst
  import { useLightbox } from '~/composables/useLightbox'

  const lightbox = useLightbox()

  const COOKIE_CONSENT_KEY = 'cookie_consent_lebenisteinponyhof_v1'
  const defaultConsent = { analytics: false, marketing: false, timestamp: null }
  const consentState = useLocalStorage(COOKIE_CONSENT_KEY, defaultConsent)

  const canLoadMap = ref(false)

  // --- KORREKTE mapsEmbedUrl ---
  const mapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.821462498705!2d8.917118999999987!3d48.766205699999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479761774fae0041%3A0xa3cd3260900c8ebf!2sKriegsb%C3%A4ume%202%2C%2071272%20Renningen!5e0!3m2!1sde!2sde!4v1746773155484!5m2!1sde!2sde'

  const updateCanLoadMap = () => {
    if (process.client) {
      canLoadMap.value = consentState.value?.marketing || false
      console.log(
        '[About.vue] updateCanLoadMap - canLoadMap:',
        canLoadMap.value,
        'Current Consent:',
        consentState.value
      )
    }
  }

  watch(
    consentState,
    (newConsent) => {
      console.log('[About.vue] ConsentState changed via watch:', newConsent)
      updateCanLoadMap()
    },
    { deep: true, immediate: true }
  )

  const triggerOpenCookieSettings = () => {
    if (process.client) {
      window.dispatchEvent(new CustomEvent('openCookieSettings'))
    }
  }

  const handleCookieConsentUpdate = (event) => {
    if (event.detail && process.client) {
      // Sicherstellen, dass event.detail existiert
      // useLocalStorage sollte reaktiv sein, aber zur Sicherheit:
      // consentState.value = { ...event.detail }; // Manchmal nicht nötig, wenn useLocalStorage korrekt aktualisiert
      console.log('[About.vue] cookieConsentUpdated event received:', event.detail)
      updateCanLoadMap()
    }
  }

  onMounted(() => {
    if (process.client) {
      // Initialer Check wird durch den Watcher mit immediate:true abgedeckt
      window.addEventListener('cookieConsentUpdated', handleCookieConsentUpdate)
    }
  })

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('cookieConsentUpdated', handleCookieConsentUpdate)
    }
  })

  const horses = ref([
    {
      slug: 'simon',
      name: 'Simon',
      image: '/images/Pferde/Simon.webp',
      imgWidth: 400,
      imgHeight: 300,
      placeholder: '/images/Pferde/Simon.webp',
      description:
        'Der sanfte Riese mit dem großen Herzen. Für alles zu haben, außer Springen – das ist unter seiner Würde. Simon hat den heimlichen Titel "Therapeutischer Kuschelexperte" und schmollt, wenn er nicht genug Aufmerksamkeit bekommt.',
      caption: 'Simon – Unser sanfter Riese, zuverlässig und heimlicher Streichel-Süchtiger.',
      tags: [
        'Großpferd',
        'Wallach',
        'Kuschelexperte',
        'Zen-Meister',
        'Anti-Springpferd',
        'Futterspezialist',
      ],
    },
    {
      slug: 'balu',
      name: 'Balu',
      image: '/images/Pferde/Balu.webp',
      imgWidth: 400,
      imgHeight: 300,
      placeholder: '/images/Pferde/Balu.webp',
      description:
        'Simons BFF und heimlicher Spaßvogel. Wird beim Reiten zum eleganten Gentleman, wiehert aber seinen Spiegel im Stall an – er denkt, da steht ein anderes Pferd! Ohren kraulen ist sein heimliches Laster.',
      caption: 'Balu – Eleganz im Sattel, Clown im Stall.',
      tags: [
        'Großpferd',
        'Wallach',
        'Spiegel-Verwirrter',
        'Ohren-Kratz-Fan',
        'Heimlicher Witzeerzähler',
      ],
    },
    {
      slug: 'napoleon',
      name: 'Napoleon',
      image: '/images/Highlightcard/Napoleon.webp',
      imgWidth: 400,
      imgHeight: 300,
      placeholder: '/images/Highlightcard/Napoleon.webp',
      description:
        'Klein, frech und zu schlau für sein eigenes Wohl. Unser Shetty-Houdini öffnet Türen, Boxen und wahrscheinlich bald auch Kühlschränke. Seine Größe täuscht – er trägt das Selbstbewusstsein eines Dressurhengstes!',
      caption: 'Napoleon – Klein von Statur, groß in der Kunst des Ausbruchs.',
      tags: ['Shetty-Houdini', 'Türöffner', 'Selbstbewusst', 'Masterplaner', 'Miniaturrebel'],
    },
    {
      slug: 'coco',
      name: 'Coco',
      image: '/images/Pferde/Coco.webp',
      imgWidth: 400,
      imgHeight: 300,
      placeholder: '/images/Pferde/Coco.webp',
      description:
        'Die Zen-Meisterin unserer Shettys. Steht während des Putzens oft mit geschlossenen Augen da und genießt die Streicheleinheiten wie eine Spa-Behandlung. Könnte Yoga-Kurse für Ponys leiten.',
      caption: 'Coco – Entspannungsexpertin und Kuschelprofi.',
      tags: ['Shetty', 'Stute', 'Zen-Pony', 'Putz-Genießerin', 'Ruheexpertin'],
    },
    {
      slug: 'chica',
      name: 'Chica',
      image: '/images/Pferde/Chica.webp',
      imgWidth: 400,
      imgHeight: 300,
      placeholder: '/images/Pferde/Chica.webp',
      description:
        'Unser quirliges Energiebündel mit der Neugier eines Detektivs. Chica ist immer die Erste, die neue Dinge untersuchen muss. Hat eine mysteriöse Affinität zu bunten Mützen und stiehlt sie bei Gelegenheit.',
      caption: 'Chica – Detektiv auf vier Hufen, Mützendieb und Sonnenschein.',
      tags: ['Shetty', 'Stute', 'Mützensammlerin', 'Neugiermonster', 'Taschendetektivin'],
    },
    {
      slug: 'pucki',
      name: 'Pucki',
      image: '/images/Pferde/Pucki.webp',
      imgWidth: 400,
      imgHeight: 300,
      placeholder: '/images/Pferde/Pucki.webp',
      description:
        'Unser pelziger Entertainer! Trägt mit Vorliebe Futterschüsseln durchs Gelände wie ein Kellner beim Roomservice. Hat eine besondere Begabung, genau dann süß auszusehen, wenn es Leckerlis geben könnte.',
      caption: 'Pucki – Room-Service-Experte und Meister des bettelnden Blicks.',
      tags: ['Shetty', 'Wallach', 'Schüsselträger', 'Bettlerblick-Champion', 'Undurchschaubar'],
    },
    {
      slug: 'fiona',
      name: 'Fiona',
      image: '/images/Pferde/Fiona.webp',
      imgWidth: 400,
      imgHeight: 300,
      placeholder: '/images/Pferde/Fiona.webp',
      description:
        'Unsere Tinker-Lady mit wallender Mähne und der Attitüde einer Prinzessin. Seit 2024 bereichert sie unser Team mit elegantem Stolzieren und dem Talent, immer dann fotogen auszusehen, wenn jemand die Kamera zückt.',
      caption: 'Fiona – Die Fotogene mit dem besonderen Gespür für Kameras.',
      tags: ['Tinker-Diva', 'Stute', 'Fotogen', 'Instagram-Ready', 'Mähnenmodel'],
    },
    {
      slug: 'sleepy',
      name: 'Sleepy',
      image: '/images/Pferde/Sleepy.webp',
      imgWidth: 400,
      imgHeight: 300,
      placeholder: '/images/Pferde/Sleepy.webp',
      description:
        'Lebt nach dem Motto: "Warum heute galoppieren, wenn man auch morgen traben kann?" Seine Spezialität: strategische Pausen und das unübertroffene Talent, selbst beim Fressen entspannt auszusehen. Ein wahrer Zen-Künstler!',
      caption: 'Sleepy – Der Philosoph unter den Ponys, Meister der Entschleunigung.',
      tags: ['Pony', 'Wallach', 'Pausenkünstler', 'Philosophieprofessor', 'Anti-Stress-Coach'],
    },
  ])

  useHead({
    title: 'Über Uns - Sarah Handte & die Ponys',
    meta: [
      {
        name: 'description',
        content:
          'Lerne Sarah Handte (Erzieherin & angeh. Reittherapeutin), Tim Steegmüller und unsere charismatischen Pferde mit ihren eigenwilligen Persönlichkeiten kennen!',
      },
      {
        name: 'keywords',
        content:
          'Über uns, Sarah Handte, Erzieherin, Reittherapie Weiterbildung, Tim Steegmüller, Pferde, Ponys, Tinker Fiona, Sleepy, Pucki, Ponyhof Renningen Leonberg',
      },
      {
        property: 'og:title',
        content: 'Über Uns - Sarah Handte & die Ponys | Leben ist ein Ponyhof',
      },
      {
        property: 'og:image',
        content: 'https://lebenisteinponyhof.de/images/team/Sarah.webp',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://lebenisteinponyhof.de/about' }],
  })
</script>

<style scoped>
  .team-member-focus img {
    object-position: center 20%;
  }

  .horse-card {
    display: flex;
    flex-direction: column;
  }

  .horse-card > div:last-child {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .horse-card .tags span {
    font-size: 0.65rem;
    line-height: 1;
    padding: 4px 6px;
  }
</style>
