import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { GalleryitemComponent } from "./galleryitem.component";
import { GalleryItems } from "src/app/appModals/gallery";

const galleryRoutes: Routes = [{ path: "", component: GalleryitemComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(galleryRoutes)],
  providers: [GalleryItems],
})
export class GalleryitemModule {
  constructor() {
    console.log("gallery item componnqweebuhwbuhasgbfywgfb");
  }
}
