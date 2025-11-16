

letN=10;

for(let i=1; i<=NaN;i++) {
    if(i%2===0){
        console.log(i+"è pari");
    }else{
        console.log(i+"è dispari");
    }
    }


    // esercizio2



    letN=10;


for(let i=1;i<=NaN;i++){
    

    if(i%3===0){
        console.log(i+ "è un multiplo di 3");

    }else{
        console.log(i);
    }
    }








    // esercizion.3


    let dado1=Math.floor(Math.random()*6)+1;

let dado2=Math.floor(Math.random()*6)+1;

console.log("Giocatore1 ha tirato:"+dado1);
console.log("Giocatore2 ha tirato:"+dado2);
if(dado1>dado2){
    console.log("Giocatore1 vince!");
}else if(dado2>dado1){
    console.log("Giocatore2 Vince!!");
}else{
    console.log("La partita è Pari!");
}
