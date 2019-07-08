export class Lot {
    private id: number;
    private name: string;
    private location: string;
    private spots_available: number;
    
    constructor(id: number, name: string, location: string, spots_available: number){
        this.id = id;
        this.name = name;
        this.location = location;
        this.spots_available = spots_available
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

    public getSpots(): number{
        return this.spots_available;
    }

    public printLotInfo(): void {
        console.log(`lot ${this.id}: ${this.name}, ${this.location}, ${this.spots_available} vacancies`)
    }

    public print(): string {
        return ("lot" + this.id + ": " + this.name + ", " + this.location + ", " + this.spots_available)
    }
}