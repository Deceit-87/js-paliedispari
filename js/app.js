
// <!-- Chiedere all’utente di inserire una parola Creare una 
// funzione per capire se 
// la parola inserita è palindroma -->



                //  ES PALINDROMA

// function invertiParola (parola){

// const chars = parola.split('');

// console.log(chars)
// const rejoin = chars.reverse().join('');
// console.log(rejoin)

// return rejoin; 
// }
// function ePalindroma(parola){

   

//     if(parola === invertiParola(parola)){
//         return true;

//     }
//     else {
//         return false ;
//     }
// }
// const parola = prompt('inserisci una parola')
// console.log(parola)

// invertiParola(parola);


// if(ePalindroma(parola)){
//     alert('la parola è palindroma')

// }
// else{
//     alert('la parola non è palindroma')
// }




                        // ES PARI E DISPARI



function getRandomInt(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);

}


function ePari(numero){

    console.log(numero)
    if(numero % 2 === 0){
    return true
}

    return false
}

const scelta = prompt('scegli pari o dispari');

const uNumero = parseInt(prompt('Scegli un numero da 1 a 5')); 
const pcNumero = getRandomInt(1,5);
const risultato = uNumero + pcNumero;

if (
    ( scelta === 'pari' && ePari( risultato) ) || 
( scelta === 'dispari' && !ePari( risultato) )
 ) {
     alert('hai vinto')

}
else{
    alert('hai perso')
}






