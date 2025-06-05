<template>
  <section class="social-feeds container mx-auto px-4 py-12 md:py-16 text-center" aria-labelledby="social-feeds-heading">
    <h2 id="social-feeds-heading" class="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 md:mb-12 text-gray-800 dark:text-white">
      Folge uns auf Social Media für mehr #PonyhofLeben
    </h2>

    <!-- TikTok -->
    <div class="feed-section mb-12 md:mb-16" ref="tiktokSectionRef">
      <h3 class="text-xl md:text-2xl font-semibold mb-6 text-left flex items-center">
        <i class="fab fa-tiktok mr-2.5 text-2xl text-[#ff0050]"></i> TikTok
        <span class="ml-auto text-xs text-gray-500 dark:text-gray-400">@lebenisteinponyhof</span>
      </h3>
      <div class="feed-row flex justify-center">
        <div class="feed-item w-full max-w-md rounded-lg shadow-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
          <ClientOnly>
            <ExternalMediaPlaceholder
              v-if="!canLoadTikTok"
              platform="TikTok"
              class-name="h-96 md:h-[500px]"
              @accept-consent="() => acceptSpecificConsent('marketing')"
              @open-settings="consent.openCookieSettings()"
              :message="tiktokPlaceholderMessage"
            />
            <blockquote
              v-else
              class="tiktok-embed"
              cite="https://www.tiktok.com/@lebenisteinponyhof"
              data-unique-id="lebenisteinponyhof"
              data-embed-type="creator"
              style="max-width: 420px; min-width: 288px; margin: 0 auto; box-shadow: none; border-radius: 8px;"
            >
              <section>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@lebenisteinponyhof?refer=creator_embed"
                  class="text-primary-color hover:underline"
                >@lebenisteinponyhof auf TikTok</a>
              </section>
            </blockquote>
          </ClientOnly>
        </div>
      </div>
    </div>

    <!-- YouTube Shorts -->
    <div class="feed-section mb-12 md:mb-16" ref="youtubeSectionRef">
      <h3 class="text-xl md:text-2xl font-semibold mb-6 text-left flex items-center">
        <i class="fab fa-youtube mr-2.5 text-2xl text-red-600"></i> YouTube Shorts
        <span class="ml-auto text-xs text-gray-500 dark:text-gray-400">@lebenisteinponyhofoffiziell</span>
      </h3>
      <div class="feed-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="video in youtubeVideos"
          :key="video.id"
          class="feed-item bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <ClientOnly>
            <ExternalMediaPlaceholder
              v-if="!canLoadYouTube"
              platform="YouTube"
              :class-name="`aspect-w-9 aspect-h-16 ${youtubePlaceholderMessage ? '' : 'min-h-[400px]'}`"
              @accept-consent="() => acceptSpecificConsent('marketing')"
              @open-settings="consent.openCookieSettings()"
              :message="youtubePlaceholderMessage"
            />
            <iframe
              v-else
              width="100%"
              class="aspect-[9/16] block"
              :src="youtubeEmbedUrl(video.id)"
              :title="video.title"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </ClientOnly>
        </div>
      </div>
    </div>

    <!-- Instagram -->
    <div class="feed-section" ref="instagramSectionRef">
      <h3 class="text-xl md:text-2xl font-semibold mb-6 text-left flex items-center">
        <i class="fab fa-instagram mr-2.5 text-2xl text-[#E1306C]"></i> Instagram
        <span class="ml-auto text-xs text-gray-500 dark:text-gray-400">@lebenisteinponyhof</span>
      </h3>
      <div class="feed-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="reel in instagramReels"
          :key="reel.id"
          class="feed-item bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden p-0"
        >
          <ClientOnly>
            <ExternalMediaPlaceholder
              v-if="!canLoadInstagram"
              platform="Instagram"
              :class-name="`aspect-[9/16] sm:aspect-square ${instagramPlaceholderMessage ? '' : 'min-h-[400px]'}`"
              @accept-consent="() => acceptSpecificConsent('marketing')"
              @open-settings="consent.openCookieSettings()"
              :message="instagramPlaceholderMessage"
            />
            <blockquote
              v-else
              class="instagram-media !m-0"
              :data-instgrm-permalink="reel.permalink"
              data-instgrm-version="14"
              style="background:#FFF; border:0; border-radius:8px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 0 !important; padding:0; width:100%; display:block;"
            >
              <!-- Inhalt wird vom Instagram-Skript geladen -->
            </blockquote>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useCookieConsent } from '~/composables/useCookieConsent'
import ExternalMediaPlaceholder from '~/components/ExternalMediaPlaceholder.vue'
import { ClientOnly } from '#components'
import { useIntersectionObserver } from '@vueuse/core'

const consent = useCookieConsent()

// Refs für Intersection Observer
const tiktokSectionRef = ref<HTMLElement | null>(null)
const youtubeSectionRef = ref<HTMLElement | null>(null)
const instagramSectionRef = ref<HTMLElement | null>(null)

