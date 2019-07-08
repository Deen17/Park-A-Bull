export class User {
    private unumber: number;
    private firstName: string;
    private lastName: string;
    private email: string;
    private userName: string;
    constructor(unumber: number, firstName: string, lastName: string, email: string, userName: string){
        this.unumber = unumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
    }

    public getUnumber(): number{
        return this.unumber;
    }

    public getFirstName(): string {
        return this.firstName;
    }
    
    public getLastName(): string {
        return this.lastName;
    }

    public getEmail(): string{
        return this.email;
    }

    public getUserName(): string{
        return this.userName;
    }


}