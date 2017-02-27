import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http, Response} from '@angular/http';
import {Country} from '../components/chb-claimant-child-details/model/Country'
import { ChbClaimantDetails } from '../components/chb-claimant-child-details/model/ClaimaintChildDetails';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChildClaimantService {

   constructor(private http: Http) {}

    getCountry() {
        return this.http.get('./assets/data/Country.json')
                    .toPromise()
                    .then(res => <Country[]> res.json().data)
                    .then(data => { return data; });

                    
    }

    getChildDataAsObservable():Observable<ChbClaimantDetails>
    {

      return this.http.get('./assets/data/ChildClaimaintData.json')
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

}
