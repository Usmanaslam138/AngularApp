import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NotesAppService } from "src/app/appServices/notes-app.service";

@Component({
  selector: "app-notes-item",
  templateUrl: "./notes-item.component.html",
  styleUrls: ["./notes-item.component.css"],
})
export class NotesItemComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private _service: NotesAppService
  ) {}
  fetching: boolean = false;
  singleNote;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((res) => {
      var a = res.get("id");
      this.fetchSingleNote(a);
    });

    // this.random();
  }

  random() {
    let a: any = localStorage.getItem("noteData");
    let b = JSON.parse(a);
    console.log(b);
    let filter = b.forEach((element) => {
      this.activatedRoute.paramMap.subscribe((res) => {
        if (element.userId == res.get("id")) {
          this.singleNote = element;
          console.log(element);
        }
      });
    });
  }

  fetchSingleNote(id) {
    this.fetching = true;
    this._service.fetchSingleData(id).subscribe((res) => {
      this.singleNote = res;
      this.fetching = false;
    });
  }
}
