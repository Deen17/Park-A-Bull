import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application"
import { getRootView } from "tns-core-modules/application";
import { VehicleService, Vehicle } from '../vehicle.service';
import * as appSettings from 'tns-core-modules/application-settings'
@Component({
  selector: 'ns-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
  moduleId: module.id,
})
export class VehicleListComponent implements OnInit {
  vehicles: Array<string> = [];
  licencePlates: Array<string> = [];
  pickedVehicle: string = "";
  pickedLicense: string = "";
  index: number= 0;
  constructor(
    private routerExtensions: RouterExtensions,
    private vehicleService: VehicleService) { }

	ngOnInit() {
    console.log("vehicle list component initiated!!")
    this.refresh();
  }
  
  async refresh(){
    await this.vehicleService.fetch()
    this.vehicles = this.vehicleService.getVehicleNames()
    this.licencePlates = this.vehicleService.getLicencePlates();
    this.index = this.licencePlates.indexOf(
      this.
        vehicleService.
          getDefaultVehicle().
            getLicensePlate())
    this.pickedVehicle = this.vehicleService.getDefaultVehicle().getCarName();
    this.pickedLicense = this.vehicleService.getDefaultVehicle().getLicensePlate();
  }

  async onItemTap(args) {
    this.index = args.index;
    this.pickedVehicle = this.vehicles[this.index];
    this.pickedLicense = this.licencePlates[this.index]
    await this.vehicleService.setDefaultVehicle(this.pickedLicense);
    await this.refresh();
    alert(`Your Default Vehicle is now: ${this.vehicleService.getDefaultVehicle().getCarName()}, ${this.vehicleService.getDefaultVehicle().getLicensePlate()}`)
    console.log(`Your Default Vehicle is now: ${this.vehicleService.getDefaultVehicle().getCarName()}, ${this.vehicleService.getDefaultVehicle().getLicensePlate()}`)
  }


	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}