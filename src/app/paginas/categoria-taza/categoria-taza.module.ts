import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaTazaPageRoutingModule } from './categoria-taza-routing.module';

import { CategoriaTazaPage } from './categoria-taza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaTazaPageRoutingModule
  ],
  declarations: [CategoriaTazaPage]
})
export class CategoriaTazaPageModule {}
