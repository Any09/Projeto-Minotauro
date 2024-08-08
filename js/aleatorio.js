const nomes = ["Gina", "Zenilda", "Kelly", "Greca", "Jaime", "Lucia", "Pietro"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)