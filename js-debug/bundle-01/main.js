/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1

for (let i = 0; i > 5; i++) {
    console.log(i);
}

// 1- questo comando for vuole stampare in console numeri da 0 a 4

// 2- l'errore sta nel >, per farlo funizonare bisogna usare <

// 3- non sono presenti errori di logica.




// // ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

// 1- questa funzione fa in modo che se il numero inserito è pari lo somma a +5, in caso contrario, cioe se è dispari lo stampa solamente

// 2- l'errore di sintassi sta nell' =, per eseguire il comando in modo corretto usiamo invece ===

// 3- non ci sono errori di logica




// // ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

// 1- la funzione vuole stampare i numeri da 0 a 4

// 2- l'errore sta nelle virgole, bisogna usare i punti e virgola al loro posto

// 3- non ci sono errori di logica



// // ESERCIZIO 4 (suggerimento: ci sono 7 errori)

function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }

}

// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// 1-la funzione vuole pushare nell'array evenNumbers solo i numeri pari

// 2- gli errori di sintassi sono:

// il return deve essere fuori dal ciclo for
// riga 65 = il punto e virgola alla fine di i++
// riga 65 = il -1 non è necessario
// riga 66 = il numbers deve essere numbers[i]
// riga 66 = l' = deve essere invece ===
// riga 66 = il punto e virgola dopo la chiusura parentesi non va messo
// riga 67 = push(i) deve essere push(numbers[i])
