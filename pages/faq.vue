<script setup>
import { ref } from 'vue';
import { useMySeoMeta } from '~/composables/useMySeoMeta'; // HINZUGEFÜGT
import { NuxtLink } from '#components';
import { useRuntimeConfig, useRoute } from '#app'; // HINZUGEFÜGT für siteUrl und businessAddress

const config = useRuntimeConfig();
const route = useRoute(); // HINZUGEFÜGT für canonicalUrl
const siteUrl = config.public.siteUrl;
const businessAddress = config.public.businessAddress;

/*--------------------------------------------------
| Kopf‑ und SEO‑Daten
--------------------------------------------------*/
const baseFaqs = [
  // ... (deine baseFaqs bleiben unverändert) ...
  {
    q: 'Ab welchem Alter können Kinder bei euch reiten?',
    a: "Mit ca. 3 Jahren geht's los - dann sind die Kleinen gerade groß genug, um nicht vom Pony zu purzeln (und wir müssen nicht permanent in Rückenhaltung mitlaufen), obwohl da das Mitkommen eines Erwachsenen vorausgesetzt wird. Unsere Ferienkurse sind für Abenteurer von 6–12 Jahren perfekt. Für unsere therapeutischen Einheiten gibt's keine starre Altersgrenze – da schauen wir individuell, was passt. Und Kindergeburtstage? Die feiern wir am liebsten mit 4- bis 10-Jährigen, weil da der Wunsch nach Ponys und Glitzer noch größer ist als der nach dem neuesten Smartphone.",
  },
  {
    q: 'Muss mein Kind schon reiten können?',
    a: 'Überhaupt nicht! Wir starten genau da, wo dein Kind steht. Keine Ahnung von Pferden? Kein Problem! Unsere geduldigen Ponys (und wir) zeigen alles, was wichtig ist. Es geht uns vor allem um die Begegnung mit dem Tier, Spaß und Förderung – nicht um perfekte Dressur. Zugegeben, manchmal zeigen uns die Ponys auch, dass <i>sie</i> die wahren Chefs sind – aber genau diese Momente sind oft die lehrreichsten!',
  },
  {
    q: 'Was soll mein Kind anziehen? Brauchen wir spezielle Ausrüstung?',
    a: 'Dresscode: "Darf dreckig werden!" 😉 Wichtig sind feste, geschlossene Schuhe (bitte keine Sandalen oder Crocs - Pferdehuf trifft Zeh ist kein Spaß). Eine lange Hose schützt die Beine beim Reiten (Jeans, Leggings oder Jogginghose sind super). Ein Helm ist Pflicht – wir haben Leihhelme, aber falls ein eigener Reit- oder Fahrradhelm vorhanden ist, bringt den gerne mit. Ansonsten braucht ihr keine Spezialausrüstung – keine Sorge, wir sind kein Nobel-Reitstall mit Dresscode!',
  },
  {
    q: 'Was ist, wenn es regnet? Fallen dann alle Pläne ins Wasser?',
    a: 'Nö! Wir sind doch nicht aus Zucker (und die Ponys auch nicht). Wir haben einen überdachten Putzplatz und gemütliche Bereiche im Stall, wo wir auch bei Regen viele Aktivitäten durchführen können. Bei leichtem Nieselregen reiten wir trotzdem - mit der richtigen Kleidung ist das kein Problem. Nur bei Weltuntergangswetter (Sturm, Gewitter oder sintflutartigem Regen) müssen wir das Programm anpassen – Sicherheit geht vor. Dann machen wir einfach mehr Bodenarbeit, Theorie oder Stallkunde. Spannend ist es immer!',
  },
  {
    q: 'Wie melde ich mein Kind an oder buche einen Termin?',
    a: 'Am besten über unser <NuxtLink to="/contact" class="text-primary-color hover:underline font-semibold">Kontaktformular</NuxtLink>, per E-Mail oder Telefon. Wir sind zwar viel im Stall unterwegs, melden uns aber so schnell wie möglich zurück! Wir klären dann gemeinsam alle Details und senden bei Bedarf ein Anmeldeformular. Kleiner Tipp: Besonders für Kindergeburtstage und Ferienkurse empfehlen wir eine frühzeitige Anfrage, da diese schnell ausgebucht sind. Unsere Ponys sind eben sehr begehrt!',
  },
  {
    q: 'Was kostet der Spaß mit den Ponys?',
    a: 'Das hängt vom Angebot ab – eine kurze Ponyrunde kostet natürlich weniger als ein ganzer Geburtstag mit Schatzsuche und Stallolympiade. Wir versuchen, faire Preise anzubieten, die unsere Kosten decken (Ponys sind nämlich richtige kleine Fressmaschinen). <NuxtLink to="/contact" class="text-primary-color hover:underline font-semibold">Fragt uns einfach</NuxtLink> nach den aktuellen Preisen für euer Wunschangebot, dann nennen wir euch die genauen Zahlen.',
  },
  {
    q: 'Übernimmt die Krankenkasse die Kosten für Reittherapie?',
    a: 'In den meisten Fällen leider nein – die gesetzlichen Kassen sind da etwas knauserig. Unter bestimmten Umständen gibt es aber Möglichkeiten für Zuschüsse, z.B. über die Eingliederungshilfe oder bei bestimmten Indikationen. Sprecht uns an, wir kennen einige Wege und Tipps, wie man Unterstützung beantragen kann. Und wir stellen natürlich gerne entsprechende Bescheinigungen aus.',
  },
  {
    q: 'Wie kann ich meine Daten löschen lassen?',
    a: 'Kein Problem! Schickt uns einfach eine Nachricht mit eurem Löschungswunsch – wir kümmern uns prompt darum und entfernen eure Daten schneller als Pony Napoleon einen ungesicherten Futtersack leert. Versprochen!',
  },
  {
    q: 'Kann ich Gutscheine für eure Angebote bekommen?',
    a: 'Aber natürlich! Gutscheine sind super Geschenke – viel besser als der dritte Schlafanzug oder das fünfte Spielzeug, das nach zwei Tagen in der Ecke liegt. Wir stellen schöne Wert- oder Erlebnisgutscheine aus – ob für eine Reitstunde, einen ganzen Kurs oder einen bestimmten Geldbetrag. Perfekt für Geburtstage, Weihnachten oder als Überraschung zwischendurch. Die Freude ist garantiert größer als bei Socken!',
  },
  {
    q: 'Wie lange dauert eine Reittherapie-Einheit?',
    a: 'Eine Einheit dauert 45 Minuten – davon sind etwa 30 Minuten aktive Zeit mit dem Pony. Die restliche Zeit nutzen wir für Vor- und Nachbereitung. Je nach individuellem Bedarf können wir auch längere Einheiten vereinbaren. Die Erfahrung zeigt: Mehr als 30 Minuten am Stück auf dem Pony wird für die meisten Kinder anstrengend – Reiten aktiviert nämlich viel mehr Muskeln, als man denkt! Glaubt uns, auch Erwachsene bekommen nach einer Reiteinheit Muskelkater an Stellen, von denen sie nicht mal wussten, dass dort Muskeln sind.',
  },
  {
    q: "Gibt's eine Möglichkeit zum Schnuppern, bevor wir uns festlegen?",
    a: 'Klar! Wir bieten regelmäßig Schnupperstunden oder Schnuppertage an. So könnt ihr und euer Kind erstmal austesten, ob die Chemie mit unseren Vierbeinern und uns stimmt. Es ist uns wichtig, dass sich alle wohlfühlen – inklusive unserer Ponys. Die haben nämlich auch mal einen schlechten Tag und keine Lust auf Fremde (genau wie wir Menschen manchmal), und das respektieren wir.',
  },
  {
    q: 'Bietet ihr Praktikums- oder FSJ-Plätze an?',
    a: 'Ja! Für alle, die Stallluft statt Büroduft schnuppern wollen: Wir vergeben begrenzt Praktikumsplätze und FSJ-Stellen. Allerdings solltet ihr wissen, dass der Job nicht nur aus Ponyschmusen besteht – Stallarbeit bedeutet auch Mistschaufeln, Fegen, und das bei jedem Wetter. Aber dafür bekommt ihr echte Einblicke in pferdegestützte Arbeit und jede Menge Ponyliebe zurück. Bewerbt euch mit einem kurzen Motivationsschreiben und erzählt uns, warum ihr Ponyfans seid.',
  },
  {
    q: 'Wie stellt ihr die Sicherheit sicher?',
    a: 'Sicherheit steht bei uns an erster Stelle! Unsere Ponys sind gut ausgebildet und Kinderprofis. Wer bockt oder beißt, kommt nicht in unser Team (gilt für Ponys UND Menschen!). Die Kinder tragen immer Helme, wir passen die Gruppengröße an, und es ist immer eine fachkundige Person dabei. Wir überlegen vor jeder Aktivität: Ist das sicher? Kann etwas passieren? Und trotzdem: Pferde sind Lebewesen und keine Maschinen – deshalb bleiben wir immer aufmerksam. Das Gute ist: Unsere Shettys sind so nah am Boden, dass selbst ein Sturz meist glimpflich ausgeht!',
  },
  {
    q: 'Kann ich mir den Ponyhof vorher mal anschauen?',
    a: 'Unbedingt! Wir zeigen euch gerne unseren kleinen Ponyhof – nach Terminabsprache natürlich, damit wir Zeit für euch haben und nicht gerade mitten im Mistausmisten stecken. Die Hofführung ist kostenlos und unverbindlich. Ihr lernt die Ponys kennen, seht die Umgebung und könnt all eure Fragen loswerden. Übrigens: Die Ponys freuen sich immer über Besucher, besonders wenn diese Möhrchen mitbringen (aber bitte vorher fragen, bevor ihr füttert!).',
  },
  {
    q: 'Wie kann ich bezahlen?',
    a: "Wir sind flexibel: Bar, EC-Karte oder Überweisung – alles kein Problem. Bei Kursen und größeren Events bitten wir um Vorauskasse per Überweisung, damit wir planen können. Eine ordentliche Rechnung gibt's natürlich dazu. Wir akzeptieren leider keine Bezahlung in Pferdeäpfeln, obwohl die bei uns reichlich vorhanden sind... 😉",
  },
  {
    q: "Gibt's Parkplätze bei euch?",
    a: 'Ja, direkt vor dem Hof gibt\'s genug kostenfreie Parkplätze. Ihr erkennt sie an dem Schild "Hier parken nur Pferdenarren" (Spaß beiseite, folgt einfach der Beschilderung). Bitte nicht auf dem Reitplatz oder vor den Boxen parken – da könnten die Ponys denken, ihr seid ein neues, fahrbarees Futterlager.',
  },
  {
    q: 'Was passiert, wenn mein Kind krank wird?',
    a: 'Das Leben passiert, und Erkältungen kennen keine Terminpläne! Bitte gebt uns einfach so früh wie möglich Bescheid. Wir versuchen immer, einen Ersatztermin zu finden oder erstatten anteilig die Kosten laut unseren Bedingungen. Wichtig: Bitte schickt keine kranken Kinder zu uns – auch wenn sie unbedingt kommen wollen. Das ist weder für euer Kind noch für die anderen Teilnehmer schön. Die Ponys laufen nicht weg und freuen sich auf den Besuch, wenn alle wieder gesund sind!',
  },
  {
    q: 'Müssen Kinder bei euch im Stall mithelfen?',
    a: 'Ja, und das ist ein wichtiger Teil des Erlebnisses! Wir glauben fest daran, dass zum Reiten auch das Rundumpaket gehört: Putzen, Hufe auskratzen, ein bisschen Stallarbeit. Keine Sorge, alles altersgerecht und mit Anleitung! Die meisten Kinder LIEBEN es, "richtige" Aufgaben zu bekommen und zu sehen, was zum Pferdeleben dazugehört. Außerdem lernen sie dabei Verantwortung und dass ein Pony kein Spielzeug ist, das man einfach in die Ecke stellt, wenn man fertig ist.',
  },
  {
    q: 'Haben eure Ponys eigentlich auch mal frei?',
    a: 'Aber hallo! Unsere Vierbeiner haben täglich Weidegang (sofern das Wetter mitspielt) und regelmäßig komplett freie Tage. Jedes Pony arbeitet maximal 2-3 Stunden am Tag und hat zwischen den Einheiten Pausen. Ganz wichtig: Wir achten sehr genau auf die Stimmung unserer Tiere. Wenn ein Pony mal keinen Bock hat (ja, das kommt vor!), respektieren wir das und zwingen es zu nichts. Ein genervtes Pony ist weder fürs Kind noch für uns angenehm. Übrigens: Pucki macht jeden Freitagnachmittag "Mähnepflege" und ist dann für nichts zu haben – Schönheit braucht eben Zeit!',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [],
};

baseFaqs.forEach(({ q, a }) => {
  const plainTextAnswer = a
    .replace(/<NuxtLink.*?>(.*?)<\/NuxtLink>/g, '$1')
    .replace(/<[^>]*>/g, '');
  faqSchema.mainEntity.push({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: plainTextAnswer },
  });
});

