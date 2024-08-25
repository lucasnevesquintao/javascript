/*
    Estrutura de Repetição - LOOP
        - FOR IN
        - Usado para iterar Objetos
*/

const user = {
    name: 'Lucas',
    age: 15,
    street: "Rua Dos Malandros"
}
 
 for(let key in user){
     console.log(`${key}: ${user[key]}`)
 }

 // user.name --> Lucas
 // user['name'] --> Lucas