/*

Functions / Funções
- Trecho de código que é executado SOMENTE quando solicitado (parente gente boa)
- Trecho de código que pode ser Reutilizado várias vezes

[v] 0 que é uma função e como usar
[v] Função VOID (vazia)
[v] Função com parâmetros
[v] Função Return
[v] Arrow Function

*/  /**/

const teste = 10
console.log(teste)

/*void / vazia*/
function digaMeuNome() {
    console.log("Lucas Neves")
}

digaMeuNome()
digaMeuNome()


/*parâmetros*/
function digaUmNome(nome) { /*esse "nome" é uam variável criada*/
    console.log(nome)
}

digaUmNome("Paige Heyn")
digaUmNome("Messi")


function divisao(numero1, numero2) {
    const resultado = numero1 / numero2
    console.log(resultado)
}

divisao(20, 2) /*nesse caso os numeros são separados por virgula*/


/*return*/
function soma(num1, num2) {
    const resultadoo = num1 + num2
    return resultadoo
}

const resultadoDaSoma = soma(33, 44)
console.log(resultadoDaSoma)


function estaEndividado(receita, gastos) {
    if (receita > gastos) {
        return "Esta no Verde"
    } else {
        return "Esta no Vermelho"
    } 
}

const joao = estaEndividado(5000,1000)
const ana = estaEndividado(2000,3000)

console.log(joao)
console.log(ana)

/* Arrow Function (função flecha)*/
function name(nome1,nome2,nome3) {} /*forma clássica*/

const digaMeuNome2 = (nome,nome2,nome3) => {} /*forma moderna*/