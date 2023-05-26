import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuxiModule } from './auxi/auxi.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuxiModule,
    AppRoutingModule,
    SharedModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
