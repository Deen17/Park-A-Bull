import { Component, OnInit, ElementRef} from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { localUrl, url } from "../../../../db/config"
import { request,getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http"
import { Building } from "../building"
import {Lot} from "../lot"
import { GridLayout, ItemSpec } from "tns-core-modules/ui/layouts/grid-layout";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { DropDownModule } from "nativescript-drop-down/angular";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";

@Component({
  selector: 'ns-building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.css'],
  moduleId: module.id,
})
export class BuildingDetailsComponent implements OnInit {
  public name: string;
  total : number = 0;
  building: Building;
  public location: string;
  public code: string;
  lots: Array<Lot> = []; // lot_id, lot_name, location, spots_available
  lotNames: Array<string> = [];

  public selectedIndex = 1;
  public items: Array<string>;

  constructor(private activatedRoute: ActivatedRoute) {

    this.items = [];
        for (var i = 0; i < 5; i++) {
            this.items.push("data item " + i);
        }
    
  }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get("name");
    this.location = this.activatedRoute.snapshot.paramMap.get("location");
    this.code = this.activatedRoute.snapshot.paramMap.get("code");
    console.log('building-details initiated: ' + this.name);
    this.fetchBuilding();
  }

  public onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    }
 
    public onopen() {
        console.log("Drop Down opened.");
    }
 
    public onclose() {
        console.log("Drop Down closed.");
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
