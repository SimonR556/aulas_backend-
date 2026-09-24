const express = require('express');
const router = express.Router();


//rota de adição
router.get('/adicao', (req, res) =>{
    res.send("voce esta na rota adicao");
})

router.post('/adicao/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    const resultado = a + b;

    res.json({operacao: "adicao", resultado: resultado });
});


//rota de subtração
router.get('/subtracao', (req, res) => {
    res.send("voce esta na rota subtracao");
})

router.post('/subtracao/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    const resultado = a - b;

    res.json({operacao: "subtracao", resultado: resultado})
})


//rota de multiplicação
router.get('/multiplicacao', (req, res) => {
    res.send("voce esta na rota multiplicacao");
})

router.post(('/multiplicacao/:a/:b'), (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    const resultado = a * b;

    res.json({operacao: "multiplicacao", resultado: resultado});
})


//rota de divisão
router.get( '/divisao', (req, res) => {
    res.send("voce esta na rota divisao");
})

router.post (('/divisao/:a/:b'), (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    if (b === 0){
        res.send("Erro: divisão por zero!");
    }else{
        const resultado = a / b;

        res.json({operacao: "divisao", resultado: resultado})
    
    }
})

module.exports = router;