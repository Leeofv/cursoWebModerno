//Object.preventExtensions (nesse método pode-se alterar e excluir, mas não adicionar)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
//Exemplo:
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'//não adicionou a descrição
delete produto.tag
console.log(produto)

//Object.seal(Nesse método só pode alterar. Não pode deletar nem adicionar)
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
//Exemplo:
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes(fica tudo congelado)