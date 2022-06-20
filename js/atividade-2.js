// Declaração de Variáveis
var fibonacci = [];
const MAX_LENGTH = 100;

var pertence = false;

let numero = document.getElementById("numero");
const resposta = document.getElementById("answer");

// Declaração de Funções
function criarFibonacci(){
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    for(i=0; i<MAX_LENGTH; i++){
        fibonacci[i+2] = fibonacci[i] + fibonacci[i+1];
    }
}

function inspecionarFibonacci(){
    for(i=0; i<MAX_LENGTH; i++){
        if(numero.value == fibonacci[i]){
            pertence = true;
            break;
        }
    }
}

function imprimirResposta(){
    limparResposta();

    if(pertence){
        resposta.innerHTML = resposta.innerHTML + "<p>" + numero.value + " pertence a Sequência Fibonacci</p>";
    }else{
        resposta.innerHTML = resposta.innerHTML + "<p>" + numero.value + " NÃO pertence a Sequência Fibonacci</p>";
    }
}

function limparResposta(){
    resposta.innerHTML = "";
}

// Execução de Programa
function conferirValor(){
    pertence = false;
    inspecionarFibonacci();
    imprimirResposta();
}

criarFibonacci();