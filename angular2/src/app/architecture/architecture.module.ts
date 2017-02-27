import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {APP_CONFIG_PROVIDERS} from './AppConfiguration/app.configuration';

// Services
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

import { LoggingService } from './logging/logging.service';
import { HelpService } from './help/help.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    BreadcrumbService,
    LoggingService,
    HelpService
  ]
})
export class ArchitectureModule { }
