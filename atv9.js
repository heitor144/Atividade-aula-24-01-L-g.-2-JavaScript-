console.clear();
const promptSync = require('prompt-sync');
const prompt = promptSync();

let real1 = 3.75, real2 = 1.25;

let codSelec = Number(prompt("Digite 1, 2 ou 3: "));

switch (codSelec) {
    case 1:
        console.log(`Soma dos valores: ${real1 + real2}`);
        break;
    case 2:
        console.log(`Multiplicação dos valores: ${real1 * real2}`);
        break;
    case 3:
        console.log(`Divisão dos valores: ${real1 / real2}`);
        break;
    default:
        console.log(`Valor Inválido.`);
        break;
}