const tiktokVisible = ref(false)
const youtubeVisible = ref(false)
const instagramVisible = ref(false)

const setupIntersectionObserver = (target: Ref<HTMLElement | null>, isVisibleFlag: Ref<boolean>) => {
  useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (isIntersecting && !isVisibleFlag.value) {
        isVisibleFlag.value = true
      }
    },
    { rootMargin: '200px 0px 200px 0px' } // Lade etwas früher
  )
}

onMounted(() => {
  setupIntersectionObserver(tiktokSectionRef, tiktokVisible);
  setupIntersectionObserver(youtubeSectionRef, youtubeVisible);
  setupIntersectionObserver(instagramSectionRef, instagramVisible);
})

const canLoadTikTok = computed(() => consent.hasMarketingConsent.value && tiktokVisible.value)
const canLoadYouTube = computed(() => consent.hasMarketingConsent.value && youtubeVisible.value)
const canLoadInstagram = computed(() => consent.hasMarketingConsent.value && instagramVisible.value)

const tiktokPlaceholderMessage = "Um unseren TikTok Feed anzuzeigen, benötigen wir deine Zustimmung für Marketing-Cookies.";
const youtubePlaceholderMessage = "Um unsere YouTube Shorts anzuzeigen, benötigen wir deine Zustimmung für Marketing-Cookies.";
const instagramPlaceholderMessage = "Um unseren Instagram Feed anzuzeigen, benötigen wir deine Zustimmung für Marketing-Cookies.";


const youtubeVideos = ref([
  { id: 'NXhk6uIXdnI', title: 'Ponyhof Abenteuer Teil 1' },
  { id: 'MAGDBiCsSGM', title: 'Unsere Shettys stellen sich vor' },
  { id: '5l54UtaJTls', title: 'Lustige Momente im Stall' },
])

const instagramReels = ref([
  { id: 'reel1', permalink: 'https://www.instagram.com/reel/C9dPeYJI0M-/?utm_source=ig_embed&utm_campaign=loading' },
  { id: 'reel2', permalink: 'https://www.instagram.com/reel/C7XYZABCD12/?utm_source=ig_embed&utm_campaign=loading' }, // Beispiel
  { id: 'reel3', permalink: 'https://www.instagram.com/reel/C6ABCDEFG34/?utm_source=ig_embed&utm_campaign=loading' }, // Beispiel
])

const youtubeEmbedUrl = (videoId: string) => `https://www.youtube-nocookie.com/embed/${videoId}`

const acceptSpecificConsent = (type: 'marketing' | 'analytics') => {
  if (type === 'marketing') {
    consent.saveConsent({
      analytics: consent.consentState.value?.analytics || false,
      marketing: true,
    })
    // Skripte werden jetzt durch Watcher geladen, wenn `canLoadXYZ` true wird
  }
}

const loadTikTokScript = () => {
  if (process.client && !document.querySelector('script[src*="tiktok.com/embed.js"]')) {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.tiktok.com/embed.js'
    document.body.appendChild(script)
  }
}

const loadInstagramScript = () => {
  if (process.client) {
    if (typeof (window as any).instgrm !== 'undefined') {
      (window as any).instgrm.Embeds.process();
    } else if (!document.querySelector('script[src*="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      script.onload = () => {
        if (typeof (window as any).instgrm !== 'undefined') {
          (window as any).instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    }
  }
}

watch(canLoadTikTok, (canLoad) => {
  if (canLoad) {
    // Kurze Verzögerung, damit Vue das v-if Element rendern kann
    setTimeout(loadTikTokScript, 50);
  }
})

watch(canLoadInstagram, (canLoad) => {
  if (canLoad) {
    setTimeout(loadInstagramScript, 50);
  }
})

// Initiales Laden, falls Consent + Sichtbarkeit schon beim Mounten gegeben sind
onMounted(() => {
  if (canLoadTikTok.value) setTimeout(loadTikTokScript, 50);
  if (canLoadInstagram.value) setTimeout(loadInstagramScript, 50);
})
</script>

<style scoped>
.feed-item {
  /* min-height: 300px; // Wird jetzt durch class-name im Placeholder gesteuert */
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}
.feed-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}
.dark .feed-item:hover {
   box-shadow: 0 8px 16px rgba(0,0,0,0.3);
}

.aspect-w-9 { --tw-aspect-w: 9; aspect-ratio: var(--tw-aspect-w) / var(--tw-aspect-h); }
.aspect-h-16 { --tw-aspect-h: 16; }
.aspect-square { aspect-ratio: 1 / 1; }

.instagram-media {
  border-radius: 8px !important; /* Stellt sicher, dass es mit dem Container-Radius übereinstimmt */
  box-shadow: none !important; /* Entfernt doppelten Schatten */
}
/* TikTok-Embed hat oft einen eigenen Schatten, daher kann `overflow-hidden` am Parent helfen. */
</style>