import { Injectable } from "@angular/core";
import { localUrl, url } from "../../../db/config";
import { request, HttpResponse } from "tns-core-modules/http"

export class Vehicle {
    private id: number
    private make: string;
    private model: string;
    private year: string;
    private licensePlate: string;
    private permit: string;
    private isDefault: boolean
    constructor(
        id: number,
        make: string,
        model: string,
        year: string,
        licensePlate: string,
        permit: string,
        isDefault: boolean
    ) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.permit = permit;
        this.isDefault = isDefault
    }

    public getID(): number{
        return this.id;
    }

    public getCarName(): string {
        return `${this.make} ${this.model} ${this.year}`;
    }

    public getLicensePlate(): string {
        return this.licensePlate;
    }

    public getPermit(): string {
        return this.permit;
    }

    public getDefault(): boolean {
        return this.isDefault;
    }

}


@Injectable({
    providedIn: 'root'
})
export class AdminVehicleService {
    private vehicles: Array<Vehicle> = [];
    private defaultVehicle: Vehicle = null;
    constructor() { }

    clean(){
        this.vehicles = [];
        this.defaultVehicle = null;
    }
    public async fetch(email: string) {
        this.vehicles = [];
        let link: string = localUrl + "vehicles/" + encodeURIComponent(email);
        try {

            const response: HttpResponse =
                await request({
                    url: link,
                    method: 'GET'
                });
            let rows = response.content.toJSON();
            rows.forEach(row => {
                const temp = new
                    Vehicle(
                        row.vehicle_id,
                        row.make,
                        row.model,
                        row.year,
                        row.license_plate,
                        row.permit_id,
                        row.is_default);

                this.vehicles.push(temp);

                if (temp.getDefault())
                    this.defaultVehicle =
                        temp;
            });
        } catch (e) {
            console.log(e)
        }
    }



    public getDefaultVehicle(): Vehicle {
        return this.defaultVehicle;
    }

    public getVehicle(index: number) {
        return this.vehicles[index];
    }

    public getVehicleNames(): Array<string> {
        let names: Array<string> = [];
        this.vehicles.forEach(element => {
            names.push(element.getCarName())
        });
        return names;
    }

    public getLicencePlates(): Array<string> {
        let names: Array<string> = [];
        this.vehicles.forEach(element => {
            names.push(element.getLicensePlate())
        });
        return names;
    }

    public getVehicles(): Array<Vehicle> {
        return this.vehicles
    }



}