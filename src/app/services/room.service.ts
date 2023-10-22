import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../common/room";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private orderUrl = "http://localhost:8090/api/rooms";

  constructor(private httpClient: HttpClient) { }

  getRooms(floorId: number): Observable<GetResponseRooms>{

    //we need url based on the customer email
    const floorUrl = `${this.orderUrl}/search/findByFloorId?id=${floorId}`;


    return this.httpClient.get<GetResponseRooms>(floorUrl);

  }

  getRoom(roomId: number): Observable<GetResponseRoom>{
    const roomUrl = `${this.orderUrl}/search/findById?id=${roomId}`;

    console.log( "url is: " + roomUrl);

    return this.httpClient.get<GetResponseRoom>(roomUrl);
  }
}

interface GetResponseRooms{
  _embedded: {
    rooms: Room[];
  }
}

interface GetResponseRoom{
  _embedded: {
    room: Room;
  }
}


