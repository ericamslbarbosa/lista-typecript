// Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.

export function questao8(): void {
    let pares: number = 0
    let impares: number = 0

    while (true) {
        let entrada = prompt("Digite um número (-1 para parar): ")
        let numero: number = Number(entrada)

        if (numero === -1) {
            break
        }

        if (numero % 2 === 0) {
            pares++
        } else {
            impares++
        }
    }

    console.log("Quantidade de números pares:", pares)
    console.log("Quantidade de números ímpares:", impares)
}