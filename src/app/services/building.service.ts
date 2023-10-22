import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Building} from "../common/building";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private orderUrl = "http://localhost:8090/api/buildings";

  constructor(private httpClient: HttpClient) { }

  getBuildings(): Observable<GetResponseBuilding>{

    return this.httpClient.get<GetResponseBuilding>(this.orderUrl);

  }
}

interface GetResponseBuilding{
  _embedded: {
    buildings: Building[];
  }
}
