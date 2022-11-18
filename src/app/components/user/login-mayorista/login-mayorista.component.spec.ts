import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMayoristaComponent } from './login-mayorista.component';

describe('LoginMayoristaComponent', () => {
  let component: LoginMayoristaComponent;
  let fixture: ComponentFixture<LoginMayoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMayoristaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMayoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
