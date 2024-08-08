import rotasUser from './rotasDoUsuario' 
import rotasCat from './rotasDaCategoria'
import { app } from '../servidor'

export default function Rotas(){
    app.use(rotasUser)
    app.use(rotasCat)
}
