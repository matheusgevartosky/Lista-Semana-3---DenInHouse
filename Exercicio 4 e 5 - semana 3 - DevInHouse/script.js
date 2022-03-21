function mostraDiv(obj) {
    var el = document.getElementById(obj);
    var visivel = document.getElementsByClassName("show");
    if(visivel && visivel != el) visivel.classList.toggle("show");
    el.classList.toggle("show");
}


function keyFunction(event) {
  let key = event.which;
  console.log(event.which);
  if (key == 65) {
    document.body.style.backgroundColor = "yellow";
  } else if (key == 80) {
    document.body.style.backgroundColor = "black";
  } else if (key == 32) {
    console.log("apertou espaço");
    inputElement.style.padding = "20px";
    inputElement.style.fontSize = "22px";
  } else if (key == 13) {
    inputElement.style.removeProperty("padding");
    inputElement.style.removeProperty("font-size");
    document.body.style.removeProperty("background-color");
  
}}

const inputElement = document.getElementById("input4");
inputElement.addEventListener("keyup", keyFunction);