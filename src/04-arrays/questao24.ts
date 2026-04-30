// Organizador de Tarefas Diárias
// Você quer organizar suas tarefas de casa e da escola para não esquecer nada. Crie uma função
// chamada gerenciar_tarefas() que não receba argumentos. A função deve:
// a) Permitir que o usuário adicione tarefas a um vetor.
// b) Permitir que o usuário marque tarefas como concluídas (removendo-as da lista, por
// exemplo).
// c) Permitir que o usuário exiba todas as tarefas pendentes.
// Utilize um menu interativo com opções (adicionar, concluir, exibir, sair) e um laço while para
// manter o programa rodando até o usuário escolher sair.

export function questao24(): void {
    let tarefas: string[] = []

    while (true) {
        let opcao = prompt("1-Adicionar 2-Concluir 3-Listar 4-Sair")

        if (opcao === "1") {
            let tarefa = prompt("Digite a tarefa: ") || ""
            tarefas.push(tarefa)
        }
        else if (opcao === "2") {
            let tarefa = prompt("Qual tarefa remover? ") || ""
            tarefas = tarefas.filter(t => t !== tarefa)
        }
        else if (opcao === "3") {
            console.log("Tarefas:", tarefas)
        }
        else if (opcao === "4") {
            break
        }
    }
}