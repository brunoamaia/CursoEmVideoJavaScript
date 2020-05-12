function contador () {

    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let res = window.document.getElementById('result')

    // Verificar se não foi digitado algum valor
    if (inicio.value.length == 0 ) {
      return  res.innerHTML = 'Digite um valor para Iniciar a contagem!!!'
    }
    if (fim.value.length == 0 ) {
        return  res.innerHTML = 'Digite um valor para Terminar a contagem!!!'
    }
    if (passo.value.length == 0 ) {
        return  res.innerHTML = 'Digite um valor para o Passo!!!'
    }

    // Caso todos os valores tenham sido digitados, vamos pegá-los
    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)

    //Verificar se o início eé diferente do fim
    if (inicio == fim) {
        return res.innerHTML = 'O valor do Fim, deve ser diferente do valor do início'
    }
    // Verificar se o passo é válido
    if (passo <= 0) {
        window.alert('O valor do passo é inválido. \nSerá utilizado Passo = 1.')
        passo = 1
    }

    res.innerHTML = `${inicio}`
    if (inicio < fim) {
        for (let c = inicio+passo; c <= fim; c += passo) {
            res.innerHTML += ` ↣ ${c} `
        }
    } else {
        for (let c = inicio-passo; c >= fim; c -= passo) {
            res.innerHTML += ` ↣ ${c} `
        }
    }
    res.innerHTML += `↣🏁`
    
}
