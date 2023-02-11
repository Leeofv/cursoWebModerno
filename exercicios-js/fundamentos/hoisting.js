//Nesse caso a variável é jogada para cima
console.log('a =', a)
var a = 2
console.log('a =', a)


/*Exemplo do que acontece no código acima que é chamado de hoisting
var a
console.log('a =', a)
a = 2
console.log('a =', a)
*/

//Esse efeito de içamento não ocorre com LET
console.log('a =', a)
let a = 2
console.log('a =', a)