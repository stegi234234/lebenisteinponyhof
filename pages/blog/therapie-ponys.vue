<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">
        Unsere Angebote für unvergessliche Pony-Erlebnisse
      </h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Vom therapeutischen Reiten bis zum fröhlichen Kindergeburtstag – Entdecken Sie, wie Pferde
        Kinderherzen höherschlagen lassen und Entwicklung fördern.
      </p>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <NuxtLink to="/">Startseite</NuxtLink>
        </li>
        <li aria-current="page">Angebote</li>
      </ol>
    </nav>
    
    <!-- Aktuelle Verfügbarkeit Banner -->
    <div class="container mx-auto px-4 my-6">
      <div class="availability-banner p-4 md:p-6 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800/30 shadow-sm">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex-1">
            <div class="flex items-center mb-3">
              <div class="w-3 h-3 rounded-full bg-green-500 dark:bg-green-400 mr-2 animate-pulse"></div>
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Aktuelle Verfügbarkeit</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div class="availability-item flex items-center">
                <i class="fas fa-check text-green-500 dark:text-green-400 mr-2"></i>
                <span class="text-gray-700 dark:text-gray-300">Kindergeburtstage: ab 11. Juni</span>
              </div>
              <div class="availability-item flex items-center">
                <i class="fas fa-check text-green-500 dark:text-green-400 mr-2"></i>
                <span class="text-gray-700 dark:text-gray-300">Ferienkurse Sommer: noch 3 Plätze</span>
              </div>
              <div class="availability-item flex items-center">
                <i class="fas fa-check text-green-500 dark:text-green-400 mr-2"></i>
                <span class="text-gray-700 dark:text-gray-300">Ponyreiten: nächste freie Termine ab 15. Mai</span>
              </div>
              <div class="availability-item flex items-center">
                <i class="fas fa-check text-green-500 dark:text-green-400 mr-2"></i>
                <span class="text-gray-700 dark:text-gray-300">Schnupperstunden: 5 Plätze frei</span>
              </div>
            </div>
          </div>
          
          <div class="flex-shrink-0 mt-4 md:mt-0">
            <a href="#preise" class="inline-flex items-center justify-center px-4 py-2 bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium">
              <i class="fas fa-calendar-check mr-2"></i>
              Aktuelle Preise sehen
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">



      
    <!-- Abschnitt Reittherapie -->
<section
  id="reittherapie"
  class="offer-section flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-gradient-to-br from-white to-amber-50 dark:from-gray-800 dark:to-amber-900/20 p-6 md:p-8 rounded-xl shadow-lg border border-amber-100 dark:border-amber-800/30"
>
  <div class="w-full md:w-1/3 aspect-[3/4] rounded-lg overflow-hidden shadow-sm bg-black">
    <NuxtImg
      src="/images/Pferde/Therapie-mit-Ball.webp"
      alt="Kind interagiert behutsam mit einem Pony während der Reittherapie"
      class="w-full h-full object-contain object-top"
      format="webp"
      quality="80"
      loading="lazy"
      width="800"
      height="1200"
      placeholder
      densities="1x 2x"
      sizes="(max-width: 767px) 100vw, 33vw"
    />
  </div>
  <div class="flex-1">
    <div class="flex justify-between items-start mb-3">
      <h2 class="text-2xl font-semibold">
        <i class="fas fa-heartbeat text-primary-color mr-2"></i>Reittherapie & Heilpädagogisches
        Reiten
      </h2>
      
      <span class="text-xs font-medium px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full">
        Ab 2026
      </span>
    </div>
    
    <p class="text-gray-700 dark:text-gray-300 mb-4">
      <span class="font-semibold">Wir stecken mitten in den Vorbereitungen!</span><br />
      Sarah macht derzeit ihre Ausbildung zur Reittherapeutin – ab 2026 starten wir mit
      liebevoll begleiteten, pferdegestützten Angeboten für Kinder und Jugendliche.
    </p>
    
    <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800/30 mb-4">
      <div class="flex items-center">
        <div class="mr-3 text-yellow-600 dark:text-yellow-400">
          <i class="fas fa-info-circle text-xl"></i>
        </div>
        <p class="text-sm text-yellow-800 dark:text-yellow-300">
          Möchten Sie über den Start unserer Reittherapie informiert werden? Folgen Sie uns auf Instagram oder kontaktieren Sie uns direkt!
        </p>
      </div>
    </div>
    
    <div class="flex flex-wrap gap-3">
      <AppButton :to="{ path: '/blog/wirkung-reittherapie' }" size="normal">
        Mehr über Reittherapie <i class="fas fa-arrow-right text-xs ml-1.5"></i>
      </AppButton>
      
      <a href="https://www.instagram.com/lebenisteinponyhof" target="_blank" class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm font-medium">
        <i class="fab fa-instagram mr-2"></i> Folgen & Updates erhalten
      </a>
    </div>
  </div>
