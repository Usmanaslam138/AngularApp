import { Component } from "@angular/core";
import { HeaderAuthService } from "../appServices/header-auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  isLoggedIn;
  isContactPage;
  headerLoginBlock;
  navItems;
  backGallery;
  backProducts;
  constructor(private _headerService: HeaderAuthService) {
    this._headerService.isLoggedIn.subscribe((res) => {
      this.isLoggedIn = res;
    });

    this._headerService.isContactPage.subscribe((res) => {
      this.isContactPage = res;
    });

    this._headerService.headerLoginBlock.subscribe((res) => {
      this.headerLoginBlock = res;
    });

    this._headerService.navItems.subscribe((res) => {
      this.navItems = res;
    });

    this._headerService.backGallery.subscribe((res) => {
      this.backGallery = res;
    });

    this._headerService.backProducts.subscribe((res) => {
      this.backProducts = res;
    });
  }

  onSignOut() {
    this._headerService.isLoggedIn.next("");
  }
}
