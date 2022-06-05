let valores = [8,2,9,5,7,4,6]

console.log(valores)
console.log(`O vetor valores tem ${valores.length} posições!`)

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])

for(let pos = 0; pos < valores.length; pos = pos + 1) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(`e o vetor em ordem crescente fica ${valores.sort()}`)

for( var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}