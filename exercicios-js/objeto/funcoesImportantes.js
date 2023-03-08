const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

//Retorna as chaves do objeto
console.log(Object.keys(pessoa))

//Retorna os valores das chaves do objeto
console.log(Object.values(pessoa))

//Retorna um array com chaves e valores
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//Outra maneira mais clara
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //se a propriedade vai ser listada
    writable: false, //se vai ser modificada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)