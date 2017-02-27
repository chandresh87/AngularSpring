/* * * ../../../architecture/message-handler/base-ws-handler * * */
/**
 * 
 * The BaseWebServiceHandler class implements the MessageHandler interface 
 * and provides the implementation of common HTTP method invocations.
 * It is an abstract class that in itself cannot be created, 
 * it is instead extended for each unique backend NPS call   
 * 
 **/

// Imports
import {Http, Response,Headers,RequestOptions} from '@angular/http';

import { environment } from '../../environment';
// Import RxJs required methods
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/retry';

// Import the MessageHandler interface
import { MessageHandler } from './message-handler';
import {Logger} from '../logging/logger'

export abstract class BaseWSHandler implements MessageHandler{
  
    url:string;             //instance variable to hold base url
    headers:Headers;        //instance variable to hold Headers object
    requestOptions:RequestOptions; //instance variable to hold RequestOptions object
    timeout: number;
    logger: Logger;
   // Resolve HTTP using the constructor
    constructor(public http:Http,  logger: Logger) {
        this.url = environment.baseURL;
        this.timeout = environment.timeout;
        this.headers = new Headers({ 'Content-Type': 'application/json', 
      
                                    'Accept': 'q=0.8;application/json;q=0.9',
                                 });
        this.requestOptions = new RequestOptions({ headers: this.headers});    
        this.logger = logger;
    }

  
    //The get method that returns http service injected into the constructor
    getHttpService(){
            return this.http;
    }

    //The get method that uses http get request to fetch the data from server
    get():  Observable<any[]>  {
             this.logger.log("GET CALL: URL=" + this.url)
            return this.http.get(this.url,this.requestOptions)
                            .retryWhen(error => error.delay(500)).retry(3)
                            .timeout(this.timeout)
                            .map(this.extractResponseData)
                            .catch(this.handleError);
     }

     //The post method that uses http post request to send data to server and adds the new data
    post(...param: any[]): Observable<any[]> {
            this.logger.log("POST CALL: URL=" + this.url)
            let body = JSON.stringify(param);
            this.logger.log("POST CALL: body=" + body)
            return this.http.post(this.url, body, this.requestOptions)
                            .retryWhen(error => error.delay(500)).retry(3)
                            .timeout(this.timeout)
                            .map(this.extractResponseData)
                            .catch(this.handleError); 
        }

    //The update method that uses http put method to update the existing data saved in server
    put(param: any): Observable<any[]> {
            let body = JSON.stringify(param);
            return this.http.put(this.url, body, this.requestOptions)
                            .retryWhen(error => error.delay(500)).retry(3)
                            .timeout(this.timeout)
                            .map(this.extractResponseData)
                            .catch(this.handleError);
    }

    //The delete method that uses http delete method to delete the data stored in server
    delete(key: string, val: string): Observable<any> {
            return this.http.delete(this.url + "/?" + key + "=" + val, this.requestOptions)
                            .retryWhen(error => error.delay(500)).retry(3)
                            .timeout(this.timeout)
                            .map(this.extractResponseData)
                            .catch(this.handleError);
    }

    //The options method that uses http options method to determine the options and/or requirements associated 
    //with a resource or the capabilities of a server 
    options():Observable<any>{
            return this.http.request(this.url,{method:'OPTIONS'})
                            .retryWhen(error => error.delay(500)).retry(3)
                            .timeout(this.timeout)
                            .map(this.extractResponseData)
                            .catch(this.handleError);
    }

    //The helper method that processes the http response object
    abstract extractResponseData(res: Response);

    //The method that handle errors
    abstract handleError(error: any);
}