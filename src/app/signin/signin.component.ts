import { Component, OnInit } from "@angular/core";
import { HeaderAuthService } from "../appServices/header-auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  constructor(private _headerServie: HeaderAuthService) {}

  signInForm!: FormGroup;
  formStatus;
  userList: any = [];

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.userExist.bind(this),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
      ]),
    });

    this.signInForm.statusChanges.subscribe((status) => {
      this.formStatus = status;
    });
  }

  onSubmit() {
    this._headerServie.isLoggedIn.next(this.signInForm.value.username);

    this.userList.push(this.signInForm.value.username);
    this.signInForm.reset();
    console.log(this.userList);
  }

  userExist(control: FormControl): { [s: string]: boolean } {
    if (this.userList.indexOf(control.value) !== -1) {
      return { userAlreadyExist: true };
    }
    return null as any;
  }
}
