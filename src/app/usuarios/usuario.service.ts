import { Observable } from 'rxjs/Observable';
import { Usuario } from './../model/usuario';
import { Cargo } from './../model/cargo';
import { Setor } from './../model/setor';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { URL_API } from '../app.api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsuarioService {

  constructor(private http: Http) { }

  public pegaValor: Boolean;
  // lista: Usuario[];
  emitirMenu = new EventEmitter<Boolean>();

  addVariavel(menu: Boolean): void {
    this.emitirMenu.emit(menu);
  }

  public cadastrarUsuario(usuario: Usuario): Observable<number> {
    let headers: Headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post(
      `${URL_API}/usuarios`,
      JSON.stringify(usuario),
      new RequestOptions({headers: headers})
    )
    .map((resposta: Response) => resposta.json().id);
  }

  public cadastrarcargo(cargo: Cargo): Observable<number> {
    let headers: Headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post(
      `${URL_API}/cargos`,
      JSON.stringify(cargo),
      new RequestOptions({headers: headers})
    )
    .map((resposta: Response) => resposta.json().id);
  }
  public getCargos(): Promise<Cargo[]> {
    return this.http.get(`${URL_API}/cargos`)
    .toPromise()
    .then((resposta: Response) => resposta.json());
  }
  public getSetores(): Observable<Setor[]> {
    return this.http.get(`${URL_API}/setor`)
    .map((resposta: any) => resposta.json());
  }
  public getCargo(): Observable<Cargo[]> {
    return this.http.get(`${URL_API}/cargos`)
    .map((resposta: Response) => resposta.json());
  }
  public pesquisaUsuario(termo: String): Observable< Usuario[]> {
    return this.http.get(`${URL_API}/usuarios?nome_like=${termo}`)
    .map((resposta: any) => resposta.json());
  }
  public pesquisaCargo(termo: String): Observable<Cargo[]> {
    return this.http.get(`${URL_API}/cargos?ocupacao_like=${termo}`)
    .map((resposta: any) => resposta.json());
  }
  public pesquisaTeste(): Observable<Usuario[]> {
     return this.http.get(`${URL_API}/usuarios`)
     .map(response => response.json());
  }

  public alterarStatus(id: number, usuario: Usuario): Promise<Usuario> {
     return this.http.put(`${URL_API}/usuarios/${id}`, usuario)
     .toPromise()
     .then(response => response.json());
   }
  }
