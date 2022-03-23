import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DeltaModuleComponent } from './delta-module/delta-module.component';
import { PercentageModuleComponent } from './percentage-module/percentage-module.component';
import { RouterModule } from '@angular/router';
import { StoplossComponent } from './stoploss/stoploss.component';

@NgModule({
  declarations: [
    AppComponent,
    DeltaModuleComponent,
    PercentageModuleComponent,
    StoplossComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
