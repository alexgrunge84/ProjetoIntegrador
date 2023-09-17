import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { ProdutoListPage } from './produto-list/produto-list.page';

const routes: Routes = [
  {
    path: 'produto-list',
    component: ProdutoListPage
  },
  {
    path: 'pruduto-crud',
    //component: NotaCrudPage
    component: ProdutoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoPageRoutingModule {}
