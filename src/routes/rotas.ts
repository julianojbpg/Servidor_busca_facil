import { app } from '../servidor'
import rotasUser from './rotasDoUsuario' 
import rotasCat from './rotasDaCategoria'
import rotasServico from './rotasDoServico'

export default function Rotas(){
    app.use(rotasUser)
    app.use(rotasCat)
    app.use(rotasServico)
}
