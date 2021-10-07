# ZoneRW
ZONERW è un tool WYSIWYG che, a partire dalla dichiarazione delle surface con i relativi tag graphic e zone, mostra le zone codificate nel file TEI con i relativi attributi xml:id, consentendone la modifica al volo (aggiornamento delle coordinate, aggiunta o rimozione di zone) generando il codice TEI relativo. Il risultato a video può essere esportato in immagini.

## Ambiente
ZoneRW è stato sviluppato utilizzando 4th Dimension.
Tra le molteplici caratteristiche della piattaforma 4D sono stati sfruttati il supporto nativo XML con la libreria Xerces di Apache Foundation, l’accesso alla struttura tramite lo standard DOM (Document Object Model), la gestione del formato SVG (Scalable Vector Graphics), sia come visualizzazione che creazione e modifica.

## Installazione
Per utilizzare ZoneRW collegati alla pagina di download di 4D (https://it.4d.com/product-download/4D-v18-LTS) per scaricare 4Dv18 (sarà richiesta di iscrizione al sito).
Installato 4D, usa l'applicatione 4D per aprire ZoneRW:
  - su Windows apri il file ZoneRW.4DC
  - su MacOS apri il pacchetto ZoneRW.4dbase

## Specifiche XML-TEI
Dopo avere scelto la cartella contenente i file XML-TEI, ZoneRW mostra l'elenco dei file come impostata all'avvio.
Quando l’utente sceglie un file, ZoneRW mostra le immagini richiamate nel file.
Scelta un'immagine, ZoneRW la carica dalla cartella impostata per la ricerca delle imamagini
ZoneRW cerca l'immagine:
- nella cartella impostata all'avvio;
- in una sottocartella avente lo stesso nome del file immagine;
- in una sottocartella avente lo stesso nome del file XML senza l'estensione;
- in una sottocartella avente lo stesso nome del file XML senza l'estensione sostituendo il carattere "." col carattere "_".

Se l'immagine è stata trovata, ZoneRW cerca il tag \<surface\> relativo alla pagina scelta; intercettato l’elemento \<surface\>, ZoneRW ricerca tra i figli 
- il tag \<graphic\> per trovare l’immagine corrispondente (attributo @url);
- la dimensione dichiarata (attributo @width), in modo da calcolare un eventuale rapporto di scala tra immagine e coordinate);
- tutti i tag \<zone\> (anche annidati) per disegnare le zone a video. 

L’elenco delle zone viene popolato con i valori degli attributi @xml:id, @rendition, e le coordinate con @points, @ulx, @uly, @lrx e @lry.
Nell’angolo in alto a sinistra di ogni zona viene mostrato il relativo id.

## Funzionalità
Come utilizzare la finestra principale di ZoneRW.
- I pulsanti Aggiungi zona ed Elimina zona rispettivamente aggiungono o eliminano una zona
- Il pulsante Genera TEI inserisce negli appunti il testo contenente le zone in formato XML-TEI
- Il pulsante Esporta immagine esporta un file con l’immagine mostrata
- È possibile modificare i dati relativi alle zone manualmente inserendo i le coordinate.
- Quando il cursore si trova all'interno dell'elenco delle zone, con i tasti freccia su/freccia giù è possibile spostarsi tra le righe.
- Quando il cursore si trova nelle colonne ulx o uly, cliccando sull’immagine le coordinate del punto in alto a sinistra si aggiornano automaticamente in base al clic. Stessa cosa quando il cursore si trova su lrx e lry. 
- Quando il cursore si trova nella colonna points, ogni clic genera un nuovo vertice per il poligono irregolare definito dai punti nel campo points.
- La zona attualmente in fase di modifica viene colorata di giallo
- Le zone definite come coordinate di un rettangolo vengono colorate in rosso.
- Le zone definite come coordinate poliono tramite vengono colorate in viola.
- Un ruler orizzontale permette di modificare il livello di zoom dell’immagine.
