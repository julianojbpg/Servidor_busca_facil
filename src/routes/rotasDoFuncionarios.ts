import { Router } from 'express'
import { IReqRes } from '../@types/Interfaces'

const rotas= Router()

rotas.get('/f',({req, res}:IReqRes)=>{
    res.send('testando a conexao')
})


export default rotas