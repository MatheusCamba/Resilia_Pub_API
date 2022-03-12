const res = require('express/lib/response')
const bdFornecedor = require('../src/model/fornecedor.js')

class FornecedorController{
    
    static criarTabela(req, res){
        const tabela_fornecedor = `
        CREATE TABLE IF NOT EXISTS fornecedor (
            id INTEGER PRIMARY KEY,
            nome VARCHAR(50),
            cnpj INTEGER,
            telefone NUMBER
        )`
        bdFornecedor.run(tabela_fornecedor, (e)=> {
            if(e){
                res.send('Erro ao criar tabela', e.message)
            } else {
                res.send('Tabela criada com sucesso.')
            }
        })
    }
}


module.exports = FornecedorController