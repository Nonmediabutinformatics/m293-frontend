# Aufgabenverwaltungstool

## Funktionalitäten

(Hacken = wie erhofft funktioniert )

### 1. Aufgabenübersicht anzeigen (List)

- Beschreibung: Der Benutzer kann eine Liste mit all seinen Aufgaben anzeigen lassen.
- Testfall:
  - Schritte:
        1. Der Benutzer öffnet die Anwendung.
        2. Der Benutzer navigiert zur To-doList.
  - [x]   Erwartetes Ergebnis: Der Benutzer sieht eine Liste mit all seinen Aufgaben.

### 2. Neue Aufgabe hinzufügen (Create)

- Beschreibung: Der Benutzer kann ein Formular ausfüllen, um eine neue Aufgabe hinzuzufügen.
- Testfall:
  - Schritte:
        1. Der Benutzer öffnet die Anwendung.
        2. Der Benutzer navigiert zur To-doList.
        3. Der Benutzer füllt das Formular mit gültigen Daten aus und sendet das Formular ab.
  - [x]   Erwartetes Ergebnis: Die neue Aufgabe wird zur Liste hinzugefügt und angezeigt.

### 3. Aufgabe bearbeiten und speichern (Update)

- Beschreibung: Der Benutzer kann eine bestehende Aufgabe bearbeiten und speichern.
- Testfall:
  - Schritte:
        1. Der Benutzer öffnet die Anwendung.
        2. Der Benutzer navigiert zur  To-doList.
        3. Der Benutzer doppelklickt auf die Aufgabe, die er bearbeiten möchte.
        4. Der Benutzer ändert den Namen im Formular drückt Enter.
- [x]  -   Erwartetes Ergebnis: Die Aufgabe wird mit den aktualisierten Daten in der Liste angezeigt.

### 4. Aufgabe löschen (Delete)

- Beschreibung: Der Benutzer kann eine bestehende Aufgabe löschen.
- Testfall:
  - Schritte:
        1. Der Benutzer öffnet die Anwendung.
        2. Der Benutzer navigiert zur To-doList.
        3. Der Benutzer klickt auf die Aufgabe, die er löschen möchte.
        4. Der Benutzer klickt auf den "Delete" Button.
- [x]  -   Erwartetes Ergebnis: Die Aufgabe wird aus der Liste entfernt.

### 5. Anmeldung für unauthentifizierte Benutzer (Login)

- Beschreibung: Ein unauthentifizierter Benutzer kann sich mittels Benutzername und Passwort anmelden.
- Testfall:
  - Schritte:
        1. Der Benutzer öffnet die Anwendung.
        2. Der Benutzer klickt auf den "Login" Button.
        3. Der Benutzer gibt eine E-Mail und das Passwort ein und bestätigt die Eingabe.
  - [x]  Erwartetes Ergebnis: Der Benutzer wird angemeldet und kann nun auf geschützte Bereiche der Anwendung zugreifen.

### 6. Aufgaben anzeigen, bearbeiten und löschen für authentifizierte Benutzer (Authentifizierung)

- Beschreibung: Ein authentifizierter Benutzer kann seine eigenen Aufgaben anzeigen, bearbeiten und löschen. Unauthentifizierte Benutzer haben keinen Zugriff auf geschützte Bereiche der Anwendung.
- Testfall:
  - Schritte:
        1. Der Benutzer öffnet die Anwendung.
        2. Der Benutzer klickt auf den "Login" Button.
        3. Der Benutzer gibt seinen Benutzernamen und sein Passwort ein und bestätigt die Eingabe.
        4. Der Benutzer navigiert zur To-doList.
        5. Der Benutzer klickt auf die Aufgabe, die er bearbeiten oder löschen möchte.
        6. Der Benutzer ändert die Daten im Formular oder klickt auf den "Delete" Button und bestätigt die Aktion.
  - [x] Erwartetes Ergebnis: Die Aufgabe wird mit den aktualisierten Daten in der Liste angezeigt oder aus der Liste entfernt.

### 7. Direkter Zugriff auf eine Aufgabe über eine eindeutige URL (Routing)

- Beschreibung: Ein Benutzer kann direkt auf eine bestimmte Aufgabe zugreifen, indem er eine eindeutige URL aufruft.
- Testfall:
  - Schritte:
        1. Der Benutzer öffnet die Anwendung.
        2. Der Benutzer navigiert zur To-doList.
        3. Der Benutzer öffnet einen neuen Browser-Tab oder -Fenster und fügt die URL einer Aufgabe z.B. /to-do.html?id=1 ein.
- [x]   Erwartetes Ergebnis: Die Aufgabe wird direkt angezeigt, ohne dass der Benutzer zur To-doList navigieren muss.

### 8. Warnung bei fehlerhaften Eingaben (Validierung)

- Beschreibung: Der Benutzer wird bei fehlerhaften Eingaben gewarnt, um sicherzustellen, dass nur korrekte Daten gespeichert werden.
- Testfall:
  - Schritte:
        1. Der Benutzer öffnet die Anwendung.
        2. Der Benutzer navigiert zum Login oder zum Add Task Formular.
        3. Der Benutzer gibt unvollständige oder ungültige Daten im Formular ein.
        4. Der Benutzer versucht, die Aufgabe zu speichern.
  - [x]  Erwartetes Ergebnis: Eine Warnung wird angezeigt, die den Benutzer darüber informiert, dass die Eingabe ungültig ist, und er aufgefordert wird, die Eingabe zu überprüfen und zu korrigieren.

### 9. Benutzerfreundliche Fehlerbehandlung (Errorhandling)

- Beschreibung: Fehlermeldungen und -zustände werden auf eine benutzerfreundliche Art und Weise dargestellt, um dem Benutzer eine klare und verständliche Rückmeldung zu geben.
- Testfall:
  - Schritte:
        1. Der Benutzer öffnet die Anwendung.
        2. Der Benutzer gibt ungültige Daten im Formular ein oder führt eine andere Aktion aus, die zu einem Fehlerzustand führt.
  - [x]  Erwartetes Ergebnis: Eine klare und verständliche Fehlermeldung wird angezeigt, die dem Benutzer erklärt, was schief gelaufen ist.
