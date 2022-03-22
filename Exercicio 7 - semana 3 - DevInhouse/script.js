
var DATA = 'https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/'

console.log(DATA)
const select = document.getElementById('select')
select.addEventListener('change', function () {
    var index = select.selectedIndex
    console.log
    var DATA = 'https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/' + (index-1)
    fetch(DATA).then(function (rawData) {
        return rawData.json();
    }).then(function (json) {
        dataManipulation(json);
        console.log(json)
    })

})

function dataManipulation(json) {
    let dados = json.projecao.populacao
    let container = document.createElement('div')
    let tittle = document.createElement('h1')
    document.body.appendChild(container)
    if(json.localidade != 0){
        tittle.innerHTML = `A população desta região na data de hoje é de  ${dados} pessoas!`
    }else{
        tittle.innerHTML = `A população brasileira na data de hoje é de  ${dados} pessoas!`
    }
    
    container.appendChild(tittle)
}
