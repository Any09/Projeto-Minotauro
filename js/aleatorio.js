const nomes = ["Agnor", "Sebastião", "Ambrósio", "Valquíria", "Hortencia", "Leôncio", "Jacinto"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)