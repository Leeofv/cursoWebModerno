/* As regras para o cálculo dos anos bissextos são as seguintes: 
De 4 em 4 anos é ano bissexto; 
De 100 em 100 anos não é ano bissexto; 
De 400 em 400 anos é ano bissexto; 
Prevalecem as últimas regras sobre as primeiras. 
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a 
mensagem e retornando  true ou false. */

function calculaAnoBissexto(anoBissexto){
    if(anoBissexto <= 0){
        return false
    } else if(anoBissexto % 400 == 0){
        return true
    }else if(anoBissexto % 100 == 0){
        return false
    } else if(anoBissexto % 4 == 0){
        return true
    } else{
        return false
    }
}

console.log(calculaAnoBissexto(4))
console.log(calculaAnoBissexto(200))
console.log(calculaAnoBissexto(404))
console.log(calculaAnoBissexto(405))
console.log(calculaAnoBissexto(2023))
console.log(calculaAnoBissexto(2020))