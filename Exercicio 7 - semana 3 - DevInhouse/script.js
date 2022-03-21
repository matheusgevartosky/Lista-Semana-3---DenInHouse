const DATA = "https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/BR"

fetch(DATA).then(function(rawData){
    return rawData.json();
}).then(function (json){
    dataManipulation(json);
})

function dataManipulation(json) {
    let dados = json.projecao.populacao
    let container = document.createElement('div')
    let tittle = document.createElement('h1')
    document.body.appendChild(container)
    tittle.innerHTML = `A população brasileira da data de hoje é de  ${dados} pessoas!`
    container.appendChild(tittle)
}
