import { Component } from '@angular/core';

@Component({
  selector: 'app-comments-page',
  template: `
    <h1>Comments with AfterViewInit() and @ViewChildren()</h1>
    <app-comments [comments]="comments"></app-comments>
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
export class CommentsPageComponent {
  // tslint:disable: max-line-length
  readonly comments: string[] = [
    'Do fugiat et veniam laboris veniam ad exercitation nulla non sint aliqua eu. Commodo cillum aute magna esse et irure. In sit proident consectetur adipisicing eu officia sint ut ipsum laboris ut quis officia. Lorem incididunt eiusmod ex exercitation cillum ad ex est ex id. Aliqua cupidatat voluptate in duis ut irure occaecat est non enim non.',
    'Commodo consectetur quis voluptate voluptate aliquip ipsum reprehenderit sunt magna exercitation est fugiat. Aute mollit amet elit commodo esse ipsum laborum ex dolor anim reprehenderit ad. Exercitation eu ea nisi velit Lorem non laboris pariatur est. Pariatur mollit id elit do. Duis voluptate sit quis elit eu amet cillum dolor commodo tempor voluptate. Eu labore ea magna amet.',
    'Non qui consectetur voluptate nostrud aliquip reprehenderit quis ullamco consequat eiusmod. Officia ipsum eiusmod exercitation pariatur nisi reprehenderit ea adipisicing aliquip. Commodo mollit id aute ad aliqua ad non occaecat laboris aliqua enim id. Dolor voluptate sint fugiat nostrud.',
    'Sint nostrud non laborum consectetur aute consectetur labore dolor proident pariatur excepteur mollit fugiat. Velit amet duis minim deserunt occaecat cupidatat qui non. Commodo cupidatat anim do tempor ullamco ex eu quis cupidatat eiusmod labore exercitation adipisicing dolore. Nulla commodo in mollit do. Elit aute magna fugiat tempor. Elit voluptate reprehenderit velit in culpa do labore id velit laborum aliquip. Labore elit sit est veniam sit cillum occaecat qui irure ea.',
    'Est id excepteur elit laboris eiusmod eiusmod elit pariatur voluptate sit magna. Ad pariatur amet qui in eu reprehenderit. Do tempor anim aliquip et cillum incididunt reprehenderit ex consequat occaecat. Ullamco nisi duis consectetur culpa eu eu enim. Proident amet pariatur exercitation pariatur Lorem quis pariatur et exercitation.',
    'Nostrud veniam ad officia consequat ut exercitation exercitation enim. Culpa dolore eiusmod occaecat ipsum laborum sunt do labore quis culpa esse ex esse aliquip. Deserunt cillum fugiat consequat cillum aliqua velit do ullamco culpa cupidatat commodo ipsum aute ea.',
    'Exercitation velit incididunt ad proident ex consequat ea elit nostrud. Consequat excepteur eiusmod anim veniam occaecat duis consectetur aliqua fugiat. Ex tempor consectetur non do enim laboris ea magna. Aute est nulla excepteur aute elit. Exercitation anim mollit Lorem dolor dolore aliquip mollit. Minim deserunt in aliqua eiusmod pariatur cillum magna proident ea. Aliqua adipisicing irure consectetur id ut nisi consequat officia mollit tempor aliqua deserunt aute.'
  ];
}
