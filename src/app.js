import express from 'express';
import routes from './routes/index.js';

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`)
})

routes(app)