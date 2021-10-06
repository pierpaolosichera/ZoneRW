# ZoneRW
ZONERW è un tool WYSIWYG che, a partire dalla dichiarazione delle surface con i relativi tag graphic e zone, mostra le zone codificate nel file TEI con i relativi attributi xml:id, consentendone la modifica al volo (aggiornamento delle coordinate, aggiunta o rimozione di zone) generando il codice TEI relativo. Il risultato a video può essere esportato in immagini.

ZoneRW è stato sviluppato utilizzando 4th Dimension.

Tra le molteplici caratteristiche della piattaforma 4D sono stati sfruttati il supporto nativo XML con la libreria Xerces di Apache Foundation, l’accesso alla struttura tramite lo standard DOM (Document Object Model), la gestione del formato SVG (Scalable Vector Graphics), sia come visualizzazione che creazione e modifica.

Nello specifico, dopo avere scelto la cartella contenente i file XML-TEI, ZONE RW mostra l'elenco dei file. Quando l’utente sceglie un file, ZoneRW ricerca il tag <surface> relativo alla pagina scelta. Quando cerca un tag, ZoneRW attraversa l’albero XML in maniera ricorsiva a partire dalla radice per tutti i figli e per tutti i fratelli di ogni elemento; intercettato l’elemento <surface>, ZoneRW ricerca tra i figli il tag <graphic> per trovare l’immagine corrispondente (attributo url) e la dimensione dichiarata (attributo width, in modo da calcolare un eventuale rapporto di scala tra immagine e coordinate), e tutti i tag <zone> (anche annidati) per disegnare le zone a video. L’elenco delle zone viene popolato con i valori degli attributi xml:id, rendition, e le coordinate come points o come ulx, uly, lrx e lry.
  
Per mostrare l’immagine a video, ZoneRW genera dinamicamente un file SVG che viene renderizzato da 4D in tempo reale. Nell’angolo in alto a sinistra di ogni zona viene mostrato il relativo id.
  
Per quanto riguarda le funzionalità, i pulsanti Aggiungi zona ed Elimina zona rispettivamente aggiungono o eliminano una zona; il pulsante Genera TEI inserisce negli appunti il testo contenente le zone in formato XML-TEI; il pulsante Esporta immagine esporta un file con l’immagine mostrata; è possibile modificare i dati relativi alle zone manualmente inserendo i dati. Quando il cursore si trova nell'elenco delle zone, con i tasti freccia su/freccia giù è possibile spostarsi tra le righe. Quando il cursore si trova nelle colonne ulx o uly, cliccando sull’immagine le coordinate del punto in alto a sinistra si aggiornano automaticamente in base al clic. Stessa cosa quando il cursore si trova su lrx e lry. Quando il cursore si trova nella colonna points, ogni clic genera un nuovo vertice per il poligono irregolare definito dai punti nel campo points. La zona attualmente in fase di modifica viene colorata di giallo, le altre in rosso. Un ruler orizzontale permette di modificare il livello di zoom dell’immagine.

  #Installazione
  Per utilizzare ZoneRW collegati alla pagina di download di 4D (https://it.4d.com/product-download/4D-v18-LTS) per scaricare 4Dv18 (sarà richiesta di iscrizione al sito).
  Installato 4D, usa l'applicatione 4D per aprire ZoneRW:
  - su Windows apri il file ZoneRW.4DC
  - su MacOS apri il pacchetto ZoneRW.4dbase
  
  
