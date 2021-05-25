import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { API_BASE_URL } from './services/apiClient';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        {provide: API_BASE_URL, useValue: "https://localhost:44300"},
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ClientApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ClientApp');
  });

  it('should reverse names', () => {
    let nonPalindromicName = 'Jason';
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let reversed = app.reverseStr(nonPalindromicName);

    expect(reversed).toEqual('nosaJ');
  });

});
