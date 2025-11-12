function calcularIMC(peso, altura) {
    if (altura <= 0 || peso <= 0) {
        return "Valores inválidos";
    }

    const imc = peso / (altura * altura);


    return imc;
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30.0 && imc <= 34.9) {
        return "Obesidade Grau I";
    } else if (imc >= 35.0 && imc <= 39.9) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III";
    }
}

const pesoUsuario = 70;
const alturaUsuario = 1.75;

const imcCalculado = calcularIMC(pesoUsuario, alturaUsuario);
const classificacao = classificarIMC(imcCalculado);

console.log(`Seu IMC é: ${imcCalculado}`);
console.log(`Classificação: ${classificacao}`);