import {ReferenceDataType} from './reference-data.enum';

export class ReferenceData {
    type: ReferenceDataType; 
    id:string;
    start_date:string;
    end_date:string;
    VALUE:string;
    constructor(type:ReferenceDataType,id:string,start_date:string,end_date:string,VALUE:string){
        this.type=type;
        this.id=id;
        this.start_date=start_date;
        this.end_date=end_date;
        this.VALUE=VALUE;
    } 
}


