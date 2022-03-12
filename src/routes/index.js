const fornecedor = require('./fornecedorRoute.js')

module.exports = (app) =>{
    app.use(fornecedor)
}