import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotesComponent } from "./notes.component";
import { RouterModule, Routes } from "@angular/router";
import { NotesAppService } from "../appServices/notes-app.service";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [{ path: "", component: NotesComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(appRoutes), HttpClientModule],
  providers: [NotesAppService],
})
export class NotesModule {}
