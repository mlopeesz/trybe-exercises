let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];

for (let index = 1; index <= 25; index += 1){
  array.push(index);
}
console.log(array)

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let divisao = 0;

for (let i = 0; i < array.length; i += 1){
  divisao = array[i] / 2;
  console.log(divisao)
}