// SEO Meta-Daten mit useMySeoMeta
useMySeoMeta({
  title: `FAQ Ponyreiten ${businessAddress.city} - Häufige Fragen`,
  description: `Antworten auf häufig gestellte Fragen zu Ponyreiten, Reittherapie, Kindergeburtstagen und unserem Ponyhof in ${businessAddress.city}.`,
  keywords: [
    `FAQ Ponyreiten ${businessAddress.city}`,
    `Fragen Kindergeburtstag Ponyhof ${businessAddress.city}`,
    `Infos Ferienkurs Pferde ${businessAddress.city}`,
    `Ponyhof ${businessAddress.city} Fragen`,
    `Reiten Kinder ${businessAddress.city} FAQ`,
    `Sarah Handte ${businessAddress.city}`,
  ],
  ogImage: `${siteUrl}/images/og-faq-ponyreiten-renningen.webp`, // Spezifisches OG Bild für FAQ erstellen!
  ogImageAlt: `FAQ Seite zum Ponyreiten und Pferdeangeboten in ${businessAddress.city}`,
  ldJson: faqSchema // Das FAQPage Schema direkt übergeben
});

/*--------------------------------------------------
| FAQ‑Einträge für das Frontend
--------------------------------------------------*/
const faqItems = ref(
  baseFaqs.map((item) => ({
    question: item.q,
    answer: item.a,
    open: false,
  }))
);

const toggleItem = (index) => {
  faqItems.value[index].open = !faqItems.value[index].open;
};

const renderLinks = (htmlString) => {
  return htmlString.replace(
    /<NuxtLink to="([^"]*)" class="([^"]*)">(.*?)<\/NuxtLink>/g,
    '<a href="$1" class="$2">$3</a>'
  );
};

// Übergangs-Hooks (bleiben unverändert)
const enter = (el, done) => { /* ... */ };
const afterEnter = (el) => { /* ... */ };
const leave = (el, done) => { /* ... */ };
</script>