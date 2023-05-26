import { Component } from '@angular/core';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent {

  // public menu = ['auxi-productos', 'auxi-contacto'];
  public nav = [
    {
      name: 'auxi-productos',
      alias: 'Productos',
    },
    {
      name: 'auxi-contacto',
      alias: 'Contacto',
    },
  ]

}
