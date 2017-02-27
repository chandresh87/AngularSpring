import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

import {ConfigService} from './architecture/config/config.service'
import { LoggingService } from './architecture/logging/logging.service'
import { HelpService } from './architecture/help/help.service'
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { environment } from './environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  subscription: Subscription;


  constructor(
    titleService: Title,
    router: Router,
    activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private logger: LoggingService,
    private help: HelpService,
    private configDataService: ConfigService
  ) {
    breadcrumbService.hideRoute('/dashboard');
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var title = this.help.getTitle(router.routerState, router.routerState.root).join(' - ');
        titleService.setTitle(title + ' | ITMP Browser');
      }
    });
    logger.log('app component constructed');

    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //AppComponent initialization lifecycle hook. Print the current environment value from configuration
  ngOnInit() {
    this.logger.log("environment:" + environment.production);
    var baseurl = this.configDataService.getConfig('baseURL');
    this.logger.log(baseurl)
  }

}
