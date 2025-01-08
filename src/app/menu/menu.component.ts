import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatListModule],
  template: ` @for (item of menuItems; track item.path){
    <a mat-list-item [href]="item.path">{{item.label}}</a>
  }`
  
})
export class MenuComponent {
  menuItems:Array<MenuItem> = [

    {
      path:'/',
      label: 'Inicio'
    },
    {
      path:'/categories',
      label: 'Categorías'
    },
    {
      path:'/suppliers',
      label: 'Proveedores'
    }
  ]
}
