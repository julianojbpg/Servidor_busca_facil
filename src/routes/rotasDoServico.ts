import { Router } from 'express'
import { 
    cadastroServico, 
    TodosServicos, 
    atualizarServico, 
    pesquisarServico,
    deletarServico


} from '../controllers/controleServico'

const rotasServico= Router()

rotasServico.get('/servico',TodosServicos)
rotasServico.post('/servicoc',cadastroServico)
rotasServico.post('/servicop',pesquisarServico)
rotasServico.put('/servico',atualizarServico)
rotasServico.delete('/servico',deletarServico)


export default rotasServico