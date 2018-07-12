import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { tick } from '../../node_modules/@angular/core/src/render3';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Webfont Picker'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Webfont Picker');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Webfont Picker!');
  }));
  it('should render loading message in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Loading...');
    expect(compiled.querySelector('h2').style.backgroundColor).toEqual('yellow');
    //expect(compiled.querySelector('h2').style.backgroundColor).toEqual('rgb(0, 255, 0)');
  }));
  it('should change loading message quickly', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('Loaded!');
      expect(compiled.querySelector('h2').style.backgroundColor).toEqual('rgb(0, 255, 0)');
    });
  }));

});
