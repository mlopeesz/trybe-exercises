const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);

  // Faça uma função que retorne o array oddsAndEvens em ordem crescente.

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortArray = (array) => {
      const sortOddsAndEvens = array.sort((a,b) => a-b);
      return sortOddsAndEvens
  }

  console.log(`Os números ${sortArray(oddsAndEvens)} se encontram ordenados de forma crescente!`);