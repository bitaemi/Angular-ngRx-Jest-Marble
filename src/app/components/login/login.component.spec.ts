import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { LoginService } from "../../services/login.service";
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { ApplicationModule } from "@angular/core";

describe("Login Component Testing", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, CommonModule, ApplicationModule],
      providers: [LoginService, { provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Login - Success", () => {
    var comp = TestBed.createComponent(LoginComponent).debugElement.componentInstance;
    comp.email = "scott@gmail.com";
    comp.password = "scott123";
    comp.onLoginClick(new NgForm([], []));
    expect(comp.s.loginStatus).toBe(true);
  });
});
