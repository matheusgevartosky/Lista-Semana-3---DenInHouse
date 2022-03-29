const dados = [];



document.getElementById("dataEntry").addEventListener("submit", (event) => {
  event.preventDefault();
  let colors = document.getElementById("color").value;
  console.log(colors);
  let timer = document.getElementById("number").value;

  const data = {
    corDeFundo: colors,
    timer: timer,
  };
  dados.push(data);
    const dataToString = JSON.stringify(dados)
    localStorage.setItem('data', dataToString)
});


const getData = localStorage.getItem('data')
if(getData != null) {
    let obj = JSON.parse(getData)
    console.log(obj)
}

function changeColor(color){
    document.body.style.background = cor;
}


