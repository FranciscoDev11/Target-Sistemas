// Declaração de Variáveis
let entrada;
let aux = [];
let saida = [];
let resposta;
let textoSaida;

// Declaração de Funções
function inicializarValores(){
    entrada = document.getElementById("entrada");
    resposta = document.getElementById("resposta");

    for(i=0; i<aux.length; i++){
        saida[i] = null;
        aux[i] = null;
    }
}

function inverterCaracteres(){
    inicializarValores();
    aux = entrada.value;
    
    for(i=0; i<aux.length; i++){
        saida[i] = aux[aux.length-(i+1)];
    }
    imprimirResultado();
}

function imprimirResultado(){
    textoSaida = saida.join('');
    resposta.innerHTML = "Texto invertido = " + textoSaida;
}