</section>
      
      <!-- Abschnitt Shetty-Wanderung -->
      <section
        id="shetty-wanderung"
        class="offer-section flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <div class="w-full md:w-1/3 aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
          <NuxtImg
            src="/images/shetty-wanderung.webp"
            alt="Fröhliche Kindergruppe bei einer Shetty-Wanderung"
            class="w-full h-full object-cover object-center"
            format="webp"
            quality="80"
            loading="lazy"
            width="1200"
            height="900" 
            placeholder
            densities="1x 2x"
            sizes="(max-width: 767px) 100vw, 33vw"
          />
        </div>
        <div class="flex-1">
          <div class="flex justify-between items-start mb-3">
            <h2 class="text-2xl font-semibold">
              <i class="fas fa-hiking text-primary-color mr-2"></i>Shetty-Wanderung für Kinder
              und Eltern
            </h2>
            
            <span class="text-xs font-medium px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
              ab 35€ • Verfügbar
            </span>
          </div>
          
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Erleben Sie die Natur gemeinsam mit unseren freundlichen Shetlandponys! Bei dieser geführten Wanderung begleitet jeder Teilnehmer ein eigenes Pony durch die malerische Umgebung von Renningen.
          </p>
          
          <div class="flex flex-wrap gap-3">
            <AppButton :to="{ path: '/blog/shetty-wanderung' }" size="normal"> 
              Details zur Shetty-Wanderung <i class="fas fa-arrow-right text-xs ml-1.5"></i>
            </AppButton>
            
            <AppButton 
              :to="{ path: '/contact', query: { subject: 'Anfrage Shetty-Wanderung' } }" 
              variant="outline-primary" 
              size="normal"
            >
              <i class="fas fa-calendar-check text-xs mr-1.5"></i> Termin anfragen
            </AppButton>
          </div>
        </div>
      </section>

      <!-- Abschnitt Zwergen-Wanderung -->
      <section
        id="zwergen-wanderung"
        class="offer-section flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <div class="w-full md:w-1/3 aspect-[3/4] rounded-lg overflow-hidden shadow-sm bg-black">
          <NuxtImg
            src="/images/mini-zwergenbande.webp"
            alt="Kinder bei einer Zwergen-Wanderung mit kleinen Ponys"
            class="w-full h-full object-contain object-top"
            format="webp"
            quality="85"
            loading="lazy"
            width="800"
            height="1150"
            placeholder
            densities="1x 2x"
            sizes="(max-width: 767px) 100vw, 33vw"
          />
        </div>

        <div class="flex-1">
          <div class="flex justify-between items-start mb-3">
            <h2 class="text-2xl font-semibold">
              <i class="fas fa-child text-primary-color mr-2"></i>Zwergen-Wanderung (Mini Zwergen Bande)
            </h2>
            
            <span class="text-xs font-medium px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
              ab 30€ • Verfügbar
            </span>
          </div>
          
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Eine kindgerechte Wanderung speziell für die Kleinsten (3-6 Jahre). Die Kinder führen unsere kleinen Shetlandponys an einer Führleine durch den angrenzenden Wald und lernen spielerisch den Umgang mit den Tieren. Ideal als erster Ponykontakt.
          </p>
          
          <div class="flex flex-wrap gap-3">
            <AppButton :to="{ path: '/blog/zwergen-bande' }" size="normal"> 
              Details zur Zwergen-Wanderung <i class="fas fa-arrow-right text-xs ml-1.5"></i>
            </AppButton>
            
            <AppButton 
              :to="{ path: '/contact', query: { subject: 'Anfrage Zwergen-Wanderung' } }" 
              variant="outline-primary" 
              size="normal"
            >
              <i class="fas fa-calendar-check text-xs mr-1.5"></i> Termin anfragen
            </AppButton>
          </div>
        </div>
      </section>
      <!-- Abschnitt Ferienkurse -->
