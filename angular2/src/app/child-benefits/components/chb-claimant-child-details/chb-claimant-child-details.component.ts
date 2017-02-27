import { Component, OnInit,OnChanges } from '@angular/core';
import { ChbClaimantDetails } from './model/ClaimaintChildDetails';

import {ChbClaimantBirthDetails} from "./model/ChbClaimintBirthDetails"
import {ChbClaimantBasicEligibiltyDetails} from "./model/ChbClaimantBasicEligibilty"
import {ChbClaimantBasicEligibiltyExtraDetails} from "./model/ChbChildEligibiltyExtraDetails"
import {ChbClaimantEducationDetails} from "./model/ChbChildClamaintEducationDetail"
import {Country} from './model/Country'
import {ChildClaimantService} from '../../services/child-claimant.service'
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-chb-claimant-child-details',
  templateUrl: './chb-claimant-child-details.component.html',
  styleUrls: ['./chb-claimant-child-details.component.css']
})
export class ChbClaimantChildDetailsComponent implements OnInit,OnChanges {

chBClaimantDetails :ChbClaimantDetails;
countryList:Country[];
success:boolean=false;

  constructor(private childClaimService: ChildClaimantService) { }

  ngOnInit() {


this.chBClaimantDetails=new ChbClaimantDetails(new ChbClaimantBirthDetails(), new ChbClaimantBasicEligibiltyDetails(), new ChbClaimantBasicEligibiltyExtraDetails(),new ChbClaimantEducationDetails());;
    
  
    
       this.childClaimService.getCountry().then(countryData => { this.countryList = countryData; });

       this.loadData();

       console.log("checking before "+ JSON.stringify(this.chBClaimantDetails) );
    

  }

  ngOnChanges()
  {
     this.loadData();
  }

  submit()
  {
   console.log("checking "+ JSON.stringify(this.chBClaimantDetails.birthDetail.surname));
   this.success=true;
  }

  loadData()
  {


this.childClaimService.getChildDataAsObservable().subscribe(
                               data => {this.chBClaimantDetails = data; console.log("sub data"+JSON.stringify(data.birthDetail)); 
                             // this.chBClaimantDetails.birthDetail=new ChbClaimantBirthDetails().deserialize(JSON.stringify(data.birthDetail));

                            } , //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });

  }

}
