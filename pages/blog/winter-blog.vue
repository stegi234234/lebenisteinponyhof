<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Winter auf dem Ponyhof</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">So kommen unsere Pferde gesund und glücklich durch die kalte Jahreszeit.</p>
      <div class="blog-meta text-sm text-gray-500 dark:text-gray-400 mt-4">
        <span class="date mr-4"><i class="far fa-calendar mr-1"></i> {{ formattedDate }}</span>
        <span class="read-time"><i class="far fa-clock mr-1"></i> ca. 9 Min. Lesezeit</span>
      </div>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li aria-current="page">Winter auf dem Ponyhof</li>
      </ol>
    </nav>

    <article class="content container mx-auto max-w-3xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md prose dark:prose-invert prose-a:text-primary-color dark:prose-a:text-primary-light prose-headings:font-semibold prose-headings:text-gray-800 dark:prose-headings:text-white">

      <p>Der Winter stellt uns Pferdebesitzer vor besondere Herausforderungen. <strong>Gefrorene Tränken, verschneite Koppeln und kürzere Tage</strong> bedeuten oft mehr Arbeit und eine Anpassung der gewohnten Routinen. Doch mit der richtigen Vorbereitung und Pflege kommen unsere Pferde gut durch die kalte Jahreszeit. Hier teilen wir unsere Erfahrungen und Tipps.</p>

      <h2>1. Fütterung im Winter – Mehr Energie für kalte Tage</h2>
      <p>Im Winter benötigen Pferde deutlich mehr Energie, allein um ihre Körpertemperatur aufrechtzuerhalten. Die Basis dafür ist ausreichend gutes Raufutter (Heu/Heulage).</p>

      <blockquote>„Pferde können Kälte erstaunlich gut vertragen – viel besser als Hitze. Das Wichtigste ist eine ausreichende und regelmäßige Fütterung mit genügend Raufutter. Die Verdauung von Rohfaser erzeugt Wärme von innen." – Tim</blockquote>

      <p>Unsere Winterfütterungs-Grundsätze:</p>
      <ul>
        <li><strong>Ausreichend Heu:</strong> Lieber etwas mehr als zu wenig, besonders bei Minusgraden. Faustregel: mind. 1,5-2 kg Heu pro 100 kg Körpergewicht pro Tag, auf mehrere Portionen verteilt.</li>
        <li><strong>Angepasstes Kraftfutter:</strong> Nur bei Bedarf und entsprechend der Leistung. Ältere oder schwerfuttrige Pferde brauchen ggf. mehr.</li>
        <li><strong>Warmes Mash:</strong> Gelegentlich (1-2x pro Woche) ein warmes Mash (z.B. mit Leinsamen, Rübenschnitzeln) ist eine willkommene Abwechslung und gut für die Verdauung.</li>
        <li><strong>Wasser-Management:</strong> Mehrmals täglich kontrollieren, ob die Tränken eisfrei sind! Beheizbare Tränken sind ideal, ansonsten muss Eis regelmäßig entfernt werden. Lauwarmes Wasser wird oft lieber getrunken.</li>
        <li><strong>Salzleckstein:</strong> Auch im Winter wichtig für den Elektrolythaushalt.</li>
      </ul>

      <figure class="my-6 not-prose">
        <NuxtImg
            src="/images/Napoleongrafik-im-Schnee_copy.webp"
            
            alt="Shetty Napoleon steht im Schnee, sein dichtes Winterfell ist gut sichtbar"
            class="blog-image w-full max-w-xl mx-auto rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            @click="lightbox.open('/images/Napoleongrafik-im-Schnee_copy.webp', 'Napoleon genießt trotz seiner geringen Größe den Schnee – sein dichtes Winterfell hält ihn warm.')"
            loading="lazy" format="webp" quality="75" width="800" height="600" densities="1x 2x"
        />
        <figcaption class="text-center text-xs mt-2 text-gray-500 dark:text-gray-400">Napoleons dichtes Winterfell – die perfekte natürliche Isolierung.</figcaption>
      </figure>

      <h2>2. Bewegung trotz Kälte – So bleiben Pferde fit</h2>
      <p>Auch im Winter ist regelmäßige, freie Bewegung entscheidend für die Gesundheit von Körper und Geist (Verdauung, Gelenke, Psyche). Das ist nicht immer einfach umzusetzen.</p>

      <aside class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-6 text-sm border-l-4 border-blue-400 text-blue-800 dark:text-blue-200 not-prose">
        <p><strong>Winter-Fact:</strong> Pferde fühlen sich bei Temperaturen um 5-15°C am wohlsten. Kälte bis ca. -15°C ist für gesunde, gut genährte Pferde mit dichtem Winterfell und Windschutz meist kein Problem.</p>
      </aside>

      <p>Unser Winter-Bewegungsprogramm (je nach Wetter und Boden):</p>
      <ol>
        <li><strong>Täglicher Auslauf:</strong> Wenn möglich, kommen unsere Pferde täglich für mehrere Stunden auf einen befestigten Paddock oder eine Winterkoppel. Auch Bewegung im Schnee tut gut, solange der Boden nicht gefährlich eisig ist.</li>
        <li><strong>Halle nutzen:</strong> Bei sehr schlechtem Wetter oder gefrorenem Boden bietet die Reithalle Platz für Freilauf, Longieren oder Bodenarbeit.</li>
        <li><strong>Angepasstes Training:</strong> Lange Aufwärmphasen im Schritt sind wichtig. Bei eisigem Boden verzichten wir auf schnelle Gangarten oder Sprünge.</li>
        <li><strong>Abwechslung:</strong> Cavaletti-Arbeit, Stangentraining, Gelassenheitstraining oder kleine Zirkuslektionen halten Kopf und Körper fit.</li>
      </ol>

      <h2>3. Winterfell & Pflege – Weniger ist manchmal mehr</h2>
      <p>Die meisten Pferde entwickeln ein dichtes Winterfell, das sie hervorragend isoliert. Unsere Ponys sehen im Winter oft wie kleine Teddybären aus!</p>
      <p>Übermäßige Pflege kann die natürliche Schutzfunktion des Fells (Talgdrüsen) stören. Dennoch ist ein Minimum an Pflege wichtig:</p>
      <ul>
        <li><strong>Grobe Verschmutzungen entfernen:</strong> Besonders in der Sattel- und Gurtlage vor dem Reiten.</li>
        <li><strong>Regelmäßige Kontrolle:</strong> Haut auf Verletzungen, Scheuerstellen oder Anzeichen von Hautpilz/Milben prüfen.</li>
        <li><strong>Trocknen nach Arbeit:</strong> Ein verschwitztes Pferd muss gut trocknen können, bevor es wieder in die Kälte geht. Eine Abschwitzdecke ist hier unerlässlich. Das Fell am besten mit Stroh trockenreiben oder lange Schritt reiten.</li>
        <li><strong>Schweif- und Mähnenpflege:</strong> Verhindert Verfilzungen, besonders bei Matschwetter.</li>
        <li><strong>Eindecken?:</strong> Wir decken unsere robusten Pferde nur in Ausnahmefällen ein (z.B. bei Krankheit, nach dem Scheren oder bei sehr alten/dünnen Pferden bei extrem nasskaltem Wetter). Wichtiger ist ein trockener, windgeschützter Unterstand.</li>
      </ul>

      <figure class="my-6 not-prose">
        <NuxtImg
            src="/images/galerie/Kylo_Weihnachten.webp"
            alt="Pferd Balu mit dichtem, dunklem Winterfell"
            class="blog-image w-full max-w-lg mx-auto rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            @click="lightbox.open('/images/galerie/Kylo_Weihnachten.webp', 'Balu zeigt sein beeindruckendes Winterfell.')"
            loading="lazy" format="webp" quality="70" width="700" height="525" densities="1x 2x"
        />
        <figcaption class="text-center text-xs mt-2 text-gray-500 dark:text-gray-400">Balus Winterfell: Dunkler und dichter als im Sommer.</figcaption>
      </figure>

      <h2>4. Stall & Paddock – Matschmanagement ist alles</h2>
      <p>Nässe und Matsch sind im Winter oft unvermeidlich und können zu Hufproblemen (Strahlfäule) oder Hauterkrankungen (Mauke) führen. Gutes Management ist entscheidend:</p>
      <ul>
        <li><strong>Trockene Liegeflächen:</strong> Ausreichend dicke, saubere Einstreu in Boxen oder Unterständen ist Pflicht.</li>
        <li><strong>Befestigte Bereiche:</strong> Paddockplatten, Sand oder Hackschnitzel an stark frequentierten Stellen (Eingang, Tränke) helfen gegen tiefen Matsch.</li>
        <li><strong>Regelmäßiges Abäppeln:</strong> Auch auf Paddocks und Winterkoppeln wichtig, um die Hygiene zu wahren und Parasitenbefall zu reduzieren.</li>
        <li><strong>Gute Drainage:</strong> Sicherstellen, dass Wasser ablaufen kann.</li>
        <li><strong>Hufpflege:</strong> Hufe täglich auskratzen und auf Probleme kontrollieren. Bei Bedarf Huffett oder -öl verwenden (nach Absprache mit dem Schmied).</li>
      </ul>

      <hr>

      <p><strong>Fazit:</strong> Der Winter erfordert mehr Aufmerksamkeit bei Fütterung, Haltung und Bewegung. Mit guter Planung, angepassten Routinen und einem wachen Auge für die Bedürfnisse der Pferde lässt sich die kalte Jahreszeit aber gut meistern. Und ein Ausritt durch die verschneite Landschaft hat ja auch seinen ganz besonderen Zauber!</p>
      <p>Wie managt ihr den Winter mit euren Pferden? Habt ihr noch weitere Tipps?</p>

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

     <section class="related-posts container mx-auto max-w-4xl px-4 py-8 md:py-12 mt-8">
         <h2 class="text-2xl font-semibold mb-6 text-center">Das könnte Sie auch interessieren:</h2>
         <div class="related-posts-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

             <div class="related-post ...">
                 <NuxtImg src="/images/Pferde/Simon.webp" alt="Pferdepflege" class="..."/>
                 <div class="p-4">
                     <h3 class="text-md font-semibold mb-1">Pferdepflege-Guide</h3>
                     <p class="text-xs ... mb-3">Wichtige Routinen für das Wohlbefinden.</p>
                     <NuxtLink to="/blog/pferdepflege" class="read-more ...">Weiterlesen</NuxtLink> {/* Link anpassen, falls anderer Slug */}
                 </div>
             </div>
              <div class="related-post ...">
                 <NuxtImg src="/images/Weidegang.webp" alt="Pferdealltag" class="..."/>
                 <div class="p-4">
                     <h3 class="text-md font-semibold mb-1">Ein Tag im Leben unserer Pferde</h3>
                     <p class="text-xs ... mb-3">Von morgens bis abends auf dem Hof.</p>
                     <NuxtLink to="/blog/pferdealltag" class="read-more ...">Weiterlesen</NuxtLink>
                 </div>
             </div>
         </div>
     </section>
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
const encodedShareText = encodeURIComponent(pageTitle);