<section
  id="ferienkurse"
  class="offer-section flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
>
  <div class="w-full md:w-1/3 aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
    <NuxtImg
      src="/images/blog/ferienkurse/Basteln_Hufeisen_copy.webp"
      alt="Bunte Bastelarbeit mit Einhorn und Regenbogen – Ferienkurs auf dem Ponyhof"
      class="w-full h-full object-cover object-center"
      format="webp"
      quality="80"
      loading="lazy"
      width="1200"
      height="900"
      placeholder
      densities="1x 2x"
      sizes="(max-width: 767px) 100vw, 33vw"
    />
  </div>
  <div class="flex-1">
    <div class="flex justify-between items-start mb-3">
      <h2 class="text-2xl font-semibold">
        <i class="fas fa-sun text-primary-color mr-2"></i>Ferienkurse: Natur & Ponys erleben
      </h2>

      <span class="text-xs font-medium px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
        ab 149€ • Noch Plätze frei
      </span>
    </div>

    <p class="text-gray-700 dark:text-gray-300 mb-4">
      Raus aus dem Alltag – rein in den Stall! Unsere <strong>pädagogisch begleiteten Ferienkurse</strong>
      sind voller Spiel, Natur und Ponystunden. Kinder lernen spielerisch Verantwortung, Freundschaft
      mit Tieren und stärken ihr Selbstvertrauen. Bastelspaß inklusive!
    </p>

    <div class="flex flex-wrap gap-3">
      <AppButton :to="{ path: '/blog/ferienkurse' }" size="normal">
        Mehr zum Ferienkurs <i class="fas fa-arrow-right text-xs ml-1.5"></i>
      </AppButton>

      <AppButton 
        :to="{ path: '/contact', query: { subject: 'Anfrage Ferienkurs' } }" 
        variant="outline-primary" 
        size="normal"
      >
        <i class="fas fa-calendar-check text-xs mr-1.5"></i> Jetzt Platz anfragen
      </AppButton>
    </div>
  </div>
