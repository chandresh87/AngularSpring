import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../architecture/navigation/navigation.service';
import { ConfigService} from '../../../architecture/config/config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(navigationService: NavigationService,  private configDataService: ConfigService) {
    navigationService.setRoutes('');
  }

  ngOnInit() {
     console.log(this.configDataService.getConfig('baseURL'));
  }

}
