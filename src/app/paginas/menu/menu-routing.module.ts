import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'principal',
    component: MenuPage,
    children:[
    
      {
        path: 'principal',
        loadChildren: () => import('../principal/principal.module').then(m => m.PrincipalPageModule)
      },

      {
        path: 'categoria',
        loadChildren: () => import('../categorias/categorias.module').then(m => m.CategoriasPageModule)
      },
      {
        path: '',
        redirectTo: '/menu/principal',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: '',
    redirectTo: '/menu/principal',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
