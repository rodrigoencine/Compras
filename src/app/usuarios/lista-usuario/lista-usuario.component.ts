import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from './../usuario.service';
import { Usuario } from './../../model/usuario';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuario: Usuario = undefined;
  usuariosObservable: Observable<Usuario[]>;
  subjectPesquisa: Subject<String> = new Subject<String>();
  idUsuario: Usuario;
  id: number;
  @Input() usuarios: Usuario[] = [];

  constructor(
    private servico: UsuarioService,
    private navegacao: Router
  ) { }

  ngOnInit() {
    this.usuariosObservable = this.subjectPesquisa
    .distinctUntilChanged()
    .switchMap((termo: String) => {
      console.log('requisicao');
      return this.servico.pesquisaUsuario(termo);
    });

    this.usuariosObservable
    .subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    });

    this.servico.pesquisaTeste()
    .subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    });
    // this.metodoTeste();
    console.log(this.usuarios);
  }

  public pesquisar(termo: String): void {
    this.subjectPesquisa.next(termo);
  }

   pegaValor(usuario: Usuario, id: number): void {
    this.idUsuario = usuario;
    this.id = id;
   }

   mudaStatus(): void {
    if (this.idUsuario.status === 'inativo') {
       this.idUsuario.status = 'ativo';
    } else {
       this.idUsuario.status = 'inativo';
    }
    this.servico.alterarStatus(this.id, this.idUsuario)
    .then(() => {
      alert('Status alterado com sucesso');
    });
   }

   public metodoTeste(): void {
    this.servico.pesquisaTeste()
    .subscribe(usuarios => this.usuarios = usuarios);

    console.log('teste', this.usuarios);
  }

  public direcionaCadastroUsuario(): void {
    this.navegacao.navigate(['/pagina-cadastro-usuario']);
  }

}
