import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderAuthService {
  constructor() {}

  isLoggedIn = new BehaviorSubject<string>("");
  isContactPage = new BehaviorSubject<boolean>(false);
  headerLoginBlock = new BehaviorSubject<boolean>(true);
  navItems = new BehaviorSubject<boolean>(true);
  backGallery = new BehaviorSubject<boolean>(false);
  backProducts = new BehaviorSubject<boolean>(false);
  userName = new BehaviorSubject<string>("");
}
