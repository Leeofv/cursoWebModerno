/* Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:  
Plano  Aumento 
A  10% 
B  15% 
C  20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function funcionario(plano, salario){
    switch(plano){
        case "A":
            return console.log(`${salario}` * 1.1)
        case "B":
            return console.log(`${salario}` * 1.15)
        case "C":
            return console.log(`${salario}` * 1.2)
        default:
            console.log("O plano é inválido.")
    }
}
funcionario("A", 1000)
funcionario("B", 1000)
funcionario("C", 1000)
funcionario("D", 1000)
