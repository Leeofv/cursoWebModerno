const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá 
    ${nome}!`
console.log(concatenacao, template)

//Expressões
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`)