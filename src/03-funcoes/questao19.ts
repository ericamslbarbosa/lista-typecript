// Calculadora de IMC com Classificação.
// Um personal trainer precisa de uma ferramenta para avaliar seus alunos.
//  Função calcular_imc(peso, altura): Retorna o resultado da fórmula IMC = peso/altura².
//  Função classificar_imc(valor_imc): Recebe o IMC e retorna uma string:
// o Abaixo de 18.5: &quot;Abaixo do peso&quot;
// o Entre 18.5 e 24.9: &quot;Peso Normal&quot;
// o 25 ou mais: &quot;Sobrepeso&quot;
//  Função exibir_laudo(nome, classificacao): Imprime: &quot;Paciente: [nome] - Status:
// [classificacao]&quot;.
//  Uso: Peça o nome, peso e altura, processe os dados e exiba o laudo.


export function calcularIMC(peso: number, altura: number): number {
    return peso / (altura * altura)
}

export function classificarIMC(valorIMC: number): string {
    if (valorIMC < 18.5) {
        return "Abaixo do peso"
    }
    else if (valorIMC < 25) {
        return "Peso Normal"
    }
    else {
        return "Sobrepeso"
    }
}


export function exibirLaudo(nome: string, classificacao: string): void {
    console.log(`Paciente: ${nome} - Status: ${classificacao}`)
}

export function questao19(): void {
    let nome: string = prompt("Digite o nome: ") || ""
    let peso: number = Number(prompt("Digite o peso: "))
    let altura: number = Number(prompt("Digite a altura: "))

    let valorIMC = calcularIMC(peso, altura)
    let classificacao = classificarIMC(valorIMC)

    exibirLaudo(nome, classificacao)
}