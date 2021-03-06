const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const adicionaTurno = (objeto, chave, valor) => objeto[chave] = valor;

adicionaTurno(lesson2, 'turno', 'manhã');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listarChaves = objeto => Object.keys(objeto);

// Crie uma função para mostrar o tamanho de um objeto.

const tamanhoObjeto = objeto => Object.keys(objeto).length;

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valoresObjeto = objeto => Object.values(objeto);

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.

const allLessons = {};
Object.assign(allLessons, {lesson1, lesson2, lesson3});

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalEstudantes = objeto => {
  let somaTotal = 0;
  const arrayChaves = Object.keys(objeto);

  for (index in arrayChaves) {
    somaTotal += objeto[arrayChaves[index]].numeroEstudantes;
  }
  return somaTotal;
}

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValueByNumber = (objeto,numero) => Object.values(objeto)[numero];

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 