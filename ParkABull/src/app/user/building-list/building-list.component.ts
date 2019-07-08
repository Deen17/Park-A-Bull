import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application"
import { getRootView } from "tns-core-modules/application";
import { localUrl, url } from "../../../../db/config"
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";
import { Building } from "../building";
import { ListPicker } from 'tns-core-modules/ui/list-picker';
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import {SearchBar} from "tns-core-modules/ui/search-bar"

@Component({
  selector: 'ns-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css'],
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuildingListComponent implements OnInit {
  buildings: Array<Building> = [];
  names: Array<string> = [];
  filteredNames: Array<string> = [];
  shouldShow: boolean = false;

  public searchPhrase : string = '';
  public picked: string;

  @ViewChild("sideDrawer") rSideDrawer: ElementRef;
  //@ViewChild("testLabel") testLabel: ElementRef;
  constructor(private routerExtensions: RouterExtensions, private ref: ChangeDetectorRef) {
    
  }

  onTextChanged(args){
    let searchBar = <SearchBar>args.object;
    this.searchPhrase = searchBar.text;
    this.filteredNames = this.names.filter(word => word.toLowerCase().includes(this.searchPhrase.toLowerCase()))
    console.log(this.filteredNames)
  }

  onSubmit(args){
    //intentionally left blank
  }

  public selectedIndexChanged(args) {
    let picker = <ListPicker>args.object;
    this.picked = this.filteredNames[picker.selectedIndex];
  }

  ngOnInit(): void {
    console.log("building list component initiated")
    this.getBuildings();
  }

  getBuildings(): void {
    request({
      url: localUrl + "buildings",
      method: "GET"
    }).then((response: HttpResponse) => {
      var rows = response.content.toJSON()
      //console.log(rows)
      rows.forEach(row => {
        let temp = new Building(
          row.building_name,
          row.building_code,
          row.location,
          row.lot_code_1,
          row.lot_code_2,
          row.lot_code_3);
        //console.log(temp)
        this.buildings.push(temp);
        this.names.push(row.building_name)
      });
      //after this line, the names and buildings arrays should be populated
      //console.log(this.names) 
      this.filteredNames = this.names;
      this.shouldShow = true;
      this.ref.markForCheck();
    }, (e) => {
      console.log(e)
    })
  }

  buildingDetails(): void {
    this.routerExtensions.navigateByUrl("user/buildingdetails/" + this.picked);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
/*     this.shouldShow = true;
    this.ref.markForCheck(); */
  }
}
