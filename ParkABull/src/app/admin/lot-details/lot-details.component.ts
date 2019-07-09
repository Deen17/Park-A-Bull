import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { AdminLotService, Lot } from '../admin.lot.service';
import {localUrl, url} from '../../../../db/config'
import { request, HttpResponse } from "tns-core-modules/http";
import{TextField} from 'tns-core-modules/ui/text-field'
@Component({
  selector: 'ns-lot-details',
  templateUrl: './lot-details.component.html',
  styleUrls: ['./lot-details.component.css'],
  moduleId: module.id,
})
export class LotDetailsComponent implements OnInit {
  name: string  = ""; 
  lot: Lot = null;
  id: number = null;
  newName: string = "";
  location: string = "";
  newLocation: string = "";
  constructor(
    private routerExtensions: RouterExtensions, 
    private activatedRoute: ActivatedRoute,
    private lotService: AdminLotService) { }

  public async checkInput() {
    let name = '';
    let location = '';
    if(this.newName == this.name || this.newName == '' || this.newName == null)
      name = null;
    else name = this.newName
    if(this.newLocation == this.location || this.newLocation =='' || this.newLocation == null)
      location = null;
    else location = this.newLocation;
    await this.editLot(name, location)
  }
  public async editLot(name: string, location : string){
    let link = `${localUrl}editlot`
    let response : HttpResponse = 
      await request({
        url: link,
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        content: JSON.stringify({
          id: this.id,
          name: name,
          location: location
        })
      })
    let rows = response.content.toJSON();
    let return_code = rows[rows.length - 1][0].return_code;
    switch(return_code){
      case 0:
        await alert('Succesfully edited this lot!')
        this.routerExtensions.navigateByUrl('admin', {clearHistory: true})
        break;
      case 7:
        await alert('That lot name already exists!')
        break;
      case 34:
        await alert('Duplicate location');
        break;
      default:
        await alert('error: unknown error code')
        break;
    }

  }

  onTextChange(args){
    let textbox = <TextField>args.object;
    switch(textbox.id){
      case 'name':
        this.newName = textbox.text;
        break;
      case 'location':
        this.newLocation = textbox.text;
        break;
      default:
        alert('undefined textbox id');
        break;
    }

  }
  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('name')
    this.lot = this.lotService.getLot(this.name);
    console.log(this.lot)
    this.newName = this.name;
    this.newLocation = this.location = this.lot.getLocation();
    this.id = this.lot.getID();
  }

}
