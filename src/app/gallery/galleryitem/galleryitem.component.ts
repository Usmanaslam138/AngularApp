import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { GalleryItems } from "src/app/appModals/gallery";
import { HeaderAuthService } from "src/app/appServices/header-auth.service";

@Component({
  selector: "app-galleryitem",
  templateUrl: "./galleryitem.component.html",
  styleUrls: ["./galleryitem.component.css"],
})
export class GalleryitemComponent implements OnInit, OnDestroy {
  constructor(
    private _header: HeaderAuthService,
    private gallery: GalleryItems,
    private activatedRoute: ActivatedRoute
  ) {}

  galleryImages: [] | any;
  selectedItem;
  id;
  ngOnInit(): void {
    this._header.navItems.next(false);
    this._header.backGallery.next(true);
    this._header.headerLoginBlock.next(false);
    this.galleryImages = this.gallery.galleryImages;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.selectedItem = this.gallery.galleryImages[this.id - 1];
    });
  }

  ngOnDestroy(): void {
    this._header.navItems.next(true);
    this._header.backGallery.next(false);
    this._header.headerLoginBlock.next(true);
  }
}
