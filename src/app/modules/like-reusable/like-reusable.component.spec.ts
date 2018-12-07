import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeReusableComponent } from './like-reusable.component';

describe('LikeReusableComponent', () => {
  let component: LikeReusableComponent;
  let fixture: ComponentFixture<LikeReusableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeReusableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
