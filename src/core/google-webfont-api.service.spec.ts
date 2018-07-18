import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GoogleWebfontApiService } from './google-webfont-api.service';
import { HttpClientModule } from '@angular/common/http';
import { GoogleWebfontList } from '../models/google-web-font-list';
import { stripSummaryForJitNameSuffix } from '../../node_modules/@angular/compiler/src/aot/util';

const dummyFontList = {
  kind: 'webfonts#webfontList',
  'items': [
    {
      'kind': 'webfonts#webfont',
      'family': 'ABeeZee',
      'category': 'sans-serif',
      'variants': [
        'regular',
        'italic'
      ],
      'subsets': [
        'latin'
      ],
      'version': 'v11',
      'lastModified': '2017-10-10',
      'files': {
        'regular': 'http://fonts.gstatic.com/s/abeezee/v11/esDR31xSG-6AGleN6tI.ttf',
        'italic': 'http://fonts.gstatic.com/s/abeezee/v11/esDT31xSG-6AGleN2tCklQ.ttf'
      }
    },
    {
      'kind': 'webfonts#webfont',
      'family': 'Abel',
      'category': 'sans-serif',
      'variants': [
        'regular'
      ],
      'subsets': [
        'latin'
      ],
      'version': 'v8',
      'lastModified': '2017-10-10',
      'files': {
        'regular': 'http://fonts.gstatic.com/s/abel/v8/MwQ5bhbm2POE6Vg.ttf'
      }
    }
  ]
};

describe('GoogleWebfontApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleWebfontApiService],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it('should be created',
    async(inject(
      [GoogleWebfontApiService, HttpTestingController],
      (service: GoogleWebfontApiService, backend: HttpTestingController) => {
        expect(service).toBeDefined();
        console.log('should be created');
      }
    ))
  );

  it('should load a list of fonts from webfonts.json',
    async(inject(
      [GoogleWebfontApiService, HttpTestingController],
      (service: GoogleWebfontApiService, backend: HttpTestingController) => {
        service.getFonts().subscribe((fonts: GoogleWebfontList) => {
          expect(fonts.kind).toBe('webfonts#webfontList');
        });

        const req = backend.expectOne('/assets/webfonts.json');
        expect(req.request.method).toBe('GET');
        req.flush(dummyFontList);
      }
    ))
  );
});
