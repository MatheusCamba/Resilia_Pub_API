import { Router } from 'express'
import FornecedorController from '../controller/FornecedorController.js'

const router = Router();

router.post('/fornecedor/criartabela', FornecedorController.criarTabela)

router.get('/fornecedor', (req, res)=>{
    res.send('Rota GET funciona')
})

router.post('/fornecedor', (req, res)=> {
    res.status(200).json(`Rota funciona`)
})

export default router