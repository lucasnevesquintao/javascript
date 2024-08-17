/*
if (SE)
else (SE NãO)

Operadores de Comparação:
> maior que
< menor que
== igual que (Compara SOMENTE o valor)
=== igual que (Compara o VALOR e o TIPO)
>= maior ou igual que
<= menor ou igual que
!= diferente de

*/

const notaDoAluno1 = 8
if(notaDoAluno1 >= 5) {
    console.log("Aluno1 Aprovado!")
} else {
    console.log("Aluno1 Reprovado!")
}

const notaDoAluno2 = 4
if(notaDoAluno2 >= 5) {
    console.log("Aluno2 Aprovado!")
} else {
    console.log("Aluno2 Reprovado!")
}

const notaDoAluno3 = "10"
if (notaDoAluno3 == 10) {
    console.log("Aluno3 Aprovado!")
} else {
    console.log("Aluno3 Reprovado!")
}

const notaDoAluno4 = "10"
if (notaDoAluno4 === 10) {
    console.log("Aluno4 Aprovado!")
} else {
    console.log("Aluno4 Reprovado!")
}



