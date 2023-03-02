

function Carro(marca, modelo, ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano

    this.falar = function(){
        console.log(`Meu carro é ${marca}, ${modelo}, ${ano}`)
    }
}

const carro1 = new Carro('Chevrolet', 'Meriva', 2007)
carro1.falar()