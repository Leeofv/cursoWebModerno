//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

//Método antigo:
function expoente(base, expoente){
    return Math.pow(base, expoente)
    
}
console.log(expoente(5, 2))

//Método novo:
function expoente2(base, expoente){
    return base ** expoente
    
}
console.log(expoente2(5, 2))