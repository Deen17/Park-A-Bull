import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
//import { Observable } from "tns-core-modules/data/observable/observable";

 @Injectable({
    providedIn: 'root',
})
export class UserService {
    public getLoggedInName = new Subject(); //Alternate method to Emitting data across Components. Subject() is doing both Emitting data and Subscribing it in another component. So its the best way to compare with Emitting using Output.

 /*     login(email: string, password: string): Observable<boolean> {
        if (successfulLogIn(email, password)) {
            this.getLoggedInName.next(fullName); //next() method is alternate to emit().
            return true;
        } else {
            this.getLoggedInName.next('Sign In');
            return false;
        }
    }
     logout(): void {
        this.getLoggedInName.next('Sign In');
    } */
}