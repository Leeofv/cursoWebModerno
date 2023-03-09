console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//"Split" separa todos os letras das palavras e gera em um array, o "reverse" inverte as palavras e o "join" junta.
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

//Não faça isso
String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('Escola cod3r'.reverse())