



// ESERCIZIO 1 : 
// Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI, o FALSE se sono diversi. 

let cd1="Led Zepplin";
let cd2="Jenis Joplin";


if(cd1==cd2){
    console.log('i cd sono uguali');

}else if(cd1!=cd2){



console.log("sono cd diversi");
}




// ESERCIZIO 2 : 
// Crea per ogni operatore matematico una funzione che faccia la addizione , sottrazione , divisione e moltiplicazione di n numeri.


let numA=1
let numB=2


function addizione(elemento1,elemento2){

let somma=elemento1+elemento2;

        console.log(somma);
        return somma;

    }


function sottrazione(elemento1,elemento2){
let differenza=elemento1-elemento2;
console.log(differenza);
return differenza;

}
    

function divisione(elemento1,elemento2){
   let frazionato=elemento1/elemento2
console.log(frazionato);
return frazionato;

}


function moltiplicazione(elemento1,elemento2){
    let moltiplicazione=elemento1*elemento2
    console.log(moltiplicazione);
    return moltiplicazione;
}



console.log("addizione", addizione(31+1));






// ESECIZIO TRIANGOLO: CHIEDO 3 LATI =CREA 1 FUNZIONE KE PRENDE DI INGRESSO 3 PARAMETRI(H,LARGHEZA E PROFONDITà, E DETERMINA IL TIPO DI TRIANGOLO E STAMPACI POI UN MESSAGGIO) // 
// "Equilatero" se tutti i lati sono uguali.
// "Isoscele" se due lati sono uguali.
// "Scaleno" se tutti i lati sono diversi.

// lato per definire se altezza,profondità,o larghezza


let lato1=5
let lato2=5
let lato3=5


function triangolo(altezza,larghezza,profondita){



    if (altezza==larghezza && altezza==profondita && larghezza==profondita) {
        console.log("Triangolo è un triangolo Equilatero");


    } else if(altezza==larghezza || altezza==profondita || profondita==larghezza){
        console.log("Triangolo isolscele");
    } else if(altezza!=larghezza && larghezza!=profondita && altezza!=profondita){
        console.log("Triangolo scaleno");
    }

}

triangolo(5,5,5);
triangolo(4,6,9);
triangolo(7,7,8);
