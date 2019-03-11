import { Usuario } from './../../model/usuario';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario: Usuario;
  constructor() { }

  ngOnInit() {
    // this.route.params.subscribe((parametro: Params) => {
    //   this.ofertasService.getOfertaPorId(parametro.id)
    //   .then((oferta: Oferta) => {
    //     this.oferta = oferta;
    //   });
    // });
  }
}
