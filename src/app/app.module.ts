import { FornecedorService } from './fornecedores/fornecedor.service';
import { FornecedoresModule } from './fornecedores/fornecedores.module';

import { UsuarioService } from './usuarios/usuario.service';
import { UsuariosModule } from './usuarios/usuarios.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule} from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopoComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    OrdemCompraComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    UsuariosModule,
    FornecedoresModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ],
  providers: [UsuarioService, FornecedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
