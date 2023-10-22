import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Resident} from "../common/resident";

@Injectable({
  providedIn: 'root'
})
export class ResidentService {
  private orderUrl = "http://localhost:8090/api/residents";

  constructor(private httpClient: HttpClient) { }

  getResidents(roomId: number): Observable<GetResponseResident>{

    //we need url based on the customer email
    const residentUrl = `${this.orderUrl}/search/findByRoomId?id=${roomId}`;


    return this.httpClient.get<GetResponseResident>(residentUrl);

  }
}

interface GetResponseResident{
  _embedded: {
    residents: Resident[];
  }
}
