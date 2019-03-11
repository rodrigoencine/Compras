import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { CadastroSetorComponent } from './cadastro-setor/cadastro-setor.component';
import { CadastroCargoComponent } from './cadastro-cargo/cadastro-cargo.component';
import { HttpModule } from '@angular/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ],
  declarations: [CadastroUsuarioComponent, ListaUsuarioComponent, CadastroSetorComponent, CadastroCargoComponent, UsuarioComponent],
  exports: [CadastroUsuarioComponent, UsuarioComponent, CadastroCargoComponent]
})
export class UsuariosModule { }
