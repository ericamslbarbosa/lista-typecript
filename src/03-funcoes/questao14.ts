// Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
// esse intervalo e imprimir apenas os números que são múltiplos de 3.


export function questao14(inicio: number, fim: number): void {
    for (let numero = inicio; numero <= fim; numero++) {
        if (numero % 3 === 0) {
            console.log(numero)
        }
    }
}