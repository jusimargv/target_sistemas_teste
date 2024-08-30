// Questão 1 Sequência Fibonacci

//Desenvolvido por Jusimar


// Função que determina o próximo elemento de uma sequência
function proximoElemento(sequencia) {
    const n = sequencia.length; // Obtém o comprimento da sequência
    let proximo; // Variável para armazenar o próximo elemento
    let logica; // Variável para armazenar a lógica da sequência

    // Sequência a) 1, 3, 5, 7, ___ (Aritmética, diferença de 2)
    if (sequencia[0] === 1 && sequencia[1] === 3) {
        const diferenca = sequencia[1] - sequencia[0]; // Calcula a diferença entre os dois primeiros elementos
        proximo = sequencia[n - 1] + diferenca; // Adiciona a diferença ao último elemento da sequência
        logica = "Sequência aritmética com diferença de 2"; // Define a lógica da sequência
    }

    // Sequência b) 2, 4, 8, 16, 32, 64, ____ (Geométrica, razão de 2)
    else if (sequencia[0] === 2 && sequencia[1] === 4) {
        const razao = sequencia[1] / sequencia[0]; // Calcula a razão entre os dois primeiros elementos
        proximo = sequencia[n - 1] * razao; // Multiplica o último elemento pela razão
        logica = "Sequência geométrica com razão de 2"; // Define a lógica da sequência
    }

    // Sequência c) 0, 1, 4, 9, 16, 25, 36, ____ (Quadrados perfeitos)
    else if (sequencia[0] === 0 && sequencia[1] === 1) {
        const proximoIndice = Math.sqrt(sequencia[n - 1]) + 1; // Calcula o próximo índice como a raiz quadrada do último elemento mais 1
        proximo = proximoIndice * proximoIndice; // Eleva o próximo índice ao quadrado
        logica = "Sequência de quadrados perfeitos"; // Define a lógica da sequência
    }

    // Sequência d) 4, 16, 36, 64, ____ (Quadrados de números pares)
    else if (sequencia[0] === 4 && sequencia[1] === 16) {
        const proximoIndice = Math.sqrt(sequencia[n - 1]) + 2; // Calcula o próximo índice como a raiz quadrada do último elemento mais 2
        proximo = proximoIndice * proximoIndice; // Eleva o próximo índice ao quadrado
        logica = "Sequência de quadrados de números pares"; // Define a lógica da sequência
    }

    // Sequência e) 1, 1, 2, 3, 5, 8, ____ (Fibonacci)
    else if (sequencia[0] === 1 && sequencia[1] === 1) {
        proximo = sequencia[n - 1] + sequencia[n - 2]; // Soma os dois últimos elementos da sequência
        logica = "Sequência de Fibonacci"; // Define a lógica da sequência
    }

    // Sequência f) 2, 10, 12, 16, 17, 18, 19, ____ (Números começando com 2 e depois todos os números de 10 a 19)
    else if (sequencia[0] === 2 && sequencia[1] === 10) {
        if (sequencia[n - 1] === 19) {
            proximo = 20; // Se o último elemento for 19, o próximo é 20
        } else {
            proximo = sequencia[n - 1] + 1; // Caso contrário, incrementa o último elemento em 1
        }
        logica = "Números começando com 2 e depois todos os números de 10 a 19"; // Define a lógica da sequência
    }

    return { proximo, logica }; // Retorna o próximo elemento e a lógica da sequência
}

// Testando as sequências
const sequencias = [
    [1, 3, 5, 7],
    [2, 4, 8, 16, 32, 64],
    [0, 1, 4, 9, 16, 25, 36],
    [4, 16, 36, 64],
    [1, 1, 2, 3, 5, 8],
    [2, 10, 12, 16, 17, 18, 19]
];

// Itera sobre cada sequência e imprime o próximo elemento e a lógica
sequencias.forEach((sequencia, index) => {
    const { proximo, logica } = proximoElemento(sequencia); // Obtém o próximo elemento e a lógica
    console.log(`Sequência ${String.fromCharCode(97 + index)}: ${sequencia.join(', ')} -> Próximo: ${proximo} (${logica})`); // Imprime a sequência, o próximo elemento e a lógica
});
