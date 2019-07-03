import { Component, OnInit, ElementRef} from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { localUrl, url } from "../../../../db/config"
import { request,getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http"
import { Building } from "../building"
import {Lot} from "../lot"
import { GridLayout, ItemSpec } from "tns-core-modules/ui/layouts/grid-layout";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

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
  public location: string;
  lots: Array<Lot> = []; // lot_id, lot_name, location, spots_available
  lotNames: Array<string> = [];

  public picked: string;

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get("name");
    this.location = this.activatedRoute.snapshot.paramMap.get("location");
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
          this.lotNames.push(row.lot_name);
          console.log('lotNames: ', this.lotNames)
          this.total+= temp.getSpots();
          i++;
        });
      }
    }, (e) => {
      console.log(e)
    })
  }
}
