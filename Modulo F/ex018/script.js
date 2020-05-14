function adicionar(valores=[]) {
    let number = window.document.getElementById('entrada')
    let res = window.document.getElementById('resultado')
    let sord = window.document.getElementById('sord')
    let cord = window.document.getElementById('cord')
    
    res.innerHTML=''    // Resetar a mesagem da tela
    
    //                  Testar possiveis erros          //

    // Não digitou nenhum valor
    if (number.value.length == 0) {
        return res.innerHTML = 'Por favor, informe um número!'
    }

    number = Number(number.value)
    // valor informado está fora dos limites
    if (number<1 || number>100) {
       return res.innerHTML = 'O valor informado deve estar entre 1 e 100!'
    }

    valores.push(number)

    let c1 = 1
    let itema = document.createElement('option') // Criar uma opção para o select - é necessário para o PHP
    itema.text = `Valor ${number} adicionado.`  // texto da opção
    itema.value = `tab${c1}`                     // Valor da opção (PHP)
    sord.appendChild(itema)
    

    let c2 = 1
    let itemb = document.createElement('option') // Criar uma opção para o select - é necessário para o PHP
    itemb.text = `${number}`  // texto da opção
    itemb.value = `tab${c2}`                     // Valor da opção (PHP)
    cord.appendChild(itemb)

    window.alert(valores)

}