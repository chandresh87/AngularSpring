/* * * ../../../architecture/code-services/code-service.service.ts * * */
/**
 * 
 * ReferenceDataService is the service class that calls the ReferenceDataWSHandler
 * for fetching the RefData
 * This service can be injected to the view component which needs 
 * the refData
 * 
 */

//imports
import {Injectable} from '@angular/core';
import {ReferenceDataType} from './reference-data.enum';
import { ReferenceDataWSHandler } from './reference-data-ws-handler';
import {ReferenceData} from './reference-data';

@Injectable()
export class ReferenceDataService{

    private result: ReferenceData[];//Array to hold the refdata rows

    constructor(private referenceDataWSHandler:ReferenceDataWSHandler) { }

/*  Get call to the web service handler to fetch RefData  */
    getRefDataFromWSHandler(type)  {
        let array: ReferenceData[] = [];
        this.referenceDataWSHandler.getReferenceData(type)
                          .subscribe(res =>{
                            this.result=res;
                             for (var i = 0; i < this.result.length; i++) {
                               var rowData = this.result[i];
                               array.push(rowData);
                             }
                          });
        return array;
  }
}