# ToDoHub

ToDoHub ist eine webbasierte Anwendung, die entwickelt wurde, um Benutzern bei der Organisation ihrer Aufgaben und der Steigerung ihrer Produktivität zu helfen. Die Anwendung bietet eine benutzerfreundliche Oberfläche mit fortschrittlichen Funktionen, die Benutzern helfen, auf Kurs zu bleiben und ihre Ziele zu erreichen. Ich habe dieses Projekt im Rahmen der praktischen Prüfung 294 erstellt.

## Funktionen

- Login mithilfe von einem JSON Web Token
- Einfaches Erstellen und Bearbeiten von Aufgaben
- Markieren von Aufgaben als "Done" und Verschieben in die "Done"-Liste
- Rückgängig machen von Aufgaben, die versehentlich als markiert wurden
- Löschen von Aufgaben, die nicht mehr relevant sind
- Ändern des Namens einer Aufgabe
- Einzelnes Aufrufen von Aufgaben über den Pfad: /to-do.html?id=[id]

## Verwendung

1. Melden Sie sich bei ToDoHub an. (E-Mail: , Passwort: m294)
2. Geben Sie Ihre Aufgabe in das Eingabefeld mit der Bezeichnung "Task" ein.
3. Klicken Sie auf "Add Task", um sie zur To-Do-Liste hinzuzufügen.
4. Wenn Sie eine Aufgabe erledigt haben, klicken Sie auf die Schaltfläche "Done" neben ihrem Namen, um sie in die "Done"-Liste zu verschieben.
5. Wenn Sie eine Aufgabe rückgängig machen möchten, klicken Sie auf die Schaltfläche "Undo".
6. Wenn Sie eine Aufgabe löschen möchten, klicken Sie auf die Schaltfläche "Delete".
7. Doppelklicken Sie auf den Namen einer Aufgabe, um ihn zu bearbeiten.
8. Ändern Sie den Pfad zu "/to-do.html?id=[id]" um eine Aufgabe einzeln zu sehen, mit "/to-do.html?id=[id]&[andere id]", können Sie auch mehrere "ids" einzeln sehen.

## Technologie

Die ToDoHub-Anwendung wurde mit HTML, CSS und JavaScript entwickelt. Die Backend-Logik wurde von Diego Steiner entwickelt. [https://github.com/diegosteiner/m294-lb-backend](https://github.com/diegosteiner/m294-lb-backend)

----------

## Entwickler-Informationen

- Jan (Nonmediabutinformatics)
- Lernender Informatiker (Applikationsentwicklung)

### Installation

Um die ToDoHub-Anwendung lokal zu installieren, befolgen Sie bitte die folgenden Schritte:

1. Klonen Sie dieses Repository auf Ihren Computer.
2. Starten Sie das Backend mit `docker run -p 3000:3000 ghcr.io/diegosteiner/m294-lb-backend`.
3. Starten Sie die Webseite einem Liveserver z.B. mit Visual Studio Code

### Anforderungen

Um die ToDoHub-Anwendung lokal auszuführen, benötigen Sie die folgenden Tools und Technologien:

- Docker
- Live Server

### Beitragende

Wenn Sie einen Beitrag zur ToDoHub-Anwendung leisten möchten, können Sie dies tun, indem Sie einen Pull Request erstellen. Ich bin immer auf der Suche nach neuen Ideen und Verbesserungen für die Anwendung.
