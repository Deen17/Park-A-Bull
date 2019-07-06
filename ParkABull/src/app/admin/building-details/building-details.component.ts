import { Component, OnInit, ElementRef} from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { localUrl, url } from "../../../../db/config"
import { request,getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http"
import { Building } from "../building"
import {Lot} from "../lot"
import { GridLayout, ItemSpec } from "tns-core-modules/ui/layouts/grid-layout";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { prompt, PromptOptions, PromptResult, capitalizationType, inputType } from "tns-core-modules/ui/dialogs";
import { alert } from "tns-core-modules/ui/dialogs";
/* import { DropDownModule } from "nativescript-drop-down/angular";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { GestureTypes, GestureEventData } from "tns-core-modules/ui/gestures"; */

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

  constructor(private activatedRoute: ActivatedRoute) {

    
  }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get("name");
    this.location = this.activatedRoute.snapshot.paramMap.get("location");
    this.code = this.activatedRoute.snapshot.paramMap.get("code");
    console.log('building-details initiated: ' + this.name);
    this.fetchBuilding();
  }

  showDialogBox(){
    const promptOptions: PromptOptions = {
      title: "Building Name",
      message: "Please enter new building name",
      okButtonText: "Ok",
      cancelButtonText: "Cancel",
      defaultText: this.name,
      inputType: inputType.text, // email, number, text, password, or email
    };
    prompt(promptOptions).then((r: PromptResult) => {
      console.log("Dialog result: ", r.result);
      console.log("Text: ", r.text);
      this.name = r.text;
    });
  }

  showDialogBox1(){
    const promptOptions: PromptOptions = {
      title: "Building Location",
      message: "Please enter new location",
      okButtonText: "Ok",
      cancelButtonText: "Cancel",
      defaultText: this.location,
      inputType: inputType.text, // email, number, text, password, or email
    };
    prompt(promptOptions).then((r: PromptResult) => {
      console.log("Dialog result: ", r.result);
      console.log("Text: ", r.text);
      this.location = r.text;
    });
  }

  displayAlertDialog() {
    let options = {
        title: "Alert",
        message: "Code cannot be changed",
        okButtonText: "OK"
    };

    alert(options).then(() => {
        console.log("code unchanged!");
    });
  }

  onSubmit(){
    request({
      url: localUrl + "buildings",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        name: this.name,
        location: this.location
      })
    }).then((response) => {
      console.log('heyyyy')
      const result = response.content.toJSON();
      console.log('result:', result)
      if (!result.response){
        (alert({
          title: "Changes failed!",
          message: result.duplicate_entry,
          okButtonText:"Try Again"
        }))
      }
    }, (e) => {
      console.log(e)
    });
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
