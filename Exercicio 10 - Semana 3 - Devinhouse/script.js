var controlaLoop = 0;
const data = localStorage.getItem("data");
let dados = [];

if (data != null) {
  const returnData = JSON.parse(data);
  dados = returnData;
  startScript()
}


function startScript() {
  console.log(dados[controlaLoop]);
  document.body.style.backgroundColor = dados[controlaLoop].corDeFundo;
  setTimeout(function () {
    controlaLoop++;
    if (controlaLoop == dados.length) {
      controlaLoop = 0
      startScript()
    } else {
      startScript();
    }
  }, dados[controlaLoop].timer * 1000);
}

let btnIncluir = document.getElementById("dataEntry").addEventListener("submit", (event) => {
  let colors = document.getElementById("color").value;

  let timer = parseInt(document.getElementById("number").value);

  const data = {
    corDeFundo: colors,
    timer: timer,
  };
  dados.push(data);
  const dataToString = JSON.stringify(dados);
  localStorage.setItem("data", dataToString);
});
