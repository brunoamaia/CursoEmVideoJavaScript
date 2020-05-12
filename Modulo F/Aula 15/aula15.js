let numeros = [3, 4, 8, 1]    // Cria um vetor com 4 posições (0 à 3)
let nomes = ['Bruno', 'Saulo', 'Clara', 'Julia', 'Zenaide', 'Igor']

numeros[4] = 3    // adicona um valor na posção 4
                // Se pular alguma posição, ela ficará Vazia (empty item)
numeros.push(5)   // Cria uma posição nova (no final do array) com o valor de 5

console.log(`Teste com vetores (array): \n"números", possui apenas números e \n"nomes",  possui apenas nomes`)
console.log(`\nOs vetores estão apresentados a seguir: \nnomes: ${nomes} \nnúmeros: ${numeros}`)


console.log('\nVariável de teste 1')
console.log('Receber os vetores como um vetor:')
let test1 = [numeros, nomes]
console.log(`Tamanho do vetor: ${test1.length}`)
console.log('Vetor ordenado: ')
console.log(test1.sort())

console.log('\nVariável de teste 2')
console.log('Receber os vetores como uma concatenação')
let test2 = nomes + numeros   // Não é possível ordenar (junta todos os valores como um "textão")
console.log(`Tamanho do vetor: ${test2.length}`)
console.log('O vetor não pode ser ordenado, pois se tornou uma String "gigante": ')
console.log(test2)

console.log('\nVariável de teste 3')
console.log('Pegar os valores de "numeros" e depois de "nomes" para verificar o que acontece: ')
let test3 = []
for (let i = 0; i < numeros.length; i++) {
    test3[i] = numeros[i]
}
n = test3.length
for (let i = n; i < n+nomes.length; i++){
    test3[i] = nomes[i-n]
}
console.log(`Tamanho do vetor: ${test3.length}`)
console.log('Vetor ordenado: ')
console.log(test3.sort())

console.log('\nVariável de teste 4')
console.log('Pegar os valores de "nomes" e depois de "numeros" para verificar o que acontece: ')
let test4 = []
for (let i = 0; i < nomes.length; i++) {
    test4[i] = nomes[i]
}
n = test4.length
for (let i = n; i < n+numeros.length; i++){
    test4[i] = numeros[i-n]
}
console.log(`Tamanho do vetor: ${test4.length}`)
console.log('Vetor ordenado: ')
console.log(test4.sort())

console.log('\nDe forma ordenada, os vetores ficaram da seguinte forma:')
console.log('Números:')
numeros.sort()
for (let i = 0; i < numeros.length; i++) {
    console.log(`A posição ${i} tem o valor: ${numeros[i]}`)
}

console.log('Nomes:')
nomes.sort()
for (let i = 0; i < nomes.length; i++) {
    console.log(`A posição ${i} tem o nome: ${nomes[i]}`)
}

console.log('Buscar a posição/indice de um valor/elemento')
let busca = 8
let indice = numeros.indexOf(busca)
if (indice == -1) {
    console.log(`O valor ${busca} não foi encontrado no vetor.`)
} else {
    console.log(`O valor ${busca} está na posição ${indice}`)
}