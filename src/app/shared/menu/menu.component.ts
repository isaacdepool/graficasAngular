import { Component, OnInit } from '@angular/core';

interface MenuItem {
  nombre: string,
  ruta: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class MenuComponent {

  menuItem: MenuItem[] = [
    {
      nombre: 'barras',
      ruta: './graficas/barras'
    },
    {
      nombre: 'barras-dobles',
      ruta: './graficas/barras-dobles'
    },
    {
      nombre: 'dona',
      ruta: './graficas/dona'
    },
    {
      nombre: 'dona-http',
      ruta: './graficas/dona-http'
    },
  ];



}
