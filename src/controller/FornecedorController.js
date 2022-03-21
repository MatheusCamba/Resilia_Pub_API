import MetodosFornecedor from '../DAO/MetodosFornecedor.js'

class FornecedorController{
    //CRIAR TABELA
    static createTable(req,res){
        MetodosFornecedor.newTable()
        .then(response => res.status(200).send(response))
        .catch(response => res.status(400).send(response))
    }
    //ADICIONAR NOVO FORNECEDOR 
    static async addNewFornecedor(req, res){
        const addFornecedor = await new Promise ((resolve, reject) => {
            resolve([
                req.body.nome,
                parseInt(req.body.cnpj),
                parseInt(req.body.telefone)
            ]);
            reject('Erro ao adicionar.')
        });

        MetodosFornecedor.newFornecedor(...addFornecedor)
        .then(response => res.status(200).send(response))
        .catch(response => res.status(400).send(response))
    }

    //BUSCAR TODOS FORNECEDORES
    static searchFornecedores(req, res){
        MetodosFornecedor.getFornecedores()
        .then(response => res.status(200).send(response))
        .catch(response => res.status(400).send(response))
    }

    //BUSCAR FORNECEDOR POR ID
    static async searchOnlyOne(req, res){
        const id_fornecedor = await new Promise ((resolve, reject) => {
            resolve(req.params.id);
            reject('Erro ao deletar!')
        });

        MetodosFornecedor.searchById(id_fornecedor)
        .then(response => res.status(200).send(response))
        .catch(response => res.status(400).send(response))
    }

    //DELETAR FORNECEDOR POR ID
    static async deleteOne(req, res){
        const id = await new Promise ((resolve, reject) => {
            resolve(req.params.id);
            reject('Erro ao deletar!')
        });

        MetodosFornecedor.deleteById(id)
        .then(response => res.status(200).send(response))
        .catch(response => res.status(400).send(response))
    }

    //ATUALIZAR FORNECEDOR POR ID
    static async updateOne(req, res){
        const att = await new Promise((resolve, reject) =>{
            resolve([
                req.params.id,
                req.body.nome,
                parseInt(req.body.cnpj),
                parseInt(req.body.telefone)
            ]);
            reject('Erro ao atualizar!')
        })

        MetodosFornecedor.updateById(...att)
        .then(response => res.status(200).send(response))
        .catch(response => res.status(400).send(response))
    }

}
export default FornecedorController;