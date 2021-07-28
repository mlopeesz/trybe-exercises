let estado = "aprovada";

switch (estado) {
    case "aprovada":
        console.log("Você foi aprovada(o)")
        break;

    case "lista":
        console.log("Você está na lista de espera")
        break;
        
    case "reprovada":
        console.log("Você está reprovada(o)")
        break;

    default:
        console.log("Não se aplica.")
}