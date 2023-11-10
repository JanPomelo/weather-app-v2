import { Component } from "@angular/core";
import { SearchBarComponent } from "./search-bar/search-bar.component";
@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <div class="container">
      <div class="bg"></div>
      <app-search-bar></app-search-bar>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
  imports: [SearchBarComponent]
})
export class AppComponent {
  title = "Cozy Weather";
}
