import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMComponent } from './sidenav-m.component';

describe('SidenavMComponent', () => {
  let component: SidenavMComponent;
  let fixture: ComponentFixture<SidenavMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
