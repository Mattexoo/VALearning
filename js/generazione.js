/**
 * FILE FINALIZZATO ALLA GENERAZIONE CASUALE DI VERIFICHE(IN BASE AI FILTRI SELEZIONATI DALL'UTENTE)
 */


// Variabili globali

let livello = "A2"; // variabile contenente il livello dell'utente(gestito in precedenza)

//in alternativa, si può usare profiloUtente.livello ma è un oggetto più complesso che verrà gestito da altri gruppi, quindi usiamo 
//per semplicità questa variabile di esempio

// Seleziona livello di inglese in base a quello selezionato
function selezionaLivello(){
    let options = document.getElementsByTagName("option");
    let selezionato = false
    let i = -1
    while(!selezionato){
        if(options[++i].value==livello){
            options[i].selected = true;
            selezionato = true;
        }
        else 
            options[i].selected = false;

    }

}

let nEs = document.getElementById("nEsercizi");



function genera(){
    nEsCheck();

}
/*
function nEsCheck(){
    let nEs = document.getElementById("nEsercizi");

    if(nEs.value<3 || nEs.value>30){
        nEs.classList.add("invalid-feedback");
    }
}
*/