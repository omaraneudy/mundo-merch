import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleGorraPage } from './detalle-gorra.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleGorraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleGorraPageRoutingModule {}
