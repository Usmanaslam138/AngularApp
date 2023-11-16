import { Component, OnInit } from "@angular/core";
import { GalleryItems } from "../appModals/gallery";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"],
})
export class GalleryComponent implements OnInit {
  constructor(private gallery: GalleryItems) {}

  galleryImages: [] | any;

  ngOnInit(): void {
    this.galleryImages = this.gallery.galleryImages;
  }
}
