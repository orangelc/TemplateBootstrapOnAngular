import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class DataLocalService {
  constructor(public _http:HttpClient) {

  }

  public getJSON():Observable<any> {
    return this._http.get("./assets/data/creditos.json");
  }
}
