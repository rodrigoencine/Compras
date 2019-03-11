import { ListaUsuarioComponent } from './../usuarios/lista-usuario/lista-usuario.component';
import { URL_API } from './../app.api';
import { Fornecedor } from './../model/fornecedor';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FornecedorService {

  constructor(private http: Http) { }

  // public getFornecedores(): Observable<Fornecedor[]> {
  //   return this.http.get(`${URL_API}/fornecedores`)
  //   .map((fornecedores: any) => fornecedores.json());
  // }

public getFornecedores() {
  return [
  {id: 1, nome: 'Angular' },
  {id: 2, nome: 'Java'}
];
}

public getFornecedor(id: number): any{
   let fornecedores = this.getFornecedores();
  for (let i = 0; i<fornecedores.length; i++) {
    let fornecedor = fornecedores[i];
    if (1 === 1) {
      return fornecedor;
    }
    console.log('cu',fornecedor);
    return null;
  }

}
}
