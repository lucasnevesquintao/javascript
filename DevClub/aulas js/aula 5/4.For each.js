/*
    ForEach(item, index, array)

        item) - Dados/Informações contidos na posição atual do Array
        index) - Número da Posição. Sempre começando em 0.
        array) - Retorna o Array completo
*/

const users = [
    {name: 'Lucas', age: 15, contact: '(31) 99362-3718'},
    {name: 'Paige Heyn', age: 16, contact: '(408) 578-1640'},
    {name: 'Lucas', age: 25, contact: '(21) 97581-8517'},
    {name: 'Lucas', age: 30, contact: '(11) 90516-0841'},
]

// array = users
users.forEach(function(item, index, array) { // item é obrigatório
    if(item.age < 18){
        console.log(`O cliente ${item.name}, posição ${index} é menor de idade!`)
    }
});