const dados = [];



document.getElementById("dataEntry").addEventListener("submit", (event) => {
  event.preventDefault();
  let colors = document.getElementById("color").value;

  let timer = parent(document.getElementById("number").value);

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
    var obj = JSON.parse(getData)
    console.log(obj)
}

function changeColor(color){
    document.body.style.background = color;
}

setInterval(() => {
    changeColor(obj[0].corDeFundo)
}, obj[0].timer);

