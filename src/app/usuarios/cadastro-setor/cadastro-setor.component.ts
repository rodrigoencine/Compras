import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-setor',
  templateUrl: './cadastro-setor.component.html',
  styleUrls: ['./cadastro-setor.component.css']
})
export class CadastroSetorComponent implements OnInit {
  exibirMenu: Boolean = true;
  constructor(private servico: UsuarioService) { }

  ngOnInit() {
    this.servico.emitirMenu.subscribe(
      menu => this.exibirMenu = menu
    );
  }

}
