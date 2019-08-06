import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  PI = 3.5;

  constructor() {
    console.log('Math');
  }
}
