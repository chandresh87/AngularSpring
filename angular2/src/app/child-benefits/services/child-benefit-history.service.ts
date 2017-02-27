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
import {LoggingService} from '../../architecture/logging/logging.service'
import {ChbHistoryWSHandler} from './chb-history-ws-handler'

@Injectable()
export class ChildBenefitHistoryService{
    
    url: string

    constructor(private chbHistoryWSHandler: ChbHistoryWSHandler, private logger: LoggingService) {
        
        this.url= '../../assets/data/childHistoryData.json'
    }

  

    getHistory():  any  {
        console.log("get history called");
        this.logger.log("get history called");
            let array = [];
             this.chbHistoryWSHandler.getHistory().subscribe(
                (data) => { },
                    error => {this.logger.log(error); });
            return array;
     }

     postUpdates(): Observable<any[]>{
        return this.chbHistoryWSHandler.postUpdate();
     }

}