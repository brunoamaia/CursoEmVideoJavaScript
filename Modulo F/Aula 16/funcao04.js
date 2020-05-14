// Funçao recursiva
function fatoriala(n) {
    if (n==1) {
        return 1  
    } else {
        return n*fatoriala(n-1)
    }
}


// Função normal 
function fatorialb(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatoriala(5))
console.log(fatorialb(5))