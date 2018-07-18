import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyFontsService } from './daily-fonts.service';
import { GoogleWebfontApiService } from './google-webfont-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    DailyFontsService,
    GoogleWebfontApiService,
  ]
})
export class CoreModule { }
