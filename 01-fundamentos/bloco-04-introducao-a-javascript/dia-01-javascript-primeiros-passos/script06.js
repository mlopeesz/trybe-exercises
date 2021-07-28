let peca = "Cavalo".toLowerCase();

switch (peca) {
  case "bispo":
    console.log("diagonal");
    break;

  case "peao":
    console.log("vertical");
    break;

  case "rei":
    console.log("horizontal/vertical/diagonal")
    break;

  case "rainha":
    console.log("horizontal/vertical/diagonal")
    break;

  case "torre":
    console.log("horizontal/vertical")
    break;

  case "cavalo":
    console.log("em forma de L")
    break;

  default: 
    console.log("Peça inválida")
}