function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    //"floor" arredonda o valor para baixo
    //"ceil" arredonda o valor para cima
}
//Definindo o min e o max
console.log(rand([50, 40]))
//Definindo apenas o min
console.log(rand([992]))
//Definindo apenas o max
console.log(rand([, 10]))
//Deixando em branco, para que fique entre 0 e 1000
console.log(rand([]))