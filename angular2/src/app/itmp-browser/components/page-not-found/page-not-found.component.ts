import { Component, OnInit } from '@angular/core';

import { ConfigService} from '../../../architecture/config/config.service';
import { NavigationService } from '../../../architecture/navigation/navigation.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(navigationService: NavigationService, private configDataService: ConfigService) {
    navigationService.setRoutes('');
  }

  ngOnInit() {
    var baseurl = this.configDataService.getConfig('baseURL');
    console.log(baseurl)
  }

}
