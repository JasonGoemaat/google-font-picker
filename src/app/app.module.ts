import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

const APP_ID = 'google-font-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: APP_ID })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
