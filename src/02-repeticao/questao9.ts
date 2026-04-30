// Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
//  Função classificarVenda(valor):
// o Se valor &lt; 1000: Retorna &quot;Bronze&quot;
// o Se valor entre 1000 e 5000: Retorna &quot;Prata&quot;
// o Se valor &gt; 5000: Retorna &quot;Ouro&quot;
//  O Programa:
// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
//  O total de vendas da equipe (soma).
//  Quem foi o vendedor com a maior venda (maior valor digitado).
//  Quantos vendedores atingiram a categoria &quot;Ouro&quot




function classificarVenda(valorDaVenda: number): string {
    if (valorDaVenda < 1000) {
        return "Bronze"
    }
    else if (valorDaVenda <= 5000) {
        return "Prata"
    }
    else {
        return "Ouro"
    }
}

export function questao9(): void {
    let somaTotalDasVendas: number = 0
    let maiorValorDeVenda: number = 0
    let numeroDoVendedorComMaiorVenda: number = 0
    let quantidadeDeVendedoresOuro: number = 0

    for (let numeroDoVendedor = 1; numeroDoVendedor <= 5; numeroDoVendedor++) {
        let entrada = prompt(`Digite o valor da venda do vendedor ${numeroDoVendedor}: `)
        let valorDaVenda: number = Number(entrada)

        let categoriaDaVenda = classificarVenda(valorDaVenda)
        console.log(`Vendedor ${numeroDoVendedor}: ${categoriaDaVenda}`)

        somaTotalDasVendas += valorDaVenda

        if (valorDaVenda > maiorValorDeVenda) {
            maiorValorDeVenda = valorDaVenda
            numeroDoVendedorComMaiorVenda = numeroDoVendedor
        }

        if (categoriaDaVenda === "Ouro") {
            quantidadeDeVendedoresOuro++
        }
    }

    console.log("Total de vendas da equipe:", somaTotalDasVendas)
    console.log("Vendedor com maior venda:", numeroDoVendedorComMaiorVenda)
    console.log("Quantidade de vendedores Ouro:", quantidadeDeVendedoresOuro)
}