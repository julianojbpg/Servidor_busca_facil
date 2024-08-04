import rotaUser from './rotasDoUsuario'
import rotaFun from './rotasDoFuncionarios'
import { app } from '../servidor'

export default function Rotas(){
    app.use(rotaFun)
    app.use(rotaUser)
}
