import express from 'express'
import { port } from './config'
import Rotas  from './routes/rotas'
import Conexao from './database/conexaoComDB'
export const app = express()



Rotas()
new Conexao().Conexao()

app.listen(port,()=>{
    console.log(`O servidor está rodando na porta ${port}`)
})