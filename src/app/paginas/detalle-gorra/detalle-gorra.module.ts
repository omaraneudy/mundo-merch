import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleGorraPageRoutingModule } from './detalle-gorra-routing.module';

import { DetalleGorraPage } from './detalle-gorra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleGorraPageRoutingModule
  ],
  declarations: [DetalleGorraPage]
})
export class DetalleGorraPageModule {}
