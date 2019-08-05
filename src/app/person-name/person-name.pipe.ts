import { Pipe, PipeTransform } from '@angular/core';

export interface Person {
  prefix: 'Ms' | 'Mr' | 'Mx';
  firstName: string;
  middleName: string;
  lastName: string;
}

@Pipe({
  name: 'personName'
})
export class PersonNamePipe implements PipeTransform {
  transform(
    person: Person,
    format: 'short' | 'medium' | 'long' = 'medium'
  ): string {
    const { prefix, firstName, middleName, lastName } = person;

    switch (format) {
      case 'long': {
        return `${prefix} ${firstName} ${middleName} ${lastName}`;
      }
      case 'medium': {
        return `${firstName} ${middleName} ${lastName}`;
      }
      default: {
        return `${firstName} ${lastName}`;
      }
    }
  }
}
