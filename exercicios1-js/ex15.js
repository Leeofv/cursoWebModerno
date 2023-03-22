/* Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda 
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o 
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza 
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console: 
“Não trabalhamos com este tipo de automóvel aqui”. */

function revenda(carro){
    switch(carro){
        case "carro hatch":
            return console.log("Compra efetuada com sucesso.")
        case "carro sedan":
        case "motocicletas":
        case "caminhonetes":
            return console.log("Tem certeza que prefere este modelo?")
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui.")
    }
}
revenda("carro sedan")
revenda("motocicletas")
revenda("caminhonetes")
revenda("carro hatch")
revenda("Caminhão")