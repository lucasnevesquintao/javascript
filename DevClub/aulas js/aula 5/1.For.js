/*
Estrutura de Repeticao - LOOP
    -FOR
        1) INICIALIZAÇÃO - Criar uma variável e colocar 
                                um valor inicial pra ela 

        2) CONDIÇÃO - Enquanto for true, o laço continuará iterando.
                         Ele irá verificar antes de cada iteração

        3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o 
                                        nosso laço der uma volta

            for ([inicialização]; [condição]; [expressão final]){
                Seu código aqui 
            }
*/

const users = ["Maria", "Jorge", "Kauan"] // lenght(tamanho do array) = 3

for (let i = 0; i < users.length; i++)  { // i++ = i+1
    console.log(users[i])
}
