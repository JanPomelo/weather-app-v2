import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-more-information",
  standalone: true,
  imports: [CommonModule],
  template: ` <p>more-information works!</p> `,
  styleUrls: ["./more-information.component.css"],
})
export class MoreInformationComponent {
  @Input() weatherService!: WeatherService;
}
