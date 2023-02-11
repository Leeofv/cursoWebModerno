const escola = "cod3r"

//Mostra a 4 letra da variável, começando pelo "0"
console.log(escola.charAt(4))
//resulta no código da letra em HTML
console.log(escola.charCodeAt(3))
//Pedindo pra mostrar o numero "3" se existir
console.log(escola.indexOf('3'))

//Para mostrar apartir do "od3r"
console.log(escola.substring(1))
//Para ir do "C" até "d"
console.log(escola.substring(0, 3))

//Para concatenar, ou seja, montando uma frase com a variável
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

//Para substituir uma letra ou número
console.log(escola.replace(3, 'e'))
console.log(escola.replace('r', 'e'))

//Para gerar um Array
console.log('Ana,Maria,Pedro'.split(','))