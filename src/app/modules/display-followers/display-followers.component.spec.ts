import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFollowersComponent } from './display-followers.component';

describe('DisplayFollowersComponent', () => {
  let component: DisplayFollowersComponent;
  let fixture: ComponentFixture<DisplayFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
