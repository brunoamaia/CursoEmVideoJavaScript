function adicionar() {
    let number = window.document.getElementById('entrada')
    let res = window.document.getElementById('resultado')

    res.innerHTML=''    // Resetar a mesagem da tela
    
    //                  Testar possiveis erros          //

    // Não digitou nenhum valor
    if (number.value.length == 0) {
        return res.innerHTML = 'Por favor, informe um número!'
    }

    number = Number(number.value)
    // valor informado está fora dos limites
    if (number<1 || number>100) {
        res.innerHTML = 'O valor informado deve estar entre 1 e 100!'
    }

    
    
}