
// <!-- Chiedere all’utente di inserire una parola Creare una 
// funzione per capire se 
// la parola inserita è palindroma -->





function invertiParola (parola){

const chars = parola.split('');

console.log(chars)
const rejoin = chars.reverse().join('');
console.log(rejoin)

return rejoin; 
}
function ePalindroma(parola){

   

    if(parola === invertiParola(parola)){
        return true;

    }
    else {
        return false ;
    }
}
const parola = prompt('inserisci una parola')
console.log(parola)

invertiParola(parola);


if(ePalindroma(parola)){
    alert('la parola è palindroma')

}
else{
    alert('la parola non è palindroma')
}