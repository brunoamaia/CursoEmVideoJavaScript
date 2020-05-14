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

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] == number) {
            return res.innerHTML = `Digite um valor novo, ${number} já foi informado`
        }
        
    }

    valores.push(number)
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