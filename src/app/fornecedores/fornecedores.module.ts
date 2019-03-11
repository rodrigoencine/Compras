import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaFornecedorComponent } from './pagina-fornecedor/pagina-fornecedor.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  declarations: [PaginaFornecedorComponent, FornecedorComponent]

})
export class FornecedoresModule { }
