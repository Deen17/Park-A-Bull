import { Component, OnInit, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from "@angular/router"
import { localUrl, url } from "../../../../db/config"
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http"
import { Building } from "../building"
import { Lot } from "../lot"
import { GridLayout, ItemSpec } from "tns-core-modules/ui/layouts/grid-layout";
import { EventData } from "tns-core-modules/data/observable";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { prompt, PromptOptions, PromptResult, capitalizationType, inputType } from "tns-core-modules/ui/dialogs";
import { alert } from "tns-core-modules/ui/dialogs";
import { stringify } from '@angular/core/src/render3/util';
import { Button } from 'tns-core-modules/ui/button/button';
import { AdminLotService } from '../admin.lot.service';
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
  total: number = 0;
  building: Building;
  public location: string;
  public code: string;
  lotNames: Array<string> = [];
  allLotNames: Array<string> = [];
  unsetLotNames: Array<string> = [];
  showSet: boolean = true;
  lotToChange: number = 0;

  constructor(
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private lotService: AdminLotService) {

  }

  public setLotToChange(args: EventData) {
    this.showSet = false;
    let button = <Button>args.object
    this.lotToChange = parseInt(button.id);
  }

  onItemTap(args) {
    let index = args.index;
    let pickedLot = this.unsetLotNames[index]
    let pickedSlot = this.lotNames[this.lotToChange]
    this.lotNames[this.lotToChange] = pickedLot
    this.unsetLotNames.push(pickedSlot)
    this.unsetLotNames.splice(index, 1)
    this.showSet = true;
  }
/* 
  deleteFromAllByName(name: string){
    this.allLotNames = this.allLotNames.filter(element => {
      this.allLotNames.includes(name)
    })
  } */

  deleteFromSetByName(name: string){
    this.lotNames = this.lotNames.filter(element => {
      !(element == name)
    })
  }


  async ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get("name");
    this.location = this.activatedRoute.snapshot.paramMap.get("location");
    this.code = this.activatedRoute.snapshot.paramMap.get("code");
    this.newName = this.name;
    this.newCode = this.code;
    this.newLocation = this.location;
    console.log('building-details initiated: ' + this.name);
    await this.lotService.fetch();
    this.allLotNames = this.lotService.getLotNames();
    await this.fetchBuilding();
    this.setUnsetLotNames();
  }

  public setUnsetLotNames(){
    for(let i = 0; i < this.allLotNames.length; i++){
      let element = this.allLotNames[i]
      let temp = this.lotNames.indexOf(element);
      console.log(`element: ${element}, temp: ${temp}`)
      if(temp == -1){
        this.unsetLotNames.push(element)
      }
    }
  }

  showDialogBox() {
    const promptOptions: PromptOptions = {
      title: "Building Name",
      message: "Please enter a new building name",
      okButtonText: "Ok",
      cancelButtonText: "Cancel",
      defaultText: this.newName,
      inputType: inputType.text, // email, number, text, password, or email
    };
    prompt(promptOptions).then((r: PromptResult) => {
      console.log("Dialog result: ", r.result);
      console.log("Text: ", r.text);
      this.newName = r.text;
    });
  }

  showDialogBox1() {
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

  showDialogBox3() {
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

  displayAlertDialog1() {
    let options = {
      title: "Alert",
      message: "Building deleted successfully",
      okButtonText: "OK"
    };

    alert(options).then(() => {
      this.routerExtensions.navigateByUrl('admin/buildinglist')
    });
  }

  deleteBuilding() {
    request({
      url: localUrl + "deletebuilding",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        name: this.name
      })
    }).then((response) => {
      let rows = response.content.toJSON();
      console.log('name: ' + this.name)
      console.log('result:', rows)
      switch (rows[rows.length - 1][0].return_code) {
        case 0:
          this.displayAlertDialog1();
          break;
        case 10:
          alert('Error: Building doesnot exist');
          break;
        default:
          alert('Unknown Error Code');
          break;

      }
    }, (e) => {
      console.log(e)
    });

  }

  public async onSubmit() {
    if (this.newName == this.name) {
      this.tempName = null;
    } else {
      this.tempName = this.newName;
    }

    if (this.newCode == this.code) {
      this.tempCode = null;
    } else {
      this.tempCode = this.newCode;
    }

    if (this.newLocation == this.location) {
      this.tempLocation = null;
    } else {
      this.tempLocation = this.newLocation;
    }
    await this.editBuilding();
  }

  async editBuilding() {
    let link = `${localUrl}editbuildings`
    try {
      let response: HttpResponse =
        await request({
          url: link,
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
        })
      let rows = response.content.toJSON();
      switch (rows[rows.length - 1][0].return_code) {
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
    } catch (e) {
      console.log(e)
    }
  }

  async fetchBuilding() {
    let link = `${localUrl}lots/${encodeURI(this.name)}`
    try {
      let response: HttpResponse =
        await request({
          url: link,
          method: "GET"
        })
      let rows = response.content.toJSON();
      if (rows.length == 2) {
        await alert('Error: this building does not exist.')
        this.routerExtensions.navigateByUrl('admin')
      }
      let return_code = rows[rows.length - 1][0].return_code;
      switch (return_code) {
        case 0:
          let i = 0;
          rows[0].forEach(row => {
            let temp = new Lot(
              row.lot_id,
              row.lot_name,
              row.location,
              row.spots_available
            );
            this.lotNames.push(row.lot_name);
            this.newLots.push(row.lot_name);
            this.total += temp.getSpots();
            i++;
          });
          break;
        default:
          await alert('error code: ' + return_code)
          break;
      }
    } catch (e) {
      console.log(e)
    }
  }
}
