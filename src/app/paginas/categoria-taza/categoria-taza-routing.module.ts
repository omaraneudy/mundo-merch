import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaTazaPage } from './categoria-taza.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaTazaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaTazaPageRoutingModule {}
