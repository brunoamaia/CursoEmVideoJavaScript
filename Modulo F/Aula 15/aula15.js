let numeros = [3, 4, 8, 1]    // Cria um vetor com 4 posições (0 à 3)
let nomes = ['Bruno', 'Saulo', 'Clara', 'Julia', 'Zenaide', 'Igor']

numeros[4] = 3    // adicona um valor na posção 4
                // Se pular alguma posição, ela ficará Vazia (empty item)
numeros.push(5)   // Cria uma posição nova (no final do array) com o valor de 5

console.log(`Teste com vetores (array): \n"números", possui apenas números e \n"nomes",  possui apenas nomes`)
console.log(`\nOs vetores estão apresentados a seguir: \nnomes: ${nomes} \nnúmeros: ${numeros}`)


console.log('\nVariável de teste 1')
let test1 = [numeros, nomes]
console.log(test1)
console.log(test1.length)
console.log(test1.sort())

console.log('\nVariável de teste 2')
let test2 = nomes + numeros   // Não é possível ordenar (junta todos os valores como um "textão")
console.log(test2)
console.log(test2.length)

console.log('\nVariável de teste 3')
let test3 = []
for (let i = 0; i < numeros.length; i++) {
    test3[i] = numeros[i]
}
n = test3.length
for (let i = n; i < n+nomes.length; i++){
    test3[i] = nomes[i-n]
}
console.log(test3.length)
console.log(test3.sort())

console.log('\nVariável de teste 4')
let test4 = []
for (let i = 0; i < nomes.length; i++) {
    test4[i] = nomes[i]
}
n = test4.length
for (let i = n; i < n+numeros.length; i++){
    test4[i] = numeros[i-n]
}
console.log(test4.length)
console.log(test4.sort())


numeros.sort()
console.log(numeros)
console.log(nomes.sort())