</section>


      <!-- NEU: Abschnitt Ponyreiten & Ausritte -->
      <section
        id="ponyreiten"
        class="offer-section flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <div class="w-full md:w-1/3 aspect-[1/1] rounded-lg overflow-hidden shadow-sm">
          <NuxtImg
            src="/images/ponyreiten/Napoleon-mit-Sattel.webp" 
            alt="Shetty Napoleon bei einer geführten Ponyrunde mit Sattel"
            class="w-full h-full object-cover object-center"
            format="webp" 
            quality="80"
            loading="lazy"
            width="400" 
            height="400" 
            placeholder
            densities="1x 2x"
            sizes="(max-width: 767px) 100vw, 33vw"
          />
        </div>
        <div class="flex-1">
          <div class="flex justify-between items-start mb-3">
            <h2 class="text-2xl font-semibold">
              <i class="fas fa-horse-head text-primary-color mr-2"></i>Ponyreiten & Ausritte
            </h2>
            
            <span class="text-xs font-medium px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
              ab 25€ • Verfügbar
            </span>
          </div>
          
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Sichere und freudvolle Reiterlebnisse für Kinder jeden Alters. Wir bieten geführtes Ponyreiten, Schnupperstunden, Longenunterricht und begleitete Ausritte in die Natur an. Jedes Kind wird individuell gefördert und lernt den respektvollen Umgang mit den Tieren.
          </p>
          
          <div class="flex flex-wrap gap-3">
            <AppButton :to="{ path: '/blog/ponyreiten' }" size="normal">
              Details zum Ponyreiten <i class="fas fa-arrow-right text-xs ml-1.5"></i>
            </AppButton>
            
            <AppButton 
              :to="{ path: '/contact', query: { subject: 'Anfrage Ponyreiten' } }" 
              variant="outline-primary" 
              size="normal"
            >
              <i class="fas fa-calendar-check text-xs mr-1.5"></i> Termin anfragen
            </AppButton>
          </div>
        </div>
      </section>

      <!-- Abschnitt Kindergeburtstag -->
      <section
        id="kindergeburtstag"
        class="offer-section flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <div class="w-full md:w-1/3 aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
          <NuxtImg
            src="/images/Einhorn_Pinjata.webp"
            alt="Fröhliche Kindergruppe feiert Geburtstag mit Ponys und einer Pinjata"
            class="w-full h-full object-cover object-center"
            quality="80"
            format="webp"
            loading="lazy"
            width="1200" 
            height="900" 
            placeholder
            densities="1x 2x"
            sizes="(max-width: 767px) 100vw, 33vw"
          />
        </div>
        <div class="flex-1">
          <div class="flex justify-between items-start mb-3">
            <h2 class="text-2xl font-semibold">
              <i class="fas fa-birthday-cake text-primary-color mr-2"></i>Unvergessliche Pony-Geburtstage
            </h2>
            
            <span class="text-xs font-medium px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
              ab 120€ • Ab 11. Juni
            </span>
          </div>
          
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Feiern Sie einen unvergesslichen Geburtstag auf unserem Ponyhof! Mit Ponyreiten, lustigen Spielen, kreativem Basteln und auf Wunsch mit tollen Mottos. Ein tierisches Abenteuer für das Geburtstagskind und seine Freunde (Region Renningen/Leonberg).
          </p>
          
          <div class="flex flex-wrap gap-3">
            <AppButton :to="{ path: '/blog/kindergeburtstag' }" size="normal">
              Details zum Kindergeburtstag <i class="fas fa-arrow-right text-xs ml-1.5"></i>
            </AppButton>
            
            <AppButton 
              :to="{ path: '/contact', query: { subject: 'Anfrage Kindergeburtstag' } }" 
              variant="outline-primary" 
              size="normal"
            >
              <i class="fas fa-calendar-check text-xs mr-1.5"></i> Termin anfragen
            </AppButton>
          </div>
        </div>
      </section>

      <!-- Preisübersicht -->
      <section id="preise" class="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
        <h2 class="text-2xl font-semibold mb-6 text-center">
          <i class="fas fa-tag text-primary-color mr-2"></i>Unsere Preise im Überblick
        </h2>
        
        <!-- Preistabelle für Desktop -->
        <div class="hidden md:block overflow-x-auto">
          <table class="min-w-full bg-white dark:bg-gray-800 border-collapse">
            <thead>
              <tr class="bg-gray-50 dark:bg-gray-700">
                <th class="py-3 px-4 text-left text-gray-800 dark:text-white font-semibold">Angebot</th>
                <th class="py-3 px-4 text-left text-gray-800 dark:text-white font-semibold">Dauer</th>
                <th class="py-3 px-4 text-left text-gray-800 dark:text-white font-semibold">Preis</th>
                <th class="py-3 px-4 text-left text-gray-800 dark:text-white font-semibold">Verfügbarkeit</th>
                <th class="py-3 px-4 text-left text-gray-800 dark:text-white font-semibold"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td class="py-3 px-4 text-gray-800 dark:text-white">Schnupperstunde (Ponyreiten)</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-300">30 Minuten</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-300 font-medium">ab 25€</td>
                <td class="py-3 px-4 text-green-600 dark:text-green-400">5 Plätze frei</td>
                <td class="py-3 px-4">
                  <NuxtLink :to="{ path: '/contact', query: { subject: 'Anfrage Schnupperstunde Ponyreiten' } }" class="text-xs px-3 py-1.5 bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light rounded-md hover:bg-primary-color/20 dark:hover:bg-primary-light/20 transition-colors">
                    Anfragen
                  </NuxtLink>
                </td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td class="py-3 px-4 text-gray-800 dark:text-white">Geführtes Ponyreiten</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-300">45-60 Minuten</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-300 font-medium">ab 35€</td>
                <td class="py-3 px-4 text-green-600 dark:text-green-400">Termine ab 15. Mai</td>
                <td class="py-3 px-4">
                  <NuxtLink :to="{ path: '/contact', query: { subject: 'Anfrage Geführtes Ponyreiten' } }" class="text-xs px-3 py-1.5 bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light rounded-md hover:bg-primary-color/20 dark:hover:bg-primary-light/20 transition-colors">
                    Anfragen
                  </NuxtLink>
                </td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td class="py-3 px-4 text-gray-800 dark:text-white">Shetty-Wanderung</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-300">ca. 90 Minuten</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-300 font-medium">ab 35€</td>
                <td class="py-3 px-4 text-green-600 dark:text-green-400">Wochenends verfügbar</td>
                <td class="py-3 px-4">
                  <NuxtLink :to="{ path: '/contact', query: { subject: 'Anfrage Shetty-Wanderung' } }" class="text-xs px-3 py-1.5 bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light rounded-md hover:bg-primary-color/20 dark:hover:bg-primary-light/20 transition-colors">
                    Anfragen
                  </NuxtLink>
                </td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td class="py-3 px-4 text-gray-800 dark:text-white">Zwergen-Wanderung (Mini Zwergen Bande)</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-300">60 Minuten</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-300 font-medium">ab 30€</td>
                <td class="py-3 px-4 text-green-600 dark:text-green-400">Verfügbar</td>
                <td class="py-3 px-4">
                  <NuxtLink :to="{ path: '/contact', query: { subject: 'Anfrage Zwergen-Wanderung' } }" class="text-xs px-3 py-1.5 bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light rounded-md hover:bg-primary-color/20 dark:hover:bg-primary-light/20 transition-colors">
                    Anfragen
                  </NuxtLink>
                </td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td class="py-3 px-4 text-gray-800 dark:text-white">Kindergeburtstag</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-300">ca. 2,5 - 3 Stunden</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-300 font-medium">ab 120€</td>
                <td class="py-3 px-4 text-amber-600 dark:text-amber-400">Ab 11. Juni</td>
                <td class="py-3 px-4">
                  <NuxtLink :to="{ path: '/contact', query: { subject: 'Anfrage Kindergeburtstag' } }" class="text-xs px-3 py-1.5 bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light rounded-md hover:bg-primary-color/20 dark:hover:bg-primary-light/20 transition-colors">
                    Anfragen
                  </NuxtLink>
                </td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td class="py-3 px-4 text-gray-800 dark:text-white">Ferienkurs</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-300">5 Tage, je 3 Stunden</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-300 font-medium">ab 149€</td>
                <td class="py-3 px-4 text-green-600 dark:text-green-400">Noch 3 Plätze frei</td>
                <td class="py-3 px-4">
                  <NuxtLink :to="{ path: '/contact', query: { subject: 'Anfrage Ferienkurs' } }" class="text-xs px-3 py-1.5 bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light rounded-md hover:bg-primary-color/20 dark:hover:bg-primary-light/20 transition-colors">
                    Anfragen
                  </NuxtLink>
                </td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td class="py-3 px-4 text-gray-800 dark:text-white">Reittherapie</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-300">45-60 Minuten</td>
                <td class="py-3 px-4 text-gray-600 dark:text-gray-300 font-medium">Auf Anfrage</td>
                <td class="py-3 px-4 text-gray-500 dark:text-gray-400">Ab 2026</td>
                <td class="py-3 px-4">
                  <button @click="showInterestModal('Reittherapie')" class="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    Vormerken
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- Preiskarten für Mobile -->
        <div class="md:hidden space-y-4">
          <!-- Schnupperstunde -->
          <div class="bg-white dark:bg-gray-700/80 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-600/50">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-semibold text-gray-800 dark:text-white">Schnupperstunde (Ponyreiten)</h3>
              <span class="text-primary-color dark:text-primary-light font-medium">ab 25€</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">30 Minuten</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-green-600 dark:text-green-400">5 Plätze frei</span>
              <NuxtLink :to="{ path: '/contact', query: { subject: 'Anfrage Schnupperstunde Ponyreiten' } }" class="text-xs px-3 py-1.5 bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light rounded-md hover:bg-primary-color/20 dark:hover:bg-primary-light/20 transition-colors">
                Anfragen
              </NuxtLink>
            </div>
          </div>
          <!-- Geführtes Ponyreiten -->
          <div class="bg-white dark:bg-gray-700/80 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-600/50">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-semibold text-gray-800 dark:text-white">Geführtes Ponyreiten</h3>
              <span class="text-primary-color dark:text-primary-light font-medium">ab 35€</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">45-60 Minuten</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-green-600 dark:text-green-400">Termine ab 15. Mai</span>
              <NuxtLink :to="{ path: '/contact', query: { subject: 'Anfrage Geführtes Ponyreiten' } }" class="text-xs px-3 py-1.5 bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light rounded-md hover:bg-primary-color/20 dark:hover:bg-primary-light/20 transition-colors">
                Anfragen
              </NuxtLink>
            </div>
          </div>
          <!-- Shetty-Wanderung -->
          <div class="bg-white dark:bg-gray-700/80 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-600/50">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-semibold text-gray-800 dark:text-white">Shetty-Wanderung</h3>
              <span class="text-primary-color dark:text-primary-light font-medium">ab 35€</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">ca. 90 Minuten</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-green-600 dark:text-green-400">Wochenends verfügbar</span>
              <NuxtLink :to="{ path: '/contact', query: { subject: 'Anfrage Shetty-Wanderung' } }" class="text-xs px-3 py-1.5 bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light rounded-md hover:bg-primary-color/20 dark:hover:bg-primary-light/20 transition-colors">
                Anfragen
              </NuxtLink>
            </div>
          </div>
          <!-- Zwergen-Wanderung -->
           <div class="bg-white dark:bg-gray-700/80 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-600/50">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-semibold text-gray-800 dark:text-white">Zwergen-Wanderung</h3>
              <span class="text-primary-color dark:text-primary-light font-medium">ab 30€</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">60 Minuten</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-green-600 dark:text-green-400">Verfügbar</span>
              <NuxtLink :to="{ path: '/contact', query: { subject: 'Anfrage Zwergen-Wanderung' } }" class="text-xs px-3 py-1.5 bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light rounded-md hover:bg-primary-color/20 dark:hover:bg-primary-light/20 transition-colors">
                Anfragen
              </NuxtLink>
            </div>
          </div>
          <!-- Kindergeburtstag -->
          <div class="bg-white dark:bg-gray-700/80 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-600/50">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-semibold text-gray-800 dark:text-white">Kindergeburtstag</h3>
              <span class="text-primary-color dark:text-primary-light font-medium">ab 120€</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">ca. 2,5 - 3 Stunden</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-amber-600 dark:text-amber-400">Ab 11. Juni</span>
              <NuxtLink :to="{ path: '/contact', query: { subject: 'Anfrage Kindergeburtstag' } }" class="text-xs px-3 py-1.5 bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light rounded-md hover:bg-primary-color/20 dark:hover:bg-primary-light/20 transition-colors">
                Anfragen
              </NuxtLink>
            </div>
          </div>
          <!-- Ferienkurs -->
          <div class="bg-white dark:bg-gray-700/80 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-600/50">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-semibold text-gray-800 dark:text-white">Ferienkurs</h3>
              <span class="text-primary-color dark:text-primary-light font-medium">ab 149€</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">5 Tage, je 3 Stunden</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-green-600 dark:text-green-400">Noch 3 Plätze frei</span>
              <NuxtLink :to="{ path: '/contact', query: { subject: 'Anfrage Ferienkurs' } }" class="text-xs px-3 py-1.5 bg-primary-color/10 dark:bg-primary-light/10 text-primary-color dark:text-primary-light rounded-md hover:bg-primary-color/20 dark:hover:bg-primary-light/20 transition-colors">
                Anfragen
              </NuxtLink>
            </div>
          </div>
          <!-- Reittherapie -->
          <div class="bg-white dark:bg-gray-700/80 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-600/50">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-semibold text-gray-800 dark:text-white">Reittherapie</h3>
              <span class="text-primary-color dark:text-primary-light font-medium">Auf Anfrage</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">45-60 Minuten</p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500 dark:text-gray-400">Ab 2026</span>
               <button @click="showInterestModal('Reittherapie')" class="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors">
                  Vormerken
              </button>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
          <p>Alle Preise sind Richtwerte und können je nach individuellen Anforderungen variieren.</p>
          <p class="mt-2">Geschwisterrabatt und 10er-Karten mit Preisvorteil auf Anfrage verfügbar.</p>
        </div>
      </section>

      <!-- Kontakt Section -->
      <section class="bg-gradient-to-r from-primary-color/10 to-primary-color/5 dark:from-primary-light/10 dark:to-primary-light/5 p-6 md:p-10 rounded-xl text-center">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          <i class="fas fa-envelope-open-text text-primary-color dark:text-primary-light mr-2"></i>
          Fragen oder spezielle Wünsche?
        </h2>
        <p class="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          Wir beraten Sie gerne persönlich und stellen ein individuelles Angebot für Sie zusammen. Kontaktieren Sie uns noch heute – wir freuen uns auf Ihre Nachricht oder Ihren Anruf!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+49 1575 9666733" class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-sm transition-colors duration-300 flex items-center justify-center text-base font-medium">
            <i class="fas fa-phone-alt mr-2.5"></i>
            +49 1575 9666733
          </a>
          
          <NuxtLink :to="{ path: '/contact' }" class="px-6 py-3 bg-primary-color hover:bg-primary-color-dark dark:bg-primary-light dark:hover:bg-primary-light-dark text-white rounded-lg shadow-sm transition-colors duration-300 flex items-center justify-center text-base font-medium">
            <i class="fas fa-envelope mr-2.5"></i>
            Schriftliche Anfrage
          </NuxtLink>
        </div>
      </section>
    </div>
    
    <!-- Interesse vormerken Modal -->
    <div v-if="showInterest" class="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end sm:items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Overlay -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-black dark:bg-opacity-60 transition-opacity" aria-hidden="true" @click="closeInterestModal"></div>
        
        <!-- Modal Panel -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
        <div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 id="modal-title" class="text-xl font-semibold text-gray-900 dark:text-white">Interesse für "{{ interestOffer }}" vormerken</h3>
            <button @click="closeInterestModal" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <span class="sr-only">Schließen</span>
              <i class="fas fa-times text-lg"></i>
            </button>
          </div>
          
          <form @submit.prevent="submitInterest" class="space-y-4">
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              Wir informieren Sie unverbindlich per E-Mail, sobald dieses Angebot verfügbar ist oder neue Termine feststehen. Kein Spam, versprochen!
            </p>
            
            <div>
              <label for="interest-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ihr Name</label>
              <input type="text" id="interest-name" v-model="interestForm.name" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-primary-color focus:border-primary-color dark:focus:ring-primary-light dark:focus:border-primary-light" required>
            </div>
            
            <div>
              <label for="interest-email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ihre E-Mail-Adresse</label>
              <input type="email" id="interest-email" v-model="interestForm.email" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-primary-color focus:border-primary-color dark:focus:ring-primary-light dark:focus:border-primary-light" required>
            </div>
            
            <div class="pt-2">
              <button type="submit" class="w-full bg-primary-color hover:bg-primary-color-dark dark:bg-primary-light dark:hover:bg-primary-light-dark text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color dark:focus:ring-offset-gray-800">
                Interesse unverbindlich vormerken
              </button>
            </div>
            
            <p class="text-xs text-gray-500 dark:text-gray-400 text-center pt-1">
              Ihre Daten werden vertraulich behandelt. Sie können sich jederzeit von unserer Informationsliste abmelden.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useHead } from '#imports'
  import { NuxtLink, NuxtImg } from '#components'
  import AppButton from '~/components/AppButton.vue'

  useHead({
    title: 'Angebote: Kindergeburtstag, Ferienkurs, Reittherapie & Ponyreiten',
    meta: [
      {
        name: 'description',
        content:
          'Unsere pferdegestützten Angebote in Renningen/Leonberg: Reittherapie, Pony-Geburtstage, Ponyreiten, Ferienkurse und die Mini Zwergen Bande.',
      },
      {
        name: 'keywords',
        content:
          'Angebote Ponyhof Renningen, Reittherapie Kinder Leonberg, Kindergeburtstag Pferde, Ferienkurs Reiten, Ponyreiten, Ausritte Kinder, Schnupperstunde Reiten, Mini Zwergen Bande, Shetty Wanderung, Zwergenwanderung',
      },
    ],
    link: [{ rel: 'canonical', href: 'https://lebenisteinponyhof.de/angebote' }], // Bitte deine Domain anpassen
  })
  
  const showInterest = ref(false)
  const interestOffer = ref('')
  const interestForm = ref({
    name: '',
    email: '',
  })
  
  const showInterestModal = (offerName) => {
    interestOffer.value = offerName
    showInterest.value = true
  }
  
  const closeInterestModal = () => {
    showInterest.value = false
  }
  
  const submitInterest = () => {
    console.log('Interesse angemeldet:', interestOffer.value, interestForm.value)
    alert(`Vielen Dank für Ihr Interesse an "${interestOffer.value}"! Wir informieren Sie, sobald das Angebot verfügbar ist oder neue Termine feststehen.`)
    closeInterestModal()
    interestForm.value = { name: '', email: '' }
  }
