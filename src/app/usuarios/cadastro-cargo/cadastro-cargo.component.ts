import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cargo } from '../../model/cargo';
import { variable } from '@angular/compiler/src/output/output_ast';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-cadastro-cargo',
  templateUrl: './cadastro-cargo.component.html',
  styleUrls: ['./cadastro-cargo.component.css']
})
export class CadastroCargoComponent implements OnInit {

  constructor(private servico: UsuarioService) { }
  exibirMenu: Boolean = true;
  listaCargos: Cargo[] = [];
  idCargo: number;
  cargo: Cargo;
  subjectPesquisa: Subject<String> = new Subject<String>();
  cargoObservable: Observable<Cargo[]>;

  formularioCargo: FormGroup = new FormGroup({
    'ocupacao': new FormControl(null, [Validators.required])
  });
  ngOnInit() {
    this.servico.emitirMenu.subscribe(
      menu => this.exibirMenu = menu
    );

    this.cargoObservable = this.subjectPesquisa
    .distinctUntilChanged()
    .switchMap((termo: String) => {
      return this.servico.pesquisaCargo(termo);
    });

    this.cargoObservable
    .subscribe((cargo: Cargo[]) => {
      this.listaCargos = cargo;
    });
    this.carregaCargos();
  }
  public confirmarCadastroCargo(): void {
    let cargo = new Cargo(
      this.formularioCargo.value.ocupacao
    );
    this.cargo = cargo;
    this.servico.cadastrarcargo(cargo)
    .subscribe((id: number) => {
      this.idCargo = id;
      this.carregaCargos();
      this.limpar();
    });
    this.idCargo = undefined;
  }
  public carregaCargos(): void {
    this.servico.getCargo()
    .subscribe(cargos => this.listaCargos = cargos);
  }
  public limpar(): void {
    this.formularioCargo.reset();
  }
  public pesquisar(termo:String): void {
    this.subjectPesquisa.next(termo);
  }
}
