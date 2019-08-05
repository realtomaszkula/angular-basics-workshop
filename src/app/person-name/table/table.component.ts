import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `
    <table>
      <tr>
        <th>Value</th>
        <th>Index</th>
        <th>Last</th>
        <th>First</th>
        <th>Odd</th>
        <th>Even</th>
      </tr>
      <tr
        *ngFor="
          let fruit of fruits;
          index as index;
          last as last;
          first as first;
          odd as odd;
          even as even
        "
      >
        <td>{{ fruit }}</td>
        <td>{{ index }}</td>
        <td>{{ getBooleanEmoji(last) }}</td>
        <td>{{ getBooleanEmoji(first) }}</td>
        <td>{{ getBooleanEmoji(odd) }}</td>
        <td>{{ getBooleanEmoji(even) }}</td>
      </tr>
    </table>
  `,
  styles: [
    `
      table {
        background-color: white;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      }

      td {
        padding: 8px;
      }
    `
  ]
})
export class TableComponent {
  readonly fruits = [
    '🍇',
    '🍈',
    '🍉',
    '🍊',
    '🍋',
    '🍌',
    '🍍',
    '🍎',
    '🍏',
    '🍒',
    '🍓',
    '🥝',
    '🍅',
    '🥥',
    '🥑',
    '🥔',
    '🥕',
    '🌽'
  ];

  getBooleanEmoji(value: boolean) {
    return value ? '✔️' : '❌';
  }
}
