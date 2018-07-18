import { Component, OnInit } from '@angular/core';

import { GoogleWebfontApiService } from '../../core/google-webfont-api.service';
import { GoogleWebfontList } from '../../models/google-web-font-list';
import { DailyFontsService } from '../../core/daily-fonts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fonts: GoogleWebfontList;

  constructor(
    public fontService: GoogleWebfontApiService,
    public dailyService: DailyFontsService,
  ) {
    window['CHOME'] = this;
    const start = performance.now();
    fontService.getFonts()
    .subscribe(fonts => {
      this.fonts = fonts;
      const ms = performance.now() - start;
      console.log(`Got fonts in ${ms.toFixed(0)} ms`);
    });
  }

  ngOnInit() {
  }

}
