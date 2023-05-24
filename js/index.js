var carosello = [
    {
        imgpath: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVNitrZxzAXw&psig=AOvVaw2L-b7CuV_v-bmoeR7NGREq&ust=1683975695217000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPDZ6bzQ7_4CFQAAAAAdAAAAABAD",
        titolo: "Risolvi gli esercizi",
        desc:"...."
    },
    {
        imgpath: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVNitrZxzAXw&psig=AOvVaw2L-b7CuV_v-bmoeR7NGREq&ust=1683975695217000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPDZ6bzQ7_4CFQAAAAAdAAAAABAD",
        titolo: "Risolvi gli esercizi",
        desc:"...."
    },
    {
        imgpath: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVNitrZxzAXw&psig=AOvVaw2L-b7CuV_v-bmoeR7NGREq&ust=1683975695217000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPDZ6bzQ7_4CFQAAAAAdAAAAABAD",
        titolo: "Risolvi gli esercizi",
        desc:"...."
    },
    {
        imgpath: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVNitrZxzAXw&psig=AOvVaw2L-b7CuV_v-bmoeR7NGREq&ust=1683975695217000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPDZ6bzQ7_4CFQAAAAAdAAAAABAD",
        titolo: "Risolvi gli esercizi",
        desc:"...."
    }
];

let esercizio= {
    id:0,
    //testo esercizio/domanda
    argomento:" ",

    difficoltà: 0,
    consegna: " ",

    /**
     * -risposta multipla
     * -testo bucato
     * -vero/falso
     */
    //in base al tipo interpreto l'oggetto risposte in modo opportuno
    tipo: "",

    risposte:{
        punteggio:0,
    }

}

let profiloUtente={
    idUtente: 0,
    classe:"",
    nome:"",
    cognome:"",
    email:"",
    livello:{},//indicare il livello di conoscenza/esercizio/abilità
    preferenze:{},
    storicoEsercizi:{}
}

let documento={

}

