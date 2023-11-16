import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { HeaderAuthService } from "../appServices/header-auth.service";
import { ProductsItem } from "../appModals/products";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  constructor(private products: ProductsItem) {}

  productItems: [] | any;

  ngOnInit(): void {
    this.productItems = this.products.productsData;
  }
}
