import { Component, OnInit, ElementRef} from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
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
import { stringify } from '@angular/core/src/render3/util';
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
  public newName: string;
  public newCode: string;
  newLots: Array<string> = [];
  public newLocation: string;
  public tempLocation: string;
  public tempLot1: string;
  public tempLot2: string;
  public tempLot3: string;
  public tempName: string;
  public tempCode: string;
  total : number = 0;
  building: Building;
  public location: string;
  public code: string;
  lots: Array<Lot> = []; // lot_id, lot_name, location, spots_available
  lotNames: Array<string> = [];

  constructor(private routerExtensions: RouterExtensions, private activatedRoute: ActivatedRoute) {

    
  }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get("name");
    this.location = this.activatedRoute.snapshot.paramMap.get("location");
    this.code = this.activatedRoute.snapshot.paramMap.get("code");
    this.newName = this.name;
    this.newCode = this.code;
    this.newLocation = this.location;
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
      this.newName = r.text;
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
      this.newLocation = r.text;
    });
  }

  showDialogBox3(){
    const promptOptions: PromptOptions = {
      title: "Building Code",
      message: "Please enter new building code",
      okButtonText: "Ok",
      cancelButtonText: "Cancel",
      defaultText: this.code,
      inputType: inputType.text, // email, number, text, password, or email
    };
    prompt(promptOptions).then((r: PromptResult) => {
      console.log("Dialog result: ", r.result);
      console.log("Text: ", r.text);
      this.newCode = r.text;
    });
  }

  displayAlertDialog() {
    let options = {
        title: "Alert",
        message: "Building Details edits successful",
        okButtonText: "OK"
    };

    alert(options).then(() => {
        console.log("code unchanged!");
        this.routerExtensions.navigateByUrl('admin/buildinglist')
    });
  }

  onSubmit(){
    if(this.newName == this.name){
      this.tempName = null;
    }else{
      this.tempName = this.newName;
    }

    if(this.newCode == this.code){
      this.tempCode = null;
    }else{
      this.tempCode = this.newCode;
    }

    if(this.newLocation == this.location){
      this.tempLocation = null;
    }else{
      this.tempLocation = this.newLocation;
    }

    if(this.newLots[0] == this.lotNames[0]){
      this.tempLot1 = null;
    }else{
      this.tempLot1 = this.newLots[0];
    }

    if(this.newLots[1] == this.lotNames[1]){
      this.tempLot2 = null;
    }else{
      this.tempLot2 = this.newLots[1];
    }

    if(this.newLots[2] == this.lotNames[2]){
      this.tempLot3 = null;
    }else{
      this.tempLot3 = this.newLots[2];
    }

    request({
      url: localUrl + "editbuildings",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        name: this.name,
        newName: this.tempName,
        newCode: this.tempCode,
        newLoc: this.tempLocation,
        newLot1: this.tempLot1,
        newLot2: this.tempLot2,
        newLot3: this.tempLot3
      })
    }).then((response) => {
      let rows = response.content.toJSON();
      console.log('result:', rows)
      switch(rows[rows.length - 1][0].return_code) {
          case 0:
            console.log('Edits successful')
            this.displayAlertDialog();
            break;
          case 17:
            alert('Error: Duplicate building name')
            break;
          case 19:
            alert('Error: Duplicate lot names')
            break;
          case 22:
            alert('Error: Duplicate building code')
            break;
          default:
            alert('Error: Unknown Error Code')
            break;
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
          this.newLots.push(row.lot_name);
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
