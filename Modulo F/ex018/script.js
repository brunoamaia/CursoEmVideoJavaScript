function adicionar(valores=[]) {
    let number = window.document.querySelector('input#entrada')
    let res = window.document.querySelector('div#resultado')
    let sord = window.document.querySelector('select#sord')
    let cord = window.document.querySelector('select#cord')
    
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

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] == number) {
            return res.innerHTML = `Digite um valor novo, ${number} já foi informado`
        }
        
    }

    // Remover o indicador que nada foi informado
    if (valores[0] == -1) {
        valores[0] = number
    } else {
        valores.push(number)
    }
    
    let n = valores.length

    // Tabela com a sequencia informada
    let c1 = n
    let itema = document.createElement('option') // Criar uma opção para o select - é necessário para o PHP
    itema.text = `Valor ${valores[c1-1]} adicionado.`  // texto da opção
    itema.value = `tab${c1}`                     // Valor da opção (PHP)
    sord.appendChild(itema)

 
    
    let ordem = valores

    function ordenar(a, b) { // Função necessária para realizar a ordenação de forma correta
        return a - b
    }
    ordem.sort(ordenar) // array ordenado

    // Tabela com a sequencia Ordenada

    //Limpar a tabela antiga (caso exista)
    if (cord.length > 0) {
        for (let i = cord.length; i >= 1 ; i--) {
            cord.remove(cord.length-1);
        }
    }
    // Criar uma nova tabela, agora ordenada
    for (let i = 0; i < n; i++) {
        let itemb = document.createElement('option') // Criar uma opção para o select - é necessário para o PHP
        itemb.text = `${ordem[i]}`  // texto da opção
        itemb.value = `tab${i+1}`                     // Valor da opção (PHP)
        cord.appendChild(itemb)
    }
}


function finalizar() {
    let res = window.document.getElementById('resultado')
    let ordem = valores
    let soma = 0
    let media = 0

    function ordenar(a, b) { // Função necessária para realizar a ordenação de forma correta
        return a - b
    }
    ordem.sort(ordenar) // array ordenado

    // Somar os elementos
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }

    media = soma/valores.length

    if (valores[0] == -1) {
        res.innerHTML = `Nenhum valor foi informado!!! <br>`
    } else if (valores.length == 1) {
        res.innerHTML =`Foi informado apenas o valor  ${valores[0]}. <br> 
        Portanto, não é necessário verificar quem é o maior, nem o menor. <br>
        Nem calcular a média do mesmo.`
    } else {
        res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados. <br>`
        res.innerHTML += `O maior valor informado foi: ${ordem[valores.length - 1]}. <br>`
        res.innerHTML += `O menor valor informado foi: ${ordem[0]} <br>`
        res.innerHTML += `Somando todos os valores, temos ${soma} <br>`
        res.innerHTML += `A média dos valores digitados é: ${media.toFixed(2)}  <br>`
        res.innerHTML += ` <br>`
    }
    
    
}