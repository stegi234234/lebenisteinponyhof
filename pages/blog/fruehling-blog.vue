<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Frühling auf dem Ponyhof</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Fellwechsel, Weidezeit und Frühjahrsputz – die aufregende Jahreszeit für Pferd und Mensch.</p>
      <div class="blog-meta text-sm text-gray-500 dark:text-gray-400 mt-4">
        <span class="date mr-4"><i class="far fa-calendar mr-1"></i> {{ formattedDate }}</span>
        <span class="read-time"><i class="far fa-clock mr-1"></i> ca. 8 Min. Lesezeit</span>
      </div>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li aria-current="page">Frühling auf dem Ponyhof</li>
      </ol>
    </nav>

    <article class="content container mx-auto max-w-3xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md prose dark:prose-invert prose-a:text-primary-color dark:prose-a:text-primary-light prose-headings:font-semibold prose-headings:text-gray-800 dark:prose-headings:text-white">

      <p>Der Frühling ist endlich da! Die Tage werden länger, die Temperaturen steigen, und unsere Pferde spüren die Veränderung in der Luft. <strong>Diese Jahreszeit bringt für uns Pferdebesitzer sowohl Freuden als auch Herausforderungen</strong> – vom Fellwechsel bis zum ersten Weidegang nach dem Winter. Heute teilen wir unsere Erfahrungen und Tipps für die Frühlingszeit mit euren vierbeinigen Lieblingen.</p>

      <h2>1. Der große Fellwechsel – Wenn überall Haare fliegen</h2>
      <p>Jeder Pferdebesitzer kennt es: Sobald die Temperaturen steigen, beginnt das große Haaren. <em>Napoleon</em> und <em>Coco</em> sind in dieser Zeit wahre Fellwechsel-Champions – manchmal habe ich das Gefühl, ich könnte ein zweites Pony aus all den Haaren bauen!</p>

      <blockquote>„Während des Fellwechsels ist ein wichtiges Motto: Geduld und tägliches Putzen. Deine Kleidung, dein Auto und wahrscheinlich sogar dein Mittagessen werden trotzdem voller Pferdehaare sein – aber das gehört zum Frühjahr einfach dazu." – Sarah</blockquote>

      <p>Unsere Tipps für den Fellwechsel:</p>
      <ul>
        <li><strong>Striegel & Co.:</strong> Investiere in gute Putzutensilien – ein scharfer Striegel, ein Schweißmesser und eine weiche Bürste sollten zur Grundausstattung gehören.</li>
        <li><strong>Tägliches Ritual:</strong> Plane 15-20 Minuten täglich ein, um das lose Fell zu entfernen. Dein Pferd und seine Stallnachbarn werden es dir danken!</li>
        <li><strong>Ernährung unterstützen:</strong> Füttere während des Fellwechsels ggf. Bierhefe oder spezielle Fellwechsel-Ergänzungen nach Absprache mit dem Tierarzt. Zink, Biotin und Omega-3-Fettsäuren können den Prozess unterstützen.</li>
      </ul>

      <figure class="my-6 not-prose">
        <NuxtImg
            src="/images/Napoleon_im_Fellwechsel.webp"
            alt="Shetty Napoleon mit deutlichem Fellwechsel im Frühling"
            class="blog-image w-full max-w-xl mx-auto rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            @click="lightbox.open('/images/Napoleon_im_Fellwechsel.webp', 'Napoleon verliert sein Winterfell – überall fliegen die Haare!')"
            loading="lazy" format="webp" quality="75" width="800" height="600" densities="1x 2x"
        />
        <figcaption class="text-center text-xs mt-2 text-gray-500 dark:text-gray-400">Napoleon verliert sein Winterfell – überall fliegen die Haare!</figcaption>
      </figure>

      <h2>2. Der erste Weidegang – Freude und Vorsicht walten lassen</h2>
      <p>Wer kennt es nicht? Dieser magische Moment, wenn die Pferde nach dem Winter zum ersten Mal wieder auf die Weide dürfen. Es ist ein spektakuläres Schauspiel – Bocksprünge, wehende Mähnen und die pure Freude. Aber Vorsicht ist geboten, besonders beim Anweiden!</p>

      <aside class="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-6 text-sm border-l-4 border-yellow-400 text-yellow-800 dark:text-yellow-200 not-prose">
        <p><strong>TikTok-Tipp:</strong> Die ersten Weideausflüge eurer Pferde sind Gold wert für eure Social-Media-Kanäle! Haltet die Kamera bereit und fangt diese besonderen Momente ein – eure Follower werden diese authentischen Freudenmomenten lieben!</p>
      </aside>

      <p>So gehen wir das Anweiden an:</p>
      <ol>
        <li><strong>Langsam starten:</strong> Beginne mit sehr kurzen Zeiten (z.B. 15-30 Minuten täglich) auf jungem Gras und steigere die Dauer über mehrere Wochen langsam. Dies gibt dem Verdauungssystem Zeit, sich an das proteinreiche Frühlingsgras zu gewöhnen und beugt Koliken oder Hufrehe vor.</li>
        <li><strong>Vorher Heu füttern:</strong> Lass dein Pferd nicht mit leerem Magen auf die Weide. Eine Portion Heu vorher sättigt und verhindert zu gieriges Fressen.</li>
        <li><strong>Bewegung vorab:</strong> Besonders bei sehr temperamentvollen Pferden kann es sinnvoll sein, sie vorher kurz zu bewegen (Paddock, Halle), damit der erste Übermut nicht auf der potenziell rutschigen Wiese stattfindet.</li>
        <li><strong>Maulkorb für Risikokandidaten:</strong> Für Pferde, die zu Hufrehe neigen oder sehr leichtfuttrig sind (wie unsere Shettys!), ist ein Weidemaulkorb zumindest in der Anfangszeit oft unerlässlich.</li>
        <li><strong>Gruppe oder Solo:</strong> Überlege, ob dein Pferd zuerst alleine oder in der Herde auf die Weide soll. In der Gruppe kann es zu Rangordnungskämpfen kommen, alleine ist es vielleicht entspannter (oder auch unruhiger).</li>
      </ol>

      <h2>3. Der Frühjahrsputz – Stall und Ausrüstung auf Vordermann bringen</h2>
      <p>Nicht nur die Pferde brauchen Pflege, auch der Stall und das Zubehör haben nach dem Winter oft eine gründliche Reinigung nötig. Der Frühjahrsputz ist eine gute Gelegenheit, alles für die wärmere Jahreszeit vorzubereiten.</p>

      <p>Unsere Frühjahrsputz-Checkliste:</p>
      <ul>
        <li>Boxen/Unterstände gründlich ausmisten, ggf. desinfizieren (mit geeigneten Mitteln).</li>
        <li>Tränken und Futtertröge intensiv reinigen.</li>
        <li>Spinnweben entfernen, Stallgassen fegen, Wände ggf. abwaschen.</li>
        <li>Ausrüstung (Sättel, Trensen, Decken, Putzzeug) kontrollieren, reinigen und pflegen. Lederpflege nicht vergessen!</li>
        <li>Medikamentenschrank und Erste-Hilfe-Set überprüfen: Haltbarkeitsdaten checken, Fehlendes auffüllen.</li>
        <li>Weidezäune kontrollieren: Sind Pfähle fest? Ist der Draht/die Litze intakt? Funktioniert das Weidezaungerät?</li>
      </ul>

      <h2>4. Mehr Bewegung – Start in die Trainingssaison</h2>
      <p>Mit den wärmeren Temperaturen und längeren Tagen wächst die Motivation für mehr Training und Ausritte. Nach der ruhigeren Winterzeit ist es wichtig, das Training langsam wieder aufzubauen, um Muskeln und Kondition schonend zu steigern.</p>
      <p><em>Balu</em> beispielsweise strotzt im Frühling vor Energie. Für ihn und die anderen planen wir:</p>
      <ul>
        <li><strong>Gelassenheitstraining im Freien:</strong> Neue Reize nutzen, um die Nervenstärke zu fördern.</li>
        <li><strong>Abwechslungsreiche Ausritte:</strong> Die erwachende Natur auf neuen Wegen erkunden.</li>
        <li><strong>Gezielte Bodenarbeit:</strong> Bindung stärken und gymnastizieren.</li>
        <li><strong>Longieren:</strong> Konditionsaufbau und Überprüfung der Losgelassenheit.</li>
      </ul>

      <figure class="my-6 not-prose">
        <NuxtImg
            src="/images/Balu_wird_longiert.webp"
            alt="Pferd Balu wird im Frühling longiert"
            class="blog-image w-full max-w-lg mx-auto rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            @click="lightbox.open('/images/Pferde/Balu.webp', 'Balu genießt die ersten längeren Trainingseinheiten im Frühling.')"
            loading="lazy" format="webp" quality="70" width="700" height="525" densities="1x 2x"
        />
        <figcaption class="text-center text-xs mt-2 text-gray-500 dark:text-gray-400">Balu beim Training im Frühling.</figcaption>
      </figure>

      <h2>5. Gesundheits-Check – Fit in die neue Saison</h2>
      <p>Der Frühling ist der ideale Zeitpunkt für wichtige Gesundheitsvorsorgemaßnahmen:</p>
      <ul>
        <li><strong>Impfungen:</strong> Überprüfen und ggf. auffrischen lassen (Tetanus, Influenza etc.).</li>
        <li><strong>Entwurmung:</strong> Strategische Entwurmung nach Kotprobe oder nach Plan des Tierarztes.</li>
        <li><strong>Hufpflege:</strong> Der Hufschmied kontrolliert den Zustand nach dem Winter und passt den Beschlag ggf. an.</li>
        <li><strong>Zahnkontrolle:</strong> Besonders wichtig vor der Weidesaison, um sicherzustellen, dass das Gras gut gekaut werden kann.</li>
      </ul>

      <hr>

      <p><strong>Fazit:</strong> Der Frühling bringt viel Freude, aber auch Arbeit mit sich. Vom Management des Fellwechsels über das vorsichtige Anweiden bis hin zum Frühjahrsputz – eine gute Planung hilft, diese aufregende Zeit entspannt mit den Pferden zu genießen.</p>
      <p>Wie erlebt ihr den Frühling mit euren Pferden? Teilt eure Erfahrungen gerne auf unseren Social-Media-Kanälen oder schreibt uns!</p>



      <div class="blog-share-buttons mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center not-prose">
        <h3 class="text-base font-semibold mb-3 text-gray-600 dark:text-gray-400">Diesen Beitrag teilen:</h3>
        <div class="flex justify-center gap-3 flex-wrap">
          <a :href="`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`" target="_blank" rel="noopener noreferrer" class="share-button facebook inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"><i class="fab fa-facebook-f mr-1.5"></i> Facebook</a>
          <a :href="`https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodedShareText}`" target="_blank" rel="noopener noreferrer" class="share-button twitter inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"><i class="fab fa-twitter mr-1.5"></i> Twitter</a>
          <a :href="`https://api.whatsapp.com/send?text=${encodedShareText}%20${currentUrl}`" target="_blank" rel="noopener noreferrer" class="share-button whatsapp inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"><i class="fab fa-whatsapp mr-1.5"></i> WhatsApp</a>
          <a :href="`mailto:?subject=${encodedShareText}&body=${currentUrl}`" class="share-button email inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"><i class="fas fa-envelope mr-1.5"></i> E-Mail</a>
          <a :href="`https://pinterest.com/pin/create/button/?url=${currentUrl}&media=${encodedOgImageUrl}&description=${encodedShareText}`" target="_blank" rel="noopener noreferrer" class="share-button pinterest inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"><i class="fab fa-pinterest-p mr-1.5"></i> Pinterest</a>
        </div>
      </div>

       <p class="mt-8 text-center not-prose">
          <NuxtLink to="/blog" class="back-link ...">
              ← Zurück zum Blog
          </NuxtLink>
       </p>
    </article>

   

  </div>
