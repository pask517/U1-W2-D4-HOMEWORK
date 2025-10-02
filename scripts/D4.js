/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  const result = l1 * l2
  console.log(result)
}

area(3, 2)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (num1, num2) {
  if (num1 !== num2) {
    const result = num1 + num2
    console.log(result)
  } else if (num1 === num2) {
    const result2 = (num1 + num2) * 3
    console.log(result2)
  }
}

crazySum(1, 1)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (num1) {
  if (num1 < 19) {
    const result = Math.abs(num1 - 19)
    console.log(result)
  } else if (num1 > 19) {
    const result2 = Math.abs((num1 - 19) * 3)
    console.log(result2)
  }
}
crazyDiff(29)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (num1) {
  if ((num1 >= 20 && num1 <= 100) || num1 === 400) {
    const result = true
    console.log(result)
  } else if ((num1 < 20 || num1 > 100) && num1 !== 400) {
    const result2 = false
    console.log(result2)
  }
}
boundary(402)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let testo = "EPICODE"
const epify = function (s1) {
  if (s1.startsWith("EPICODE")) {
    const testoGiàConEPICODE = s1.slice(7)
    console.log(testoGiàConEPICODE)
  } else {
    const testoSenzaEPICODE = testo + " " + s1
    console.log(testoSenzaEPICODE)
  }
}

epify("EPICODE è stupenda")

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (num1) {
  if (num1 % 3 === 0 && num1 % 7 === 0) {
    console.log("Multiplo sia di 3 che di 7")
  } else if (num1 % 3 === 0) {
    console.log("Multiplo di 3")
  } else if (num1 % 7 === 0) {
    console.log("Multiplo di 7")
  } else if (num1 % 3 !== 0 && num1 % 7 !== 0) {
    console.log("Non multiplo nè di 3 nè di 7")
  }
}

check3and7(21)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (s1) {
  const arrayString = s1.split("")
  const revertedArrayString = arrayString.reverse()
  const revertedString = revertedArrayString.join("")
  console.log(revertedString)
}

reverseString("EPICODE")
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
// TENTATIVO ANDATO MALE, HO FRITTO IL CERVELLO
// const upperFirst = function (s1) {
//   const arrayString = s1.split(" ")
//   for (let i = 0; i < arrayString.length; i++) {
// const arrayStringCharUpperCase = arrayString[i][0].toUpperCase()
// console.log(arrayStringCharUpperCase)
//   }
// }

// upperFirst("la casa bella")

//const upperfirst = function (str1) {
//const arrayString = str1.split(" ")
//console.log(arrayString)
//const arrayCharString = arrayString.split("")
//console.log(arrayCharString)
//}
//upperfirst("la casa bella")

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (str1) {
  const stringaTagliata = str1.slice(1, -1)
  console.log(stringaTagliata)
}
cutString("EPICODE è bella")

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  let arrayOfRandomNumbers = [Math.ceil(Math.random() * 10)]
}

giveMeRandom()
