import { ActivatedRoute, RouterModule, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from './../usuario.service';
import { Usuario } from './../../model/usuario';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Setor } from '../../model/setor';
import {Cargo} from '../../model/cargo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor( private servico: UsuarioService, private route: ActivatedRoute, private navegacao: Router) {}

  usuario: Usuario;
  idUsuario: number;
  listaCargos: Cargo[];
  listaSetor: Setor[];
  listaUsuarios: Usuario[] = [];
  listaSetorObservable: Observable<Setor[]>;
  exibirMenu: Boolean = true;

  formulario: FormGroup = new FormGroup({
    'matricula' : new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    'nome': new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    'email' : new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    'ramal' : new FormControl(null, [ Validators.required, Validators.minLength(4), Validators.maxLength(6)]),
    'setor' : new FormControl(null, [ Validators.required]),
    'cargo' : new FormControl(null, [ Validators.required]),
    'grupo' : new FormControl(null, [ Validators.required]),
    'status': new FormControl(null, [Validators.required]),
    'login' : new FormControl(null, [Validators.required]),
    'senha' : new FormControl(null, [Validators.required])
  });

  confirmarCadastro(): void {
    let usuario = new Usuario(
      this.formulario.value.matricula,
      this.formulario.value.nome,
      this.formulario.value.email,
      this.formulario.value.ramal,
      this.formulario.value.setor,
      this.formulario.value.cargo,
      this.formulario.value.grupo,
      this.formulario.value.status,
      this.formulario.value.login,
      this.formulario.value.senha
    );
    this.usuario = usuario;
    this.servico.cadastrarUsuario(usuario)
    .subscribe((idUsuario: number) => {
      this.idUsuario = idUsuario;
      this.limpar();
      // this.metodoTeste();
    });
    this.idUsuario = undefined;
  }

  ngOnInit() {
    this.servico.emitirMenu.subscribe(
      menu => this.exibirMenu = menu
    );
    this.servico.getCargos()
    .then((cargos: Cargo[]) => {
     this.listaCargos = cargos;
    });

    // this.metodoTeste();

     this.listaSetorObservable = this.servico.getSetores();
     this.listaSetorObservable.subscribe((setores: Setor[]) =>
     this.listaSetor = setores);
  }
  limpar(): void {
    this.formulario.reset();
  }

  // public metodoTeste(): void {
  //   this.servico.pesquisaTeste()
  //   .subscribe(usuarios => this.listaUsuarios = usuarios);
  // }
  redirecionar() {
    this.navegacao.navigate(['/pagina-pesquisa-usuario']);
    }
  }
