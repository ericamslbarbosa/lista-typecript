// Controle de Estoque de Loja (Loop e Relatório)
// Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o
// preço unitário do produto e a quantidade comprada.
//  Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades,
// aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.
//  O programa deve repetir a solicitação até que o preço informado seja zero.
//  Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos
// cadastrados.



function calcularValorComDesconto(preco: number, quantidade: number): number {
    let total = preco * quantidade

    if (quantidade > 10) {
        total *= 0.95
    }

    return total
}

export function questao17(): void {
    let totalInvestido = 0
    let quantidadeProdutos = 0

    while (true) {
        let preco = Number(prompt("Preço (0 para sair): "))
        if (preco === 0) break

        let quantidade = Number(prompt("Quantidade: "))

        let valorFinal = calcularValorComDesconto(preco, quantidade)

        totalInvestido += valorFinal
        quantidadeProdutos++
    }

    let media = totalInvestido / quantidadeProdutos

    console.log("Total investido:", totalInvestido)
    console.log("Média de preço:", media)
}