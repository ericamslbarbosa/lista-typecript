// Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

export function questao3(): void {
    let entrada1 = prompt("Digite o primeiro número: ")
    let numero1: number = Number(entrada1)

    let entrada2 = prompt("Digite o segundo número: ")
    let numero2: number = Number(entrada2)
    let opcaoEntrada = prompt(
        "Escolha a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"
    )
    let opcao: number = Number(opcaoEntrada)

    let resultado: number

    switch (opcao) {
        case 1:
            resultado = numero1 + numero2
            console.log("Resultado:", resultado)
            break

        case 2:
            resultado = numero1 - numero2
            console.log("Resultado:", resultado)
            break

        case 3:
            resultado = numero1 * numero2
            console.log("Resultado:", resultado)
            break

        case 4:
            if (numero2 !== 0) {
                resultado = numero1 / numero2
                console.log("Resultado:", resultado)
            } else {
                console.log("Não é possível dividir por zero")
            }
            break

        default:
            console.log("Opção inválida")
    }
}