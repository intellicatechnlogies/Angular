import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdrComponent } from './idr.component';

describe('IdrComponent', () => {
  let component: IdrComponent;
  let fixture: ComponentFixture<IdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
