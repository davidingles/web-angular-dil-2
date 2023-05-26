import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { LayoutComponent } from './layout/layout.component';
import { AuxiRoutingModule } from './auxi-routing.module';



@NgModule({
  declarations: [
    ContactoComponent,
    ProductosComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AuxiRoutingModule
  ],
  exports: [
    ProductosComponent,
    ContactoComponent
  ]
})
export class AuxiModule { }
