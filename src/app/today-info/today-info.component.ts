import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-today-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      today-info works!
    </p>
  `,
  styleUrls: ['./today-info.component.css']
})
export class TodayInfoComponent {

}
