import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({
    providedIn: 'root',
})
export class UserService {
    public getLoggedInName = new Subject(); 
    public clearUserInfo = new Subject();
}