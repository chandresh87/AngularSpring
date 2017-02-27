import { Component, OnInit } from '@angular/core';
import { ChildData } from '../../domain/ChildData';
import { ChildBenefitHistoryService } from '../../services/child-benefit-history.service';
import {LoggingService} from '../../../architecture/logging/logging.service';


@Component({
  selector: 'app-child-history',
  templateUrl: './child-history.component.html',
  styleUrls: ['./child-history.component.css']
})
export class ChildHistoryComponent implements OnInit {

 ChildDataHistory: ChildData[];

  constructor(private childBenefitHistoryService: ChildBenefitHistoryService, private loggingService: LoggingService) { }

  ngOnInit() {

     this.ChildDataHistory =   this.childBenefitHistoryService.getHistory();
    
      //(ChildDataHistorys => this.ChildDataHistory = ChildDataHistorys);
       //alert(this.ChildDataHistory);
       
  }

}
