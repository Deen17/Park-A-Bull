import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import * as app from "tns-core-modules/application"
import * as appSettings from "tns-core-modules/application-settings"
import { Color } from "tns-core-modules/color"
import { TextField } from "tns-core-modules/ui/text-field"
import { AutocapitalizationType, EventData } from "tns-core-modules/ui/editable-text-base"
import { request, getFile, getImage, getJSON, getString, HttpResponse } from 'tns-core-modules/http/http';
import { localUrl, url } from "../../../../db/config";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
  selector: 'ns-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.css'],
  moduleId: module.id,
})
export class AddBuildingComponent implements OnInit {
  buildingName: string;
  code: string;
  location: string;
  lot1: string;
  lot2: string;
  lot3: string;

  boxColor: Color = new Color(255, 207, 196, 147); //(255, 207,196,147) usf gold
  greenColor: Color = new Color(255, 0, 103, 71); //usf green

  constructor(private routerExtensions: RouterExtensions) { }

  onTextChange(args) {
    let textbox = <TextField>args.object;
    switch (textbox.id) {
      case 'buildingName':
        this.buildingName = textbox.text
        break;
      case 'code':
        this.code = textbox.text
        break;
      case 'location':
        this.location=textbox.text;
        break;
      case 'lot1':
        this.lot1=textbox.text;
        break;
      case 'lot2':
        this.lot2=textbox.text;
        break;
      case 'lot3':
        this.lot3=textbox.text;
        break;
      default:
        console.log('switched entered unintended case')
        break;
    }
  }

  onDone(args: EventData){
    request({
      url: localUrl + "addbuilding",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        buildingName: this.buildingName,
        code: this.code,
        location: this.location,
        lot1: this.lot1,
        lot2: this.lot2,
        lot3: this.lot3
      })
    }).then((response) => {
      let rows = response.content.toJSON();
      console.log('result:', rows)
      switch(rows[rows.length - 1][0].return_code) {
        case 0:
          console.log('Add successful')
          this.displayAlertDialog();
          break;
        case 17:
          alert('Error: Duplicate building name')
          break;
        case 19:
          alert('Error: Duplicate lot names')
          break;
        case 6:
          alert('Error: lot does not exist')
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

  displayAlertDialog() {
    let options = {
        title: "Alert",
        message: "Building added successfully",
        okButtonText: "OK"
    };

    alert(options).then(() => {
        console.log("code unchanged!");
        this.routerExtensions.navigateByUrl('admin/buildinglist')
    });
  }

  ngOnInit() {
    console.log("Add Buildings component initiated!")
  }

}
