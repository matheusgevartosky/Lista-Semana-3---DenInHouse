function geraGráfico(labelsDinamicas, dadosDinamicos, nomeDinamico) {
    const data = {
        labels: labelsDinamicas,
        datasets: [{
            label: nomeDinamico,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: dadosDinamicos,
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}


