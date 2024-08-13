import { Router } from 'express'
import { 
    cadastroUsuario, 
    TodosUsuarios, 
    atualizarUsuario, 
    pesquisarUsuario,
    deletarUsuario
} from '../controllers/controleUsuario'

const rotasUser= Router()

rotasUser.get('/todosUsuarios',TodosUsuarios)
rotasUser.post('/cadastrarUsuario',cadastroUsuario)
rotasUser.post('/pesquisarUsuario',pesquisarUsuario)
rotasUser.put('/atualizarUsuario',atualizarUsuario)
rotasUser.delete('/deletarUsuario',deletarUsuario)


export default rotasUser