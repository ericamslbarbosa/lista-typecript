// Gerador de Lista de Compras Personalizada
// Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa
// adicionar itens e a quantidade de cada um.
// Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
// ● Permitir que o usuário adicione itens à lista(array) até que ele digite &quot;fim&quot;.
// ● Permitir que o usuário apresente todos os itens da lista.
// ● Permitir que o usuário apresente quantos itens há na lista.
// ● Permitir que o usuário remova itens da lista.

export function questao22(): void {
    let lista: string[] = []
    while (true) {
        let item = prompt("Digite um item (ou 'fim'): ") || ""

        if (item === "fim") break
        lista.push(item)
    }

    console.log("Lista:", lista)
    console.log("Quantidade de itens:", lista.length)

    let remover = prompt("Digite um item para remover: ") || ""
    lista = lista.filter(i => i !== remover)

    console.log("Lista atualizada:", lista)
}