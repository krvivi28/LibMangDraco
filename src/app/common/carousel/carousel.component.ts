import { Component } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent {
  images: string[] = [
    "https://via.placeholder.com/800x400?text=Slide%201",
    "https://via.placeholder.com/800x400?text=Slide%202",
    "https://via.placeholder.com/800x400?text=Slide%203",
  ];
}
