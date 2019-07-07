export class Vehicle {
    private id: number
    private make: string;
    private model: string;
    private year: string;
    private licensePlate: string;
    private permit: string;
    private isDefault: boolean
    constructor(
        make: string,
        model: string,
        year: string,
        //isDefault: boolean
    ) {
        this.make = make;
        this.model = model;
        this.year = year;
        //this.isDefault = isDefault
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