import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleCamisetaPageRoutingModule } from './detalle-camiseta-routing.module';

import { DetalleCamisetaPage } from './detalle-camiseta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleCamisetaPageRoutingModule
  ],
  declarations: [DetalleCamisetaPage]
})
export class DetalleCamisetaPageModule {}
