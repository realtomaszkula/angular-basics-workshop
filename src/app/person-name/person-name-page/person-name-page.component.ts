import { Component } from '@angular/core';
import { Person } from '../person-name.pipe';

@Component({
  selector: 'app-person-name-page',
  template: `
    <h2>Short</h2>
    <p>{{ person | personName: 'short' }}</p>

    <h2>Medium</h2>
    <p>{{ person | personName: 'medium' }}</p>

    <h2>Long</h2>
    <p>{{ person | personName: 'long' }}</p>

    <h2>Dynamic</h2>
    <p>{{ person | personName: format }}</p>

    <input
      id="short"
      type="radio"
      name="format"
      value="short"
      [(ngModel)]="format"
    />
    <label for="short">Short</label>
    <input
      id="medium"
      type="radio"
      name="format"
      value="medium"
      [(ngModel)]="format"
    />
    <label for="medium">Medium</label>
    <input
      id="long"
      type="radio"
      name="format"
      value="long"
      [(ngModel)]="format"
    />Long
    <label for="long">Long</label>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 16px;
      }
    `
  ]
})
export class PersonNamePageComponent {
  person: Person = {
    prefix: 'Mr',
    firstName: 'Tomasz',
    lastName: 'Kula',
    middleName: 'Jerzy'
  };

  format: 'short' | 'medium' | 'long';
}
