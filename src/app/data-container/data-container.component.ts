import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GeneralInfoComponent } from "../general-info/general-info.component";
@Component({
  selector: "app-data-container",
  standalone: true,
  imports: [CommonModule, GeneralInfoComponent],
  template: ` <app-general-info></app-general-info> `,
  styleUrls: ["./data-container.component.css"],
})
export class DataContainerComponent {}
