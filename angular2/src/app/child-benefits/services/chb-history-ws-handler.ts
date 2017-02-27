import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ChildData } from '../domain/ChildData';
import 'rxjs/add/operator/toPromise';

import {Headers,RequestOptions} from '@angular/http';

import { environment } from '../../environment';
// Import RxJs required methods
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/retry';
import {BaseWSHandler} from '../../architecture/message-handler/base-ws-handler'
import {LoggingService} from '../../architecture/logging/logging.service'

@Injectable()
export class ChbHistoryWSHandler extends BaseWSHandler{
    
    url: string
    logger: LoggingService
    constructor(http: Http, logger: LoggingService) {
        super(http, logger);
        this.logger = logger;
        this.url= '../../assets/data/childHistoryData.json'
    }

   getHistory():  Observable<any[]>  {
     this.logger.log("getHistory() called ");
      this.extractResponseData = (res:Response) => {
          let body = res.json();
          return body.data || {};
        }
            return  this.get();
     }

     postUpdate(): Observable<any[]>{
        //this.url = "POST URL"
        this.extractResponseData = (res:Response) => {
          let body = res.json();
          return body.data || {};
        }
        return  this.get();
     }

  extractResponseData(res: Response) {
        let body = res.json();
          return body.data || {};
  }
    
  
  handleError(error: any){  
            let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            return Observable.throw(errMsg);
  } 

}