</template>

<script setup>
import { useHead, useRoute } from '#imports';
import { computed } from 'vue';
import { NuxtLink, NuxtImg } from '#components';
import { useLightbox } from '~/composables/useLightbox';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
dayjs.locale('de');

const lightbox = useLightbox();
const route = useRoute();
const siteUrl = 'https://lebenisteinponyhof.de'; // Domain anpassen
const currentUrl = computed(() => `${siteUrl}${route.path}`);
// Meta-Daten spezifisch für diesen Post
const pageTitle = 'Frühling auf dem Ponyhof: Fellwechsel, Anweiden & Co.';
const pageDescription = 'Tipps und Erfahrungen zur Frühlingszeit mit Pferden: Management von Fellwechsel und Anweiden, Frühjahrsputz im Stall und Start ins Training.';
const pageImage = `${siteUrl}/images/Pferde/Napoleon.webp`; // Passendes Bild wählen
const publishDate = '2024-04-15'; // Beispiel-Datum für Frühling
const formattedDate = computed(() => dayjs(publishDate).format('DD. MMMM YYYY'));

const shareText = encodeURIComponent(pageTitle);
const encodedOgImageUrl = encodeURIComponent(pageImage);

useHead({
  title: pageTitle,
  titleTemplate: '%s | Leben ist ein Ponyhof Blog',
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: 'Pferde Frühling, Fellwechsel Pferd, Anweiden Tipps, Weidezeit Pferd, Frühjahrsputz Stall, Pferdetraining Frühling, Pferdegesundheit Frühling' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:url', content: currentUrl.value },
    { property: 'og:image', content: pageImage },
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: `${publishDate}T08:00:00+02:00` }, // Zeit anpassen
    { property: 'article:author', content: 'Sarah Handte' }, // Oder Tim
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: pageImage },
  ],
   link: [ { rel: 'canonical', href: currentUrl.value } ],
   script: [
     {
      type: 'application/ld+json',
      children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": pageTitle,
          "description": pageDescription,
          "image": pageImage,
          "datePublished": publishDate,
          "author": { "@type": "Person", "name": "Sarah Handte", "url": `${siteUrl}/about` },
          "publisher": { /* ... Publisher Info ... */ },
          "mainEntityOfPage": { "@type": "WebPage", "@id": currentUrl.value },
          "keywords": "Fellwechsel, Anweiden, Frühling, Pferdehaltung, Pferdepflege" // Keywords auch hier
      })
    }
  ]
})
</script>

<style>/* Prose Klassen aktiv */</style>