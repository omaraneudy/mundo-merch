import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleTazaPageRoutingModule } from './detalle-taza-routing.module';

import { DetalleTazaPage } from './detalle-taza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleTazaPageRoutingModule
  ],
  declarations: [DetalleTazaPage]
})
export class DetalleTazaPageModule {}
