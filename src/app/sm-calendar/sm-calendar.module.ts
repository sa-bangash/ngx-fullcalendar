import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';

@NgModule({
  imports: [
    CommonModule
  ],
declarations: [FullcalendarComponent],
exports: [FullcalendarComponent],
})
export class SmCalendarModule { }
