import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../common/room";

@Injectable({
  providedIn: 'root'
})
export class RoomSingleLayoutService{
  private orderUrl = "http://localhost:8090/api/rooms";

  constructor(private httpClient: HttpClient) { }



  getSingleRoom(roomId: number): Observable<GetResponseSingleRoom>{
    const roomUrl = `${this.orderUrl}/search/findById?id=${roomId}`;

    console.log( "url is: " + roomUrl);
    return this.httpClient.get<GetResponseSingleRoom>(roomUrl);
  }


}

interface GetResponseSingleRoom{
  _embedded: {
    rooms: Room[];
  }
}
