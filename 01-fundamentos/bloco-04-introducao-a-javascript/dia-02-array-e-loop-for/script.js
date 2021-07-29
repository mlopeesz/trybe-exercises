let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
tasksList.unshift("Escovar os dentes");   // adiciona mais uma tarefa na primeira posicao do array
console.log(tasksList);

tasksList.pop()   // remove a ultima posicao de um array
tasksList.shift()   // remove a primeira posicao de um array

console.log(tasksList);
console.log(tasksList.indexOf('Brincar com o cachorro'))

