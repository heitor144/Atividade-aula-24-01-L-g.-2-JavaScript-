console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let A = Number(prompt("Digite um número: "));
let B = Number(prompt("Digite outro número: "));

if ( A == B ) {
    C = A + B
} else {
    C = A * B
}
