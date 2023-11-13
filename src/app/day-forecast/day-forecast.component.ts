import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day-forecast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      day-forecast works!
    </p>
  `,
  styleUrls: ['./day-forecast.component.css']
})
export class DayForecastComponent {

}
