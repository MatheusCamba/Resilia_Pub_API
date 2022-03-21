import MetodosFornecedor from '../DAO/MetodosFornecedor.js'

class FornecedorController{
    //CRIAR TABELA
    static createTable(req,res){
        MetodosFornecedor.criarTabela()
        .then(response => res.status(200).send(response))
        .catch(response => res.status(400).send(response))
    }
    //ADD NOVO FORNECEDOR 
    static async addNovoFornecedor(req, res){
        const addFornecedor = await new Promise ((resolve, reject) => {
            resolve([
                req.body.nome,
                parseInt(req.body.cnpj),
                parseInt(req.body.telefone)
            ]);
            reject('Erro ao adicionar.')
        });

        MetodosFornecedor.postarNovoFornecedor(...addFornecedor)
        .then(response => res.status(200).send(response))
        .catch(response => res.status(400).send(response))
    }

    //BUSCAR TODOS FORNECEDORES
    static buscarFornecedores(req, res){
        MetodosFornecedor.getTodosFornecedores()
        .then(response => res.status(200).send(response))
        .catch(response => res.status(400).send(response))
    }

    //BUSCAR FORNECEDOR POR ID
    static async buscarPorId(req, res){
        const id_fornecedor = await new Promise ((resolve, reject) => {
            resolve(req.params.id);
            reject('Erro ao deletar!')
        });

        MetodosFornecedor.buscarUmFornecedor(id_fornecedor)
        .then(response => res.status(200).send(response))
        .catch(response => res.status(400).send(response))
    }

    //DELETAR FORNECEDOR POR ID
    static async deletarFornecedor(req, res){
        const id = await new Promise ((resolve, reject) => {
            resolve(req.params.id);
            reject('Erro ao deletar!')
        });

        MetodosFornecedor.deletarPorId(id)
        .then(response => res.status(200).send(response))
        .catch(response => res.status(400).send(response))
    }

    //ATUALIZAR FORNECEDOR POR ID
    static async attPorId(req, res){
        const att = await new Promise((resolve, reject) =>{
            resolve([
                req.params.id,
                req.body.nome,
                parseInt(req.body.cnpj),
                parseInt(req.body.telefone)
            ]);
            reject('Erro ao atualizar!')
        })

        MetodosFornecedor.attFornecedorPorId(...att)
        .then(response => res.status(200).send(response))
        .catch(response => res.status(400).send(response))
    }

}
export default FornecedorController;

// class FornecedorController{
//     //METODO CREATE
//     static criarTabela(req, res){
//         const tabela_fornecedor = `
//         CREATE TABLE IF NOT EXISTS fornecedor (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             nome VARCHAR(50),
//             cnpj INTEGER,
//             telefone NUMBER
//         )`
//         bdFornecedor.run(tabela_fornecedor, (e) => {
//             try{
//                 if(!e){
//                     res.status(200).send('Tabela criada com sucesso.')
//                 } 
//             }catch(error) {
//                 res.status(404).send('Erro ao criar a tabela: ', error.message)
//             }
            
//         })
//     }
//     //METODO DE BUSCA DE TODOS
//     static getTodosFornecedores(req, res){
//         const busca_todosFornecedores = `
//         SELECT * FROM fornecedor`
//         bdFornecedor.all(busca_todosFornecedores, (e, result) =>{
//             try{
//                 if(!e){
//                     res.status(200).json(result)
//                 }
//             } catch(error){
//                 res.status(404).send('Error ao buscar', error.message)
//             }
//         })
//     }
//     //METODO DE INSERIR NOVO FORNECEDOR
//     static async postarNovoFornecedor(req, res){
//         const newFornecedor = await new Promise ((resolve, reject) => {
//             const result = {
//                 nome:req.body.nome,
//                 cnpj:parseInt(req.body.cnpj),
//                 telefone:parseInt(req.body.telefone)
//             }
//             resolve(result)
//         })
        
//         const novo_fornecedor = `
//         INSERT INTO fornecedor (nome, cnpj, telefone) VALUES ('${newFornecedor.nome}', ${newFornecedor.cnpj}, ${newFornecedor.telefone})`
//         bdFornecedor.run(novo_fornecedor, (e) =>{
//             try{
//                 if(!e){
//                     res.status(200).send('Novo fornecedor incluído com sucesso!')
//                 }
//             }catch(error){
//                 res.status(404).send('Error ao inserir o novo fornecedor: ', error.message)
//             }
//         })
//     }
//     //METODO DE BUSCAR UM FORNECEDOR
//     static buscarUmFornecedor(req, res){
//         const unico_fornecedor =  req.params.id

//         const query_fornecedor = `SELECT * FROM fornecedor WHERE id = ${unico_fornecedor}`

//         bdFornecedor.get(query_fornecedor, (e, row) =>{
//             try{
//                 if(!e){
//                     res.status(200).send(row)
//                 }
//             } catch(error){
//                 res.status(404).send('Erro ao buscar o registro', error.message)
//             }
//         })
//     }
//     //METODO PARA DELETAR REGISTRO
//     static deletarPorId(req, res){
//         const del_fornecedor = req.params.id

//         const query_del_fornecedor = `DELETE FROM fornecedor WHERE id = ${del_fornecedor}`
//         bdFornecedor.run(query_del_fornecedor, (e) =>{
//             try{
//                 if(!e){
//                     res.status(200).send('Registro deletado com sucesso!')
//                 }
//             }catch(error){
//                 res.status(404).send('Erro ao deletar registro: ', error.message)
//             }
//         })
//     }
//     //METODO DE UPDATE
//     static async attFornecedorPorId(req, res){
//         const att_fornecedor = await new Promise((resolve, reject) =>{
//             const resultado_fornecedor = {
//                 nome:req.body.nome,
//                 cnpj:parseInt(req.body.cnpj),
//                 telefone:parseInt(req.body.telefone)
//             }
//             resolve(resultado_fornecedor)
//         }) 
//         const id = req.params.id

//         const query_att = `UPDATE fornecedor SET nome='${att_fornecedor.nome}', cnpj=${att_fornecedor.cnpj}, telefone=${att_fornecedor.telefone} WHERE id = ${id}`

//         bdFornecedor.run(query_att, (e) => {
//             try{
//                 if(!e){
//                     res.status(200).send('Fornecedor atualizado com sucesso!')
//                 } 
//             }catch(error){
//                 res.status(404).send('Erro ao atualizar o registro: ', error.message)
//             }
//         })

//     }
// }


// export default FornecedorController