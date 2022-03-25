
let nomes = ['Matheus', "Ketlin", "Jorge"]

function fetchNome(nome) {
  const API = "https://servicodados.ibge.gov.br/api/v2/censos/nomes/" + nome;

  fetch(API)
    .then(function (rawData) {
      return rawData.json();
    })
    .then(function (json) {
      let returnData = json[0].res;
      let labelsDinamicas = [];
      let dadosDinamicos = [];

      for (let index of returnData) {
        labelsDinamicas.push(index.periodo);
        dadosDinamicos.push(index.frequencia);
      }
      geraGráfico(labelsDinamicas, dadosDinamicos, "matheus ");
    });
}
function geraGráfico(labelsDinamicas, dadosDinamicos, nomeDinamico) {
    const data = {
        labels: labelsDinamicas,
        datasets: [{
            label: nomeDinamico,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: dadosDinamicos,
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}


setInterval(function(){
    

}, 5000;


