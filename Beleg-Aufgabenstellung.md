# Beleg webbasiertes Lernprogramm

## Lernaspekte des Beleges

- Nutzung von HTTP/HTTPS
- Einsatz von HTML zur Strukturierung
- Einsatz von CSS zur Formatierung
- Webprogrammierung mittels Javascript (ECMAScript)
- Nutzung des DOMs (Document Object Model)
- Wahl einer geeigneten Softwarearchitektur
- Nutzung einer JS-Bibliothek zur Darstellung von speziellen Inhalten
- Entwurf und Implementierung eines sinnvollen Nutzerinterfaces
- Implementierung eines responsive Designs für unterschiedliche Geräte/Bildschirmgrößen
- Nutzung der Technik einer PWA
- Offline-Nutzung einer Webapp
- dynamisches Nachladen von Inhalten mittels Ajax-Technik
- Datenübertragung mittels JSON-Format
- Nutzung einer REST-Schnittstelle mit vorgegebener API

## Vorschlag für Vorgehen bei der Bearbeitung

- Erstellung des HTML-Gerüstes mit allen Elementen
- Nutzung von CSS zur Gestaltung + Responsive Design
- Erstellung der Javascript-Programmstruktur (Architektur Model-View-Presenter empfohlen)
- Implementierung einer geeigneten Model-Schnittstelle zum Erhalt der Aufgabe und zur Übergabe der gewählten Lösung (zunächst mit einfacher Dummy-Frage)
- Implementierung der Button-Handler, welche die Auswertefunktion des Presenters aktivieren
- Erweiterung des Models auf verschiedene Aufgaben mit Zufallsfunktion
- Implementierung der Statistikfunktionalität
- Erweiterung der Anzeige auf andere Aufgabentypen (Mathe -> Katex, etc.)
- Erweiterung des Models um die Nutzung der angebotenen REST-Schnittstelle
- Offlinefunktionalität implementieren

## Weitere Anforderungen

- falls Sie ChatGPT u.ä. nutzen, müssen Sie dies dokumentieren und den erstellten Code erklären können
- Dokumentation des Projektes, so dass eine andere Person ggf. am Projekt weiterarbeiten könnte
- Legen Sie eine Datei README.md an mit relevanten Informationen zum Beleg: erfüllte Aufgaben, eventuelle Probleme, genutzter Browser, ...
- es wird empfohlen, ein Lernportfolio zu erstellen (Dokumentation Ihrer Entwicklungsschritte, des Lernfortschritts, der Misserfolge, etc.)
- machen Sie Vorschläge zur Erweiterung/Verbesserung des Belegs

## Mögliche Erweiterungen (optional, Zusatzpunkte möglich)

- Wichtung der Aufgabenstellung anhand der bisherigen Ergebnisse
- Erweiterung auf mögliche Mehrfachauswahl
- zusätzliche Kategorie Notenlernen vorsehen (einzelne Note / Akkorde / Umkehrungen ganz nach Belieben / Klaviatur).
- Speicherung der erreichten Punkte im Browserspeicher oder per PHP-Script auf dem Server
- Mehrnutzerbetrieb mit Nutzerauthentifizierung

## Bewertungshinweise

- eine grobe Orientierung für die Bewertung ist:
  - Note 4: Programm funktioniert lt. Anforderung mit internen Mathematikaufgaben
  - Note 3: zzgl. funktionsfähige Nutzung des externen Aufgabenservers
  - Note 2: zzgl. Kategorie Notenlernen
  - Note 1: zzgl. Piano-Keyboard

## Links

- [KaTeX](https://github.com/KaTeX/KaTeX)
- [Web-Quiz](https://github.com/swsms/web-quiz-engine)
- [Fehlersuche - Stackoverflow](https://stackoverflow.com)

## Prinzipdarstellung

Die Darstellung unten zeigt prinzipiell, wie der Beleg auf einem Smartphone aussehen könnte. Sie sind nicht an die Darstellung gebunden.
Die HTML-Elemente wurden für den kleinen Viewport mittels CSS-Mediaqueries untereinander dargestellt. Auf einem Desktopbrowser würde die Darstellung teilweise nebeneinander erfolgen. Die Darstellung dient nur zur Orientierung. Sie können eine abweichende Oberfläche erstellen.
Der Screenshot wurde mit den Entwicklertools des Browsers erstellt.

<img src="images/demo.png" width="200">
