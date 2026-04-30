//  Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).


export function questao10(numeroLimite: number): number {
  let somaTotal = 0

  for (let contador = 1; contador <= numeroLimite; contador++) {
    somaTotal += contador
  }

  return somaTotal
}