import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NavigationService } from '../../architecture/navigation/navigation.service';
import { Subscription }   from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit, OnDestroy {
  private routes: any;
  subscription: Subscription;

  constructor(
    private _eref: ElementRef,
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService
  ) {
    this.subscribeToRoutes();
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.displayRequiredComponents();
      }
    });
  }

  subscribeToRoutes() {
    this.subscription = this.navigationService.routesAnnounced$.subscribe(
      routes => {
        this.routes = routes;
      }
    );

  }

  toggleSideMenu() {
    let sideMenu = document.getElementById('side-menu');
    let main = document.getElementsByTagName('main')[0];
    let visibility = sideMenu.getAttribute('data-visible') == 'false' ? 'true' : 'false';
    sideMenu.setAttribute('data-visible', visibility);
    main.classList.toggle('no-menu');
  }

  hideMenu() {
    let sideMenu = document.getElementById('side-menu');
        sideMenu.setAttribute('data-visible', 'false');
  }

  showMenu() {
    let sideMenu = document.getElementById('side-menu');
        sideMenu.setAttribute('data-visible', 'true');
  }

  mainMenu() {
    let main = document.getElementsByTagName('main')[0];
        main.classList.remove('no-menu');
  }

  mainNoMenu() {
    let main = document.getElementsByTagName('main')[0];
        main.classList.add('no-menu');
  }

  addDashboardLogo() {
   let logo = document.getElementById('logo');
   logo.classList.add('logo--dashboard');
  }

  removeDashboardLogo() {
   let logo = document.getElementById('logo');
   logo.classList.remove('logo--dashboard');
  }

  hideBreadcrumbs() {
    let breadcrumbs = document.getElementsByClassName('breadcrumb-container')[0];
    breadcrumbs.classList.add('breadcrumb-container--hidden');
  }

  showBreadcrumbs() {
    let breadcrumbs = document.getElementsByClassName('breadcrumb-container')[0];
    breadcrumbs.classList.remove('breadcrumb-container--hidden');
  }

  displayRequiredComponents() {
   
   // Page Width
    let width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    if (this.routes && width < 992) {
      this.hideMenu();
      this.removeDashboardLogo();
      this.showBreadcrumbs();
      this.mainMenu();
    } else if (this.routes) {
      this.showMenu();
      this.removeDashboardLogo();
      this.showBreadcrumbs();
      this.mainMenu();
    } else {
      this.hideMenu();
      this.addDashboardLogo();
      this.hideBreadcrumbs();
      this.mainNoMenu();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
