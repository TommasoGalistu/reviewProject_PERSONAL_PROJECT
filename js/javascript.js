//collegamenti con html
let immagine = document.querySelector('img')
let nome = document.querySelector('#nome')
let cognome = document.querySelector('#cognome')
let professione = document.querySelector('#lavoro')
let recensione = document.querySelector('#review')
let buttonAvanti = document.querySelector('#avanti')
let buttonIndietro = document.querySelector('#indietro')
let buttonRandom = document.querySelector('#randomButton')



//al caricamento della pagina
window.onload = () => {
    personReview()//callback
}

//variabile che indica la persona corrente dell'array
let persona = 0 ;


//array di persone che hanno effettuato la recensione
let arrReview = [
{
    immagine: "../img/uomo2.jpeg",
    nome: 'Francesco',
    cognome: 'Docci',
    professione: 'Studente',
    recensione: "La capacità di scrivere codice pulito e manutenibile è una rarità, ma questo sviluppatore ha dimostrato di possederla. La struttura del sito è logica e ben organizzata, rendendo facile per noi fare aggiornamenti e manutenzione senza intoppi. Il suo lavoro è un esempio eccellente di programmazione di alta qualità."
},
{
    immagine: "../img/uomo1.webp",
    nome: 'tommaso',
    cognome: 'galistu',
    professione: 'militare',
    recensione: 'Ho avuto il piacere di lavorare con questo sviluppatore e sono rimasto colpito dalla velocità con cui è stato in grado di ottimizzare il nostro sito web. Non solo ha migliorato i tempi di caricamento, ma ha anche assicurato che l’esperienza utente rimanesse fluida e intuitiva. È chiaro che la performance è una priorità assoluta per lui.'
},  
{
    immagine: "../img/donna1.jpg",
    nome: 'barbara',
    cognome: 'papini',
    professione: 'psicoterapeuta',
    recensione: "Sono rimasto estremamente soddisfatto del livello di dettaglio che questo sviluppatore ha dedicato al nostro progetto. Ogni aspetto del sito è stato curato con precisione, dalle animazioni sottili ai gradienti di colore, tutto contribuisce a un’esperienza utente superiore."
},
{
    immagine: "../img/donna2.jpg",
    nome: 'gaia',
    cognome: 'galistu',
    professione: 'ostetrica',
    recensione: "Questo programmatore non si limita a seguire le specifiche; va oltre. Ha introdotto soluzioni innovative che non solo hanno risolto i problemi esistenti, ma hanno anche aperto la strada a nuove possibilità per il nostro sito web. La sua proattività nel suggerire miglioramenti ha avuto un impatto significativo sulla nostra presenza online."
}

]

//funzione per l'inserimento della persona
function personReview(){
    let item = arrReview[persona]
    immagine.src = item.immagine
    nome.textContent = item.nome
    cognome.textContent = item.cognome
    professione.textContent = item.professione
    recensione.textContent = item.recensione
}

buttonAvanti.addEventListener('click', () => {
    persona++
    if(persona == arrReview.length){
        persona=0
    }
    personReview()
})

buttonIndietro.addEventListener('click', () => {
    persona--
    if(persona < 0){
        persona = arrReview.length -1
    }
    personReview()
})

buttonRandom.addEventListener('click', () => {
    persona = Math.floor((Math.random()*3)+1)
    personReview()
})