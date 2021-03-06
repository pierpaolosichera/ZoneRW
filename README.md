# ZoneRW
ZoneRW è un tool WYSIWYG che, a partire dalla dichiarazione delle surface con i relativi tag graphic e zone, mostra le zone codificate nel file TEI con i relativi attributi xml:id, consentendone la modifica al volo (aggiornamento delle coordinate, aggiunta o rimozione di zone) generando il codice TEI relativo. Il risultato a video può essere esportato in immagini.

## Cita questo software
[![DOI](https://zenodo.org/badge/414180951.svg)](https://zenodo.org/badge/latestdoi/414180951)

## Ambiente
ZoneRW è stato sviluppato utilizzando 4th Dimension.
Tra le molteplici caratteristiche della piattaforma 4D sono stati sfruttati il supporto nativo XML con la libreria Xerces di Apache Foundation, l’accesso alla struttura tramite lo standard DOM (Document Object Model), la gestione del formato SVG (Scalable Vector Graphics), sia come visualizzazione che creazione e modifica.

## Installazione
Per utilizzare ZoneRW collegati alla pagina di download di 4D (https://it.4d.com/product-download/4D-v18-LTS) per scaricare 4Dv18 (sarà richiesta l'iscrizione al sito).
Installato 4D, usa l'applicazione 4D per aprire ZoneRW:
  - su Windows nella cartella 4D/4D v18.5/4D apri il file 4D.exe; scegli "File -> Open -> Local application ->" e apri il file ZoneRW.4DB nella cartella ZoneRW.4dbase che hai scaricato;
  - su MacOS nalla cartella /Applicazioni/4D v18.5/ apri il file 4D.app; scegli poi "File -> Open -> Local application ->" e apri il pacchetto ZoneRW.4dbase che hai scaricato.

## Specifiche XML-TEI
Nella finestra di avvio cliccare sullo spazio "XML folder", per scegliere la cartella contenente i file XML, e sullo spazio "Picture folder" per scegliere la cartella contenente le immagini. Le impostazioni scelte verranno memorizzate per i successivi avvii del programma.
Dopo aver cliccato su "Start", ZoneRW mostra l'elenco dei file dalla cartella impostata all'avvio.
Quando l’utente sceglie un file, ZoneRW mostra le immagini richiamate nel file.
Scelta un'immagine, ZoneRW la carica dalla cartella impostata per la ricerca delle immagini.
ZoneRW cerca l'immagine:
- nella cartella impostata all'avvio;
- in una sottocartella avente lo stesso nome del file immagine;
- in una sottocartella avente lo stesso nome del file XML senza l'estensione;
- in una sottocartella avente lo stesso nome del file XML senza l'estensione sostituendo il carattere "." col carattere "\_".

Se l'immagine è stata trovata, ZoneRW cerca il tag \<surface\> relativo alla pagina scelta; intercettato l’elemento \<surface\>, ZoneRW ricerca tra i figli: 
- il tag \<graphic\> per trovare l’immagine corrispondente (attributo @url);
- la dimensione dichiarata (attributo @width), in modo da calcolare un eventuale rapporto di scala tra immagine e coordinate;
- tutti i tag \<zone\> (anche annidati) per disegnare le zone a video. 

L’elenco delle zone viene popolato con i valori degli attributi @xml:id, @rendition, e le coordinate con @points, @ulx, @uly, @lrx e @lry.
Nell’angolo in alto a sinistra di ogni zona viene mostrato il relativo id.

## Funzionalità
Come utilizzare la finestra principale di ZoneRW.
- I pulsanti "Aggiungi zona" ed "Elimina zona" rispettivamente aggiungono o eliminano una zona.
- Il pulsante "Genera TEI" inserisce negli appunti il testo contenente le zone in formato XML-TEI.
- Il pulsante "Esporta immagine" esporta un file con l’immagine mostrata.
- È possibile modificare i dati relativi alle zone manualmente inserendo le coordinate.
- Quando il cursore si trova all'interno dell'elenco delle zone, con i tasti freccia su/freccia giù è possibile spostarsi tra le righe.
- Quando il cursore si trova nelle colonne ulx o uly, cliccando sull’immagine le coordinate del punto in alto a sinistra si aggiornano automaticamente in base al clic. Stessa cosa quando il cursore si trova su lrx e lry.
- Il check box "Modifica" nasconde gli elenchi dei documenti e delle immagini in modo da evitare di cambiare pagina durante la modifica delle zone.
- Quando si clicca sull'immagine per aggiornare una delle coordinate ulx, uly, lrx o lry, il cursore resta nel campo della coordinata. Attivando il check box "Clic & valida", il cursore si sposta automaticamente alla coordinata successiva o crea una nuova zona se necessario. 
- Quando il cursore si trova nella colonna points, ogni clic genera un nuovo vertice per il poligono irregolare definito dai punti nel campo points.
- La zona attualmente in fase di modifica viene colorata di giallo
- Le zone definite come coordinate di un rettangolo vengono colorate in rosso.
- Le zone definite come coordinate di un poligono vengono colorate in viola.
- Un termometro orizzontale permette di modificare il livello di zoom dell’immagine.

## Consigli di utilizzo
- L'uso del check box "Clic & valida" è molto utile quando bisogna inserire le zone. Per operazioni di correzione fine è più utile tenere il check box disattivato in modo da poter cliccare più volte sulla stessa coordinata fino a trovare la posizione corretta.
- Il clic sulla barra di scorrimento laterale dell'immagine è un clic, quindi se il cursore si trova su ulx, uly, lrx, lry o points il clic verrà intercettato come nuova coordinata. Quindi per effettuare lo scroll posizionarsi su uno degli altri elementi della lista delle zone oppure usare la funzione di scroll del mouse/trackpad.


# ZoneRW
ZoneRW is a WYSIWYG tool that, starting from the declaration of the surfaces with the relative graphic and zone tags, shows the zones encoded in the TEI file with the relative xml: id attributes, allowing them to be modified on the fly (updating the coordinates, adding or removing zone) generating the relative TEI code. The result on the screen can be exported to images.

## Cite this code
[![DOI](https://zenodo.org/badge/414180951.svg)](https://zenodo.org/badge/latestdoi/414180951)

## Environment
ZoneRW is developed using 4th Dimension.
Among the many features of the 4D platform, the native XML support with the Apache Foundation's Xerces library, the access to the structure through the DOM (Document Object Model) standard, the management of the SVG (Scalable Vector Graphics) format, both as visualization that creation and modification.

## Installation
To use ZoneRW connect to the 4D download page (https://it.4d.com/product-download/4D-v18-LTS) to download 4Dv18 (registration required).
Installed 4D, use the 4D application to open ZoneRW:
  - on Windows, in the 4D/4D v18.5/4D folder, open the 4D.exe file; choose "File -> Open -> Local application ->" and open the ZoneRW.4DB file in the ZoneRW.4dbase folder you downloaded;
  - on MacOS, in the folder /Applications/4D v18.5/, open the 4D.app file; then choose "File -> Open -> Local application ->" and open the ZoneRW.4dbase package you downloaded.

## XML-TEI specifications
In the start window, click on the "XML folder" space to select the folder containing the XML files, and on the "Picture folder" space to select the folder containing the images. The chosen settings will be stored for subsequent program starts.
After clicking on "Start", ZoneRW shows the list of files from the folder set at startup.
When the user chooses a file, ZoneRW shows the images recalled in the file.
Once an image has been chosen, ZoneRW loads it from the folder set for image search.
ZoneRW searches for the image:
- in the folder set at startup;
- in a subfolder having the same name as the image file;
- in a subfolder having the same name as the XML file without the extension;
- in a subfolder having the same name as the XML file without the extension by replacing the "." with the "\_" character.

If the image has been found, ZoneRW looks for the \<surface\> tag related to the chosen page; intercepted the \<surface\> element, ZoneRW searches among the children
- the \<graphic\> tag to find the corresponding image (@url attribute);
- the declared size (@width attribute), in order to calculate a possible scale ratio between image and coordinates;
- all \<zone\> tags (even nested) to draw the zones on the screen.

The list of zones is populated with the values of the attributes @xml:id, @rendition, and the coordinates with @points, @ulx, @uly, @lrx and @lry.
The relative id is shown in the upper left corner of each area.

## Functionality
How to use the ZoneRW main window.
- The "Aggiungi zona" and "Elimina zona" buttons respectively add or delete a zone.
- The "Genera TEI" button inserts the text containing the zones in XML-TEI format on the clipboard.
- The "Export image" button exports a file with the image shown.
- It is possible to modify the zone data manually by entering the coordinates.
- When the cursor is in the zone list, you can move between the lines with the up/down arrow keys.
- When the cursor is in the ulx or uly columns, clicking on the image, the coordinates of the point at the top left are automatically updated based on the click. Same thing when the cursor is on lrx and lry.
- The "Edit" check box hides the lists of documents and images in order to avoid changing pages when editing zones.
- When clicking on the image in order to update one of the ulx, uly, lrx or lry coordinates, the cursor remains in the coordinate field. By activating the "Click & valid" check box, the cursor automatically moves to the next coordinate or creates a new zone if necessary.
- When the cursor is in the points column, each click generates a new vertex for the irregular polygon defined by the points in the points field.
- Area currently being edited is colored yellow
- Areas defined as coordinates of a rectangle are colored red.
- Areas defined as coordinates of a polygon are colored purple.
- A horizontal thermometer allows you to change the zoom level of the image.

## Usage tips
- The use of the "Click & valid" check box is very useful when entering zones. For fine correction operations it is more useful to keep the check box deactivated so that you can click several times on the same coordinate until you find the correct position.
- Clicking on the image scroll bar is a click, so if the cursor is on ulx, uly, lrx, lry or points the click will be intercepted as a new coordinate. Then to scroll, go to one of the other elements of the zone list or use the mouse/trackpad scroll function.
