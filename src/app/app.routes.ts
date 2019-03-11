import { PaginaFornecedorComponent } from './fornecedores/pagina-fornecedor/pagina-fornecedor.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaUsuarioComponent } from './usuarios/lista-usuario/lista-usuario.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { CadastroUsuarioComponent } from './usuarios/cadastro-usuario/cadastro-usuario.component';

import { Routes } from '@angular/router';
import { CadastroCargoComponent } from './usuarios/cadastro-cargo/cadastro-cargo.component';
import { FornecedorComponent } from './fornecedores/fornecedor/fornecedor.component';

export const ROUTES: Routes = [
  {path: 'pagina-pesquisa-usuario', component: ListaUsuarioComponent},
  {path: 'pagina-cadastro-usuario', component: CadastroUsuarioComponent},
  {path: 'ordem-compra', component: OrdemCompraComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cargo', component: CadastroCargoComponent},
  {path: 'fornecedores', component: PaginaFornecedorComponent},
  {path: 'fornecedor/:id', component: FornecedorComponent}
];

