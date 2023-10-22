import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Floor} from "../common/floor";

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  private orderUrl = "http://localhost:8090/api/floors";

  constructor(private httpClient: HttpClient) { }

  getFloors(buildingId: number): Observable<GetResponseFloors>{

    //we need url based on the customer email
    const orderHistoryUrl = `${this.orderUrl}/search/findByBuildingId?id=${buildingId}`;


    return this.httpClient.get<GetResponseFloors>(orderHistoryUrl);

  }
}

interface GetResponseFloors{
  _embedded: {
    floors: Floor[];
  }
}
