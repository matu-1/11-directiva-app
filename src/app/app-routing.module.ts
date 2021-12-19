import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'producto',
    loadChildren: () =>
      import('./producto/producto.module').then((m) => m.ProductoModule),
  },
  {
    path: '**',
    redirectTo: 'producto'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
