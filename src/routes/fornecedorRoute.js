import { Router } from 'express'
import FornecedorController from '../controller/FornecedorController.js'

const router = Router();

router.get('/fornecedor', (req, res)=>{
    res.send('Rota GET funcionando.')
})

router.post('/fornecedor/criartabela', FornecedorController.criarTabela)

router.get('/fornecedor/buscartodosfornecedores', FornecedorController.getTodosFornecedores)

router.get('/fornecedor/buscarumfornecedor/:id', FornecedorController.buscarUmFornecedor)

router.post('/fornecedor/novofornecedor', FornecedorController.postarNovoFornecedor)

router.delete('/fornecedor/deletarfornecedor/:id', FornecedorController.deletarPorId)

router.put('/fornecedor/atualizarfornecedor/:id', FornecedorController.attFornecedorPorId)

router.post('/fornecedor', (req, res)=> {
    res.status(200).json(`Rota funcionando`)
})

export default router