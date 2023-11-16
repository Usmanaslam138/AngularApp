import { Component, OnDestroy, OnInit } from "@angular/core";
import { HeaderAuthService } from "../appServices/header-auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit, OnDestroy {
  contact: string = "help@pixelbud.com";
  constructor(private _headerService: HeaderAuthService) {}

  ContactForm!: FormGroup;

  ngOnInit(): void {
    this._headerService.isContactPage.next(true);
    this._headerService.headerLoginBlock.next(false);

    this.ContactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required),
      subject: new FormControl(null, Validators.required),
    });
  }

  ngOnDestroy(): void {
    this._headerService.isContactPage.next(false);
    this._headerService.headerLoginBlock.next(true);
  }

  onSubmit() {
    this.ContactForm.reset();
  }
}
