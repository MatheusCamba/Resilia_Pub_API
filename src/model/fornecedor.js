const sqlite3 = require('sqlite3')
const { dirname } = require('path')
const { fileURLToPath } = require('url')
sqlite3.verbose()
const filePath = dirname(fileURLToPath(import.meta.url)) + '/bdFornecedor.db'
const bdFornecedor = new sqlite3.Database(filePath);

export default bdFornecedor;