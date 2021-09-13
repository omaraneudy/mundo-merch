import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleCamisetaPage } from './detalle-camiseta.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCamisetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCamisetaPageRoutingModule {}
