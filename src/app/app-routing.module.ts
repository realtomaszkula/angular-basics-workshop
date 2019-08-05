import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundColorPageComponent } from './background-color/background-color-page/background-color-page.component';
import { CardPageComponent } from './card/card-page/card-page.component';
import { CommentsPageComponent } from './comments/comments-page/comments-page.component';
import { CounterPageComponent } from './counter/counter-page/counter-page.component';
import { TimerPageComponent } from './timer/timer-page/timer-page.component';
import { FibonacciPageComponent } from './fibonacci/fibonacci-page/fibonacci-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'counter', pathMatch: 'full' },
  { path: 'counter', component: CounterPageComponent },
  { path: 'background-color', component: BackgroundColorPageComponent },
  { path: 'card', component: CardPageComponent },
  { path: 'timer', component: TimerPageComponent },
  { path: 'comments', component: CommentsPageComponent },
  { path: 'fibonacci', component: FibonacciPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
