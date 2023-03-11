/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true 
ou false. */

function verifica(valor){
    if(valor % 3 == 0){
        return true
    }else {
        return false
    }
}

console.log(verifica(30))
console.log(verifica(10))
console.log(verifica(18))
console.log(verifica(20))
console.log(verifica(39))
