import { Setor } from './setor';

export class Usuario {

  constructor(
    // public id: number,
    public matricula: String,
    public nome: String,
    public email: String,
    public ramal: number,
    public setor: Setor,
    public cargo: String,
    public grupos: String,
    public status: String,
    public login: String,
    public senha: String
  ) {}
}
