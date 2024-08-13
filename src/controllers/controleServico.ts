import { Request, Response } from "express"
import { ValidacaoServico } from "../validations/ValidacaoServico"
import RepositorioServico from "../repositorio/RepositorioServico"


export async function cadastroServico(req: Request, res: Response): Promise<Response> {
    const validacao = new ValidacaoServico
    const result =  validacao.validarServico(req.body)
    if (result.length !== 0)
        return res.status(400).json(result);
    try {
        await new RepositorioServico().cadastrar(req.body);
        return res.status(200).json({ mensagem: 'Serviço cadastrado com sucesso' })
    } catch (error) {
        return res.status(400).json({ mensagem: 'Erro ao cadastrar o serviço', error })
    }
}
export async function TodosServicos(req: Request, res: Response): Promise<Response> {
    try {
        const result = await new RepositorioServico().pesquisarTodosServicos()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({ mensagem: 'erro ao buscar todos: ', error })
    }
}
export async function pesquisarServico(req: Request, res: Response): Promise<Response> {
    try {
        const result = await new ValidacaoServico().validarPesquisaServico(req.body.nome)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({ mensagem: 'erro ao procurar serviço: ', error })
    }
}
export async function atualizarServico(req: Request, res: Response): Promise<Response> {
    try {
        const result = await new ValidacaoServico().validarAtualizacaoServico(req.body)
        return result ? res.status(200).json({ mensagem: 'Serviço atualizado com sucesso' }) : res.status(400).json({ mensagem: 'erro ao atualizar o serviço ' })

    } catch (error) {
        return res.status(400).json({ mensagem: 'Erro ao tentar atualizar o serviço: ', error })
    }
}
export async function deletarServico(req: Request, res: Response): Promise<Response> {
    try {
        const result = await new ValidacaoServico().validarDeletarServico(req.body.id)
        return result ? res.status(200).json({ mensagem: 'Serviço deletado com sucesso' }) : res.status(400).json({ mensagem: 'erro ao deletar o serviço ' })

    } catch (error) {
        return res.status(400).json({ mensagem: 'Erro ao tentar deletar o serviço: ', error })
    }
}