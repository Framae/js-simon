/*Descrizione: 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 
Consigli del giorno: 
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.*/




//Timer a seguito di un prompt
/*let secondi = prompt('Quanti secondi mancano alla cottura della pasta?');
function pastaPronta() {
    alert('La pasta è pronta!');
}
setTimeout(pastaPronta, secondi * 1000);*/



// conteggio alla rovescia
/*let secondi = 10;
let clockID = setInterval(aggiornaContatore, 1000);
function aggiornaContatore() {
    document.getElementById('contatore').innerHTML = secondi;
    if (secondi == 0) {
        fermaContatore();
        //WORKAROUND - aggiunto un ulteriore timeout alla alert, per consentire al codice
        //document.getElementById('contatore').innerHTML = secondi; 
        //di finire la sua esecuzione
        setTimeout(function() {
            alert('Buon anno nuovo!');
        }, 250);
    } else {
        secondi--;
    }
}
function fermaContatore() {
    clearInterval(clockID);
}*/



// cronometro

// let clock; //salvo l'id di setInterval
// let cronometro = 0;
// const elemCronometro = document.getElementById('cronometro');

// document.getElementById('start').addEventListener('click',
//     function() {
//         clock = setInterval(function() {
//             elemCronometro.innerHTML = cronometro;
//             cronometro++;
//         }, 1000);
//     }
// );

// document.getElementById('stop').addEventListener('click', 
//     function() {
//         clearInterval(clock);
//         cronometro = 0;
//     }
// );

// document.getElementById('pause').addEventListener('click', 
//     function() {
//         clearInterval(clock);
//     }
// );


//esempio setTimeout

/*setTimeout(myFunction, 3000);

function myFunction() {
    alert('Hello!')
}*/


//esempio setInterval

/*let clock = setInterval(myFunction, 3000);

function myFunction () {
    alert('Hello!');
}*/

//esempio clearInterval (la funzione per fermare setInterval)



