let num1 = 1
let num2 = 2

num1++
console.log(num1)
num1--
console.log(num1)

console.log(++num1 === num2--)//Da true pq primeiro ele executa o "++num1" e depois compara. Somente depois ele decrementa o "num2".
console.log(num1 === num2)