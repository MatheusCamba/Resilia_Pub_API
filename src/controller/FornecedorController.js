import bdFornecedor from '../model/fornecedor.js'

class FornecedorController{
    
    static criarTabela(req, res){
        const tabela_fornecedor = `
        CREATE TABLE IF NOT EXISTS fornecedor (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR(50),
            cnpj INTEGER,
            telefone NUMBER
        )`
        bdFornecedor.run(tabela_fornecedor, (e) => {
            if(e){
                res.status(404).send('Erro ao criar tabela', e.message)
            } else {
                res.status(200).send('Tabela criada com sucesso.')
            }
        })
    }

    static getTodosFornecedores(req, res){
        const busca_fornecedor = `
        SELECT * FROM fornecedor`
        bdFornecedor.all(busca_fornecedor, (error, result) =>{
            if(error){
                res.status(404).send('Error ao buscar', error.message)
            } else {
                res.status(200).json(result)
            }
        })
    }

    static async postarNovoFornecedor(req, res){
        const newFornecedor = await new Promise ((resolve, reject) => {
            const result = {
                nome:req.body.nome,
                cnpj:parseInt(req.body.cnpj),
                telefone:parseInt(req.body.telefone)
            }
            resolve(result)
        })
        
        const novo_fornecedor = `
        INSERT INTO fornecedor (nome, cnpj, telefone) VALUES ('${newFornecedor.nome}', ${newFornecedor.cnpj}, ${newFornecedor.telefone})`
        bdFornecedor.run(novo_fornecedor, (e) =>{
            try{
                if(e){
                    res.status(404).send('ERRO')
                }else{

                    res.status(200).send('Novo fornecedor incluído com sucesso!')
                }
                
            }catch(error){
                res.status(404).send('Error ao buscar', error.message)
            }
        })
    }
}


export default FornecedorController