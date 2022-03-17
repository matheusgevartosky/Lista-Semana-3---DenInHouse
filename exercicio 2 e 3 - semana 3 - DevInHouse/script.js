document.body.style.boxSizing = 'Border-box'
document.body.style.margin = '0px'
document.body.style.padding = '0px'

const main = document.createElement("div");
main.style.display = "flex";
main.style.flexWrap = 'wrap'
main.style.flexDirection = "Column";
main.style.fontFamily = "Roboto";
main.style.background = "#d0d0d0";
main.style.width = "100%";
main.style.boxSizing = "border-box";
document.body.appendChild(main);

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = 'wrap'
container.style.margin = "auto";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.width = "1070px";
main.append(container);

const title = document.createElement("h1");
title.innerText = "Página Dinamica";
title.style.padding = "40px";
container.append(title);

const imgCont = document.createElement("div");
imgCont.className = "imgContainer";
imgCont.style.display = "flex";
imgCont.style.flexWrap = 'wrap'
imgCont.style.width = '100%'
imgCont.style.height = 'auto'
imgCont.style.justifyContent = "space-around";
imgCont.style.paddingBottom = "50px";
container.append(imgCont);

const createImg1 = document.createElement("img");
createImg1.setAttribute("src", "images/img1.jpg");
createImg1.style.width = "30%";
createImg1.style.borderBottom = "2px solid blue";
createImg1.style.height = "350px";
imgCont.append(createImg1);

const createImg2 = document.createElement("img");
createImg2.setAttribute("src", "images/img2.jpg");
createImg2.style.width = "30%";
createImg2.style.borderBottom = "2px solid yellow";
createImg2.style.height = "350px";
imgCont.append(createImg2);

const createImg3 = document.createElement("img");
createImg3.setAttribute("src", "images/img3.jpg");
createImg3.style.borderBottom = "2px solid red";
createImg3.style.width = "30%";
createImg3.style.height = "350px";
imgCont.append(createImg3);

const createArticle = document.createElement("article");
createArticle.style.border = "1px solid black";
createArticle.style.width = "100%";
createArticle.style.padding = "15px";
createArticle.style.borderRadius = "5px";
createArticle.style.marginBottom = "15px";
createArticle.style.lineHeight = "2";
container.append(createArticle);

const textP = document.createElement("p");
textP.innerText =
  "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Atirei o pau no gatis, per gatis num morreus.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.";
createArticle.append(textP);

const criaUl = document.createElement("ul");
container.append(criaUl);

const criaLi = document.createElement("li");
criaLi.innerHTML = "Elemento da LI 1";
criaLi.style.padding = "5px";
criaLi.style.margin = "5px";
criaUl.appendChild(criaLi);

const criaLi1 = document.createElement("li");
criaLi1.innerHTML = "Elemento da LI 2";
criaLi1.style.padding = "5px";
criaLi1.style.margin = "5px";
criaUl.appendChild(criaLi1);

const criaLi2 = document.createElement("li");
criaLi2.innerHTML = "Elemento da LI 3";
criaLi2.style.padding = "5px";
criaLi2.style.margin = "5px";
criaUl.appendChild(criaLi2);

const createFooter = document.createElement("footer");
createFooter.style.justifyContent = "space-between";
createFooter.style.display = " flex";
createFooter.style.width = "100%";
createFooter.style.padding = "15px";
createFooter.style.borderRadius = "5px";
createFooter.style.marginBottom = "15px";
createFooter.style.lineHeight = "2";
container.append(createFooter);

/* ------------------Inicio Exercicio 2----------------*/

//Botão muda Titulo!

const botaoMudaTitulo = document.createElement("button");
const labelMudaExercicio = document.createTextNode("Mudar o Título");
botaoMudaTitulo.appendChild(labelMudaExercicio);
botaoMudaTitulo.className = "btnTitulo";
botaoMudaTitulo.style.width = "15%";
botaoMudaTitulo.style.margin = "5px";
botaoMudaTitulo.style.height = '25px';
botaoMudaTitulo.style.borderRadius = '2px'
botaoMudaTitulo.style.border = '0px'
createFooter.append(botaoMudaTitulo);

function changeTittle() {
  title.remove("h1");
  botaoMudaTitulo.disabled = 'true'
  let createH6 = document.createElement("h6");
  let createTextH6 = document.createTextNode("Titulo Alterado com sucesso!");
  createH6.appendChild(createTextH6);
  container.insertBefore(createH6, imgCont); //insere antes da criação da div 'imgCont
}

const btn = document.querySelector(".btnTitulo");
btn.addEventListener("click", changeTittle);

//Botão de remover li

const removeLi = document.createElement("button");
const labelRemoveLi = document.createTextNode("Remover Lista");
removeLi.appendChild(labelRemoveLi);
removeLi.className = "removeLi";
removeLi.style.width = "15%";
removeLi.style.margin = "5px";
removeLi.style.height = '25px';
removeLi.style.borderRadius = '2px'
removeLi.style.border = '0px'
createFooter.append(removeLi);

function removoBt() {
  criaUl.remove("ul");
  criaUlNova.remove("ul");
}

const btmRemove = document.querySelector(".removeLi");
btmRemove.addEventListener("click", removoBt);

//botao adicionar LI

const criaLiBtn = document.createElement("button");
const labelCria = document.createTextNode("Criar nova Lista");
criaLiBtn.appendChild(labelCria);
criaLiBtn.className = "criaLi";
criaLiBtn.style.width = "15%";
criaLiBtn.style.margin = "5px";
criaLiBtn.style.height = '25px';
criaLiBtn.style.borderRadius = '2px'
criaLiBtn.style.border = '0px'

createFooter.append(criaLiBtn);

function criaNovaLista() {
  var criaUlNova = document.createElement("ul");
  container.insertBefore(criaUlNova, createFooter);
  for (var i = 0; i < 5; i++) {
    let createLi = document.createElement("li");
    createLi.style.padding = "5px";
    createLi.style.margin = "5px";
    criaLiBtn.disabled = 'true'
    let createLiLabel = document.createTextNode(`Está é a li numero: ${[i]}`);
    createLi.appendChild(createLiLabel);
    criaUlNova.appendChild(createLi);
  }
}

const createLiBtn = document.querySelector(".criaLi");
createLiBtn.addEventListener("click", criaNovaLista);

//Botão adiciona Sombra

const CriaSombra = document.createElement("button");
const labelCriasombra = document.createTextNode("Criar Sombra");
CriaSombra.appendChild(labelCriasombra);
CriaSombra.id = "criaSombra";
CriaSombra.style.width = "15%";
CriaSombra.style.margin = "5px";
CriaSombra.style.height = '25px';
CriaSombra.style.borderRadius = '2px'
CriaSombra.style.border = '0px'
createFooter.append(CriaSombra);


function criaSombra() {
  createArticle.style.boxShadow =
    "inset 1px 1px 0 rgb(190, 190, 190), 0 2px 3px rgb(0 0 0 / 40%)";
    CriaSombra.disabled = 'true'
}

const createShadown = document.getElementById('criaSombra')
createShadown.addEventListener("click", criaSombra);
