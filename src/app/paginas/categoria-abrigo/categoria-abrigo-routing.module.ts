import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaAbrigoPage } from './categoria-abrigo.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaAbrigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaAbrigoPageRoutingModule {}
