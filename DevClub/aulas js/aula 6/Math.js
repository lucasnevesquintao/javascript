/*
    Math --> Matemática
        -pow(2,2) / potência / 2² = 4
        -sqrt(25,2) / raiz / √25
        -ceil / teto -> arredondar pra cima
        -floor / chão -> arredondar pra baixo
        -random() / número aleátorio entre 0 e 1
        -random() * (max- min) +1; / numero aleatorio de max a min
*/

const calculo = Math.pow(2,5) //2 elevado a 5 2⁵
console.log(calculo)

const calculo2 = Math.sqrt(125,2) //raiz quadrada de 25, o ",2" é obrigatorio
console.log(Math.ceil(calculo2))

const calculo3 = Math.random() * (100 - 1) +1;
console.log(Math.ceil(calculo3))