const lightbox = useLightbox();
const route = useRoute();
const siteUrl = 'https://lebenisteinponyhof.de'; // Domain anpassen
const currentUrl = computed(() => `${siteUrl}${route.path}`);
// Meta-Daten spezifisch für diesen Post
const pageTitle = 'Pferde im Winter: Tipps für Fütterung, Haltung & Bewegung';
const pageDescription = 'So kommen Ihre Pferde gut durch den Winter: Wichtige Infos zu Fütterung, Wasserversorgung, Bewegung, Winterfell-Pflege und Matschmanagement.';
const pageImage = `${siteUrl}/images/Pferde/Napoleon.webp`; // Passendes Bild wählen
const publishDate = '2024-11-20'; // Beispiel-Datum für Winter
const formattedDate = computed(() => dayjs(publishDate).format('DD. MMMM YYYY'));

const shareText = encodeURIComponent(pageTitle);
const encodedOgImageUrl = encodeURIComponent(pageImage);

useHead({
  title: pageTitle,
  titleTemplate: '%s | Leben ist ein Ponyhof Blog',
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: 'Pferde Winter, Winterfütterung Pferd, Pferdehaltung Winter, Bewegung Pferd Winter, Winterfell Pflege, Matsch Paddock, Pferde eindecken, Offenstall Winter' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:url', content: currentUrl.value },
    { property: 'og:image', content: pageImage },
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: `${publishDate}T10:00:00+01:00` }, // Zeit anpassen
    { property: 'article:author', content: 'Tim Steegmüller' }, // Oder Sarah
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
           "author": { "@type": "Person", "name": "Tim Steegmüller", "url": `${siteUrl}/about` }, // Anpassen
          "publisher": { /* ... Publisher Info ... */ },
          "mainEntityOfPage": { "@type": "WebPage", "@id": currentUrl.value },
          "keywords": "Winter, Pferdehaltung, Fütterung, Bewegung, Pferdepflege"
      })
    }
  ]
})
</script>

<style>/* Prose Klassen aktiv */</style>