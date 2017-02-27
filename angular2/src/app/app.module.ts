// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

// Custom Modules
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ChildBenefitsModule } from './child-benefits/child-benefits.module';

// Components
import { AppComponent } from './app.component';

// Services
import { NavigationService } from './architecture/navigation/navigation.service';
import { LoggerWSHandler } from './architecture/logging/logger-ws-handler'
import { BaseWSHandler } from './architecture/message-handler/base-ws-handler';
import { environment } from './environment';
import { ERROR_HANDLER_PROVIDERS } from "./architecture/error-handler/custom-error-handler";
import { ERROR_HANDLER_OPTIONS } from "./architecture/error-handler/custom-error-handler";
import { ReferenceDataService } from './architecture/reference-data/reference-data-service';
import { ReferenceDataWSHandler } from './architecture/reference-data/reference-data-ws-handler';
import { ConfigService } from './architecture/config/config.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { LOGGER_WS_HANDLER_PROVIDER } from './architecture/logging/logger-ws-handler';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ChildBenefitsModule,
   // InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
   // { provide: APP_INITIALIZER, useFactory: (config: ConfigService) => () => config.load(), deps: [ConfigService], multi: true },
    ConfigService,
    ReferenceDataService,
    ReferenceDataWSHandler,
    LoggerWSHandler,
    NavigationService,

    LOGGER_WS_HANDLER_PROVIDER,
    {
      provide: LOGGER_WS_HANDLER_PROVIDER,
      useValue: {
        url: environment.loggerURL,
      }
    },

    ERROR_HANDLER_PROVIDERS,
    {
      provide: ERROR_HANDLER_PROVIDERS,
      useValue: {
        rethrowError: false,
        unwrapError: false
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
