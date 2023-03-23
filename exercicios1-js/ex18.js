/* Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando 
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

function leiaNumero(numero){
    switch(numero){
        case 0:
            return console.log('Zero')
        case 1:
            return console.log('Um')
        case 2:
            return console.log('Dois')
        case 3:
            return console.log('Três')
        case 4:
            return console.log('Quatro')
        case 5:
            return console.log('Cinco')
        case 6:
            return console.log('Seis')
        case 7:
            return console.log('Sete')
        case 8:
            return console.log('Oito')
        case 9:
            return console.log('Nove')
        case 10:
            return console.log('Dez')
        default:
            return console.log("Número fora do intervalo.")

    }
}

leiaNumero(0)
leiaNumero(1)
leiaNumero(2)
leiaNumero(3)
leiaNumero(4)
leiaNumero(5)
leiaNumero(6)
leiaNumero(7)
leiaNumero(8)
leiaNumero(9)
leiaNumero(10)
leiaNumero(11)