import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceCompareComponent } from './face-compare.component';

describe('FaceCompareComponent', () => {
  let component: FaceCompareComponent;
  let fixture: ComponentFixture<FaceCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaceCompareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
