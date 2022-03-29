let nomes = ["Matheus", "Ketlin", "Jorge", "Clayton", "Vinicius"];
var teste ;

function fetchNome(nome) {
  const API = "https://servicodados.ibge.gov.br/api/v2/censos/nomes/" + nome;
  fetch(API)
    .then(function (rawData) {
      return rawData.json();
    })
    .then(function (json) {
      let returnData = json[0].res;
      console.log(returnData);
      let periodoDinamico = [];
      let frequenciaDinamica = [];
      console.log(frequenciaDinamica, periodoDinamico);

      for (let data of returnData) {
        periodoDinamico.push(data.periodo);
        frequenciaDinamica.push(data.frequencia);
      }

      geraGráfico(periodoDinamico, frequenciaDinamica, json[0].nome);
    });
}

function geraGráfico(labelsDinamicas, dadosDinamicos, nomeDinamico) {
  const data = {
    labels: labelsDinamicas,
    datasets: [
      {
        label: nomeDinamico,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: dadosDinamicos,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {},
  };
  if (teste != null){
      teste.remove()
  }
  teste = document.createElement('canvas')
  const myChart = new Chart(teste, config);
  document.body.appendChild(teste)
}

let qtdNomes = nomes.length;
let index = 0;
setInterval(() => {
  fetchNome(nomes[index]);
  index++;
  if (index == qtdNomes) {
    index = 0;
  }
}, 5000);
