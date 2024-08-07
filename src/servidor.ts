import express from 'express'
import Rotas  from './routes/rotas'
import { db } from './database/instanciaDoBanco'
import { CriarTabelas } from './database/models/criarTabelas'

export const app = express()
app.use(express.json())

const port = process.env.PORT || 8080
Rotas()

app.listen(port, ()=>{
    console.log(`O servidor está rodando na porta ${port}`)
     db.sync()
    //  CriarTabelas()
})