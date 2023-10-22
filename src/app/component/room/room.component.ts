import {Component, OnInit} from '@angular/core';
import {Room} from "../../common/room";
import {FloorService} from "../../services/floor.service";
import {ActivatedRoute, Route} from "@angular/router";
import {RoomService} from "../../services/room.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit{

  roomList: Room[] = [];

  constructor(private roomService: RoomService,
              private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getRoomList();

  }

  getRoomList(){

    const floorId = +this.route.snapshot.paramMap.get('id')!;
    this.roomService.getRooms(floorId).subscribe(
      data => {
        this.roomList = data._embedded.rooms;
      }
    )
  }

}
