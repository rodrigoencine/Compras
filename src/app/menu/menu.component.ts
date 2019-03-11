import { UsuarioService } from './../usuarios/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  exibirMenu: Boolean = true;

  constructor(private servico: UsuarioService) { }


  openMenu(): void {
    this.exibirMenu = !this.exibirMenu;
    this.servico.addVariavel(this.exibirMenu);
  }



  ngOnInit() {
  }

}
