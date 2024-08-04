import 'dotenv/config'

export const port = process.env.PORT || 8080
export const database = process.env.DATABASE || 'nome do banco'
export const usuario = process.env.USERNAME ||'usuario'
export const senha = process.env.PASSWORD || 'senha'
export const localhost = process.env.LOCALHOST || 'local do host'
