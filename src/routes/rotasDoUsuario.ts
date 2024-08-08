import { Router } from 'express'
import { 
    cadastroUsuario, 
    TodosUsuarios, 
    atualizarUsuario, 
    pesquisarUsuario,
    deletarUsuario
} from '../controllers/controleUsuario'

const rotasUser= Router()

rotasUser.post('/cadastrarUsuario',cadastroUsuario)
rotasUser.get('/todosUsuarios',TodosUsuarios)
rotasUser.post('/pesquisarUsuario',pesquisarUsuario)
rotasUser.post('/atualizarUsuario',atualizarUsuario)
rotasUser.post('/deletarUsuario',deletarUsuario)


export default rotasUser