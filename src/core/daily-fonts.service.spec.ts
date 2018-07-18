import { TestBed, inject } from '@angular/core/testing';

import { DailyFontsService } from './daily-fonts.service';

describe('DailyFontsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyFontsService]
    });
  });

  it('should be created', inject([DailyFontsService], (service: DailyFontsService) => {
    expect(service).toBeTruthy();
  }));
});
