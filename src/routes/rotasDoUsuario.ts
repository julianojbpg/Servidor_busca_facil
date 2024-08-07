import { Router } from 'express'
import { 
    cadastroUsuario, 
    Teste, 
    TodosUsuarios, 
    atualizarUsuario, 
    pesquisarUsuario 
} from '../controllers/controleUsuario'

const rotasUser= Router()

rotasUser.post('/cadastroUsuario',cadastroUsuario)
rotasUser.get('/todosUsuarios',TodosUsuarios)
rotasUser.post('/pesquisaUsuario',pesquisarUsuario)
rotasUser.post('/atualizarUsuario',atualizarUsuario)
rotasUser.post('/teste',Teste)


export default rotasUser