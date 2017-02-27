// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Custom Modules
import { ArchitectureModule } from '../architecture/architecture.module';
import { CommonUiModule } from '../common-ui/common-ui.module';
import { ItmpBrowserModule } from '../itmp-browser/itmp-browser.module';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [

    // Angular Modules
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    // Custom Modules
    ArchitectureModule,
    CommonUiModule,
    ItmpBrowserModule,
    Ng2BreadcrumbModule

  ]
})
export class SharedModule { }
