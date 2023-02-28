const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

/*"forEach" é uma função dentro de fabricantes e fabricantes é um array, e dentro do array você tem essa função "forEach". O forEach vai passar como parâmetro para essa função, o nome do elemento que ele ta percorrendo e também como segundo parâmetro ele vai passar o "indice"
*/
fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})
//função arrow
fabricantes.forEach(fabricante => console.log(fabricante))