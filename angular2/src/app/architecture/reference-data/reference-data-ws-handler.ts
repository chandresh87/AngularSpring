/* * * ../../../architecture/code-services/code-ws-handler.service * * */
/**
 * 
 * ReferenceDataWSHandler is the service class that serves to fetch the 
 * reference data configuration and provides get method to return each element
 * This class extends BaseWSHandler and uses the get method for fetching 
 * the RefData 
 * 
 */

// Imports
import {Injectable} from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import {ReferenceData} from './reference-data';
//Import Rx/Js required operators
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { BaseWSHandler } from '../message-handler/base-ws-handler';
import { InMemoryDataService } from '../../in-memory-data.service';
import { TOKENS } from '../../../ws-config';
import {LoggingService} from '../logging/logging.service'

@Injectable()
export class ReferenceDataWSHandler extends BaseWSHandler{

    constructor(private httpService:Http,  logger: LoggingService) {
        super(httpService,logger); 
        this.logger = logger;
    }

/*  Method that calls webservice to fetch the reference data*/
    getReferenceData(type) : Observable<any[]> {
        //this.url = `${TOKENS.childClaimantURL}/${type}`;
        this.url = 'http://demo9396170.mockable.io/log';
        return this.get();
     }

/*  Implement extractResponseData   */
    extractResponseData(res: Response) {
        console.log("here i am ")
                    let body = res.json().data.map((refdata) => {
                 // Use refdata to create an instance of ReferenceData
                    return new ReferenceData(refdata.type, 
                                        refdata.id,
                                        refdata.start_date,
                                        refdata.end_date,
                                        refdata.VALUE)
                     });
                    return body || {};
      }

 /* Implement the method that handle errors  */
    handleError(error: any){  
            let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            this.logger.log(errMsg);
            return Observable.throw(errMsg);
      } 
      
}