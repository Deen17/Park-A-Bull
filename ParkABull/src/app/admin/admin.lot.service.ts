import { Injectable } from "@angular/core";
import { localUrl, url} from "../../../db/config"
import { request, HttpResponse } from "tns-core-modules/http";

export class Lot {
    private id: number = null;;
    private name: string = null;
    private location: string = null;
    
    constructor(id: number, name: string, location: string){
        this.id = id;
        this.name = name;
        this.location = location;
    }

    public getID(): number{
        return this.id;
    }

    public getName(): string{
        return this.name;
    }

    public getLocation(): string{
        return this.location;
    }

    public printLotInfo(): void {
        console.log(`lot ${this.id}: ${this.name}, ${this.location}`)
    }
}

@Injectable({
    providedIn:"root"
})
export class AdminLotService{
    private lots: Array<Lot> = [];
    constructor(){

    }

    clean(){
        this.lots = [];
    }

    public getLots(): Array<Lot> {
        return this.lots;
    }

    public getLot(name: string): Lot {
        let lot : Lot = null;
        this.lots.forEach(element => {
            if(element.getName() == name)
                lot = element;
        })
        return lot;
    }

    public async fetch(): Promise<void>{
        this.lots= [];
        let link: string = `${localUrl}lots`
        try {
            const response: HttpResponse = 
                await request({
                    url: link,
                    method: 'GET'
                });
            let rows = response.content.toJSON();
            rows.forEach(row => {
                const temp = new
                    Lot(
                            row.lot_id,
                            row.lot_name,
                            row.location)
                this.lots.push(temp)
            });
        }catch (e){
            console.log(e)
        }
    }
}
