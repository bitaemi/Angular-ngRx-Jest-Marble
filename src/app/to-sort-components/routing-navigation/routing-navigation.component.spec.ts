import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingNavigationComponent } from './routing-navigation.component';

describe('RoutingNavigationComponent', () => {
  let component: RoutingNavigationComponent;
  let fixture: ComponentFixture<RoutingNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
