// Display the localized help file according to the browser lang
var version = '16';
var release = 'R6';
var id = '3712627';
var localizedURL = 'http://doc.4d.com/4Dv' + version + release + '/4D/' + version;
if (navigator.browserLanguage)
	var language = navigator.browserLanguage;
else
	var language = navigator.language;
if (release != "") 
	localizedURL =  localizedURL  + '-' + release;
localizedURL = localizedURL +  '/4D-SVG-Component.100-' + id + '.';			
if (language.indexOf('fr') > -1) localizedURL =  localizedURL + 'fr';	
	else if (language.indexOf('de') > -1) localizedURL = localizedURL.replace(/-Component/,'') + 'de';	
	else if (language.indexOf('ja') > -1) localizedURL =  localizedURL + 'ja';	
	else if (language.indexOf('es') > -1) localizedURL =  localizedURL + 'es';	
	else if (language.indexOf('pt') > -1) localizedURL =  localizedURL + 'pt';	
else	
localizedURL =  localizedURL + 'en';	
document.location.href = localizedURL + '.html';