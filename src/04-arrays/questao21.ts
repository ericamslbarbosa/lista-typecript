// Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
// entrada de dados, faça o seguinte:
// a) Mostre a quantidade de notas que foram lidas.
// b) Exiba todas as notas na ordem em que foram informadas.
// c) Exiba todas as notas na ordem inversa à que foram informadas.
// d) Calcule e mostre a soma das notas.
// e) Calcule e mostre a média das notas.
// f) Calcule e mostre a quantidade de notas acima da média calculada.

export function questao21(): void {
    let notas: number[] = []
    let soma = 0

    while (true) {
        let entrada = Number(prompt("Digite uma nota (-1 para sair): "))
        if (entrada === -1) break
        notas.push(entrada)
        soma += entrada
    }

    let media = soma / notas.length

    console.log("Quantidade:", notas.length)
    console.log("Notas:", notas)
    console.log("Notas invertidas:", [...notas].reverse())
    console.log("Soma:", soma)
    console.log("Média:", media)

    let acimaMedia = notas.filter(nota => nota > media)
    console.log("Acima da média:", acimaMedia.length)
}