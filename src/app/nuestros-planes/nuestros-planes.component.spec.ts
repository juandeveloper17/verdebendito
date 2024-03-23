import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosPlanesComponent } from './nuestros-planes.component';

describe('NuestrosPlanesComponent', () => {
  let component: NuestrosPlanesComponent;
  let fixture: ComponentFixture<NuestrosPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuestrosPlanesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuestrosPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
