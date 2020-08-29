import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './services/dataservices/data.service';

import { ServerUrl } from './constants/serverUrl.constants';
import { ValidationConstants } from './constants/validation.constants';
import { SharedDataService } from './services/shared-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [BaseComponent],
  entryComponents: [],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [
    DataService,
    ValidationConstants,
    ServerUrl,
    SharedDataService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
