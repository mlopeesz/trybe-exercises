const sum = require('./exercicio1'); // Importei a função do arquivo exercicio1.js

describe('Exercício 1 - 7.3', () => { // Dividi o exercício 1 em um bloco de testes
  test('1 - Confere se soma de 4 e 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('2 - Confere se soma de 0 e 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('3 - Confere se a função lança um erro quando é passado string como parâmetro', () => {
    expect( () => { sum(4, '5') }).toThrow(); // Atenção para teste quando erro é lançado
  });

  test('4 - Confere se a mensagem de erro é parameters must be numbers', () => {
    expect( () => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers')); // Atenção para teste quando erro é lançado
  });
});
