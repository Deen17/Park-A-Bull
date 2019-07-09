import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router"
import * as appSettings from "tns-core-modules/application-settings"
import { Color } from "tns-core-modules/color"
import { TextField } from "tns-core-modules/ui/text-field"
import { AutocapitalizationType, EventData } from "tns-core-modules/ui/editable-text-base"
import * as md5 from "md5/md5.js"
import { request } from 'tns-core-modules/http/http';
import {url, localUrl} from "../../../db/config.js"

@Component({
  selector: 'ns-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  moduleId: module.id,
})
export class RegisterComponent implements OnInit {
  unumber: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;

  boxColor: Color = new Color(255, 207, 196, 147); //(255, 207,196,147) usf gold
  greenColor: Color = new Color(255, 0, 103, 71); //usf green

  constructor(private routerExtensions: RouterExtensions) { }
  onTextChange(args) {
    let textbox = <TextField>args.object;
    switch (textbox.id) {
      case 'username':
        this.username = textbox.text
        break;
      case 'password':
        this.password = textbox.text
        break;
      case 'unumber':
        this.unumber=parseInt(textbox.text);
        break;
      case 'firstName':
        this.firstName=textbox.text;
        break;
      case 'lastName':
        this.lastName=textbox.text;
        break;
      case 'email':
        this.email=textbox.text;
        break;
      case 'confirmPassword':
        this.confirmPassword=textbox.text;
        break;
      default:
        console.log('switched entered unintended case')
        break;
    }

  }
  validate() {
    if(this.password != this.confirmPassword){
      alert({
        title: "Password Mismatch",
        message: "Please make sure that your entries for username and password match",
        okButtonText:"Try Again"
      })
      return false;
    }
    
    return true;
  }
  onDone(args: EventData){
    console.log('before validate')
    if(!this.validate()){
      return;
    }
    console.log('after validate')
    let newpass: string = md5(this.password);
    request({
      url: localUrl + "register", //http://10.100.0.232:8000/login
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        unumber: this.unumber,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        username: this.username,
        password: newpass
      })
    }).then((response) => {
      const rows = response.content.toJSON();
      console.log('result:', rows)
      switch(rows[rows.length - 1][0].return_code){
        case 0:
            this.goToLogin();
            break;
        case 1:
            alert('Error: Duplicate email');
            break;
        case 2:
            alert('Error: Duplicate unumber');
            break;
        case 3:
            alert('Error: Duplicate username');
            break;
        case 4:
            alert('Please enter all input field');
            break;
        default:
            alert('Unknown Error Code');
            break;
          
      }
    }, (e) => {
      console.log(e)
    });
  }
  goToLogin(){
    this.routerExtensions.navigateByUrl("login")
  }
  ngOnInit() {
    console.log("Register Component initiated.")
  }

}
