console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' //Mais usado para substituir o valor do array
aprovados.push('Abia') // Usado para adicionar novo valor no array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
//Os elementos 5, 6, 7 e 8 ficam undefined
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //Altera o array colocando os valores primeiro e em ordem alfabética e os undefined por último
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
//"splice", adiciona eslementos em um determinado índice, deleta e add e del ao mesmo tempo.
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
//Excluiu os elementos 1 e 2 (Carlos e Ana) e adicionou os 'Elementos1' e 'Elementos2'
console.log(aprovados)