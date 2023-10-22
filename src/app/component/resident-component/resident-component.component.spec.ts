import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentComponentComponent } from './resident-component.component';

describe('ResidentComponentComponent', () => {
  let component: ResidentComponentComponent;
  let fixture: ComponentFixture<ResidentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentComponentComponent]
    });
    fixture = TestBed.createComponent(ResidentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
