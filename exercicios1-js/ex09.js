/*
Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de 
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas 
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor 
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum 
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para 
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou 
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 
e o aluno será aprovado. 
*/

function classificaAluno(nota){
    let notaCorrigida = arredondar(nota)
    if(notaCorrigida >= 40){
        console.log(`O aluno está aprovado ${notaCorrigida}`)
    }else{
        console.log(`O aluno está reprovado ${notaCorrigida}`)
    }
}

function arredondar(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}
classificaAluno(38)
classificaAluno(48)
classificaAluno(37)