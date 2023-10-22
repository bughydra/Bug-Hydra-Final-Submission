import {Component, OnInit} from '@angular/core';
import {Resident} from "../../common/resident";
import {FloorService} from "../../services/floor.service";
import {ActivatedRoute} from "@angular/router";
import {ResidentService} from "../../services/resident.service";

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.css']
})
export class ResidentComponent implements OnInit{

  residents: Resident[] = [];

  constructor(private residentService: ResidentService,
              private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getResidents();
  }

  getResidents(){
    const roomId = +this.route.snapshot.paramMap.get('id')!;

    this.residentService.getResidents(roomId).subscribe(
      data => {
        this.residents = data._embedded.residents;
      }
    )

  }

}
