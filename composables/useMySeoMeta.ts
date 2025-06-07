// ~/composables/useMySeoMeta.ts
import { useHead, useRoute, useRuntimeConfig } from '#app';
import dayjs from 'dayjs';

// Interface für die Konfigurationsdaten
interface MySiteConfig {
  siteUrl: string;
  siteName: string; // Sicherstellen, dass siteName immer da ist
  businessAddress: {
    street: string;
    city: string;
    zip: string;
    country: string;
    latitude?: string;
    longitude?: string;
    telephone?: string;
    email?: string;
    responsiblePerson?: string; // Für Impressum etc.
  };
  openingHours?: string | string[] | OpeningHoursSpecification[];
  // andere public configs
}

// Interface für strukturierte Öffnungszeiten (optional, wenn du es so detailliert brauchst)
interface OpeningHoursSpecification {
  '@type': 'OpeningHoursSpecification';
  dayOfWeek: string | string[];
  opens: string;
  closes: string;
}

interface EventDetails {
  name: string;
  startDate: string;
  endDate?: string;
  description?: string;
  image?: string | string[];
  locationName?: string;
  locationStreet?: string;
  locationCity?: string;
  locationZip?: string;
  locationCountry?: string;
  locationLatitude?: string;
  locationLongitude?: string;
  offers?: {
    price: string;
    priceCurrency: string;
    availability?: string;
    validFrom?: string;
    url?: string;
  };
  organizerName?: string;
  organizerUrl?: string;
  performerName?: string | string[];
  eventStatus?: string;
  eventAttendanceMode?: string;
  typicalAgeRange?: string;
}

interface SeoMetaInput {
  title?: string;
  description?: string;
  keywords?: string | string[];
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article' | 'profile' | 'product' | 'event' | 'localbusiness';
  articleDetails?: {
    publishedTime?: string;
    modifiedTime?: string;
    authorName?: string;
    section?: string;
    tags?: string[];
  };
  eventDetails?: EventDetails;
  meta?: Array<{ name?: string; property?: string; content: string; hid?: string }>; // Für zusätzliche Meta-Tags
  ldJson?: Record<string, any> | Record<string, any>[];
  localBusinessDetails?: { // Für spezifische LocalBusiness/SportsActivityLocation Details
    name?: string;
    type?: 'SportsActivityLocation' | 'EquestrianBusiness' | 'LocalBusiness' | string; // spezifischere Typen
    description?: string;
    telephone?: string;
    openingHours?: string | string[] | OpeningHoursSpecification[];
    paymentAccepted?: string;
    priceRange?: string;
    image?: string;
    // weitere Felder
  };
}

