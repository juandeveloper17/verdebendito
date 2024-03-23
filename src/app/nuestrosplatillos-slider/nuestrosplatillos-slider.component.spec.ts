import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosplatillosSliderComponent } from './nuestrosplatillos-slider.component';

describe('NuestrosplatillosSliderComponent', () => {
  let component: NuestrosplatillosSliderComponent;
  let fixture: ComponentFixture<NuestrosplatillosSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuestrosplatillosSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuestrosplatillosSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
