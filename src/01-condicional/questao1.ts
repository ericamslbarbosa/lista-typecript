// Crie um programa que receba um número e
//informe se ele é positivo, negativo ou zero

export function questao1(): void {

    let numero = Number(prompt("Digite um número:"))
    let resultado = ""

    if (numero % 2 === 0) {
        resultado += "Par\n"
    } else {
        resultado += "Ímpar\n"
    }

    if (numero > 0) {
        resultado += "Positivo"
    } else if (numero < 0) {
        resultado += "Negativo"
    } else {
        resultado += "Zero"
    }

    const display = document.getElementById("display-questao")
    if (display) {
        display.innerText = resultado
    }
}

(window as any).questao1 = questao1;