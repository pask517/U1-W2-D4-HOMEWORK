/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (frase) {
  const parolaComeArray = frase.split(" ") // carattere di separazione
  for (let i = 0; i < parolaComeArray.length; i++) {
    parolaComeArray[i] =
      parolaComeArray[i].charAt(0).toUpperCase() + parolaComeArray[i].slice(1)
  }
  const risultato = parolaComeArray.join(" ")
  return risultato
}

console.log(upperFirst("Oggi ho imparato ad usare le funzioni in javascript"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (numeroDiVolte) {
  const array = []
  for (let i = 0; i < numeroDiVolte; i++) {
    array.push(Math.floor(Math.random() * 11))
  }
  return array
}
console.log(giveMeRandom(5))
