// Questão 1 Sequência Fibonacci

//Desenvolvido por Jusimar

const readline = require('readline'); // Importa o módulo 'readline' para ler a entrada do usuário

const rl = readline.createInterface({ // Cria uma interface para ler a entrada do usuário
    input: process.stdin, // Define a entrada padrão (teclado)
    output: process.stdout // Define a saída padrão (console)
});

function fibonacci(numero) { // Define uma função chamada 'fibonacci' que recebe um número 'numero' como argumento
    let a = 0, b = 1; // Inicializa duas variáveis 'a' e 'b' com os primeiros valores da sequência de Fibonacci
    while (b < numero) { // Continua o loop enquanto 'b' for menor que 'numero'
        [a, b] = [b, a + b]; // Atualiza 'a' para o valor de 'b' e 'b' para a soma de 'a' e 'b'
    }
    return b === numero || numero === 0; // Retorna verdadeiro se 'b' for igual a 'numero' ou se 'numero' for 0
}

rl.question('Informe um número: ', (entrada) => { // Solicita ao usuário um número e executa uma função com a entrada
    const numero = parseInt(entrada, 10); // Converte a entrada do usuário para um número inteiro
    if (fibonacci(numero)) { // Verifica se o número pertence à sequência de Fibonacci
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`); // Imprime mensagem se o número pertence à sequência
    } else {
        console.log(`O número ${numero} não pertence à sequência de Fibonacci.`); // Imprime mensagem se o número não pertence à sequência
    }
    rl.close(); // Fecha a interface de leitura
});
