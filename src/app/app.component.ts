import { Component } from "@angular/core";
import { HeaderRowComponent } from "./header-row/header-row.component";
@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <div class="container">
      <div class="bg"></div>
      <app-header-row class="md:flex md:justify-between md:flex-row-reverse w-full">
      </app-header-row>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
  imports: [HeaderRowComponent],
})
export class AppComponent {
  title = "Cozy Weather";
}
