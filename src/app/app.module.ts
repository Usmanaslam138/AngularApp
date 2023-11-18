import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderAuthService } from "./appServices/header-auth.service";
import { ReactiveFormsModule } from "@angular/forms";
import { SigninComponent } from "./signin/signin.component";
import { ContactComponent } from "./contact/contact.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ServicesComponent } from "./services/services.component";
import { NotesComponent } from "./notes/notes.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    SigninComponent,
    ContactComponent,
    NavbarComponent,
    ServicesComponent,
    NotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HeaderAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log("app module");
  }
}
