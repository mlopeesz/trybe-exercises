let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let contadorImpar = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if ((numbers[index] % 2) === 0) {
    contadorImpar += 0;
  }
  else {
    contadorImpar += 1;
  }
}
if (contadorImpar === 0) {
  console.log('Nenhum valor impar encontrado');
}
else {
  console.log('Foram encontrados', contadorImpar, 'números ímpares.');
}