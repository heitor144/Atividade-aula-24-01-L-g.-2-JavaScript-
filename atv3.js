console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let idade = Number(prompt("Digite sua idade: "));

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
