import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-calendar';

  currentDate: moment.Moment;

  daysArr;

  ngOnInit(): void {
    this.currentDate = moment();
    this.daysArr = this.createCalendar(this.currentDate);
  }

  createCalendar(month) {
    const firstDay = moment(month).startOf('M'); // Get the start day of a month.

    const days = Array.apply(null, { length: month.daysInMonth() + 1})
                      .map(Number.call, Number).slice(1);

    for (let index = 0; index < firstDay.weekday(); index++) {
      days.unshift(null);
    }

    return days;
  }
}
