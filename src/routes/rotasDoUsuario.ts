import { Router } from 'express'
import { CadastroUsuario, Teste, TodosUsuarios, pesquisarUsuario } from '../controllers/controleUsuario'

const rotasUser= Router()

rotasUser.post('/cadastroUsuario',CadastroUsuario)
rotasUser.get('/todosUsuarios',TodosUsuarios)
rotasUser.post('/pesquisaUsuario',pesquisarUsuario)
rotasUser.get('/teste',Teste)


export default rotasUser