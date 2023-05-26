import { Component } from '@angular/core';

interface Nav {
  name: string;
  alias: string;
}


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent {

  // public menu = ['auxi-productos', 'auxi-contacto'];
  public nav:Nav[] = [
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
