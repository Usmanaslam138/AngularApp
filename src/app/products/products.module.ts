import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products.component";
import { ProductsItem } from "../appModals/products";
import { RouterModule, Routes } from "@angular/router";

const productsRoutes: Routes = [{ path: "", component: ProductsComponent }];

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(productsRoutes)],
  providers: [ProductsItem],
})
export class ProductsModule {
  constructor() {
    console.log("products module");
  }
}
