function contador () {

    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)

    var res = window.document.getElementById('result')


    if (inicio == null) {
        return window.alert('Por favor, digite um valor para iniciar o contador!!')
    }
    if (fim == null) {
        return window.alert('Por favor, digite um valor para terminar o contador!!')
    }
    if (passo == null) {
        return window.alert('Por favor, digite um valor para o tamanho do passo!!')
    }

    if (fim < inicio) {
        return window.alert('O valor do Final deve ser Maior que o valor do Início')
    }

    res.innerHTML = `${inicio}`
    for (let c = inicio+passo; c <= fim; c=c+passo) {
        res.innerHTML += ` ➔ ${c} `
    }
}
