// Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

export function questao5(): void {
    let quantidade: number = 0
    let soma: number = 0

    while (true) {
        let entrada = prompt("Digite um número (0 para parar): ")
        let numero: number = Number(entrada)

        if (numero === 0) {
            break
        }

        quantidade++
        soma += numero
    }

    console.log("Quantidade de números digitados:", quantidade)
    console.log("Soma total:", soma)
}