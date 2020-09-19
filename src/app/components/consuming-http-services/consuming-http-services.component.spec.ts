import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumingHttpServicesComponent } from './consuming-http-services.component';

describe('ConsumingHttpServicesComponent', () => {
  let component: ConsumingHttpServicesComponent;
  let fixture: ComponentFixture<ConsumingHttpServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumingHttpServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumingHttpServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
