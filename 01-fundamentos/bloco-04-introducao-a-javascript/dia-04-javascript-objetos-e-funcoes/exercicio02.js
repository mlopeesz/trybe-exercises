//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function palindromo(palavra){
  if (palavra === palavra.split("").reverse().join("")){
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

palindromo('arara')