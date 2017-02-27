/* * * ../../../architecture/message-handler/message-handler * * */
/**
 * 
 * MessageHandler is the interface that defines the APIs 
 * to efficiently interact with the webservices
 * 
 **/
import { Observable } from 'rxjs/Observable';

export interface MessageHandler{
    get(): Observable<any>;
    post(...param: any[]): Observable<any>;
    put(param: any): Observable<any>;
    delete(key:string,value:string): Observable<any>;
    options():Observable<any>;
}