// Implemente uma função chamada gerarIntervaloFiltrado que receba dois parâmetros numéricos:
// inicio e fim. A função deve seguir os seguintes requisitos:
//  Antes de iniciar o laço, verifique se o valor de inicio é menor ou igual ao valor de fim. Caso não
// seja, exiba uma mensagem de erro ou inverta os valores para garantir que o intervalo seja válido.
//  Utilize uma estrutura de repetição (for ou while) para percorrer todos os números inteiros
// contidos nesse intervalo (inclusive o início e o fim).
//  Durante a iteração, armazene todos os números do intervalo em um array.
//  Após preencher o array, utilize um novo laço de repetição (ou um método de array) para percorrer
// a lista criada.
//  Imprima no console apenas os números que são múltiplos e divisores da sua idade.
//  Ao final, exiba a quantidade total de números que foram impressos.

export function questao28(inicio: number, fim: number, idade: number): void {
    if (inicio > fim) {
        let temp = inicio
        inicio = fim
        fim = temp
    }

    let numeros: number[] = []
    for (let i = inicio; i <= fim; i++) {
        numeros.push(i)
    }

    let contador = 0

    for (let numero of numeros) {
        if (idade % numero === 0 && numero % idade === 0) {
            console.log(numero)
            contador++
        }
    }

    console.log("Quantidade:", contador)
}