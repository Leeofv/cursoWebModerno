//Faça um algoritmo que calcule o fatorial de um número.

function fatorial(num){
    if (num === 0 || num === 1)
        return 1;
        for(let i = num -1; i >= 1; i--){
            num = num * i
        }
        return num
}
console.log(fatorial(5))

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))