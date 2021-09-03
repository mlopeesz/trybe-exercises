// Exercicio 1

const employeesGenerator = (fullname) => {
  const email = fullname.toLowerCase().split(' ').join('_');
  return { fullname, email: `${email}@trybe.com`}
} 

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(employeesGenerator));

// Exercicio 2

const drawResult = (bet, func) => {
  const randomNumber = Math.floor(Math.random() * (Math.floor(6) - Math.ceil(1))) + Math.ceil(1);
  return func(bet, randomNumber) ? 'Parabéns, você ganhou!' : 'Tente novamente.'
}

const winOrLose = (bet, randomNumber) => bet === randomNumber

console.log(drawResult(3, winOrLose));

// Exercicio 3