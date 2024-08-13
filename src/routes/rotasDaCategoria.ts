import { Router } from 'express'
import { 
    TodasCategorias,
    atualizarCategoria,
    cadastroCategoria,
    deletarCategoria,
    pesquisarCategoria
} from '../controllers/controleCategoria'

const rotasCat= Router()

rotasCat.post('/categoriaC',cadastroCategoria)
rotasCat.get('/categorias',TodasCategorias)
rotasCat.post('/categoriaP',pesquisarCategoria)
rotasCat.put('/categoria',atualizarCategoria)
rotasCat.delete('/categoria',deletarCategoria)


export default rotasCat