const nodeify = require("nativescript-nodeify");
import { Component, OnInit } from "@angular/core";
import { getBoolean, setBoolean, getNumber, setNumber, getString as appGetString, setString, hasKey, remove, clear } from "tns-core-modules/application-settings";
import { Button } from "tns-core-modules/ui/button"
import { EventData } from "tns-core-modules/data/observable"
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { fromObject, fromObjectRecursive, Observable, PropertyChangeData } from "tns-core-modules/data/observable";
import { TextField } from "tns-core-modules/ui/text-field"
import { Color } from "tns-core-modules/color"
import { Image } from "tns-core-modules/ui/image"
import { url } from "../../../db/config.js"
import { AutocapitalizationType } from "tns-core-modules/ui/editable-text-base"
import * as md5 from "md5/md5.js" //md5.js exports a function without a name.
import { RouterExtensions } from "nativescript-angular/router"
import * as appSettings from "tns-core-modules/application-settings"

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  boxColor: Color = new Color(255, 207, 196, 147); //(255, 207,196,147) usf gold
  greenColor: Color = new Color(255, 0, 103, 71); //usf green
  img : Image = new Image()
  buttontext: string = "Tap Me!";
  counter: number = 0;
  autocaps: AutocapitalizationType = "none"
  constructor(private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject providers.
  }
  onTap(args: EventData) {
    let button = <Button>args.object;
    let newpass: string = md5(this.password);
    request({
      url: url + "login", //http://10.100.0.232:8000/login
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        username: this.username,
        password: newpass
      })
    }).then((response) => {
      const result = response.content.toJSON();
      if (result.login){
        this.login(result.userType);
      } 
      else {
        (alert("Login failed!"))
        appSettings.remove("username")
        appSettings.setBoolean("isLoggedIn", false)
      }
    }, (e) => {
      console.log(e)
    });
  }
  login(userType: string) {
    console.log('entered login()')
    appSettings.setString("username", this.username)
    appSettings.setBoolean("isLoggedIn", true)
    appSettings.setString("userType", userType)
    this.routerExtensions.navigateByUrl(appSettings.getString("userType"))
  }
  onTextChange1(args) {
    let text1 = <TextField>args.object;
    this.username = text1.text
  }
  onTextChange2(args) {
    let text2 = <TextField>args.object;
    this.password = text2.text

  }
  onTap2() {
    this.counter++
    this.buttontext = 'Tapped ' + this.counter + ' times!'
  }
  ngOnInit(): void {
    console.log('Login Component initiated')
  }
}