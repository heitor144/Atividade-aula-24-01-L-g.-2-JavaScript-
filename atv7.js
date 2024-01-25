let valorProduto = 200.00

let numParcelas = 3

if (numParcelas = 3) {
    valorProduto = 200 * 1.10
    console.log(`Valor total: ${valorProduto.toFixed(2)} e valor de cada parcela: ${(valorProduto/3).toFixed(2)}`)
} else {
    valorProduto = 200 * 1.20
    console.log(`Valor total: ${valorProduto.toFixed(2)} e valor de cada parcela: ${(valorProduto/5).toFixed(2)}`)
}
