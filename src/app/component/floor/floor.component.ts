import {Component, OnInit} from '@angular/core';
import {Floor} from "../../common/floor";
import {FloorService} from "../../services/floor.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit{

  floorList: Floor[] = [];

  constructor(private floorService: FloorService,
              private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getFloorList();
  }

  getFloorList(){
    const buildingId = +this.route.snapshot.paramMap.get('id')!;

    this.floorService.getFloors(buildingId).subscribe(
      data => {
        this.floorList = data._embedded.floors;
      }
    )
  }

}
