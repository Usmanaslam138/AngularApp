import { NgModule } from "@angular/core";
import {
  PreloadAllModules,
  RouterModule,
  Routes,
  Route,
} from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";
import { CustomPreloadService } from "./appServices/custom-preload.service";
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "userlogin", component: SigninComponent },
  {
    path: "products",
    data: { preload: true },
    loadChildren: () =>
      import("../app/products/products.module").then((x) => x.ProductsModule),
  },
  {
    path: "notes/:id",
    data: { preload: true },
    loadChildren: () =>
      import("../app/notes/notes-item/notes-item.module").then(
        (x) => x.NotesItemModule
      ),
  },
  {
    path: "notes",
    data: { preload: true },
    loadChildren: () =>
      import("../app/notes/notes.module").then((x) => x.NotesModule),
  },
  {
    path: "services",
    data: { preload: true },
    loadChildren: () =>
      import("../app/services/services.module").then((x) => x.ServicesModule),
  },
  {
    path: "products/:idp",
    data: { preload: true },
    loadChildren: () =>
      import("../app/products/productcomponent/productsitem.module").then(
        (x) => x.ProductsitemModule
      ),
  },
  {
    path: "gallery",
    data: { preload: true },
    loadChildren: () =>
      import("../app/gallery/gallery.module").then((x) => x.GalleryModule),
  },
  {
    path: "gallery/:id",
    loadChildren: () =>
      import("../app/gallery/galleryitem/galleryitem.module").then(
        (x) => x.GalleryitemModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: "top",
      preloadingStrategy: CustomPreloadService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
