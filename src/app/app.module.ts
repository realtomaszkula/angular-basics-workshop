import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundColorModule } from './background-color/background-color.module';
import { CardModule } from './card/card.module';
import { CommentsModule } from './comments/comments.module';
import { CounterModule } from './counter/counter.module';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { FilterListModule } from './filter-list/filter-list.module';
import { LayoutComponent } from './layout/layout.component';
import { PersonNameModule } from './person-name/person-name.module';
import { TimerModule } from './timer/timer.module';
import { StylishModule } from './stylish/stylish.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CounterModule,
    BackgroundColorModule,
    CardModule,
    TimerModule,
    CommentsModule,
    FibonacciModule,
    FilterListModule,
    PersonNameModule,
    StylishModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
