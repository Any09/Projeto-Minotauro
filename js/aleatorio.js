const nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda", "Lucia", "Ana"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)