import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-search-bar",
  standalone: true,
  imports: [CommonModule],
  template: `
    <input type="text" class="grow md:grow-0 rounded-l-3xl pl-4 text-xl h-full w-[190px] lg:w-96" />
    <button class="px-2 rounded-r-3xl h-full w-10 bg-gray-200 inputBut"></button>
  `,
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent {}
