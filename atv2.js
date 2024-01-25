console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let valor1 = Number(prompt("Digite o primeiro número: "));
let valor2 = Number(prompt("Digite o segundo número: "));


console.log(`Soma: ${valor1 + valor2}`);
console.log(`Subtração: ${valor1 - valor2}`);
console.log(`Multiplicação: ${valor1 * valor2}`);
console.log(`Divisão: ${valor1 / valor2}`);

