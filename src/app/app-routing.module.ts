import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./paginas/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./paginas/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./paginas/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./paginas/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./paginas/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./paginas/ofertas/ofertas.module').then( m => m.OfertasPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./paginas/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./paginas/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./paginas/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'detalle-abrigo',
    loadChildren: () => import('./paginas/detalle/detalle-abrigo/detalle-abrigo.module').then( m => m.DetalleAbrigoPageModule)
  },
  {
    path: 'detalle-camiseta',
    loadChildren: () => import('./paginas/detalle-camiseta/detalle-camiseta.module').then( m => m.DetalleCamisetaPageModule)
  },
  {
    path: 'detalle-gorra',
    loadChildren: () => import('./paginas/detalle-gorra/detalle-gorra.module').then( m => m.DetalleGorraPageModule)
  },
  {
    path: 'detalle-taza',
    loadChildren: () => import('./paginas/detalle-taza/detalle-taza.module').then( m => m.DetalleTazaPageModule)
  },
  {
    path: 'categoria-taza',
    loadChildren: () => import('./paginas/categoria-taza/categoria-taza.module').then( m => m.CategoriaTazaPageModule)
  },
  {
    path: 'categoria-abrigo',
    loadChildren: () => import('./paginas/categoria-abrigo/categoria-abrigo.module').then( m => m.CategoriaAbrigoPageModule)
  },
  {
    path: 'categoria-camiseta',
    loadChildren: () => import('./paginas/categoria-camiseta/categoria-camiseta.module').then( m => m.CategoriaCamisetaPageModule)
  },
  {
    path: 'categoria-gorra',
    loadChildren: () => import('./paginas/categoria-gorra/categoria-gorra.module').then( m => m.CategoriaGorraPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./paginas/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
