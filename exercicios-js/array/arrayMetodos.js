const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebrou o carro! "pop" Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')//adicionando o elemento
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona na primeira posição
console.log(pilotos)

//splice pode adicionar e remover elementos

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')//Adicionou apartir do elemento 2.
console.log(pilotos)

//remover
pilotos.splice(3, 1) //Massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Esse método retorna um novo array a partir do indice "2"
console.log(algunsPilotos1)

const algunspilotos2 = pilotos.slice(1, 4)
//Pegando elementos do indice 1 ao 3.
console.log(algunspilotos2)