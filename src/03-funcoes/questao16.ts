// Sistema de Eficiência de Combustível
// Crie um programa que ajude um motorista a saber a autonomia do seu carro.
//  Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando
// o consumo médio (km/l).
//  Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos
// quilômetros o carro percorre com o tanque cheio.



function calcularConsumoMedio(distancia: number, combustivel: number): number {
    return distancia / combustivel
}

function calcularAutonomia(consumoMedio: number, capacidadeTanque: number): number {
    return consumoMedio * capacidadeTanque
}

export function questao16(): void {
     const distancia = Number(prompt("Digite a distância percorrida (km):"))
    const combustivel = Number(prompt("Digite o combustível gasto (litros):"))
    const capacidadeTanque = Number(prompt("Digite a capacidade do tanque (litros):"))

    const consumo = calcularConsumoMedio(distancia, combustivel)
    const autonomia = calcularAutonomia(consumo, capacidadeTanque)

    console.log("Consumo médio: " + consumo + " km/L")
    console.log("Autonomia: " + autonomia + " km")
}

