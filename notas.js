function situation(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3)/3
    if (media >= 6){
        let situacao = 'aprovado';
        return situacao
    }else{
        let situacao = 'reprovado';
        return situacao
    }
}

// notas do aluno 1 (8, 8, 7)
// notas do aluno 2 (10, 8, 0)
// notas do aluno 3 (6, 4.5, 4.5)

console.log('o aluno 1 esta ', situation(8, 9, 7));
console.log('o aluno 2 esta ', situation(10, 8, 0));
console.log('o aluno 3 esta', situation(6, 4.5, 4.5));