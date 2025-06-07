// /data/horses.js

// Keine expliziten Interface-Definitionen in reinem JavaScript nötig,
// aber es ist gut, die Struktur im Kommentar festzuhalten oder JSDoc zu verwenden.

/**
 * @typedef {object} GalleryImage
 * @property {string} src - Relativer Pfad zum Bild
 * @property {string} alt - Alternativtext
 * @property {number} width - Bildbreite
 * @property {number} height - Bildhöhe
 * @property {string} [caption] - Optionale Bildunterschrift
 */

/**
 * @typedef {object} Horse
 * @property {string} slug
 * @property {string} name
 * @property {string} image - Hauptbild für die Übersichtskarte
 * @property {number} [imageWidth]
 * @property {number} [imageHeight]
 * @property {string} description
 * @property {string} [lightboxCaption] - Caption für das Hauptbild in der Lightbox
 * @property {GalleryImage[]} [gallery] - Array von Galeriebildern
 */

/** @type {Horse[]} */
export const horses = [
  {
    slug: 'simon',
    name: 'Pferd Simon',
    image: '/images/Pferde/Simon.webp',
    imageWidth: 1280,
    imageHeight: 853,
    description:
      'Simon ist unser großer Kuschelbär! Er liebt es, wenn du sein weiches Fell striegelst und ihm Geschichten erzählst. Nur beim Springen ist er ein kleiner Angsthase.',
    lightboxCaption:
      'Simon – Ein sanfter Riese, der ausgiebige Putz- und Schmuseeinheiten genießt.',
    gallery: [
      {
        src: '/images/Pferde/Simon.webp',
        alt: 'Portrait von Pferd Simon',
        width: 1280,
        height: 853,
        caption: 'Simons freundlicher Blick',
      },
      {
        src: '/images/pferde/Simon_fancy.webp',
        alt: 'Pferd Simon auf der Weide',
        width: 1200,
        height: 800,
        caption: 'Entspannt auf der Koppel',
      },
    ],
  },
  {
    slug: 'balu',
    name: 'Pferd Balu',
    image: '/images/Pferde/Balu.webp',
    imageWidth: 1920,
    imageHeight: 1280,
    description:
      'Balu ist Simons bester Freund und ein echter Fels in der Brandung. Nach einem Ausritt freut er sich riesig über eine erfrischende Dusche und saubere Hufe.',
    lightboxCaption:
      'Balu – Unser zuverlässiger Freund, der sich nach dem Reiten gerne verwöhnen lässt.',
    gallery: [
      {
        src: '/images/Pferde/Balu.webp',
        alt: 'Pferd Balu in Bewegung',
        width: 1920,
        height: 1280,
        caption: 'Balu in Aktion',
      },
    ],
  },
  {
    slug: 'napoleon',
    name: 'Shetty Napoleon',
    image: '/images/Pferde/Napoleon.webp',
    imageWidth: 1536,
    imageHeight: 2048,
    description:
      'Unser Napoleon ist ein super schlauer Frechdachs! Er zeigt dir gerne, wie man Türen öffnet und liebt es, wenn seine wilde Mähne gekämmt wird.',
    lightboxCaption: 'Napoleon – Der pfiffige Ausbrecherkönig!',
    gallery: [
      {
        src: '/images/ponyreiten/Napoleon-mit-Sattel.webp',
        alt: 'Shetty Napoleon gesattelt',
        width: 400,
        height: 400,
        caption: 'Bereit für kleine Reiter',
      },
      {
        src: '/images/Pferde/Napoleon.webp',
        alt: 'Shetty Napoleon schaut frech',
        width: 1536,
        height: 2048,
        caption: 'Ein echter Schelm!',
      },
      {
        src: '/images/Napoleongrafik-im-Schnee_copy.webp',
        alt: 'Napoleon im Schnee',
        width: 800,
        height: 600,
        caption: 'Winterlicher Napoleon',
      },
      {
        src: '/images/galerie/Napoleon_verpackt.webp',
        alt: 'Napoleon als Geschenkpaket verkleidet',
        width: 800,
        height: 600,
        caption: 'Napoleon als süße Überraschung',
      },
      {
        src: '/images/galerie/Napoleon_Kranz.webp',
        alt: 'Napoleon mit festlichem Kranz',
        width: 900,
        height: 700,
        caption: 'Festlich geschmückter Napoleon',
      },
    ],
  },
  {
    slug: 'coco',
    name: 'Shetty Coco',
    image: '/images/Pferde/Coco.webp',
    imageWidth: 1200,
    imageHeight: 900,
    description:
      'Coco ist die Ruhe selbst. Sie schnarcht manchmal leise beim Putzen und genießt jede Streicheleinheit. Ihre Mähne zu flechten macht besonders viel Spaß!',
    lightboxCaption: 'Coco – Unsere entspannte Shetty-Dame.',
    gallery: [
      {
        src: '/images/Pferde/Coco.webp',
        alt: 'Shetty Coco entspannt',
        width: 1200,
        height: 900,
        caption: 'Coco genießt die Ruhe',
      },
      {
        src: '/images/Pferde/Coco-angemalt-1.webp',
        alt: 'Shetty Coco bunt bemalt',
        width: 1200,
        height: 800,
        caption: 'Ein Kunstwerk auf vier Hufen',
      },
    ],
  },
  {
    slug: 'chica',
    name: 'Shetty Chica',
    image: '/images/Pferde/Chica.webp',
    imageWidth: 1000,
    imageHeight: 750,
    description:
      'Chica ist ein richtiges Energiebündel und lernt super gerne neue Tricks. Beim Striegeln kitzelt sie manchmal ein bisschen, aber sie ist ganz lieb dabei.',
    lightboxCaption: 'Chica – Unsere neugierige Spielkameradin.',
    gallery: [
      {
        src: '/images/Pferde/Chica.webp',
        alt: 'Shetty Chica',
        width: 1000,
        height: 750,
        caption: 'Chica, immer neugierig',
      },
      {
        src: '/images/Chica-angemalt.webp',
        alt: 'Shetty Chica bemalt',
        width: 400,
        height: 400,
        caption: 'Chica als Leinwand',
      },
    ],
  },
  {
    slug: 'pucki',
    name: 'Shetty Pucki',
    image: '/images/Pferde/Pucki.webp',
    imageWidth: 1600,
    imageHeight: 1200,
    description:
      'Pucki ist unser flauschigster Freund und ein echter Schlaumeier. Er trägt gerne seine Futterschüssel herum und liebt es, wenn man ihm den dicken Winterpelz ausbürstet.',
    lightboxCaption: 'Pucki – Der schlaue Knuddelbär.',
    gallery: [
      {
        src: '/images/Pferde/Pucki.webp',
        alt: 'Shetty Pucki',
        width: 1600,
        height: 1200,
        caption: 'Pucki in seiner ganzen Pracht',
      },
      {
        src: '/images/galerie/Pucki_Sulky.webp',
        alt: 'Pucki vor dem Sulky gespannt',
        width: 1200,
        height: 800,
        caption: 'Pucki beim Fahrsport',
      },
    ],
  },
  {
    slug: 'fiona',
    name: 'Pferd Fiona',
    image: '/images/Pferde/Fiona.webp',
    imageWidth: 1700,
    imageHeight: 1133,
    description:
      'Fiona ist unsere sanfte Tinker-Stute. Sie hat wunderschöne lange Haare an den Beinen, die besondere Pflege brauchen. Sie ist dabei immer ganz brav und geduldig.',
    lightboxCaption: 'Fiona – Unsere geduldige Tinker-Schönheit.',
    gallery: [
      {
        src: '/images/Pferde/Fiona.webp',
        alt: 'Pferd Fiona',
        width: 1700,
        height: 1133,
        caption: 'Fiona, die elegante Tinker-Stute',
      },
      {
        src: '/images/Pferde/Therapie-mit-Ball.webp',
        alt: 'Fiona bei der Therapiearbeit',
        width: 800,
        height: 1200,
        caption: 'Fiona als Therapiepferd',
      },
    ],
  },
  {
    slug: 'kylo',
    name: 'Pferd Kylo',
    image: '/images/Pferde/Kylo.webp',
    imageWidth: 1200,
    imageHeight: 800,
    description:
      'Kylo ist unser schlauer Trickmeister! Er kann Türen öffnen, seine Bandagen selbst entfernen und hat die süße Angewohnheit, alles abzulecken was ihm in den Weg kommt.',
    lightboxCaption: 'Kylo – Der geniale Escape-Artist mit der neugierigen Zunge.',
    gallery: [
      {
        src: '/images/Pferde/Kylo.webp',
        alt: 'Pferd Kylo',
        width: 1200,
        height: 800,
        caption: 'Kylo, der schlaue Trickmeister',
      },
      {
        src: '/images/galerie/Kylo_Weihnachten.webp',
        alt: 'Kylo in festlicher Weihnachtsstimmung',
        width: 1200,
        height: 800,
        caption: 'Kylo feiert Weihnachten',
      },
    ],
  },
  {
    slug: 'sleepy',
    name: 'Shetty Sleepy',
    image: '/images/Pferde/Sleepy.webp',
    imageWidth: 1400,
    imageHeight: 1050,
    description:
      'Sleepy macht seinem Namen manchmal alle Ehre und döst gerne in der Sonne. Aber für eine ausgiebige Bürstenmassage oder ein Leckerli ist er immer zu haben!',
    lightboxCaption: 'Sleepy – Unser entspannter Genießer.',
    gallery: [
      {
        src: '/images/Pferde/Sleepy.webp',
        alt: 'Shetty Sleepy döst',
        width: 1400,
        height: 1050,
        caption: 'Sleepy macht eine Pause',
      },
      {
        src: '/images/galerie/Sleepy_Haareschneiden.webp',
        alt: 'Sleepy beim Friseurtermin',
        width: 1000,
        height: 800,
        caption: 'Sleepy bekommt einen neuen Look',
      },
    ],
  },
]
