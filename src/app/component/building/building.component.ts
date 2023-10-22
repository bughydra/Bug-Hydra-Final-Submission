import {Component, OnInit} from '@angular/core';
import {Building} from "../../common/building";
import {BuildingService} from "../../services/building.service";

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit{

  buildingsList: Building[] = [];

  constructor(private buildingService: BuildingService) {

  }

  ngOnInit(): void {
    this.getBuildings();
    console.log(this.buildingsList);
    console.log("hello");
  }

  private getBuildings() {

    this.buildingService.getBuildings().subscribe(
      data => {
        this.buildingsList = data._embedded.buildings
      }
    );

  }
}
