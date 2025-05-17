let numeroDeMedias = 0;

function ColetarNumero(mensagem) {
    let numeroDe = 0;
    numeroDe = Number(prompt(mensagem));
    VerificarSeENumero(numeroDe, mensagem);
    return numeroDe;
}

function VerificarSeENumero(numeroDe,mensagemCasoNaoSeja) {
    if(!isNaN(numeroDe)) {
        return numeroDe;        
        }
        else {
        console.log("Deve ser numero.");
        ColetarNumero(mensagemCasoNaoSeja);
        }
}


function NumeroDeMedias() {
    let frase = "quantas medias voce quer fazer?";
    numeroDeMedias = 0;
    console.log(frase);
    numeroDeMedias = ColetarNumero(frase);
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
    let frase = "Qual onumero de medianas";
    numeroDeMedianas = 0;
    numeroDeMedianas = ColetarNumero(frase);
    console.log(numeroDeMedianas);
    return numeroDeMedianas;
}

function CalculoDeMedianas() {

    let Medianas = [];
    Medianas = [];

    for (let i =  1;i <= numeroDeMedianas;i++ ) {

    }
}

