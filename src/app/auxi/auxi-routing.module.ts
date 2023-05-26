import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      { 
        path: 'auxi-productos',
        component: ProductosComponent,
      },
      {
        path: 'auxi-contacto',
        component: ContactoComponent
      },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuxiRoutingModule { }
