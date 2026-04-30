// Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
// de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while.


export function questao13(valorSaque: number): void {
    let notas50 = 0
    let notas20 = 0
    let notas10 = 0

    while (valorSaque >= 50) {
        valorSaque -= 50
        notas50++
    }

    while (valorSaque >= 20) {
        valorSaque -= 20
        notas20++
    }

    while (valorSaque >= 10) {
        valorSaque -= 10
        notas10++
    }

    console.log("Notas de 50:", notas50)
    console.log("Notas de 20:", notas20)
    console.log("Notas de 10:", notas10)
}