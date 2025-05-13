let numeroDeMedias = 0;
function NumeroDeMedias() {
    numeroDeMedias = 0;


    console.log("quantas medias voce quer fazer?");
    numeroDeMedias = Number(prompt("Quantas medias voce quer fazer?"));
    console.log(numeroDeMedias + " medias");
    return numeroDeMedias;
}


function CalculoDeMedias() {
    let somaDasMedias = 0;
    let mediaAtual = 0;
    let mediaResultado = 0;

    for (let i = 1; i <= numeroDeMedias; i++) {
        let qualMedia = i;
        mediaAtual = Number(prompt("Qual a media ficticia da " + qualMedia + "º media?"));
        console.log(qualMedia + "º media:" + mediaAtual);
        somaDasMedias += mediaAtual;
    }
    mediaResultado = somaDasMedias / numeroDeMedias;
    console.log(mediaResultado);
}

let numeroDeMedianas =  0;

function NumeroDeMedianas()  {
    numeroDeMedianas = 0;
    numeroDeMedianas = Number(prompt("Qual onumero de medianas"));
    console.log(numeroDeMedianas);
    return numeroDeMedianas;
}

function CalculoDeMedianas() {

    let Medianas = [];
    Medianas = [];

    for (let i =  1;i <= numeroDeMedianas;i++ ) {
        
    }
}

