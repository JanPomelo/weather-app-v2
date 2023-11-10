import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: "app-search-bar",
  standalone: true,
  imports: [CommonModule],
  template: `
      <input type="text"/>
      <button class="inputBut"></button>
  `,
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent {}
