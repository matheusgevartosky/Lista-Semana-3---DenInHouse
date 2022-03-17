function mostraDiv(obj) {
    var el = document.getElementById(obj);
    var visivel = document.getElementsByClassName("show")[0];
    if(visivel && visivel != el) visivel.classList.toggle("show");

    el.classList.toggle("show");
}


