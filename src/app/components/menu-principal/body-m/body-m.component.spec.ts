import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMComponent } from './body-m.component';

describe('BodyMComponent', () => {
  let component: BodyMComponent;
  let fixture: ComponentFixture<BodyMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
