import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Children} from '../domain/children';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChildrenService {
    
    constructor(private http: Http) {}

    getChildren() {
        return this.http.get('../../assets/data/children.json')
                    .toPromise()
                    .then(res => <Children[]> res.json().data)
                    .then(data => { return data; });
    }
    
}