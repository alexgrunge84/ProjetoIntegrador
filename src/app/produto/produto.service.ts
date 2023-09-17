import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, tap, throwError } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  endpoint = '/api';
  produtos: Produto[] = [];
  filteredDescricao: Produto[] = [];

  constructor(private http: HttpClient) { }

  getProdutos() {
    return this.http
      .get<Produto[]>(this.endpoint + '/produtos')
      //.map(res => res.json()) 
      .pipe(
        retry(1), 
        tap( (res: Produto[]) => {
          this.log('fetched produtos: ' + res.length)
          this.produtos= res
          }
        ),
        catchError(this.processError));
  }

  filterDescricao(searchTerm: string = '') {
    this.filteredDescricao = this.produtos.filter((produto) => {
        return produto.Descricao!.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

    console.log('filterContatos: ' + this.filterDescricao.length );
  }

  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
    console.log(message);
  }

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(() => {
      message;
    });
  }
}
