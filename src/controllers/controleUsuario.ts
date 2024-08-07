import { Request, Response} from "express"
import { ValidacaoUsuario } from "../validations/ValidacaoUsuario"
import RepositorioUsuario from "../database/repositorio/RepositorioUsuario"


export async function CadastroUsuario (req: Request, res:Response){
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

export async function TodosUsuarios(req: Request, res:Response) {  
    try {
    const result = await new RepositorioUsuario().pesquisarTodosUsuarios()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({mgs: 'eror no teste: ', error})
    }
}

export async function pesquisarUsuario(req: Request, res:Response) {
    try {
    const result = await new ValidacaoUsuario().validarPesquisaUsuario(req.body.email)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({mgs: 'erro ao procurar email: ', error})
    }
}

export async function Teste(req: Request, res:Response) {  
    try {
    const result = await new RepositorioUsuario().pesquisarTodosUsuarios()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({mgs: 'eror no teste: ', error})
    }
}