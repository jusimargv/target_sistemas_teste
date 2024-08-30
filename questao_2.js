// Questão 1 Sequência Fibonacci

//Desenvolvido por Jusimar


// Importa o módulo readline-sync, que permite ler a entrada do usuário no terminal
const readlineSync = require('readline-sync');

// Define uma função chamada 'contarA' que recebe uma string como argumento
function contarA(texto) {
    // Cria uma expressão regular para encontrar todas as ocorrências de 'a' (maiúscula ou minúscula)
    const regex = /a/gi;
    // Encontra todas as correspondências da expressão regular na string
    const correspondencias = texto.match(regex);
    // Retorna o número de correspondências encontradas ou 0 se não houver nenhuma
    return correspondencias ? correspondencias.length : 0;
}

// Solicita ao usuário que informe uma string
const texto = readlineSync.question('Informe um texto: ');
// Chama a função 'contarA' e armazena o resultado na variável 'quantidade'
const quantidade = contarA(texto);
// Imprime a quantidade de vezes que a letra 'a' aparece na string
console.log(`A letra 'a' aparece ${quantidade} vezes no texto.`);
