import { Component, OnInit, Input, } from '@angular/core';
import { ChildSearchHandler } from '../../services/child-search-handler.service';
import { Children } from '../../domain/children';
import { InMemoryDataService } from '../../../in-memory-data.service';

@Component({
    selector: 'app-child-search',
    providers: [ChildSearchHandler],
    templateUrl: './child-search.component.html',
    styleUrls: ['./child-search.component.css']
})

export class ChildSearchComponent implements OnInit {

    private pageTitle: string;
    birthNumber: Boolean;
    birthNumberValue: number;
    nameAndORDOB: Boolean;
    children: Children[];
    cols: any[];
    value: number;

    constructor(private childrenService: ChildSearchHandler) {

        this.birthNumber = false;
        this.nameAndORDOB = false;
        this.pageTitle = 'Child Search';
    }
    ngOnInit() {
        this.cols = [
            { field: 'birthNumberVal', header: 'Birth Number' },
            { field: 'forenameName', header: 'Child First Name' },
            { field: 'otherName', header: 'Child Other Names' },
            { field: 'surnameName', header: 'Child Surname' },
            { field: 'dateOfBirth', header: 'Date of birth' },
            { field: 'nino', header: 'Claimants NINO' }
        ];
        this.birthNumber = true;
        this.nameAndORDOB = false;
    }
    update(value: number) {
        this.birthNumberValue = value;
        this.getHeroes(this.birthNumberValue);
    }
    getHeroes(value) {
        this.childrenService.get()
            .subscribe(
            children => this.children = children.filter(data => data.birthNumberVal == value));
    }
    toggleBirthNumber(e) {
        if (e.target.checked) {
            this.nameAndORDOB = false;
            this.birthNumber = true;
        }
        else {
            this.nameAndORDOB = true;
            this.birthNumber = false;
        }
    }
    toggleNameAndORDOB(e) {
        if (e.target.checked) {
            this.birthNumber = false;
            this.nameAndORDOB = true;
            this.birthNumberValue = null;
        }
        else {
            this.nameAndORDOB = false;
            this.birthNumber = true;
        }
    }
}
