import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsvComponent } from './obsv.component';

describe('ObsvComponent', () => {
  let component: ObsvComponent;
  let fixture: ComponentFixture<ObsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
