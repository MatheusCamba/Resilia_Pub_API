import { Router } from 'express'
import FornecedorController from '../controller/FornecedorController.js'

const router = Router();

router.get('/fornecedor', (req, res)=>{
    res.send('Rota GET funcionando.')
})

router.post('/fornecedor/criartabela', FornecedorController.createTable)

router.post('/fornecedor/novofornecedor', FornecedorController.addNewFornecedor)

router.get('/fornecedor/buscartodosfornecedores', FornecedorController.searchFornecedores)

router.get('/fornecedor/buscarumfornecedor/:id', FornecedorController.searchOnlyOne)

router.delete('/fornecedor/deletarfornecedor/:id', FornecedorController.deleteOne)

router.put('/fornecedor/atualizarfornecedor/:id', FornecedorController.updateOne)

router.post('/fornecedor', (req, res)=> {
    res.status(200).json(`Rota funcionando`)
})

export default router