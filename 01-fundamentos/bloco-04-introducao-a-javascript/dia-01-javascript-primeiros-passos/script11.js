let salarioBruto = 3000;
let salarioBase = 0;
let salarioIr = 0;
let salarioLiquido = 0;

if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto * 0.8;
}

else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  salarioBase = salarioBruto * 0.9;
}

else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto * 1.1;
}

else if (salarioBruto > 5189.82) {
  salarioBase = salarioBruto - 570.88;
}
