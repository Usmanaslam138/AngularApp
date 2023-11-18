import { Component, OnInit } from "@angular/core";
import { NotesAppService } from "../appServices/notes-app.service";
import { map } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Notes } from "../appModals/note.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"],
})
export class NotesComponent implements OnInit {
  constructor(
    private _notesService: NotesAppService,
    private http: HttpClient
  ) {
    this._notesService.addNotes.subscribe((res) => {
      this.addNotes = res;
    });
  }
  addNotes;
  notesData: Notes[] = [];
  date = new Date();
  fetching: boolean = false;
  notesAddForm!: FormGroup;
  editMode: boolean = false;
  editId;

  ngOnInit(): void {
    this.notesAddForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      note: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
    });

    if (localStorage.getItem("noteData")) {
      this.getlocalStorageData();
    } else {
      this.onFetchData();
    }
  }

  onDeleteData(userId, id) {
    this.notesData.splice(id, 1);
    this._notesService.deleteData(userId).subscribe((res) => {});
    localStorage.removeItem("noteData");
    localStorage.setItem("noteData", JSON.stringify(this.notesData));
  }

  setslocalStorage(data): void {
    localStorage.setItem("noteData", JSON.stringify(data));
  }

  getlocalStorageData() {
    const localdata: any = localStorage.getItem("noteData");
    this.notesData = JSON.parse(localdata);
  }

  onFetchData() {
    this.fetching = true;
    this._notesService
      .fetchData()
      .pipe(
        map((resData) => {
          const notesDataArray: any = [];
          for (const key in resData) {
            notesDataArray.push({ userId: key, ...resData[key] });
          }
          return notesDataArray;
        })
      )
      .subscribe(
        (res) => {
          this.fetching = false;
          this.notesData = res;
          this.setslocalStorage(res);
        },
        (err) => console.error(err)
      );
  }

  saveNotes(data) {
    this._notesService.postData(data).subscribe((res) => {
      this.onFetchData();
    });
  }

  onAddNotes() {
    this._notesService.addNotes.next(true);
    this.editMode = false;
    this.notesAddForm.reset();
  }

  onEditData(userId, id) {
    this._notesService.addNotes.next(true);
    this.notesAddForm.setValue({
      title: this.notesData[id].title,
      note: this.notesData[id].note,
      date: this.notesData[id].date,
    });
    this.editMode = true;
    this.editId = userId;
  }

  onModalClose() {
    this._notesService.addNotes.next(false);
  }

  onSubmit(notes: Notes) {
    if (this.editMode) {
      console.log(this.editId);
      this.http
        .put<any>(
          `https://ecommerceproducts-38aea-default-rtdb.asia-southeast1.firebasedatabase.app/notes/` +
            this.editId +
            `.json`,
          notes
        )
        .subscribe(() => {
          this.onFetchData();
        });
      this.notesAddForm.reset();
      this.editMode = false;
    } else {
      const promise = new Promise((res, rej) => {
        this.notesData.push(notes);
        this.saveNotes(notes);
        res("done");
      });
      promise.then((res) => {
        console.log(this.notesData, res);
        this.notesAddForm.reset();
      });
    }
  }
}
