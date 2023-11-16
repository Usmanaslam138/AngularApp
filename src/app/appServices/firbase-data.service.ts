import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FirbaseDataService {
  constructor(private http: HttpClient) {}
  url =
    "https://ecommerceproducts-38aea-default-rtdb.asia-southeast1.firebasedatabase.app";

  postArrayData(data: any[]): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    // Assuming you want to send the data as the request body
    // return this.http.post<any>(`${this.url}/services.json`, data, { headers });
    return this.http.put<any>(`${this.url}/services.json`, data, { headers });
  }

  fetchServices() {
    return this.http.get(`${this.url}/services.json`);
  }

  getDataTitle() {
    return this.http.get(`${this.url}/title.json`);
  }

  deleteService() {
    return this.http.delete(`${this.url}/services.json`);
  }
}
