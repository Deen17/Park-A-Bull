export class Building {
    private name: string;
    private code: string;
    private location: string;
    private lot1: number;
    private lot2: number;
    private lot3: number;
    constructor(name: string, code: string, location: string, lot1: number, lot2: number, lot3: number){
        this.name = name;
        this.code = code;
        this.location = location;
        this.lot1 = lot1;
        this.lot2 = lot2;
        this.lot3 = lot3;
    }

    public getName(): string {
        return this.name;
    }
    
    public getCode(): string {
        return this.code;
    }

    public getLocation(): string{
        return this.location;
    }

    public getLot(lotNum: number): number{
        switch (lotNum) {
            case 1:
                return this.lot1;
                break;
            case 2:
                return this.lot2;
                break;
            case 3:
                return this.lot3;
                break;
            default:
                throw new Error('Invalid Lot Slot Specified')
                break;
        }
    }


}