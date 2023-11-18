import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotesItemComponent } from "./notes-item.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [{ path: "", component: NotesItemComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
})
export class NotesItemModule {}
