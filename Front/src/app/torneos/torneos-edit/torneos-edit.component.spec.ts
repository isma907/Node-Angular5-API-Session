import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneosEditComponent } from './torneos-edit.component';

describe('TorneosEditComponent', () => {
  let component: TorneosEditComponent;
  let fixture: ComponentFixture<TorneosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorneosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
