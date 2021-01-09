import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoudPageComponent } from './not-foud-page.component';

describe('NotFoudPageComponent', () => {
  let component: NotFoudPageComponent;
  let fixture: ComponentFixture<NotFoudPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoudPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
