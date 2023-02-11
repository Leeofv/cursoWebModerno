const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

//Adicionando mais um valor no array
valores[4] = 10
console.log(valores)

//Para saber a quantidade de valores dentro de um array
console.log(valores.length)

//Função para adicionar valores no ARRAY
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//Para retirar o ultimo valor do ARRAY
console.log(valores.pop()) //OU
delete valores[0]
console.log(valores)