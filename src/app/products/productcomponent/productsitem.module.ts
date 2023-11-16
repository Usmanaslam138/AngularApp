import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ProductcomponentComponent } from "./productcomponent.component";
import { ProductsItem } from "src/app/appModals/products";

const productsRoutes: Routes = [
  { path: "", component: ProductcomponentComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(productsRoutes)],
  providers: [ProductsItem],
})
export class ProductsitemModule {}
