import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './pages/productos/productos.component';



@NgModule({
  declarations: [
    ContactoComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductosComponent
  ]
})
export class AuxiModule { }
