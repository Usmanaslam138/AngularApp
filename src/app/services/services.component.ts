import { Component, OnInit } from "@angular/core";
import { FirbaseDataService } from "../appServices/firbase-data.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  constructor(private _dataBase: FirbaseDataService) {}
  addServicesForm!: FormGroup;
  fetching: boolean = false;
  saving: boolean = false;
  title = this._dataBase.getDataTitle();
  url = "../../assets/services/";
  ServicesData = [
    {
      id: 1,
      title: "Web Development",
      price: 19.99,
      imgUrl: this.url + "1.jpg",
      hoverUrl: this.url + "6.jpg",
    },
    {
      id: 2,
      title: "Graphic Designing",
      price: 39.99,
      imgUrl: this.url + "2.jpg",
      hoverUrl: this.url + "7.jpg",
    },
    {
      id: 3,
      title: "Graphic Designing",
      price: 139.99,
      imgUrl: this.url + "9.jpg",
      hoverUrl: this.url + "4.jpg",
    },
    {
      id: 4,
      title: "Graphic Designing",
      price: 329.99,
      imgUrl: this.url + "12.jpg",
      hoverUrl: this.url + "15.jpg",
    },
    {
      id: 5,
      title: "Graphic Designing",
      price: 349.99,
      imgUrl: this.url + "18.jpg",
      hoverUrl: this.url + "17.jpg",
    },
  ];

  ngOnInit(): void {
    this.addServicesForm = new FormGroup({
      id: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
      ]),
      title: new FormControl(null, Validators.required),
      price: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[$0-9]+$/),
      ]),
    });

    this._dataBase.getDataTitle().subscribe((res) => {});
  }

  saveService() {
    this.saving = true;
    this._dataBase.postArrayData(this.ServicesData).subscribe(
      (res) => {
        console.log(res);
        this.saving = false;
      },
      (err) => console.error(err)
    );
  }

  onFetchData() {
    this.fetching = true;
    this._dataBase.fetchServices().subscribe(
      (res) => {
        const data = JSON.stringify(res);
        this.ServicesData = JSON.parse(data);
        this.fetching = false;
      },
      (err) => console.error(err)
    );
  }

  onDelete(id) {
    const deleteData = new Promise((resolve, reject) => {
      this.ServicesData.splice(id, 1);
      this.saveService();
      resolve(true);
    });

    deleteData.then((data) => {
      this.saveService();
    });
  }

  onSubmit() {
    this.ServicesData.push({
      title: this.addServicesForm.value.title,
      price: this.addServicesForm.value.price,
      id: this.addServicesForm.value.id,
      imgUrl: "../../assets/services/2.jpg",
      hoverUrl: "../../assets/services/6.jpg",
    });

    this.addServicesForm.reset();
  }
}
