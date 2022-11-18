import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAgricultorComponent } from './login-agricultor.component';

describe('LoginAgricultorComponent', () => {
  let component: LoginAgricultorComponent;
  let fixture: ComponentFixture<LoginAgricultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAgricultorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAgricultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
