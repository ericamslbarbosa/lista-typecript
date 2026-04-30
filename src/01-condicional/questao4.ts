// Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.

export function questao4(): void {
    let entrada1 = prompt("Digite o primeiro número: ")
    let numero1: number = Number(entrada1)

    let entrada2 = prompt("Digite o segundo número: ")
    let numero2: number = Number(entrada2)

    if (numero1 === numero2) {
        console.log("Números iguais")
    }
    else if (numero1 > numero2) {
        console.log("Primeiro é maior")
    }
    else {
        console.log("Segundo maior")
   }  
}