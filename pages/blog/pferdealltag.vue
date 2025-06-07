// pages/blog/pferdealltag.vue
<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Ein Tag im Leben unserer Pferde</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Von Morgenfütterung bis Abendroutine – der perfekte Pferdealltag.
      </p>
      <div class="blog-meta text-sm text-gray-500 dark:text-gray-400 mt-4">
        <span class="date mr-4"><i class="far fa-calendar mr-1"></i> {{ formattedDate }}</span>
        <span class="read-time"><i class="far fa-clock mr-1"></i> 5 Min. Lesezeit</span>
      </div>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li aria-current="page">Ein Tag im Leben...</li>
      </ol>
    </nav>

    <article
      class="content container mx-auto max-w-4xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <!-- Einleitungstext -->
      <p class="lead-paragraph text-lg">
        „Wie sieht eigentlich ein typischer Tag für eure Pferde aus?" – diese Frage bekommen wir
        immer wieder.
        <span class="font-semibold">Heute nehmen wir euch mit</span> durch 24 Stunden im Leben
        unserer vierbeinigen Freunde und geben euch einen Einblick in ihre täglichen Routinen, von
        der Fütterung bis zur Pflege.
      </p>

      <!-- Zitat als besonderes Element -->
      <div
        class="quote-block my-10 px-6 py-6 bg-primary-color/10 dark:bg-primary-light/10 border-l-4 border-primary-color dark:border-primary-light rounded-lg text-center relative"
      >
        <i
          class="fas fa-quote-left text-4xl text-primary-color/30 dark:text-primary-light/30 absolute top-4 left-4"
        ></i>
        <p class="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 mb-2">
          „Das Wichtigste für glückliche Pferde ist Routine, kombiniert mit ausreichend Bewegung,
          artgerechter Fütterung und liebevoller Pflege."
        </p>
        <p class="text-right font-medium text-gray-600 dark:text-gray-400">– Tim</p>
      </div>

      <!-- Hauptbild mit Lightbox -->
      <figure class="my-10">
        <NuxtImg
          src="/images/blog/Napoleon-beim-Grasen.webp"
          alt="Shetlandpony Napoleon beim morgendlichen Grasen auf der Weide in Renningen"
          class="blog-image w-full max-w-3xl mx-auto rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          @click="lightbox.open('/images/blog/Napoleon-beim-Grasen.webp', 'Napoleon beim Grasen')"
          loading="eager"
          format="webp"
          quality="85"
          width="1200"
          height="800"
          densities="1x 2x"
        />
        <figcaption class="text-center text-sm mt-2 text-gray-500 dark:text-gray-400">
          Napoleon genießt die Freiheit beim morgendlichen Grasen
        </figcaption>
      </figure>

      <!-- Verbesserte Tagesablauf mit Timeline -->
      <div class="daily-schedule mt-16">
        <h2 class="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-white">
          <i class="fas fa-clock mr-2 text-primary-color dark:text-primary-light"></i>
          Der Tagesablauf unserer Pferde
        </h2>

        <div class="timeline-container relative">
          <!-- Zeitleiste mit Gradient -->
          <div
            class="absolute top-0 bottom-0 left-6 md:left-1/2 w-1 bg-gradient-to-b from-amber-400 via-primary-color to-indigo-600 dark:from-amber-300 dark:via-primary-light dark:to-indigo-400 rounded-full"
          ></div>

          <!-- 5:30 Uhr -->
          <div class="timeline-item group flex flex-col md:flex-row mb-16 relative">
            <div class="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
              <div
                class="timeline-content p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg border border-amber-100 dark:border-gray-700 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
              >
                <h3 class="text-xl font-semibold mb-2 text-amber-600 dark:text-amber-300">
                  5:30 Uhr – Die Frühaufsteher
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Napoleon ist immer der Erste, der morgens wach ist und uns mit einem freundlichen
                  Wiehern begrüßt. Die anderen folgen schnell seinem Beispiel. Pferde sind von Natur
                  aus Frühaufsteher und beginnen ihren Tag mit der aufgehenden Sonne.
                </p>
              </div>
            </div>
            <div
              class="timeline-marker absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-300 dark:to-orange-400 flex items-center justify-center text-white z-10 shadow-lg border-2 border-white dark:border-gray-900 transition-transform duration-300 group-hover:scale-110"
            >
              <i class="fas fa-sun text-lg"></i>
            </div>
            <div class="md:w-1/2 md:pl-8 order-1 md:order-2 pb-8 md:pb-0"></div>
          </div>

          <!-- 6:00 Uhr -->
          <div class="timeline-item group flex flex-col md:flex-row mb-16 relative">
            <div class="md:w-1/2 md:pr-8 order-1 md:order-1 pb-8 md:pb-0"></div>
            <div
              class="timeline-marker absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 dark:from-orange-300 dark:to-red-400 flex items-center justify-center text-white z-10 shadow-lg border-2 border-white dark:border-gray-900 transition-transform duration-300 group-hover:scale-110"
            >
              <i class="fas fa-utensils text-lg"></i>
            </div>
            <div class="md:w-1/2 md:pl-12 order-2 md:order-2">
              <div
                class="timeline-content p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg border border-orange-100 dark:border-gray-700 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
              >
                <h3 class="text-xl font-semibold mb-2 text-orange-600 dark:text-orange-300">
                  6:00 Uhr – Das Frühstücks-Ritual
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-3">
                  Die Fütterung folgt einem durchdachten Plan, der auf die individuellen Bedürfnisse
                  jedes Pferdes abgestimmt ist:
                </p>
                <ul class="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>
                    <strong>Simon:</strong> große Portion Heu mit etwas Mineralfutter (er ist unser
                    sanfter Riese)
                  </li>
                  <li>
                    <strong>Balu:</strong> Heu mit etwas Hafer und Öl für sein glänzendes Fell
                  </li>
                  <li>
                    <strong>Napoleon:</strong> spezielles Diät-Heu, da er zu Übergewicht neigt
                    (typisch für Shetlandponys!)
                  </li>
                  <li>
                    <strong>Chica und Coco:</strong> teilen sich eine Box und bekommen
                    altersgerechtes Futter für Ponys
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 7:30 Uhr -->
          <div class="timeline-item group flex flex-col md:flex-row mb-16 relative">
            <div class="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
              <div
                class="timeline-content p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg border border-green-100 dark:border-gray-700 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
              >
                <h3 class="text-xl font-semibold mb-2 text-green-600 dark:text-green-300">
                  7:30 Uhr – Weidegang und Freiheit
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Nach dem Frühstück und einer kurzen Pflegeroutine geht es für die Pferde auf die
                  Weide. Hier können sie sich frei bewegen, grasen und ihr natürliches
                  Sozialverhalten ausleben. Die Gruppendynamik zu beobachten ist immer wieder
                  faszinierend – jedes Pferd hat seine eigene Rolle in der Herde.
                </p>
                <div class="flex justify-end mt-3 md:hidden">
                  <span
                    class="inline-block px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full"
                    ><i class="fas fa-tree mr-1"></i> Natur & Freiheit</span
                  >
                </div>
              </div>
            </div>
            <div
              class="timeline-marker absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 dark:from-green-300 dark:to-emerald-400 flex items-center justify-center text-white z-10 shadow-lg border-2 border-white dark:border-gray-900 transition-transform duration-300 group-hover:scale-110"
            >
              <i class="fas fa-tree text-lg"></i>
            </div>
            <div class="md:w-1/2 md:pl-8 order-1 md:order-2 pb-8 md:pb-0">
              <div class="hidden md:block mt-4 text-center">
                <span
                  class="inline-block px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full"
                  ><i class="fas fa-tree mr-1"></i> Natur & Freiheit</span
                >
              </div>
            </div>
          </div>

          <!-- 12:00 Uhr -->
          <div class="timeline-item group flex flex-col md:flex-row mb-16 relative">
            <div class="md:w-1/2 md:pr-8 order-1 md:order-1 pb-8 md:pb-0">
              <div class="hidden md:block mt-4 text-center md:text-right">
                <span
                  class="inline-block px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                  ><i class="fas fa-dumbbell mr-1"></i> Training & Pflege</span
                >
              </div>
            </div>
            <div
              class="timeline-marker absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 dark:from-blue-300 dark:to-cyan-400 flex items-center justify-center text-white z-10 shadow-lg border-2 border-white dark:border-gray-900 transition-transform duration-300 group-hover:scale-110"
            >
              <i class="fas fa-cloud-sun text-lg"></i>
            </div>
            <div class="md:w-1/2 md:pl-12 order-2 md:order-2">
              <div
                class="timeline-content p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg border border-blue-100 dark:border-gray-700 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
              >
                <h3 class="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-300">
                  12:00 Uhr – Mittagsruhe & Training
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-3">
                  In der Mittagszeit werden die Pferde in den Schatten geholt, besonders an heißen
                  Sommertagen. Diese Zeit nutzen wir für:
                </p>
                <ol class="list-decimal pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>
                    <strong>Einzeltraining:</strong> Je nach Pferd und Ausbildungsstand stehen
                    verschiedene Übungen auf dem Programm
                  </li>
                  <li>
                    <strong>Gesundheits-Check:</strong> Wir kontrollieren Hufe, Fell und
                    Allgemeinzustand
                  </li>
                  <li>
                    <strong>Streicheleinheiten:</strong> Zeit für Zuwendung und Pflege der Beziehung
                  </li>
                </ol>
                <div class="flex justify-start mt-3 md:hidden">
                  <span
                    class="inline-block px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                    ><i class="fas fa-dumbbell mr-1"></i> Training & Pflege</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- 16:00 Uhr -->
          <div class="timeline-item group flex flex-col md:flex-row mb-16 relative">
            <div class="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
              <div
                class="timeline-content p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg border border-purple-100 dark:border-gray-700 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
              >
                <h3 class="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-300">
                  16:00 Uhr – Nachmittagsaktivitäten
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Am Nachmittag stehen Ausritte, Bodenarbeit oder Longentraining auf dem Programm.
                  Auch die Kinder, die zum Ponyreiten kommen, werden jetzt empfangen. Unsere
                  geduldigen Ponys genießen die Aufmerksamkeit und die Abwechslung in ihrem
                  Tagesablauf. Die größeren Pferde werden für längere Ausritte gesattelt oder
                  trainiert.
                </p>
                <div class="flex justify-end mt-3 md:hidden">
                  <span
                    class="inline-block px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full"
                    ><i class="fas fa-child mr-1"></i> Ponyreiten & Ausbildung</span
                  >
                </div>
              </div>
            </div>
            <div
              class="timeline-marker absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 dark:from-purple-300 dark:to-violet-400 flex items-center justify-center text-white z-10 shadow-lg border-2 border-white dark:border-gray-900 transition-transform duration-300 group-hover:scale-110"
            >
              <i class="fas fa-horse text-lg"></i>
            </div>
            <div class="md:w-1/2 md:pl-8 order-1 md:order-2 pb-8 md:pb-0">
              <div class="hidden md:block mt-4 text-center">
                <span
                  class="inline-block px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full"
                  ><i class="fas fa-child mr-1"></i> Ponyreiten & Ausbildung</span
                >
              </div>
            </div>
          </div>

          <!-- 18:30 Uhr -->
          <div class="timeline-item group flex flex-col md:flex-row relative">
            <div class="md:w-1/2 md:pr-8 order-1 md:order-1 pb-8 md:pb-0">
              <div class="hidden md:block mt-4 text-center md:text-right">
                <span
                  class="inline-block px-3 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full"
                  ><i class="fas fa-bed mr-1"></i> Abendroutine</span
                >
              </div>
            </div>
            <div
              class="timeline-marker absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-blue-800 dark:from-indigo-300 dark:to-blue-600 flex items-center justify-center text-white z-10 shadow-lg border-2 border-white dark:border-gray-900 transition-transform duration-300 group-hover:scale-110"
            >
              <i class="fas fa-moon text-lg"></i>
            </div>
            <div class="md:w-1/2 md:pl-12 order-2 md:order-2">
              <div
                class="timeline-content p-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg border border-indigo-100 dark:border-gray-700 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
              >
                <h3 class="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-300">
                  18:30 Uhr – Abendbrot & Nachtruhe
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Mit der untergehenden Sonne kehrt Ruhe ein. Die Pferde bekommen ihr Abendessen,
                  die Boxen werden frisch eingestreut, und es gibt eine letzte Kontrolle vor der
                  Nacht. Einige Pferde bleiben je nach Wetter draußen, andere verbringen die Nacht
                  in der Box. Mit einer letzten Streicheleinheit verabschieden wir uns bis zum
                  nächsten Morgen.
                </p>
                <div class="flex justify-start mt-3 md:hidden">
                  <span
                    class="inline-block px-3 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full"
                    ><i class="fas fa-bed mr-1"></i> Abendroutine</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Wissenswertes Box -->
      <div
        class="fun-fact-box mt-16 bg-blue-50 dark:bg-blue-900/30 rounded-xl shadow-lg overflow-hidden"
      >
        <div class="flex flex-col md:flex-row">
          <div
            class="md:w-1/4 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800/50 dark:to-blue-700/50 flex items-center justify-center p-6"
          >
            <div class="text-center">
              <i class="fas fa-lightbulb text-blue-600 dark:text-blue-400 text-4xl mb-3"></i>
              <h3 class="text-xl font-bold text-blue-800 dark:text-blue-300">Wusstest du?</h3>
            </div>
          </div>
          <div class="md:w-3/4 p-6">
            <p class="text-blue-800 dark:text-blue-200 mb-3">
              <strong>Pferde schlafen nur etwa 3 Stunden am Tag!</strong> Sie können im Stehen dösen
              und brauchen nur für kurze Zeit tiefen Schlaf im Liegen. Als Fluchttiere ist diese
              Fähigkeit überlebenswichtig.
            </p>
            <p class="text-blue-800 dark:text-blue-200 mb-0">
              In der Herde wechseln sich die Pferde beim "Wache halten" ab, damit immer einige
              aufmerksam bleiben, während andere sich ausruhen können.
            </p>
          </div>
        </div>
      </div>

      <!-- Fazit -->
      <div
        class="conclusion mt-16 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/30 dark:to-gray-800/50 rounded-xl"
      >
        <h2 class="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
          <i class="fas fa-check-circle mr-2 text-primary-color dark:text-primary-light"></i>
          Fazit
        </h2>
        <p class="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
          Der Pferdealltag ist geprägt von festen Routinen, die Sicherheit geben, und gleichzeitig
          von der notwendigen Abwechslung für körperliche und geistige Auslastung. Jedes unserer
          Pferde hat seinen individuellen Charakter und besondere Bedürfnisse, auf die wir eingehen.
          Diese Balance aus Struktur und Flexibilität macht unsere Pferde ausgeglichen und
          zufrieden.
        </p>
      </div>

      <!-- Social-Media & Kontakt Box -->
      <div
        class="social-contact-box mt-10 flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600"
      >
        <div class="md:w-3/4">
          <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Folge uns auf Instagram und TikTok!
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Für tägliche Einblicke in unser Pferdeleben. Habt ihr Fragen zum Pferdealltag?
          </p>
        </div>
        <div class="md:w-1/4 mt-4 md:mt-0 text-center">
          <div class="flex flex-col space-y-2">
            <AppButton
              href="https://www.instagram.com/lebenisteinponyhof"
              target="_blank"
              variant="outline-primary"
            >
              <i class="fab fa-instagram mr-2"></i> Instagram
            </AppButton>
            <AppButton :to="{ path: '/contact' }" variant="primary"> Kontaktiere uns </AppButton>
          </div>
        </div>
      </div>

      <div
        class="blog-share-buttons mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center not-prose"
      >
        <h3 class="text-base font-semibold mb-3 text-gray-600 dark:text-gray-400">
          Diesen Beitrag teilen:
        </h3>
        <div class="flex justify-center gap-3 flex-wrap">
          <a
            :href="`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-button facebook inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            ><i class="fab fa-facebook-f mr-1.5"></i> Facebook</a
          >
          <a
            :href="`https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodedShareText}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-button twitter inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
            ><i class="fab fa-twitter mr-1.5"></i> Twitter</a
          >
          <a
            :href="`https://api.whatsapp.com/send?text=${encodedShareText}%20${currentUrl}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-button whatsapp inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
            ><i class="fab fa-whatsapp mr-1.5"></i> WhatsApp</a
          >
          <a
            :href="`mailto:?subject=${encodedShareText}&body=${currentUrl}`"
            class="share-button email inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            ><i class="fas fa-envelope mr-1.5"></i> E-Mail</a
          >
          <a
            :href="`https://pinterest.com/pin/create/button/?url=${currentUrl}&media=${encodedOgImageUrl}&description=${encodedShareText}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-button pinterest inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            ><i class="fab fa-pinterest-p mr-1.5"></i> Pinterest</a
          >
        </div>
      </div>

      <p class="mt-8 text-center">
        <NuxtLink
          to="/blog"
          class="back-link inline-block px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          ← Zurück zum Blog
        </NuxtLink>
      </p>
    </article>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useHead, useRoute } from '#imports'
  import { NuxtLink, NuxtImg } from '#components'
  import { useLightbox } from '~/composables/useLightbox'
  import AppButton from '~/components/AppButton.vue'
  import dayjs from 'dayjs'
  import 'dayjs/locale/de'

  dayjs.locale('de')

  const lightbox = useLightbox()
  const route = useRoute()
  const siteUrl = 'https://lebenisteinponyhof.de'
  const currentUrl = computed(() => `${siteUrl}${route.path}`)
  const pageTitle = 'Ein Tag im Leben unserer Pferde'
  const pageDescription =
    'Erfahre, wie der typische Tag unserer Ponys aussieht – von der Morgenfütterung bis zur Abendroutine.'
  const pageImage = `${siteUrl}/images/Weidegang.webp`
  const publishDate = '2025-01-15'
  const formattedDate = computed(() => dayjs(publishDate).format('DD. MMMM YYYY'))

  const shareText = encodeURIComponent(`${pageTitle} - Leben ist ein Ponyhof`)
  const encodedOgImageUrl = encodeURIComponent(pageImage)

  useHead({
    title: pageTitle,
    titleTemplate: '%s | Leben ist ein Ponyhof Blog',
    meta: [
      { name: 'description', content: pageDescription },
      {
        name: 'keywords',
        content: 'Pferde, Tagesablauf, Stallroutine, Fütterung, Tierwohl, Pferdealltag, Ponyhof',
      },
      { property: 'og:title', content: pageTitle },
      { property: 'og:locale', content: 'de_DE' },
      { property: 'og:locality', content: 'Renningen' },
      { property: 'og:description', content: pageDescription },
      { property: 'og:url', content: currentUrl.value },
      { property: 'og:image', content: pageImage },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: `${publishDate}T08:00:00+01:00` },
      { property: 'article:author', content: 'Sarah Handte' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDescription },
      { name: 'twitter:image', content: pageImage },
    ],
    link: [{ rel: 'canonical', href: currentUrl.value }],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: pageTitle,
          description: pageDescription,
          image: pageImage,
          datePublished: publishDate,
          author: { '@type': 'Person', name: 'Sarah Handte' },
          publisher: {
            '@type': 'Organization',
            name: 'Leben ist ein Ponyhof',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/images/logos/favicon.svg`,
            },
          },
          mainEntityOfPage: { '@type': 'WebPage', '@id': currentUrl.value },
        }),
      },
    ],
  })
</script>

<style scoped>
  /* Lead-Paragraph */
  .lead-paragraph {
    font-weight: 500;
    color: theme('colors.gray.700');
  }
  .dark .lead-paragraph {
    color: theme('colors.gray.200');
  }

  /* Quote Block */
  .quote-block {
    position: relative;
  }

  /* Verbesserte Timeline Styles */
  .timeline-container {
    position: relative;
    padding-bottom: 20px;
  }

  .timeline-item {
    position: relative;
  }

  .timeline-marker {
    margin-top: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  .timeline-content {
    overflow: hidden;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (min-width: 768px) {
    .timeline-marker {
      margin-top: 0;
    }

    /* Verbindungslinien zwischen Timeline und Content */
    .timeline-item:nth-child(odd) .timeline-content::before {
      content: '';
      position: absolute;
      top: 24px;
      right: -12px;
      width: 12px;
      height: 2px;
      background: linear-gradient(to right, transparent, theme('colors.primary-color/50'));
    }

    .timeline-item:nth-child(even) .timeline-content::before {
      content: '';
      position: absolute;
      top: 24px;
      left: -12px;
      width: 12px;
      height: 2px;
      background: linear-gradient(to left, transparent, theme('colors.primary-color/50'));
    }
  }

  .dark .timeline-item:nth-child(odd) .timeline-content::before {
    background: linear-gradient(to right, transparent, theme('colors.primary-light/50'));
  }

  .dark .timeline-item:nth-child(even) .timeline-content::before {
    background: linear-gradient(to left, transparent, theme('colors.primary-light/50'));
  }

  /* Animationen für Timeline */
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  .timeline-item:hover .timeline-marker {
    animation: pulse 2s infinite;
  }

  /* Verbesserte Fun Fact Box */
  .fun-fact-box {
    transition: all 0.3s ease;
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .fun-fact-box:hover {
    transform: translateY(-5px);
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  /* Share Buttons */
  .share-button {
    transition: all 0.2s ease;
  }

  .share-button:hover {
    transform: translateY(-2px);
  }
</style>
