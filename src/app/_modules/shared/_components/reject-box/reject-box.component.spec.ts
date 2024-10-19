import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectBoxComponent } from './reject-box.component';

describe('RejectBoxComponent', () => {
  let component: RejectBoxComponent;
  let fixture: ComponentFixture<RejectBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RejectBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
