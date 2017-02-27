import { Component, OnInit, Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { DataTableModule } from 'primeng/primeng';

import { ReferenceDataService } from '../../../architecture/reference-data/reference-data-service';
import { ReferenceDataWSHandler } from '../../../architecture/reference-data/reference-data-ws-handler';
import { Children } from '../../domain/children';
import {ReferenceData} from '../../../architecture/reference-data/reference-data';
import {ReferenceDataType} from '../../../architecture/reference-data/reference-data.enum';

@Component({
  selector: 'app-child-claimant-partner',
  templateUrl: './child-claimant-partner.component.html',
  styleUrls: ['./child-claimant-partner.component.css'
  ]
})
export class ChildClaimantPartnerComponent implements OnInit {
  private pageTitle:string;
  children:Children[];
  selectedChild:Children;
  errorMessage: string;
  nino:string;
  surnameName:string;
  forenameName:string;
  otherName:string;
  dateOfBirth:string;

  refdata_Country: ReferenceData[];
  refdata_Status: ReferenceData[];

  constructor(private referenceDataService: ReferenceDataService) { 
    this.pageTitle = 'Child Benefits-Claimant Partner Details';
  }

  ngOnInit() {
    this.loadRefData();
  }

  loadRefData() {
    this.refdata_Country=this.referenceDataService.getRefDataFromWSHandler(ReferenceDataType.COUNTRY_TYPE);
    this.refdata_Status=this.referenceDataService.getRefDataFromWSHandler(ReferenceDataType.STATUS_TYPE);
  }

}     