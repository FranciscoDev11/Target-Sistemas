// Declaração de Variáveis
let itemSP = Number(document.querySelector("#item-SP").value);
let itemRJ = Number(document.querySelector("#item-RJ").value);
let itemMG = Number(document.querySelector("#item-MG").value);
let itemES = Number(document.querySelector("#item-ES").value);
let itemOutros = Number(document.querySelector("#item-Outros").value);

let itemSPTextPercent = document.getElementById("itemSP");
let itemRJTextPercent = document.getElementById("itemRJ");
let itemMGTextPercent = document.getElementById("itemMG");
let itemESTextPercent = document.getElementById("itemES");
let itemOutrosTextPercent = document.getElementById("itemOutros");

let itemSPPercent = {};
let itemRJPercent = {};
let itemMGPercent = {};
let itemESPercent = {};
let itemOutrosPercent = {};

let somatoria = {};
let percentuais = [];

// Declaração de Funções
function calcularSomatoria(){
    somatoria.value = itemSP + itemRJ + itemMG + itemES + itemOutros;
}

function calcularPercentuais(){
    itemSPPercent.value = (itemSP*100)/somatoria.value;
    itemRJPercent.value = (itemRJ*100)/somatoria.value;
    itemMGPercent.value = (itemMG*100)/somatoria.value;
    itemESPercent.value = (itemES*100)/somatoria.value;
    itemOutrosPercent.value = (itemOutros*100)/somatoria.value;

    itemSPTextPercent.innerHTML = " - Porcentagem " + new Intl.NumberFormat({maximumSignificantDigits: 3 }).format(itemSPPercent.value) + "%";
    itemRJTextPercent.innerHTML = " - Porcentagem " + new Intl.NumberFormat({maximumSignificantDigits: 3 }).format(itemRJPercent.value) + "%";
    itemMGTextPercent.innerHTML = " - Porcentagem " + new Intl.NumberFormat({maximumSignificantDigits: 3 }).format(itemMGPercent.value) + "%";
    itemESTextPercent.innerHTML = " - Porcentagem " + new Intl.NumberFormat({maximumSignificantDigits: 3 }).format(itemESPercent.value) + "%";
    itemOutrosTextPercent.innerHTML = " - Porcentagem " + new Intl.NumberFormat({maximumSignificantDigits: 3 }).format(itemOutrosPercent.value) + "%";

    percentuais = [
        itemSPPercent.value,
        itemRJPercent.value,
        itemMGPercent.value,
        itemESPercent.value,
        itemOutrosPercent.value,
    ];
}

// Desenhar Gráfico
function desenharGrafico(){
    const ctx = document.getElementById('myChart');

    const DATA_COUNT = 5;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['SP', 'RJ', 'MG', 'ES', 'Outros'],
            datasets: [{
                label: 'Porcentagens por Estado',
                data: percentuais,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {}
    });
}

// Execução de Programa
calcularSomatoria();
calcularPercentuais();
desenharGrafico();
