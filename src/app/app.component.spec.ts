import { JwtUnAuthorizedInterceptorService } from './interceptors/jwt-un-authorized-interceptor.service';
import { JwtInterceptorService } from './interceptors/jwt-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { RepeaterDirective } from './directives/repeater.directive';
import { AlertDirective } from './directives/alert.directive';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './modules/admin/components/about/about.component';
import { RouterLoggerService } from './services/router-logger.service';
import { LoginService } from './services/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpBackend, HTTP_INTERCEPTORS } from '@angular/common/http';
import { By, BrowserModule } from '@angular/platform-browser';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AboutComponent,
        LoginComponent,
        SignUpComponent,
        AlertDirective,
        RepeaterDirective,
      ],
      // schemas: [NO_ERRORS_SCHEMA], use this when you have too many components in the declarations array
      // thought it is safer for testing to include all your components
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
        EmployeeModule,
        JwtModule.forRoot( {
          config: {
            tokenGetter: () => {
              return (sessionStorage.getItem("currentUser")? JSON.parse(sessionStorage.getItem("currentUser")).token : null)
            }
          }
        }),
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptorService,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtUnAuthorizedInterceptorService,
          multi: true
        }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const de = fixture.debugElement.query(By.directive(RouterOutlet))
    expect(de).not.toBeNull;
  });

  it('should have a link to about page', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref))
    let index = debugElements.findIndex(de => de.attributes['routerLink'] === 'about');
    expect(index).toBeGreaterThan(-1);
  });

  it(`should have as title 'Angular7-App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.post.title).toEqual('Angular7-App');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Learn Angular, Testing, Redux Store, NgRX Implementation in an Angular7-App!');
  });
});
