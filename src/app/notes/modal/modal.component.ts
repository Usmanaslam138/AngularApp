import { Notes } from "./../../appModals/note.model";
import {
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { NotesAppService } from "../../appServices/notes-app.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent {}
