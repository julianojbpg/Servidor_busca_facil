import { Request, Response} from "express"
import { ValidacaoUsuario } from "../validations/ValidacaoUsuario"
import RepositorioUsuario from "../repositorio/RepositorioUsuario"


export async function cadastroUsuario (req: Request, res:Response):Promise<Response>{
    const validacao = new ValidacaoUsuario
    const result = await validacao.validarUsuario(req.body)
    if (result.length !== 0) 
        return res.status(400).json(result);
    try {
        await new RepositorioUsuario().cadastrar(req.body);
        return res.status(200).json({ mgs: 'usuario cadastrado com sucesso' })
    } catch (error) {
        return res.status(400).json({ mgs: 'Erro ao cadastrar o usuario', error })
    }
}

export async function TodosUsuarios(req: Request, res:Response):Promise<Response> {  
    try {
    const result = await new RepositorioUsuario().pesquisarTodosUsuarios()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({mgs: 'eror no teste: ', error})
    }
}

export async function pesquisarUsuario(req: Request, res:Response):Promise<Response> {
    try {
    const result = await new ValidacaoUsuario().validarPesquisaUsuario(req.body.email)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({mgs: 'erro ao procurar email: ', error})
    }
}

export async function atualizarUsuario(req: Request, res:Response):Promise<Response> {  
    try {
    const result = await new ValidacaoUsuario().validarAtualizacaoUsuario(req.body)
        return result ? res.status(200).json({mgs: 'Usuario atualizado com sucesso'}) : res.status(400).json({mgs: 'erro ao atualizar o usuario '})
        
    } catch (error) {
        return res.status(400).json({mgs: 'Erro ao tentar atualizar o usuario: ', error})
    }
}

export async function Teste(req: Request, res:Response):Promise<Response> {  
    try {
    const result = await new ValidacaoUsuario().validarDeletarUsuario(req.body.id)
        return result ? res.status(200).json({mgs: 'Usuario deletado com sucesso'}) : res.status(400).json({mgs: 'erro ao deletar o usuario '})
        
    } catch (error) {
        return res.status(400).json({mgs: 'Erro ao tentar deletar o usuario: ', error})
    }
}