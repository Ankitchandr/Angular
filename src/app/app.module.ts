import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AgmCoreModule} from '@agm/core'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCy51Ns0UYBG9AY4u9SlIGj8ZnZSEhyk2k'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
