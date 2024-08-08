import { Request, Response} from "express"
import RepositorioCategoria from "../repositorio/RepositorioCategoria"
import { ValidacaoCategoria } from "../validations/ValidacaoCategoria"


export async function cadastroCategoria (req: Request, res:Response):Promise<Response>{
    const validacao = new ValidacaoCategoria
    const result = await validacao.validarCategoria(req.body)
    if (result.length !== 0) 
        return res.status(400).json(result);
    try {
        await new RepositorioCategoria().cadastrar(req.body.nome);
        return res.status(200).json({ mgs: 'Categoria cadastrada com sucesso' })
    } catch (error) {
        return res.status(400).json({ mgs: 'Erro ao cadastrar a categoria', error })
    }
}
export async function TodasCategorias(req: Request, res:Response):Promise<Response> {  
    try {
    const result = await new RepositorioCategoria().pesquisarTodasCategorias()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({mgs: 'erro ao buscar  todas as categorias: ', error})
    }
}
export async function pesquisarCategoria(req: Request, res:Response):Promise<Response> {
    try {
    const result = await new ValidacaoCategoria().validarPesquisaCategoria(req.body.nome)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({mgs: 'erro ao procurar email: ', error})
    }
}
export async function atualizarCategoria(req: Request, res:Response):Promise<Response> {  
    try {
    const result = await new ValidacaoCategoria().validarAtualizacaoCategoria(req.body)
        return result ? res.status(200).json({mgs: 'Categoria atualizada com sucesso'}) : res.status(400).json({mgs: 'erro ao atualizar a categoria '})
        
    } catch (error) {
        return res.status(400).json({mgs: 'Erro ao tentar atualizar a categoria: ', error})
    }
}
export async function deletarCategoria(req: Request, res:Response):Promise<Response> {  
    try {
    const result = await new ValidacaoCategoria().validarDeletarCategoria(req.body.id)
        return result ? res.status(200).json({mgs: 'Categoria deletada com sucesso'}) : res.status(400).json({mgs: 'erro ao deletar a categoria '})
        
    } catch (error) {
        return res.status(400).json({mgs: 'Erro ao tentar deletar a categoria: ', error})
    }
}