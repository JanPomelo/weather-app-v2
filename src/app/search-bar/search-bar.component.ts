import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      search-bar works!
    </p>
  `,
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

}
