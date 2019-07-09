import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { localUrl, url } from "../../../../db/config"
import { request,getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http"
import { User } from "../user"
//import {Vehicle} from "../vehicle"
import { AdminVehicleService, Vehicle } from '../adminVehicle.service';
import { Switch } from "tns-core-modules/ui/switch";
import { EventData } from "tns-core-modules/data/observable";
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';

@Component({
  selector: 'ns-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  moduleId: module.id,
})
export class UserDetailsComponent implements OnInit {
  public name: string;
  public firstName: string;
  public lastName: string;
  public unumber: string;
  public email: string;
  public userName: string;
  vehicles: Array<string> = [];
  licensePlates: Array<string> = [];
  show: Array<string> = [];
  toggle: boolean = true;
  constructor(private activatedRoute: ActivatedRoute, private vehicleService: AdminVehicleService) { }

  async ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get("name");
    this.firstName = this.activatedRoute.snapshot.paramMap.get("firstname");
    this.lastName = this.activatedRoute.snapshot.paramMap.get("lastname");
    this.unumber = this.activatedRoute.snapshot.paramMap.get("unumber");
    this.email = this.activatedRoute.snapshot.paramMap.get("email");
    this.userName = this.activatedRoute.snapshot.paramMap.get("username");
    console.log('user-details initiated: ' + this.name);
    await this.refresh();
    this.show = this.vehicles;
  }

  onCheckedChange(args: EventData) {
    let mySwitch = args.object as Switch;
    let isChecked = mySwitch.checked;
    this.toggleUserStatus(isChecked);
  }  

  public async toggleUserStatus(isChecked: boolean){
    let link = `${localUrl}${isChecked ? 'enableuser' : 'disableuser'}`
    let response: HttpResponse = 
      await request({
        url: link,
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        content: JSON.stringify({
          email: this.email
        })
      })
    let rows = response.content.toJSON();
    let return_code = rows[rows.length - 1][0].return_code;
    switch(return_code){
      case 0:
        await alert(`Successfully ${isChecked? 'enabled ' : 'disabled '} this user.`)
        break;
      case 8:
        await alert('This user was not found.')
        break;
      default:
        alert('Invalid return code')
        break;
    }
  }

  async refresh(){
    await this.vehicleService.fetch(this.email)
    this.vehicles = this.vehicleService.getVehicleNames()
    this.licensePlates = this.vehicleService.getLicencePlates()
  }

  onToggle() {
    this.toggle = !this.toggle;
    if(this.toggle)
      this.show = this.vehicles
    else this.show = this.licensePlates;
  }
}
