import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  template: `
    <input placheolder="Filter" [(ngModel)]="filter" />
    <ul>
      <li *ngFor="let item of filteredItems()">
        {{ item }}
      </li>
    </ul>
  `,
  styles: []
})
export class FilterListComponent {
  filter = '';
  list = [
    'Lazaro Hart',
    'Dessie Hollander',
    'Rina Liriano',
    'Les Esquer',
    'Wilburn Pusey',
    'Cyril Terry',
    'Zachery Johnstone',
    'Rosena Dupuis',
    'Ranae Plantz',
    'Lanora Hardiman',
    'Elias Tinajero',
    'Leeanna Hakes',
    'Maynard Benedetto',
    'Vinnie Marquez',
    'Willow Shiner',
  ];

  filteredItems() {
    return this.list.filter(item =>
      item.toLowerCase().includes(this.filter.toLowerCase())
    );
  }
}
