//Para arredondar o valor para cima
console.log(Math.ceil(6.1)) 
//"floor" arredonda o valor para baixo
//"ceil" arredonda o valor para cima

const obj1 = {}
obj1.nome = 'Bola' //Criando dinâmicamente o atributo
//Da mesma forma pode se usar
//obj1['nome'] = 'bola'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
}
/* 
Usando o "this." o atributo fica disponível fora da função.
Se tivesse criado com "var", não estaria diponível
*/
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
