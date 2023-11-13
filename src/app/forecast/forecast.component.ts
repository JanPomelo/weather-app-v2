import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      forecast works!
    </p>
  `,
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {

}
