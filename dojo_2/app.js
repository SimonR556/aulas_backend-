const express = require('express');
const _ = require('lodash'); 
const rotasOperacoes = require('./operacoes');

const app = express();

app.use(rotasOperacoes);

console.log("8 + 4 =", 8 + 4);
console.log("15 - 7 =", 15 - 7);
console.log("6 * 3 =", 6 * 3);
console.log("20 / 5 =", 20 / 5);
console.log("10 / 0 =", "Erro: divisão por zero!");

console.log("Número aleatório (Lodash):", _.random(1, 30));

app.listen(3000, () => {
    console.log('Servidor rodando! Acesse: http://localhost:3000');
});
