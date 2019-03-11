export class Fornecedor{

  constructor(
    public id: number,
    public cnpj: String,
    public razaoSocial: String,
    public nomeFantasia: String,
    public endereco: String,
    public email: String,
    public telefone: number,
    public contato: String
  ) { }
}
