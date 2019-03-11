import { FornecedorService } from './../fornecedor.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  fornecedor: any;

  constructor(
    private route: ActivatedRoute,
    private servico: FornecedorService) {}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.fornecedor = this.servico.getFornecedor(this.id);
        console.log('teste', this.fornecedor);
      }
    );
  }

}
