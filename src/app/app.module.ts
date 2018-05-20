import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmCalendarModule } from './sm-calendar/sm-calendar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SmCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
