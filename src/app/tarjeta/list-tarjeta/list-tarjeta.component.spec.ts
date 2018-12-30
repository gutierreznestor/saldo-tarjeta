import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTarjetaComponent } from './list-tarjeta.component';

describe('ListTarjetaComponent', () => {
  let component: ListTarjetaComponent;
  let fixture: ComponentFixture<ListTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
