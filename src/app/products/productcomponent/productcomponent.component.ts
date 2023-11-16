import { OnInit } from "@angular/core";
import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ProductsItem } from "src/app/appModals/products";
import { HeaderAuthService } from "src/app/appServices/header-auth.service";

@Component({
  selector: "app-productcomponent",
  templateUrl: "./productcomponent.component.html",
  styleUrls: ["./productcomponent.component.css"],
})
export class ProductcomponentComponent implements OnInit, OnDestroy {
  constructor(
    private header: HeaderAuthService,
    private products: ProductsItem,
    private activatedRout: ActivatedRoute
  ) {}
  selectedProduct;
  id;
  ngOnInit(): void {
    this.header.backProducts.next(true);
    this.header.headerLoginBlock.next(false);
    this.header.navItems.next(false);

    this.activatedRout.params.subscribe((params: Params) => {
      this.id = params["idp"];
      this.selectedProduct = this.products.productsData[this.id - 1];
    });
  }

  ngOnDestroy(): void {
    this.header.backProducts.next(false);
    this.header.headerLoginBlock.next(true);
    this.header.navItems.next(true);
  }
}
