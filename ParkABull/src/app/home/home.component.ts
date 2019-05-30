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
//import { url } from "../../../db/config.js"
import {AutocapitalizationType} from "tns-core-modules/ui/editable-text-base"
import * as md5 from "md5/md5.js" //md5.js exports a function without a name.
import { RouterExtensions } from "nativescript-angular/router"
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    username: string;
    password: string;
    boxColor: Color = new Color(255, 207, 196, 147); //(255, 207,196,147) usf gold
    greenColor: Color = new Color(255, 0, 103, 71); //usf green
    buttontext: string = "Tap Me!";
    counter: number = 0;
    autocaps: AutocapitalizationType = "none"
    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }
    onTap(args: EventData) {
        let button = <Button>args.object;
        let newpass: string = md5(this.password);
        console.log(newpass)
        console.log(this.username + ': ' + this.password)
        request({
            url: "http://10.226.22.178:8000/login", //replace with the express server's ip
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({
                username: this.username,
                password: newpass
            })
        }).then((response) => {
            const result = response.content.toJSON();
            if(result.login) this.login();
            else(alert("Login failed!"))
        }, (e) => {
        });
    }
    login() {
        console.log('entered login()')
        //this.routerExtensions.navigateByUrl("login")
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
        console.log('Home Component initiated')
    }
}
