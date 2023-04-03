/* Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const pares = []
const impares = []
for(let i in numeros){
    if(numeros[i] % 2 === 0){
        pares.push(numeros[i])
    }else {
        impares.push(numeros[i])
    }
}
console.log(`${pares.length} números pares e ${impares.length} números ímpares`)