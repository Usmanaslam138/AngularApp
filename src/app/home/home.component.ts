import { Component, OnInit } from "@angular/core";
import { NotesAppService } from "../appServices/notes-app.service";
import { map } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  constructor(
    private _service: NotesAppService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.onFetchData();

    // this.activatedRoute.fragment.subscribe((res) => {
    //   console.log(res);
    //   this.JumpTo(res);
    // });
  }

  // JumpTo(section) {
  //   setTimeout(() => {
  //     document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  //   }, 500);
  // }

  onFetchData() {
    this._service
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
          localStorage.setItem("noteData", JSON.stringify(res));
        },
        (err) => console.error(err)
      );
  }
}
