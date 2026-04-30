// Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa

export function questao20(): void {
    let lista = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    let pares = lista.filter(numero => numero % 2 === 0)
    let impares = lista.filter(numero => numero % 2 !== 0)
    let multiplos = lista.filter(numero => numero % 2 === 0 || numero % 3 === 0 || numero % 4 === 0)
    let reverso = [...lista].reverse()

    console.log("Pares:", pares)
    console.log("Ímpares:", impares)
    console.log("Múltiplos de 2,3 ou 4:", multiplos)
    console.log("Reverso:", reverso)
}