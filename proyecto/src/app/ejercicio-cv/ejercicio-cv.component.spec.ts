import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioCvComponent } from './ejercicio-cv.component';

describe('EjercicioCvComponent', () => {
  let component: EjercicioCvComponent;
  let fixture: ComponentFixture<EjercicioCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
