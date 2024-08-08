import { Router } from 'express'
import { 
    TodasCategorias,
    atualizarCategoria,
    cadastroCategoria,
    deletarCategoria,
    pesquisarCategoria
} from '../controllers/controleCategoria'

const rotasCat= Router()

rotasCat.post('/cadastrarCategoria',cadastroCategoria)
rotasCat.get('/todasCategorias',TodasCategorias)
rotasCat.post('/pesquisarCategoria',pesquisarCategoria)
rotasCat.post('/atualizarCategoria',atualizarCategoria)
rotasCat.post('/deletarCategoria',deletarCategoria)


export default rotasCat