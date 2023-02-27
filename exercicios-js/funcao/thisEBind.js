const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()
//"bind" é um método responsável por amarrar um determinado objeto, pra ele ser o dono da execusão daquele método, sempre que aquele método for chamado.