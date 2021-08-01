import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor:pointer;
      }
    `
  ]
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './template/basics'
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dynamics'
    },
    {
      texto: 'Switches',
      ruta: './template/switches'
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './reactive/basics'
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dynamics'
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches'
    },
  ];


}