</script>

<style scoped>
  .page-header {
    @apply text-center py-8 md:py-12 bg-gray-50 dark:bg-gray-800/50;
  }

  .breadcrumb {
    @apply container mx-auto px-4 py-3 text-sm text-gray-500 dark:text-gray-400;
  }
  .breadcrumb ol {
    @apply list-none p-0 inline-flex items-center space-x-1.5;
  }
  .breadcrumb li:not(:last-child)::after {
    content: '/';
    @apply ml-1.5 text-gray-400 dark:text-gray-500;
  }
  .breadcrumb a {
    @apply hover:text-primary-color dark:hover:text-primary-light;
  }
  .breadcrumb li[aria-current="page"] {
    @apply font-medium text-gray-700 dark:text-gray-200;
  }

  .offer-section {
    transition:
      box-shadow 0.3s ease,
      transform 0.3s ease;
  }

  .offer-section:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08), 0 5px 10px rgba(0,0,0,0.04);
    transform: translateY(-5px);
  }

  .dark .offer-section:hover {
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.06), 0 5px 10px rgba(255,255,255,0.03);
  }

  .offer-section h2 i {
    font-size: 0.85em; 
    vertical-align: middle; 
    margin-right: 0.5rem; 
  }
  
  .aspect-\[1\/1\] > .nuxt-image,
  .aspect-\[3\/4\] > .nuxt-image,
  .aspect-\[4\/3\] > .nuxt-image {
    width: 100%;
    height: 100%;
  }

</style>