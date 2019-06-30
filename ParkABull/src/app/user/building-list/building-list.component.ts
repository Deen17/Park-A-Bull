import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

let pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
  "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

@Component({
  selector: 'ns-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css'],
  moduleId: module.id,
})
export class BuildingListComponent implements OnInit {
  buildings: Array<Building> = [];
  names: Array<string> = [];

  public pokemons: Array<string> = [];
  public picked: string;

  @ViewChild("sideDrawer") rSideDrawer: ElementRef;
  constructor(private routerExtensions: RouterExtensions) {
    for (let pokemon of pokemonList) {
      this.pokemons.push(pokemon);
    }
    
  }

  public selectedIndexChanged(args) {
    let picker = <ListPicker>args.object;
    this.picked = this.names[picker.selectedIndex];
    console.log(this.picked)
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
      console.log(this.names)
    }, (e) => {
      console.log(e)
    })
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
