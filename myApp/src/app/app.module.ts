import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {DogModule} from './modules/dog/dog.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DogModule,
    BrowserModule,
    BootstrapModalModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
