let salarioBruto = 3000;
let salarioInss = 0;
let impostoRenda = 0;
let salarioLiquido = 0;
let salarioBase = 0;

if (salarioBruto <= 1556.94) {
  salarioInss = salarioBruto * 0.08;
}

else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  salarioInss = salarioBruto * 0.09;
}

else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  salarioInss = salarioBruto * 0.11;
}

else {
  salarioInss = salarioBruto - 570.88;
}

salarioBase = salarioBruto - salarioInss;

if (salarioBase <= 1903.98) {
  impostoRenda = salarioBase;
}

else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  impostoRenda = (salarioBase * 0.075) - 142.80;
}

else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  impostoRenda = (salarioBase * 0.15) - 354.80;
}

else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  impostoRenda = (salarioBase * 0.225) - 636.13;
}

else {
  impostoRenda = (salarioBase * 0.275) - 869.36;
}

salarioLiquido = salarioBase - impostoRenda;
console.log(salarioLiquido)