// Declaração de Variáveis
const jsonData = [
    {
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

let menorValor = [{"dia": 0, "valor": 0}];
let maiorValor = [{"dia": 0, "valor": 0}];
let superiorAMedia = [{}];

let valorMensalTotal = 0;
let diasContados = 0;
let mediaMensal = 0;
let diasSuperioresMedia = 0;

const menorValorR = document.getElementById("resposta1");
const maiorValorR = document.getElementById("resposta2");
const valorSuperiorAMediaR = document.getElementById("resposta3");
const table = document.createElement('table');

// Declaração de Funções
function identificarMenorValor(){
    menorValor.dia = jsonData[0].dia;
    menorValor.valor = jsonData[0].valor;

    for(i=0; i<jsonData.length; i++){
        if(menorValor.valor > jsonData[i].valor && jsonData[i].valor != 0){
            menorValor.dia = jsonData[i].dia;
            menorValor.valor = jsonData[i].valor;
        }
    }
}

function identificarMaiorValor(){
    maiorValor.dia = jsonData[0].dia;
    maiorValor.valor = jsonData[0].valor;

    for(i=0; i<jsonData.length; i++){
        if(maiorValor.valor < jsonData[i].valor){
            maiorValor.dia = jsonData[i].dia;
            maiorValor.valor = jsonData[i].valor;
        }
    }
}

function valorSuperiorAMedia(){
    calcularMediaMensal();
    let j = 0;

    for(i=0; i<jsonData.length; i++){
        if(jsonData[i].valor > mediaMensal){   
            superiorAMedia[j] = jsonData[i];
            diasSuperioresMedia++;
            j++;
        }
    }

}

function calcularMediaMensal(){
    for(i=0; i<jsonData.length; i++){
        if(jsonData[i].valor != 0){
            valorMensalTotal = valorMensalTotal + jsonData[i].valor;
            diasContados++;       
        }

        mediaMensal = valorMensalTotal/diasContados;
    }
}

function imprimirValor(){
    menorValorR.innerHTML = "<p>1- O menor valor foi de $ " + menorValor.valor + " ocorrido no dia " + menorValor.dia + "</p>";
    maiorValorR.innerHTML = "<p>2- O menor valor foi de $ " + maiorValor.valor + " ocorrido no dia " + maiorValor.dia + "</p>";
    valorSuperiorAMediaR.innerHTML = "<p>3- Ao todo " + diasSuperioresMedia + " dias tiveram valor superior a média</p>";    

    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var title1 = document.createTextNode('Dia');
    var title2 = document.createTextNode('Valor');

    for(i=0; i<superiorAMedia.length; i++){
        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        var text1 = document.createTextNode(superiorAMedia[i].dia);
        var text2 = document.createTextNode(superiorAMedia[i].valor);

        if(i==0){
            var tr0 = document.createElement('tr');
            th1.appendChild(title1);
            th2.appendChild(title2);
            tr0.appendChild(th1);
            tr0.appendChild(th2);
            table.appendChild(tr0);
        }

        td1.appendChild(text1);
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

// Execução de Programa
identificarMenorValor();
identificarMaiorValor();
valorSuperiorAMedia();
imprimirValor();

//console.log(jsonData);
//console.log("MediaMensal: " + mediaMensal);
// console.log("ValorSuperiorMedia: ");
//console.log(superiorAMedia);