import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ServicesComponent } from "./services.component";
import { FirbaseDataService } from "../appServices/firbase-data.service";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [{ path: "", component: ServicesComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(appRoutes), HttpClientModule],
  providers: [FirbaseDataService],
})
export class ServicesModule {}
