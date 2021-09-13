import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAbrigoPage } from './detalle-abrigo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAbrigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAbrigoPageRoutingModule {}
