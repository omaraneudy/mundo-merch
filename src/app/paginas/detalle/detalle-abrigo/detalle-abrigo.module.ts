import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAbrigoPageRoutingModule } from './detalle-abrigo-routing.module';

import { DetalleAbrigoPage } from './detalle-abrigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAbrigoPageRoutingModule
  ],
  declarations: [DetalleAbrigoPage]
})
export class DetalleAbrigoPageModule {}
