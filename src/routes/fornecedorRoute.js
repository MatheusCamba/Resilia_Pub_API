const { Router } = require('express');
const FornecedorController = require('../../controller/FornecedorController');
const router = Router();

router.post('/fornecedor/criartabela', FornecedorController.criarTabela)

router.get('/fornecedor', (req, res)=>{
    res.send('Rota GET funciona')
})

router.post('/fornecedor', (req, res)=> {
    res.status(200).json(`Rota funciona`)
})

module.exports = router