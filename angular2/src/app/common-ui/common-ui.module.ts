import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconComponent } from './icon/icon.component';
import { DashPanelComponent } from './dash-panel/dash-panel.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SearchComponent } from './search/search.component';
import { HeadingComponent } from './heading/heading.component';
import { FormActionsComponent } from './form-actions/form-actions.component';
import { SubheadingComponent } from './subheading/subheading.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LogoComponent, HeaderComponent, FooterComponent, IconComponent, DashPanelComponent, SideMenuComponent, SearchComponent, HeadingComponent, FormActionsComponent, SubheadingComponent, AlertComponent ],
  exports: [
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    IconComponent,
    DashPanelComponent,
    SideMenuComponent,
    SearchComponent,
    HeadingComponent,
    FormActionsComponent,
    SubheadingComponent,
    AlertComponent
  ]
})
export class CommonUiModule { }
