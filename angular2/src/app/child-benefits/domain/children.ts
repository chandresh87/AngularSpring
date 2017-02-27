export class Children {
    nino:string;
    surnameName:string;
    forenameName:string;
    otherName:string;
    dateOfBirth:string;
    birthNumberVal:string;
    constructor(nino:string,surnameName:string,forenameName:string,otherName:string,dateOfBirth:string,birthNumberVal:string){
        this.nino=nino;
        this.surnameName=surnameName;
        this.forenameName=forenameName;
        this.otherName=otherName;
        this.dateOfBirth=dateOfBirth;
        this.birthNumberVal=birthNumberVal;
    }
}