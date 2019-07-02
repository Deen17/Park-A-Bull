import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { localUrl, url } from "../../../../db/config"
import { request, HttpResponse } from "tns-core-modules/http"
import { Building } from "../building"
import {Lot} from "../lot"


@Component({
  selector: 'ns-building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.css'],
  moduleId: module.id,
})
export class BuildingDetailsComponent implements OnInit {
  public name: string;
  total : number = 0;
  constructor(private activatedRoute: ActivatedRoute) { }
  building: Building;
  lots: Array<Lot> = []; // lot_id, lot_name, location, spots_available
  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get("name");
    console.log('building-details initiated: ' + this.name);
    this.fetchBuilding();
  }

  fetchBuilding(): void {
    request({
      url: localUrl + "lots/" + encodeURI(this.name),
      method: "GET"
    }).then((response: HttpResponse) => {
      var rows = response.content.toJSON()
      if(rows.length == 2){
        alert('Error: that building does not exist')
      }
      else if(rows[2][0].return_code != 0){
        alert('Error Code :' + rows[2][0].return_code)
      }
      else{
        let i = 0;
        rows[0].forEach(row => {
          let temp = new Lot( 
            row.lot_id,
            row.lot_name,
            row.location,
            row.spots_available
          );
          this.lots.push( temp );
          //this.lots[i].printLotInfo()
          this.total+= temp.getSpots();
          i++;
        });
      }
    }, (e) => {
      console.log(e)
    })
  }
}
