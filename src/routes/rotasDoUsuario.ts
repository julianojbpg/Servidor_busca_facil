import { Router } from 'express'
import { IReqRes } from '../@types'

const rotasUser= Router()

rotasUser.get('/u',({req, res}:IReqRes)=>{
    res.send('Get do usuario')
})


export default rotasUser