//Factory é uma função que no final ela retorna um objeto

//Factory simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

function criarProduto(nome, preco){
    return {
        nome: '...',
        preco: 123,
        desconto: 0.5
    }
}