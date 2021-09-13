import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleTazaPage } from './detalle-taza.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleTazaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleTazaPageRoutingModule {}
