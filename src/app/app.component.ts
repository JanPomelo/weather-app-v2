import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <div class="container">
      <div class="bg"></div>
      <h1>Hello World!</h1>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "homes";
}
