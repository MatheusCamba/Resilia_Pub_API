import bdFornecedor from '../models/fornecedor.js'

 export default class MetodosFornecedor{
    //METODO CRIAR TABELA
    static criarTabela(){
            try{
                return new Promise((resolve, reject) => {
                   const scriptCreateTable = 
                   `CREATE TABLE IF NOT EXISTS fornecedor (
                       id INTEGER PRIMARY KEY AUTOINCREMENT,
                       nome VARCHAR(50),
                       cnpj INTEGER,
                       telefone NUMBER
                   )`
                
                   bdFornecedor.run(scriptCreateTable, (e) =>{
                      if(!e){
                         resolve("Tabela criada com sucesso")
                      } else {
                         reject("Erro ao criar tabela")
                      }
                   })
                })
             } catch(e){
                console.error(e.message)
            }
            
        }

    //METODO DE BUSCA DE TODOS
    static getTodosFornecedores(){
        try{
            return new Promise((resolve,reject) =>{
                const busca_todosFornecedores = `
                SELECT * FROM fornecedor`

                bdFornecedor.all(busca_todosFornecedores, (e, result) =>{
                    
                        if(!e){
                            resolve(result)
                        } else {
                            reject('Erro ao buscar!')
                        }                      
                    
                })
            })

        }catch(e){
            console.error(e.message)
        }
        
    
    }

    //METODO DE INSERIR NOVO FORNECEDOR
    static async postarNovoFornecedor(nome, cnpj, telefone){
        // const newFornecedor = await new Promise ((resolve, reject) => {
        //     const result = {
        //         nome:req.body.nome,
        //         cnpj:parseInt(req.body.cnpj),
        //         telefone:parseInt(req.body.telefone)
        //     }
        //     resolve(result)
        // })
        try{

            return new Promise ((resolve, reject) =>{
                const novo_fornecedor = `INSERT INTO fornecedor (nome, cnpj, telefone) VALUES ('${nome}', ${cnpj}, ${telefone})`
                bdFornecedor.run(novo_fornecedor, (e) =>{
                    
                    if(!e){
                        resolve('Fornecedor adicionado')
                    } else {
                        reject('Erro ao postar!')
                    }       
                })
    
            })
        } catch(e){
            console.error(e.message)
        }
        
    }

    //METODO DE BUSCAR UM FORNECEDOR ID
    static buscarUmFornecedor(id){
        return new Promise ((resolve, reject) =>{
            try{
                const query_fornecedor = `SELECT * FROM fornecedor WHERE id = ${id}`
                bdFornecedor.get(query_fornecedor, (e, row) =>{
                    if(!e){
                        resolve(row)
                    } else {
                        reject('Erro ao buscar!')
                    }  
                })
            }catch(e){
                console.error(e.message)
            }
            
        })

    }

    //METODO PARA DELETAR REGISTRO
    static deletarPorId(id){
        
        return new Promise ((resolve, reject) =>{
            try{
                const query_del_fornecedor = `DELETE FROM fornecedor WHERE id = ${id}`
                bdFornecedor.get(query_del_fornecedor, (e) =>{
                    if(!e){
                        resolve('Fornecedor deletado.')
                    } else {
                        reject('Erro ao deletar!')
                    }  
                })
            }catch(e){
                console.error(e.message)
            }
            
        })

    }

    //METODO DE UPDATE
    static async attFornecedorPorId(id, nome, cnpj, telefone){
        // const att_fornecedor = await new Promise((resolve, reject) =>{
        //     const resultado_fornecedor = {
        //         nome:req.body.nome,
        //         cnpj:parseInt(req.body.cnpj),
        //         telefone:parseInt(req.body.telefone)
        //     }
        //     resolve(resultado_fornecedor)
        // }) 
        return new Promise ((resolve, reject) => {
            try{
    
                const query_att = `UPDATE fornecedor SET nome='${nome}', cnpj=${cnpj}, telefone=${telefone} WHERE id = ${id}`
        
                bdFornecedor.run(query_att, (e) => {
                    if(!e){
                        resolve('Fornecedor atualizado.')
                    } else {
                        reject('Erro ao atualizar!')
                    }     
                })
            } catch (e){
                console.error(e.message)
            }
        }) 

    }
}