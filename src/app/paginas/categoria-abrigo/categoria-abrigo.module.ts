import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaAbrigoPageRoutingModule } from './categoria-abrigo-routing.module';

import { CategoriaAbrigoPage } from './categoria-abrigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaAbrigoPageRoutingModule
  ],
  declarations: [CategoriaAbrigoPage]
})
export class CategoriaAbrigoPageModule {}
