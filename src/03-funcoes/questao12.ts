// Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
// desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
// *
// **
// ***
export function questao12(tamanho: number): void {
  desenharTriangulo(tamanho)
}

function desenharTriangulo(tamanho: number): void {
  for (let linha = 1; linha <= tamanho; linha++) {
    let texto = ""

    for (let coluna = 1; coluna <= linha; coluna++) {
      texto += "*"
    }

    console.log(texto)
  }
}