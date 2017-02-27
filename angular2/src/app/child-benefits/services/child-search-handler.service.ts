import {Injectable} from '@angular/core';
import {Http, Response,Headers, RequestOptions,URLSearchParams} from '@angular/http';
import {Children} from '../domain/children';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { BaseWSHandler } from '../../architecture/message-handler/base-ws-handler';
import { InMemoryDataService } from '../../in-memory-data.service';
import {LoggingService} from '../../architecture/logging/logging.service'
import { TOKENS } from '../../../ws-config';


@Injectable()
export class ChildSearchHandler extends BaseWSHandler{

    constructor(private httpService:Http, logger: LoggingService) {
        super(httpService, logger);
        this.logger=logger;
       this.url = `${TOKENS.childSearchURL}`;
    }
      //Implement extractResponseData   
       extractResponseData(res: Response) {
                alert("inside extract");
          let body = res.json().data;
          return body || {};
      }

      handleError(error: any){  
            let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            return Observable.throw(errMsg);
  } 
    
}