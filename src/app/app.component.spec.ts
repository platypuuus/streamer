import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'streamer'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('streamer');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(app.title);
  });

  it(`Should have 'dashboard works! in a paragraph`, () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('dashboard works!');
  });

  it(`Should have 3 tile rendered if isAdmin is true`, () => {
    const fixture = TestBed.createComponent(DashboardComponent);

    const app = fixture.componentInstance;
    app.isAdmin = true;

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled.querySelectorAll('.row')?.length);
    expect(compiled.querySelectorAll('.tile')?.length).toBe(3);
  });

  it(`Should have 2 tile rendered if isAdmin is false`, () => {
    const fixture = TestBed.createComponent(DashboardComponent);

    const app = fixture.componentInstance;
    app.isAdmin = false;

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.tile')?.length).toBe(2);
  });
});
