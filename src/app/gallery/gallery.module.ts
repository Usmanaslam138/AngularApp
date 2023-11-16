import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalleryComponent } from "./gallery.component";
import { GalleryItems } from "../appModals/gallery";

const galleryRoutes: Routes = [{ path: "", component: GalleryComponent }];

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, RouterModule.forChild(galleryRoutes)],
  providers: [GalleryItems],
})
export class GalleryModule {
  constructor() {
    console.log("gallery module");
  }
}
