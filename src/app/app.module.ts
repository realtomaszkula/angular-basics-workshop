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
import { CounterModule } from './counter/counter.module';
import { LayoutComponent } from './layout/layout.component';
import { TimerModule } from './card/timer/timer.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
