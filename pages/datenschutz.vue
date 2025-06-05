<template>
  <div>
    <section class="page-header">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Datenschutzerklärung</h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Informationen zur Verarbeitung Ihrer personenbezogenen Daten auf unserer Website und bei unseren Angeboten.
      </p>
    </section>

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Startseite</NuxtLink></li>
        <li aria-current="page">Datenschutzerklärung</li>
      </ol>
    </nav>

    <div
      class="content container mx-auto max-w-3xl px-4 py-8 md:py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md prose dark:prose-invert prose-sm sm:prose-base max-w-none prose-a:text-primary-color dark:prose-a:text-primary-light prose-headings:font-semibold prose-headings:text-gray-800 dark:prose-headings:text-white"
    >
      <p class="text-sm text-gray-500 dark:text-gray-400">Stand: {{ currentDate }}</p>

      <h2 class="!mt-6">1. Datenschutz auf einen Blick</h2>
      <h3>Allgemeine Hinweise</h3>
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen oder unsere Angebote (z.B. Ponyreiten in {{ businessAddress.city }}) in Anspruch nehmen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
      </p>
      <!-- ... (Rest von Abschnitt 1 bleibt ähnlich) ... -->
       <h3>Datenerfassung auf dieser Website</h3>
      <p>
        <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
        Die Datenverarbeitung auf dieser Website erfolgt durch die im <NuxtLink to="/impressum">Impressum</NuxtLink> genannte verantwortliche Person (Sarah Handte).
        Der technische Betrieb und die Wartung der Website erfolgen durch Tim Steegmüller (Kontaktdaten siehe unten) im Auftrag von Sarah Handte. Ein Vertrag zur Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO liegt vor, soweit dies für die Art der technischen Unterstützung und den Zugriff auf personenbezogene Daten (z.B. Server-Logfiles, Analyse-Tools im Backend) relevant ist.
      </p>
      <p>
        <strong>Wie erfassen wir Ihre Daten?</strong><br />
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben, uns per E-Mail senden oder telefonisch mitteilen.
        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme bzw. die Systeme unseres Hosters erfasst. Dies sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
        Im Rahmen unserer Angebote (z.B. Anmeldung zum Ponyreiten, Kindergeburtstag) erheben wir zudem die für die Vertragsdurchführung und Organisation notwendigen Daten.
      </p>
      <p>
        <strong>Wofür nutzen wir Ihre Daten?</strong><br />
        Ein Teil der Website-Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können nach Ihrer Einwilligung zur Analyse Ihres Nutzerverhaltens oder zur Anzeige externer Inhalte verwendet werden.
        Daten, die Sie uns im Rahmen von Anfragen oder Buchungen mitteilen, nutzen wir zur Bearbeitung Ihrer Anfrage, zur Organisation und Durchführung unserer Angebote (z.B. Ponyreiten in {{ businessAddress.city }}) und zur Erfüllung vertraglicher Pflichten.
      </p>
      <p>
        <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben (z.B. für den Newsletter oder bestimmte Cookies), können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Ihnen steht ferner das Recht zu, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden. Die Kontaktdaten finden Sie im <NuxtLink to="/impressum">Impressum</NuxtLink>.
      </p>

      <h2>2. Hosting und Content Delivery Networks (CDN)</h2>
      <h3>Externes Hosting</h3>
      <p>
        Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
        Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
      </p>
      <p>Wir setzen folgenden Hoster ein:<br/>
        IONOS SE<br/>
        Elgendorfer Str. 57<br/>
        56410 Montabaur<br/>
        Deutschland
      </p>
      <p>
        Details entnehmen Sie der Datenschutzerklärung von IONOS: <a href="https://www.ionos.de/terms-gtc/terms-privacy" target="_blank" rel="noopener noreferrer">https://www.ionos.de/terms-gtc/terms-privacy</a>.
      </p>
      <p>
        Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
      </p>


      <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
      <!-- ... (Deine bisherigen Punkte zu Datenschutz, Verantwortliche Stelle, Speicherdauer sind gut) ... -->
      <!-- Ergänze den Hinweis zum technischen Dienstleister Tim Steegmüller auch hier, falls noch nicht geschehen -->
      <h3>Hinweis zur verantwortlichen Stelle</h3>
      <p>
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website und im Rahmen unserer Angebote ist:
      </p>
      <p>
        Sarah Handte<br />
        {{ businessAddress.street }}<br />
        {{ businessAddress.zip }} {{ businessAddress.city }}
      </p>
      <p>
        Telefon: {{ phoneNumberDisplay }}<br />
        E-Mail: {{ businessAddress.email }}
      </p>
      <p>
        Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
      </p>
      <p>
        Für den technischen Betrieb und die Wartung dieser Website ist als Auftragsverarbeiter tätig:<br/>
        Tim Steegmüller<br/>
        [Straße von Tim, falls abweichend und relevant für Datenschutzanfragen]<br/>
        [PLZ Ort von Tim]<br/>
        E-Mail: [E-Mail von Tim für Datenschutzanfragen bezüglich Technik, falls gewünscht, sonst weglassen oder auf Sarah verweisen]
      </p>
      <p>
        Ein entsprechender Vertrag zur Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO wurde geschlossen.
      </p>

      <h3>Rechtsgrundlagen der Datenverarbeitung</h3>
      <p>
        Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.
        Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen Vertragspartei die betroffene Person ist, erforderlich ist (z.B. Buchung von Ponyreiten, Kindergeburtstagen), dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.
        Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
        Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung (z.B. für den Betrieb der Website, Server-Logfiles).
        Die Einwilligung nach § 25 Abs. 1 Telekommunikation-Telemedien-Datenschutz-Gesetz (TTDSG) dient als Rechtsgrundlage für die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers, soweit diese nicht technisch unbedingt erforderlich sind.
      </p>
      <!-- ... (Restliche allgemeine Hinweise können bleiben, sind Standard) ... -->
      <h3>Cookies und Consent Management</h3>
      <!-- Dein detaillierter Cookie-Abschnitt ist sehr gut! -->
      <!-- Stelle sicher, dass die Anbieter (z.B. Google Analytics, YouTube) und Zwecke aktuell sind. -->
      <p>
        Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
        Wir verwenden ein eigenes, selbst entwickeltes Consent Management Tool (Cookie-Banner), um Ihre Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endgerät oder zum Einsatz bestimmter Technologien einzuholen und diese datenschutzkonform zu dokumentieren.
      </p>
      <p>
        Eine detaillierte Auflistung der von uns verwendeten Cookies, deren Anbieter, Zwecke und Speicherdauer finden Sie hier:
      </p>
      <div class="my-4">
        <button
          @click="openCookieSettings"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-color hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
        >
          <i class="fas fa-cookie-bite mr-2"></i> Cookie-Einstellungen anpassen & Details anzeigen
        </button>
      </div>
      <p>
        Sie können Ihre Cookie-Einstellungen jederzeit über den Button "Cookie-Einstellungen anpassen" (meist im Footer oder hier in der Datenschutzerklärung) ändern oder Ihre Einwilligung mit Wirkung für die Zukunft widerrufen.
      </p>

      <h3>Server-Log-Dateien</h3>
      <p>
        Der Provider der Seiten (IONOS SE) erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
      </p>
      <ul class="list-disc ml-6">
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL (die zuvor besuchte Seite)</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse (anonymisiert oder nach kurzer Zeit gelöscht, je nach Hoster-Konfiguration – bitte prüfen!)</li>
      </ul>
      <p>
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung, Sicherheit und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
      </p>

      <h3>Kontaktformular und E-Mail-Kontakt</h3>
      <p>
        Wenn Sie uns per Kontaktformular (z.B. über Formbricks, wie in deiner Config) oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular bzw. Ihrer E-Mail inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail-Adresse, Telefonnummer etc.) zwecks Bearbeitung der Anfrage, für den Fall von Anschlussfragen und zur Organisation und Durchführung unserer Angebote (z.B. Terminvereinbarung für Ponyreiten in {{ businessAddress.city }}) bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
      </p>
      <p>
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
      </p>
      <p>
        Die von Ihnen im Kontaktformular eingegebenen oder per E-Mail übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
      </p>
      <p>
        Wir nutzen für unsere Kontaktformulare und Newsletter-Anmeldungen die Open-Source-Software Formbricks, welche wir auf unserer eigenen Serverinfrastruktur (bzw. der unseres Hosters IONOS im Rahmen des Hostings) betreiben. Die Daten werden somit direkt in unserem Verantwortungsbereich verarbeitet.
      </p>


      <h3>Datenverarbeitung bei Vertragsabschluss und für Angebote (z.B. Ponyreiten, Kindergeburtstage)</h3>
      <p>
        Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung, Durchführung oder Änderung des Rechtsverhältnisses (Vertragsdaten) erforderlich sind. Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Dies umfasst beispielsweise:
      </p>
      <ul class="list-disc ml-6">
        <li>Name, Anschrift, Kontaktdaten (Telefon, E-Mail) von Ihnen und ggf. Ihres Kindes.</li>
        <li>Alter des Kindes (zur Anpassung des Angebots).</li>
        <li>Informationen zu Vorkenntnissen oder besonderen Bedürfnissen (z.B. Allergien, gesundheitliche Aspekte, die für die Sicherheit relevant sind), sofern Sie uns diese freiwillig mitteilen und sie für die sichere Durchführung des Angebots notwendig sind. Die Verarbeitung sensibler Gesundheitsdaten erfolgt nur mit Ihrer ausdrücklichen Einwilligung (Art. 9 Abs. 2 lit. a DSGVO).</li>
        <li>Informationen zur gebuchten Leistung (z.B. Art des Kurses, Datum, Uhrzeit).</li>
        <li>Zahlungsinformationen (bei kostenpflichtigen Angeboten).</li>
      </ul>
      <p>
        Diese Daten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung und nach Ablauf der gesetzlichen Aufbewahrungsfristen (z.B. steuer- und handelsrechtliche Fristen) gelöscht.
      </p>


      <h3>Umgang mit Fotos und Videos bei Veranstaltungen</h3>
      <p>
        Im Rahmen unserer Angebote und Veranstaltungen (z.B. Kindergeburtstage, Ferienkurse, Ponyreiten in {{ businessAddress.city }}) fertigen wir gelegentlich Fotos und/oder kurze Videoaufnahmen an. Diese Aufnahmen dienen dazu, die schönen Momente festzuhalten, unsere pädagogische Arbeit zu dokumentieren und ggf. für unsere Öffentlichkeitsarbeit (z.B. auf unserer Website, in Social Media Kanälen wie Instagram und TikTok, in Flyern) zu verwenden.
      </p>
      <p>
        Die Anfertigung und Verwendung von Aufnahmen, auf denen Personen erkennbar sind, erfolgt nur mit Ihrer bzw. der Einwilligung der Erziehungsberechtigten. Diese Einwilligung holen wir gesondert ein (z.B. über ein Formular bei der Anmeldung oder vor Ort) und Sie können diese jederzeit mit Wirkung für die Zukunft widerrufen. Ein Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung.
        Die Rechtsgrundlage für die Verarbeitung ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
      </p>
      <p>
        Wir achten darauf, dass keine Aufnahmen veröffentlicht werden, die einzelne Personen in unvorteilhaften Situationen zeigen oder deren Persönlichkeitsrechte verletzen könnten. Sollten Sie oder Ihr Kind trotz Einwilligung nicht (mehr) auf einer Aufnahme erscheinen wollen, teilen Sie uns dies bitte mit, und wir werden die betreffende Aufnahme umgehend entfernen oder unkenntlich machen, soweit technisch möglich.
      </p>


      <!-- ... (Abschnitte zu Sozialen Medien, Plugins etc. sind schon gut, aber immer auf Aktualität prüfen) ... -->
      <!-- Stelle sicher, dass jeder externe Dienst (YouTube, Google Maps, Font Awesome CDN, Formbricks Cloud Version falls genutzt) hier genannt wird, -->
      <!-- der Zweck der Datenverarbeitung, die Rechtsgrundlage und ein Link zur Datenschutzerklärung des Anbieters. -->
      <!-- Wenn du z.B. Google Analytics oder ähnliche Tracking-Tools nutzt, MUSS das hier detailliert beschrieben werden. -->

      <h2>5. Plugins und Tools</h2>
      <h3>Google Fonts (Lokales Hosting)</h3>
      <p>
        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts, die von Google bereitgestellt werden. Um eine Übertragung Ihrer IP-Adresse an Google zu vermeiden und die DSGVO-Konformität zu gewährleisten, werden diese Schriftarten lokal von unserem Server geladen (Self-Hosting). Es findet hierbei keine Verbindung zu Servern von Google statt, und es werden keine Cookies von Google Fonts gesetzt oder personenbezogene Daten an Google übermittelt.
        Die Nutzung von lokal gehosteten Google Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unseres Online-Angebots. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
      </p>

      <h3>Font Awesome (CDN)</h3>
      <p>
        Diese Seite nutzt zur einheitlichen Darstellung von Symbolen (Icons) Font Awesome. Anbieter ist Fonticons, Inc., USA.
        Beim Aufruf einer Seite lädt Ihr Browser die benötigten Icons von den Servern (CDN) von Font Awesome, um sie korrekt anzuzeigen. Hierdurch erlangt Font Awesome Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde und welche Icons geladen werden. Ihre IP-Adresse wird dabei an Server von Font Awesome in den USA übertragen.
        Die Nutzung von Font Awesome erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
        Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details hierzu finden Sie hier: <a href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer">https://fontawesome.com/privacy</a> (Abschnitt "International Data Transfers").
        Wenn Sie mit dieser Datenübertragung nicht einverstanden sind, können Sie die Ausführung von JavaScript in Ihrem Browser deaktivieren oder einen JavaScript-Blocker installieren. Bitte beachten Sie, dass die Website dann möglicherweise nicht oder nur eingeschränkt funktioniert.
      </p>

      <h3>Google Maps</h3>
      <p>
        Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
        Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der einheitlichen Darstellung der Schriftarten Google Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
      </p>
      <p>
        Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte (z.B. unser Hof für Ponyreiten in {{ businessAddress.city }}). Dies stellt ein berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies für Marketingzwecke), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
      </p>
      <p>
        Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" target="_blank" rel="noopener noreferrer">https://privacy.google.com/businesses/gdprcontrollerterms/</a> und <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" target="_blank" rel="noopener noreferrer">https://privacy.google.com/businesses/gdprcontrollerterms/sccs/</a>.
        Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.
      </p>


      <h2>6. Soziale Medien</h2>
      <h3>Instagram und TikTok (Profile und eingebettete Inhalte)</h3>
      <p>
        Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und Plattformen (Instagram: @lebenisteinponyhof, TikTok: @lebenisteinponyhof), um mit den dort aktiven Kunden, Interessenten und Nutzern kommunizieren und sie dort über unsere Leistungen informieren zu können. Beim Aufruf der jeweiligen Netzwerke und Plattformen gelten die Geschäftsbedingungen und die Datenverarbeitungsrichtlinien deren jeweiligen Betreiber.
        Soweit nicht anders im Rahmen unserer Datenschutzerklärung angegeben, verarbeiten wir die Daten der Nutzer, sofern diese mit uns innerhalb der sozialen Netzwerke und Plattformen kommunizieren, z.B. Beiträge auf unseren Onlinepräsenzen verfassen oder uns Nachrichten zusenden.
      </p>
      <p>
        Auf unserer Website binden wir Inhalte von Instagram (Meta Platforms Ireland Limited) und TikTok (TikTok Technology Limited / TikTok Information Technologies UK Limited) ein, z.B. als Feeds oder einzelne Videos/Reels. Für die Anzeige dieser Inhalte ist Ihre Einwilligung erforderlich, die Sie über unseren Cookie-Banner erteilen können.
        Wenn Sie in die Anzeige dieser Inhalte einwilligen und diese aktiviert werden, stellt Ihr Browser eine direkte Verbindung zu den Servern dieser Drittanbieter her. Dabei können Daten (z.B. Ihre IP-Adresse, besuchte Seite, Browserinformationen) an diese Anbieter übertragen und ggf. Cookies von diesen auf Ihrem Gerät gespeichert werden. Auf diese Datenübertragung und die weitere Verarbeitung durch die Drittanbieter haben wir nach der Aktivierung keinen Einfluss mehr.
        Die Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.
      </p>
      <p>
        Datenschutzerklärung Instagram: <a href="https://instagram.com/about/legal/privacy/" target="_blank" rel="noopener noreferrer">https://instagram.com/about/legal/privacy/</a><br/>
        Datenschutzerklärung TikTok (EWR/Schweiz): <a href="https://www.tiktok.com/legal/privacy-policy-eea?lang=de" target="_blank" rel="noopener noreferrer">https://www.tiktok.com/legal/privacy-policy-eea?lang=de</a>
      </p>

      <h3>YouTube (Videos)</h3>
      <p>
        Wir binden Videos der Plattform “YouTube” des Anbieters Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, ein. Diese Einbindung erfolgt im erweiterten Datenschutzmodus, d.h. es werden erst dann Daten an YouTube übertragen und Cookies gesetzt, wenn Sie das Video aktiv starten und zuvor Ihre Einwilligung über unseren Cookie-Banner gegeben haben (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG).
      </p>
      <p>
        Datenschutzerklärung: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a><br/>
        Opt-Out (Widerspruchsmöglichkeit): <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer">https://adssettings.google.com/authenticated</a>.
      </p>


      <p class="text-sm mt-8 text-gray-500 dark:text-gray-400">Stand: {{ currentDate }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useMySeoMeta } from '~/composables/useMySeoMeta';
