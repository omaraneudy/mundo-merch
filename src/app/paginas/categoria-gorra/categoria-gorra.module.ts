import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaGorraPageRoutingModule } from './categoria-gorra-routing.module';

import { CategoriaGorraPage } from './categoria-gorra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaGorraPageRoutingModule
  ],
  declarations: [CategoriaGorraPage]
})
export class CategoriaGorraPageModule {}
