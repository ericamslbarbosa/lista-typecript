// Simulador de Aprovação de Crédito
// Uma loja quer automatizar a análise de crédito de clientes.
//  Função solicitar_renda_mensal(): Pede a renda do usuário. Se o valor for negativo ou zero,
// pede novamente até ser válido.
//  Função analisar_credito(renda, valor_parcela): * A parcela não pode ultrapassar 30% da
// renda.
// i. Se a renda for acima de R$ 5.000,00, o cliente ganha um bônus de R$ 500,00 no
// limite final.
// ii. Retorna true para aprovado ou false para negado.
// Função exibir_status(resultado): Imprime &quot;Crédito Aprovado&quot; ou &quot;Crédito Negado&quot;.
// Peça a renda e o valor da parcela que o cliente deseja pagar, processe e mostre o resultado.

export function solicitarRendaMensal(): number {
    let renda

    do {
        renda = Number(prompt("Digite sua renda: "))
    } while (renda <= 0)

    return renda
}

export function analisarCredito(renda: number, parcela: number): boolean {
    let limite = renda * 0.30

    if (renda > 5000) {
        limite += 500
    }

    return parcela <= limite
}

export function exibirStatus(resultado: boolean): void {
    console.log(resultado ? "Crédito Aprovado" : "Crédito Negado")
}

export function questao18(): void {
    let renda = solicitarRendaMensal()
    let parcela = Number(prompt("Valor da parcela: "))

    let resultado = analisarCredito(renda, parcela)
    exibirStatus(resultado)
}