// Nullish Coalescing Operator

//const idade = 0; // se for utilizado como null ou  undefined, aí ele vai dar como nao informado.

//document.body.innerText = 'Sua idade é: ',  + (idade ?? 'Não informada'); // sua idade vai sair como 0. 

//Objetos
/*const user  = {
    name: 'Diego',
    nickname: 'Schell', //se voce declarar a variavel por aqui como valor constante, ele vai priorizar o nome que você declarou por aqui.
    idade: 27,
    address: {
        street: 'Rua Teste',
        number: 176,
    },
};
document.body.innerText = JSON.stringify(Object.entries(user))*/

//desestruturação
function mostraIdade(user) {
    return user.idade; 
}

const { address, idade, nickname = 'Fernandes' } = user

//document.body.innerText = JSON.stringify({ address, idade, nickname })
document.body.innerText = mostraIdade(user)