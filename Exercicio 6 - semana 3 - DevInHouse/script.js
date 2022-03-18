const galery = document.getElementById('galery')

const API = "https://dog.ceo/api/breeds/image/random/50"

fetch(API).then(function(rawData){
    return rawData.json();
}).then(function (json){
    dataManipulation(json)
})

function dataManipulation(json){
    const data = json
    
    for (const index of data.message) {
        let imgItem = document.createElement('div')
        let img = document.createElement('img')
        img.className = 'img'
        imgItem.appendChild(img)
        imgItem.className = 'imgContainer'
        img.src = index
        galery.appendChild(imgItem)
        
    }

}


