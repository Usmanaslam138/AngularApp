import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NotesAppService {
  constructor(private http: HttpClient) {}

  addNotes = new BehaviorSubject(false);

  url =
    "https://ecommerceproducts-38aea-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json";

  postData(data: any[]): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    // return this.http.post<any>(`${this.url}/services.json`, data, { headers });
    return this.http.post<any>(this.url, data, { headers });
  }

  fetchData() {
    return this.http.get(this.url);
  }

  fetchSingleData(id) {
    return this.http.get(
      `https://ecommerceproducts-38aea-default-rtdb.asia-southeast1.firebasedatabase.app/notes/${id}.json`
    );
  }

  getData() {
    return this.http.get(this.url);
  }

  deleteData(id) {
    return this.http.delete(
      `https://ecommerceproducts-38aea-default-rtdb.asia-southeast1.firebasedatabase.app/notes/${id}.json`
    );
  }
}
