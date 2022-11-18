import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMComponent } from './panel-m.component';

describe('PanelMComponent', () => {
  let component: PanelMComponent;
  let fixture: ComponentFixture<PanelMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
