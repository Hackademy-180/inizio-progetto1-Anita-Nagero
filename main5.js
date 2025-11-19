// ESERCITAZIONE OGGETTI :
// Creazione e utilizzo di un oggetto in JavaScript
// Creare un oggetto JavaScript personalizzato che contenga:
// almeno 5 proprietà (stringhe, numeri, array o altri valori),
// almeno 2 metodi,
// la possibilità di interrogare alcune sue proprietà tramite accesso diretto o tramite funzioni/appositi metodi,
// la possibilità di modificare una o più proprietà



// Creazione di un oggetto JavaScript personalizzato
let panino = {
    nome: "paneNutella",
    ingredienti: ["pane", "nutella"],
    preparazione: "Uso chiucchiaino e piatto",
    dimensione: "Media",

    // Metodo per aggiungere una farcitura
    aggiungiFarcitura: function(farcitura) {
        this.ingredienti.push(farcitura);
        console.log(`Farcitura aggiunta: ${farcitura}`);
    },

    // Metodo per ottenere la dimensione del panino
    paninoDimensione: function() {
        return this.dimensione;
    },

    // Metodo per visualizzare gli ingredienti
    mostraIngredienti: function() {
        return this.ingredienti.join(", ");
         }

};


// ACCESSO ALLE PROPIETA'-


console.log(panino.nome); 
console.log(panino.preparazione);


// UTILIZZO DEI METODI


panino.aggiungiFarcitura("banana"); 
console.log(panino.mostraIngredienti()); 

console.log(`Dimensione del panino: ${panino.paninoDimensione()}`); 


// condizione verifica

if(paninoNutella){
    console.log("paninoNutella,ce");

    Result('True');
    if(paninoNutella,ce);

}else if('paninoNutella,non ce')
{
    
console.log("non ce paninoNutella");

    
}



   if('paninoNutella,non ce');
else{
    console.log("paninoNutella, non ce")
result('False');
}
 
    
