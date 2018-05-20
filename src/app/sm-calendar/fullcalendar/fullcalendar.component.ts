import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler';

@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.css']
})
export class FullcalendarComponent implements AfterViewInit, OnInit {

@ViewChild('calendar') calendar: ElementRef;

ngAfterViewInit(): void {
($(this.calendar.nativeElement) as any).fullCalendar();
}
  constructor() { }

  ngOnInit() {
  }

}
