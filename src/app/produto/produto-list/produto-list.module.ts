import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoListPage } from './produto-list.page';
import { ProdutoPageRoutingModule } from '../produto-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoPageRoutingModule
  ],
  declarations: [ProdutoListPage]
})
export class ProdutoListPageModule {}
