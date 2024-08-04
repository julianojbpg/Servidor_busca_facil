import { Router } from 'express'
import { IReqRes } from '../@types'

const rotas= Router()

rotas.get('/f',({req, res}:IReqRes)=>{
    res.send('get do funcionario')
})


export default rotas