import {Component, OnInit} from '@angular/core';
import {Room} from "../../common/room";
import {RoomService} from "../../services/room.service";
import {ActivatedRoute} from "@angular/router";
import {RoomSingleLayoutService} from "../../services/room-single-layout.service";

@Component({
  selector: 'app-room-layout',
  templateUrl: './room-layout.component.html',
  styleUrls: ['./room-layout.component.css']
})
export class RoomLayoutComponent implements OnInit{

    rooms: Room[] = [];
    constructor(private roomService: RoomSingleLayoutService,
                private route: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.getRoom();
        console.log(" room is" + this.rooms);
    }

    private getRoom() {
        const roomId = +this.route.snapshot.paramMap.get('id')!;

        this.roomService.getSingleRoom(roomId).subscribe(
          data => {
            this.rooms = data._embedded.rooms;
          }
        )


    }
}
