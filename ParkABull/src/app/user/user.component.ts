import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router"
import * as appSettings from "tns-core-modules/application-settings"
import { getRootView } from "tns-core-modules/application";
import * as app from "tns-core-modules/application"
import { RadSideDrawer, SideDrawerLocation } from "nativescript-ui-sidedrawer";
import { VehicleService } from './vehicle.service';
import {url, localUrl} from "../../../db/config"
import { request, HttpResponse } from "tns-core-modules/http"
import { interval, Observable, of, timer, Subscription } from 'rxjs'
import {repeat, delay, takeUntil, map} from 'rxjs/operators'
import {Progress} from "tns-core-modules/ui/progress"
import { Color } from "tns-core-modules/color"


@Component({
  selector: 'User',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  moduleId: module.id,
})
export class UserComponent implements OnInit, OnDestroy {
  showTimer: boolean = true;
  showSpot: boolean = false;
  timer : number = 0;
  seconds: number = 0;
  timeLeft: number = this.timer - this.seconds;
  color: Color = new Color("green");
  counter: Observable<number> = null;
  subscription: Subscription;
  subscribed: boolean= false;
  spotName: string;
  lotName: string;
  constructor(
    private routerExtensions: RouterExtensions,
    private vehicleService: VehicleService) {

    }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('user component destroyed')
    if (this.subscribed){
      this.subscription.unsubscribe();
      console.log('unsubscribed from timer')
    }
  }

	ngOnInit(): void {
    console.log("user component initiated")
    this.vehicleService.fetch();
    if(!(this.subscription == undefined))
      this.subscription.unsubscribe();
    this.getReservation();
	}

  public onValueChanged(){
    let portion = this.seconds / this.timer;
    console.log(portion)
    if(portion > .75){
      this.color = new Color('green')
    }
    else if (portion > .5){
      this.color = new Color('yellow')
    }
    else if (portion > .25){
      this.color = new Color('orange')
    }
    else this.color = new Color('red')
  }

  public countDown(){
    this.subscribed = true;
    const source = interval(1000)
    const timer$ = timer(this.timer * 1000)
    this.counter = source.pipe(
      takeUntil(timer$),
      map(x =>Math.trunc(this.timer) - x - 1))
    this.subscription = this.counter.subscribe(val => {
      this.seconds = val
      this.onValueChanged();
    })

    
  }

  public async getReservation(){
    let link = `${localUrl}getspotbyemail/${encodeURI(appSettings.getString("email"))}`;
    try{
      const response: HttpResponse = 
        await request({
          url: link,
          method: "GET"
        })
      let rows = response.content.toJSON();
      console.log('return code: ' + rows[rows.length-1][0].return_code)
      if(rows[rows.length-1][0].return_code == 31){
        console.log('no reservation found')
      }
      else if(rows[rows.length-1][0].return_code == 0){
        console.log('return code is 0')
        let reservation = rows[0][0];
        switch (reservation.status) {
          case 'reserved':
            this.lotName = reservation.lot_name;
            this.spotName = reservation.spot_name
            let time = new Date(reservation.reservation_dt_tm).getTime();
            time = time + (1000*60*30 - 1000*60*60*4);
            this.timer = (time - Date.now())/1000;
            console.log(this.timer)
            this.countDown();
            break;
          case 'claimed':

            break;
          default:
            break;
        }
      }
    } catch(e){
      console.log(e)
    }
  }

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
