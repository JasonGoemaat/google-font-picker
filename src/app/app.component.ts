import { Component, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Webfont Picker';
  loadingString = 'Loading...';
  loadingColor = 'yellow';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (typeof(window) !== 'undefined') window['CAPP'] = this;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.loadingString = 'Loaded!';
        setTimeout(() => {
          this.loadingColor = '#0f0';
        },1000);
      }, 0);
    }
  }
}
