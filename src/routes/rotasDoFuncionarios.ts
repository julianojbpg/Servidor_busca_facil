import { Router } from 'express'
import { IReqRes } from '../@types'

const rotas= Router()

rotas.get('/f',({req, res}:IReqRes)=>{
    res.send('testando a conexao')
})


export default rotas