import { Component } from "@angular/core";
import { HeaderRowComponent } from "./header-row/header-row.component";
import { DataContainerComponent } from "./data-container/data-container.component";
@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <div class="container">
      <div class="bg"></div>
      <app-header-row class="md:flex md:justify-between md:flex-row-reverse w-full"> </app-header-row>
      <app-data-container
        class="flex flex-col gap-3 md:grid md:grid-cols-2 px-3 overflow-scroll h-4/5 md:grow md:overflow-auto"
      ></app-data-container>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
  imports: [HeaderRowComponent, DataContainerComponent],
})
export class AppComponent {
  title = "Cozy Weather";
}
