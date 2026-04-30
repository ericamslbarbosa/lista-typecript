// Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.


export function questao7(): void {
    let totalSalarios: number = 0
    let maiorSalario: number = 0
    let nomeMaior: string = ""

    let qtdHomens: number = 0
    let qtdMulheres: number = 0
    let total: number = 0

    while (true) {
        let nome: string = prompt("Digite o nome: ") || ""
        let horas: number = Number(prompt("Digite as horas trabalhadas: "))
        let valorHora: number = Number(prompt("Digite o salário por hora: "))
        let sexo: string = prompt("Digite o sexo (M/F): ") || ""

        let salario: number = horas * valorHora

        totalSalarios += salario
        total++;

        if (salario > maiorSalario) {
            maiorSalario = salario
            nomeMaior = nome
        }

        if (sexo === "M" || sexo === "m") {
            qtdHomens++
        } else if (sexo === "F" || sexo === "f") {
            qtdMulheres++
        }

        let continuar: string = prompt("Deseja continuar? (S/N): ") || ""
        if (continuar === "N" || continuar === "n") {
            break
        }
    }

    let percHomens: number = total > 0 ? (qtdHomens / total) * 100 : 0
    let percMulheres: number = total > 0 ? (qtdMulheres / total) * 100 : 0

    console.log("Total de salários:", totalSalarios)
    console.log("Maior salário:", maiorSalario, "Nome:", nomeMaior)
    console.log("Quantidade de homens:", qtdHomens)
    console.log("Quantidade de mulheres:", qtdMulheres)
    console.log("Percentual de homens:", percHomens + "%")
    console.log("Percentual de mulheres:", percMulheres + "%")
}