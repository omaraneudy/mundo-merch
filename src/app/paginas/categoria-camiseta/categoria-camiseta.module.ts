import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaCamisetaPageRoutingModule } from './categoria-camiseta-routing.module';

import { CategoriaCamisetaPage } from './categoria-camiseta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaCamisetaPageRoutingModule
  ],
  declarations: [CategoriaCamisetaPage]
})
export class CategoriaCamisetaPageModule {}
