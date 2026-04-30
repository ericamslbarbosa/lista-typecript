// Desenvolva a tabuada de um número usando for

export function questao6(): void {
    let entrada = prompt("Digite um número: ")
    let numero: number = Number(entrada)

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}