import { useCookieConsent } from '~/composables/useCookieConsent';
import { NuxtLink } from '#components';
import { useRuntimeConfig } from '#app';
import dayjs from 'dayjs';
import 'dayjs/locale/de';

dayjs.locale('de');

const config = useRuntimeConfig();
const businessAddress = computed(() => config.public.businessAddress);
const siteUrl = config.public.siteUrl;
const cookieConsent = useCookieConsent();

const phoneNumberDisplay = computed(() => businessAddress.value.telephone || '+49 1575 9666733');

const currentDate = ref('');
onMounted(() => {
  currentDate.value = dayjs().format('DD. MMMM YYYY');
});

useMySeoMeta({
  title: `Datenschutzerklärung | ${config.public.siteName}`,
  description: `Informationen zur Verarbeitung Ihrer personenbezogenen Daten beim Besuch unserer Webseite ${config.public.siteName} und bei der Nutzung unserer Angebote wie Ponyreiten in ${businessAddress.value.city}.`,
  keywords: `Datenschutz ${businessAddress.value.city}, DSGVO, Cookies, Datenverarbeitung, Ponyhof ${businessAddress.value.city}, Ponyreiten Datenschutz`,
  meta: [{ name: 'robots', content: 'index, follow' }], // Datenschutz sollte indexierbar sein
  ogImage: `${siteUrl}/images/og-datenschutz-ponyhof.webp`,
  ogImageAlt: `Datenschutzerklärung von ${config.public.siteName}`,
});

const openCookieSettings = () => {
  cookieConsent.openCookieSettings();
};
</script>

<style scoped>
.prose h2 {
  margin-top: 1.5em;
  padding-bottom: 0.3em;
  border-bottom: 1px solid theme('colors.gray.200');
}
.dark .prose h2 {
  border-bottom-color: theme('colors.gray.700');
}
.prose h2:first-of-type {
  margin-top: 0 !important;
}
.prose p,
.prose li {
  margin-bottom: 0.8em;
  line-height: 1.65;
}
</style>