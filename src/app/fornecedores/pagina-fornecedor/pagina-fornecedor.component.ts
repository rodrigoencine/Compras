import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Fornecedor } from './../../model/fornecedor';
import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-pagina-fornecedor',
  templateUrl: './pagina-fornecedor.component.html',
  styleUrls: ['./pagina-fornecedor.component.css']
})
export class PaginaFornecedorComponent implements OnInit {
  // listaObservable: Observable<Fornecedor[]>;

  listaFornecedor: any[];
  constructor(private servico: FornecedorService ) { }

  ngOnInit() {

    // this.listaObservable = this.servico.getFornecedores();
    // this.listaObservable.subscribe((fornecedores: Fornecedor[]) =>
    // this.listaFornecedor = fornecedores);
    this.listaFornecedor = this.servico.getFornecedores();
  }

}
