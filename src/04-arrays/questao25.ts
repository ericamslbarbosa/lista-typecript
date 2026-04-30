// Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);
// a) Pedir os nomes das pessoas usando o Prompt e o método push();
// b) Apresentar os nomes digitados;
// c) Ordenar o vetor usando o sort();
// d) Apresentar os nomes inseridos de forma ordenada.

export function questao25(): void {
    let nomes: string[] = []

    for (let i = 0; i < 15; i++) {
        let nome = prompt("Digite um nome: ") || ""
        nomes.push(nome)
    }

    console.log("Nomes:", nomes)

    nomes.sort()

    console.log("Ordenados:", nomes)
}