export const useMySeoMeta = (options: SeoMetaInput = {}) => {
  const route = useRoute();
  const nuxtConfig = useRuntimeConfig();
  const siteConfig = nuxtConfig.public as MySiteConfig;

  const siteUrl = siteConfig.siteUrl;
  const businessAddress = siteConfig.businessAddress;
  const businessAddressCity = businessAddress.city;
  const siteName = siteConfig.siteName; // Direkt aus Config

  const defaultTitle = `Ponyreiten ${businessAddressCity} & Pferde-Erlebnisse | ${siteName}`;
  const defaultDescription = `Entdecken Sie Ponyreiten, Reittherapie, Kindergeburtstage und mehr auf unserem Ponyhof in ${businessAddressCity}. ${siteName} – unvergessliche Momente mit Pferden.`;
  const defaultKeywords = [
    `Ponyreiten ${businessAddressCity}`,
    `Ponyhof ${businessAddressCity}`,
    `Reiten Kinder ${businessAddressCity}`,
    `Reittherapie ${businessAddressCity}`,
    `Kindergeburtstag Pferde ${businessAddressCity}`,
    businessAddress.responsiblePerson || 'Sarah Handte',
    siteName,
  ];
  const defaultOgImage = `${siteUrl}/images/og-default.webp`;
  const defaultOgImageAlt = `${siteName} - Erlebnisse mit Ponys in ${businessAddressCity}`;

  const title = options.title || defaultTitle;
  const description = options.description || defaultDescription;

  let keywordsString: string;
  if (options.keywords) {
    keywordsString = Array.isArray(options.keywords) ? options.keywords.join(', ') : options.keywords;
  } else {
    keywordsString = defaultKeywords.join(', ');
  }

  const ogImage = options.ogImage || defaultOgImage;
  const ogImageAlt = options.ogImageAlt || defaultOgImageAlt;
  const ogTypeOption = options.ogType || (options.localBusinessDetails ? 'website' : (options.eventDetails ? 'event' : (route.path === '/' ? 'website' : 'article')));
  // Für og:type 'localbusiness' ist nicht Standard, 'website' oder 'profile' für Unternehmen verwenden.
  // 'article' oder 'event' wenn passend.
  const finalOgType = (ogTypeOption === 'localbusiness' && route.path === '/') ? 'website' : ogTypeOption;


  const canonicalUrl = `${siteUrl}${route.fullPath.endsWith('/') && route.fullPath.length > 1 ? route.fullPath.slice(0, -1) : route.fullPath}`;

  const metaTags: { name?: string; property?: string; content: string; key?: string }[] = [
    { name: 'description', content: description, key: 'description' },
    { name: 'keywords', content: keywordsString, key: 'keywords' },
    { property: 'og:title', content: title, key: 'og:title' },
    { property: 'og:description', content: description, key: 'og:description' },
    { property: 'og:url', content: canonicalUrl, key: 'og:url' },
    { property: 'og:image', content: ogImage, key: 'og:image' },
    { property: 'og:image:width', content: '1200', key: 'og:image:width' },
    { property: 'og:image:height', content: '630', key: 'og:image:height' },
    { property: 'og:image:alt', content: ogImageAlt, key: 'og:image:alt' },
    { property: 'og:type', content: finalOgType, key: 'og:type' },
    { property: 'og:site_name', content: siteName, key: 'og:site_name' },
    { property: 'og:locale', content: 'de_DE', key: 'og:locale' },
    { name: 'twitter:card', content: 'summary_large_image', key: 'twitter:card' },
    { name: 'twitter:title', content: title, key: 'twitter:title' },
    { name: 'twitter:description', content: description, key: 'twitter:description' },
    { name: 'twitter:image', content: ogImage, key: 'twitter:image' },
    { name: 'twitter:image:alt', content: ogImageAlt, key: 'twitter:image:alt' },
  ];

  if (options.meta) {
    metaTags.push(...options.meta);
  }

  if (finalOgType === 'article' && options.articleDetails) {
    if (options.articleDetails.publishedTime) metaTags.push({ property: 'article:published_time', content: options.articleDetails.publishedTime, key: 'article:published_time' });
    if (options.articleDetails.modifiedTime) metaTags.push({ property: 'article:modified_time', content: options.articleDetails.modifiedTime, key: 'article:modified_time' });
    if (options.articleDetails.authorName) metaTags.push({ property: 'article:author', content: options.articleDetails.authorName, key: 'article:author' });
    if (options.articleDetails.section) metaTags.push({ property: 'article:section', content: options.articleDetails.section, key: 'article:section' });
    if (options.articleDetails.tags?.length) {
      options.articleDetails.tags.forEach((tag, index) => metaTags.push({ property: 'article:tag', content: tag, key: `article:tag:${index}` }));
    }
  }

  const scripts: { type: string; children?: string; hid?: string; [key: string]: any }[] = [];
  let ldJsonProcessed = false;

  // Benutzerdefiniertes LD+JSON hat Vorrang
  if (options.ldJson) {
    const ldJsons = Array.isArray(options.ldJson) ? options.ldJson : [options.ldJson];
    ldJsons.forEach((json, index) => {
      scripts.push({
        type: 'application/ld+json',
        children: JSON.stringify(json),
        hid: `ld-json-custom-${index}`
      });
    });
    ldJsonProcessed = true;
  }


  // LocalBusiness / SportsActivityLocation Schema
  if (!ldJsonProcessed && (options.localBusinessDetails || (route.path === '/' && !options.eventDetails && !options.articleDetails))) {
    const lbDetails = options.localBusinessDetails || {};
    const localBusinessSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': lbDetails.type || 'SportsActivityLocation',
      name: lbDetails.name || siteName,
      description: lbDetails.description || defaultDescription, // Nutze die Seitenbeschreibung oder Default
      url: siteUrl,
      telephone: lbDetails.telephone || businessAddress.telephone,
      email: businessAddress.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: businessAddress.street,
        addressLocality: businessAddress.city,
        postalCode: businessAddress.zip,
        addressRegion: 'Baden-Württemberg', // Optional
        addressCountry: businessAddress.country,
      },
      image: lbDetails.image || defaultOgImage,
      logo: `${siteUrl}/images/logos/favicon.svg`, // Pfad anpassen
    };
    if (businessAddress.latitude && businessAddress.longitude) {
      localBusinessSchema.geo = {
        '@type': 'GeoCoordinates',
        latitude: businessAddress.latitude,
        longitude: businessAddress.longitude,
      };
    }

    const ohInput = lbDetails.openingHours || siteConfig.openingHours;
    if (ohInput) {
      if (Array.isArray(ohInput) && ohInput.every(oh => typeof oh === 'object' && oh !== null && oh['@type'] === 'OpeningHoursSpecification')) {
        localBusinessSchema.openingHoursSpecification = ohInput as OpeningHoursSpecification[];
      } else if (Array.isArray(ohInput) && ohInput.every(oh => typeof oh === 'string')) {
        localBusinessSchema.openingHours = ohInput as string[];
      } else if (typeof ohInput === 'string') {
        localBusinessSchema.openingHours = [ohInput];
      }
    }

    if (lbDetails.paymentAccepted) localBusinessSchema.paymentAccepted = lbDetails.paymentAccepted;
    if (lbDetails.priceRange) localBusinessSchema.priceRange = lbDetails.priceRange;

    scripts.push({
      type: 'application/ld+json',
      children: JSON.stringify(localBusinessSchema),
      hid: 'ld-json-localbusiness'
    });
    ldJsonProcessed = true;
  }

  // Article Schema
  if (!ldJsonProcessed && finalOgType === 'article' && options.articleDetails) {
    scripts.push({
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        headline: title.replace(` | ${siteName}`, ''),
        image: [ogImage],
        datePublished: options.articleDetails?.publishedTime,
        dateModified: options.articleDetails?.modifiedTime || options.articleDetails?.publishedTime,
        author: { '@type': 'Person', name: options.articleDetails?.authorName || businessAddress.responsiblePerson || 'Sarah Handte' },
        publisher: {
          '@type': 'Organization',
          name: siteName,
          logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logos/favicon.svg` }
        },
        description: description,
      }),
      hid: 'ld-json-article'
    });
    ldJsonProcessed = true;
  }

  // Event Schema
  if (!ldJsonProcessed && options.eventDetails) {
    const ed = options.eventDetails;
    const eventJsonLd: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: ed.name || title.replace(` | ${siteName}`, ''),
      startDate: ed.startDate,
      description: ed.description || description,
      image: ed.image || [ogImage],
      eventAttendanceMode: ed.eventAttendanceMode || 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: ed.eventStatus || 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: ed.locationName || siteName,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ed.locationStreet || businessAddress.street,
          addressLocality: ed.locationCity || businessAddress.city,
          postalCode: ed.locationZip || businessAddress.zip,
          addressCountry: ed.locationCountry || businessAddress.country,
        },
      },
    };
    if ((ed.locationLatitude || businessAddress.latitude) && (ed.locationLongitude || businessAddress.longitude)) {
      eventJsonLd.location.geo = {
        '@type': 'GeoCoordinates',
        latitude: ed.locationLatitude || businessAddress.latitude,
        longitude: ed.locationLongitude || businessAddress.longitude,
      };
    }
    if (ed.endDate) eventJsonLd.endDate = ed.endDate;
    if (ed.offers) {
      eventJsonLd.offers = {
        '@type': 'Offer',
        price: ed.offers.price,
        priceCurrency: ed.offers.priceCurrency,
        url: ed.offers.url || canonicalUrl,
        availability: ed.offers.availability || 'https://schema.org/InStock',
        validFrom: ed.offers.validFrom || dayjs().format('YYYY-MM-DD'),
      };
    }
    if (ed.organizerName) {
      eventJsonLd.organizer = {
        '@type': 'Organization',
        name: ed.organizerName,
        url: ed.organizerUrl || siteUrl,
      };
    }
    if (ed.performerName) {
      eventJsonLd.performer = Array.isArray(ed.performerName)
        ? ed.performerName.map(name => ({ '@type': 'PerformingGroup', name }))
        : { '@type': 'PerformingGroup', name: ed.performerName };
    }
    if (ed.typicalAgeRange) eventJsonLd.typicalAgeRange = ed.typicalAgeRange;

    scripts.push({
      type: 'application/ld+json',
      children: JSON.stringify(eventJsonLd),
      hid: 'ld-json-event'
    });
    ldJsonProcessed = true;
  }

  // Fallback WebSite Schema (wird normalerweise durch das globale in nuxt.config.ts abgedeckt)
  // Wird hier nur generiert, wenn es eine "website" ist und keine anderen spezifischen Schemata angewendet wurden.
  if (!ldJsonProcessed && finalOgType === 'website' && route.path !== '/') { // Nur wenn nicht Startseite (da dort LocalBusiness greift)
    scripts.push({
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: siteUrl,
        name: siteName,
        description: defaultDescription,
        publisher: {
          '@type': 'Organization',
          name: siteName,
          logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logos/logo.svg` }
        }
      }),
      hid: 'ld-json-website-fallback'
    });
  }

  const headData: any = {
    title,
    htmlAttrs: { lang: 'de-DE' },
    meta: metaTags,
    link: [{ rel: 'canonical', href: canonicalUrl, key: 'canonical' }],
  };

  if (scripts.length > 0) {
    headData.script = scripts;
  }

  useHead(headData, {
    // Nuxt 3 verwendet `key` in den Meta/Link-Objekten für Deduplizierung,
    // `hid` ist eher ein Nuxt 2 Relikt, aber schadet hier nicht als Fallback.
    // tagPriority: 'critical', // Optional für wichtige Tags
  });
};