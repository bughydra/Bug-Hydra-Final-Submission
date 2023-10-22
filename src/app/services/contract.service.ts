import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Building} from "../common/building";
import {Contract} from "../common/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private orderUrl = "http://localhost:8090/api/contracts";

  constructor(private httpClient: HttpClient) { }

  getContracts(): Observable<GetResponseContracts>{

    return this.httpClient.get<GetResponseContracts>(this.orderUrl);

  }
}

interface GetResponseContracts{
  _embedded: {
    contracts: Contract[];
  }
}

