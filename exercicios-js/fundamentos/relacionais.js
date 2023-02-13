//'1' é igual a 1, sem levar em consideração o tipo, apenas o valor
console.log('01)', '1' == 1)
//se é totalmente igual
console.log('02)', '1' === 1)
//se é diferente
console.log('03)', '3' != 3)
//se é extritamente diferente
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date (0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)
