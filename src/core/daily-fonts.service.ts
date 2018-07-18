import { Injectable } from '@angular/core';
import { GoogleWebfontApiService } from './google-webfont-api.service';
import { Observable } from '../../node_modules/rxjs';
import { map } from '../../node_modules/rxjs/operators';
import { preserveWhitespacesDefault } from '../../node_modules/@angular/compiler';

/**
 * Provide a list of 'fonts of the day'.
 */
@Injectable({
  providedIn: 'root'
})
export class DailyFontsService {
  lastDate: number;
  fontNames: Observable<string[]>;

  constructor(
    public fontService: GoogleWebfontApiService
  ) {
  }

  public getFontNames(): Observable<string[]> {
    const d = new Date();
    const date = d.getFullYear() * 10000 + d.getMonth() * 100 + d.getDate();
    if (date !== this.lastDate) {
      this.lastDate = date;
      this.fontNames = this.createFontNamesObservable();
    }
    return this.fontNames;
  }

  /**
   * Return the name of one font from each category
   */
  private createFontNamesObservable(): Observable<string[]> {
    const dt = this.lastDate;

    return this.fontService.getFonts()
    .pipe(map(fontList => {
      const byCategory: any = fontList.items.reduce((prev, current, index, arr) => {
        if (prev[current.category] == null) {
          prev[current.category] = [];
        }
        prev[current.category].push(current.family);
        return prev;
      }, {});

      let seed = dt * 54321;
      const rand = () => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
      };

      const results: string[] = [];
      Object.keys(byCategory).forEach(category => {
        const list = byCategory[category];
        const index = Math.floor(rand() * list.length);
        results.push(list[index]);
      });
      return results;
    }));
  }
}
