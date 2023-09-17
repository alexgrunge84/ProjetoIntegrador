import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
})
export class ProdutoListPage implements OnInit {
  service = inject(ProdutoService)
  produtos$!: Observable<Produto[]>;

  searchTerm: string = '';
  filterDescricao: Produto[] = [];


  constructor() { 
  }

  ngOnInit() {
    this.produtos$ = this.service.getProdutos()
  }

  ionViewDidLoad() {
    this.setFilteredDescricao();
  }

  setFilteredDescricao(){
    this.service.filterDescricao( this.searchTerm);
    this.filterDescricao = this.service.filteredDescricao
  }
  
  handleChange(e:any) {
    console.log('ionChange fired with value: ' + e.detail.value);
  }
}
