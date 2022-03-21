import { Router } from 'express'
import FornecedorController from '../controller/FornecedorController.js'

const router = Router();

router.get('/fornecedor', (req, res)=>{
    res.send('Rota GET funcionando.')
})

router.post('/fornecedor/criartabela', FornecedorController.createTable)

router.get('/fornecedor/buscartodosfornecedores', FornecedorController.buscarFornecedores)

router.get('/fornecedor/buscarumfornecedor/:id', FornecedorController.buscarPorId)

router.post('/fornecedor/novofornecedor', FornecedorController.addNovoFornecedor)

router.delete('/fornecedor/deletarfornecedor/:id', FornecedorController.deletarFornecedor)

router.put('/fornecedor/atualizarfornecedor/:id', FornecedorController.attPorId)

router.post('/fornecedor', (req, res)=> {
    res.status(200).json(`Rota funcionando`)
})

export default router