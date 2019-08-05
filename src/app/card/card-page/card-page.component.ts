import { Component } from '@angular/core';

@Component({
  selector: 'app-card-page',
  template: `
    <h1>Basic Card</h1>
    <app-card>
      <div class="header">
        Card header
      </div>
      <div>
        Card content
      </div>
      <div class="footer">
        Card footer
      </div>
    </app-card>

    <h1>Complex Card</h1>
    <app-card class="complex">
      <div class="header">
        <div class="avatar"></div>
        <div class="title">Title</div>
        <div class="subtitle">Subtitle</div>
      </div>
      <div>
        <p>
          Adipisicing minim consequat exercitation duis eiusmod ad excepteur
          officia dolor magna et velit magna sit. Occaecat tempor veniam sunt
          culpa adipisicing irure eiusmod. Reprehenderit laborum irure officia
          sint adipisicing id. Minim mollit deserunt aute aute irure laborum
          exercitation velit dolore veniam duis consequat pariatur. Amet mollit
          tempor officia consectetur nostrud.
        </p>
      </div>
      <div class="footer">
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </app-card>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 16px;
      }

      .complex {
        .header {
          display: grid;
          grid-template-columns: 50px 1fr;
          grid-gap: 12px;
          grid-template-areas:
            'a t'
            'a s';

          .avatar {
            grid-area: a;
            border-radius: 50%;
            background-color: silver;
            width: 50px;
            height: 50px;
          }
          .title {
            grid-area: t;
          }
          .subtitle {
            grid-area: s;
          }
        }
      }
    `
  ]
})
export class CardPageComponent {}
