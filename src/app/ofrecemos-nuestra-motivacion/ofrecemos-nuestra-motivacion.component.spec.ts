import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfrecemosNuestraMotivacionComponent } from './ofrecemos-nuestra-motivacion.component';

describe('OfrecemosNuestraMotivacionComponent', () => {
  let component: OfrecemosNuestraMotivacionComponent;
  let fixture: ComponentFixture<OfrecemosNuestraMotivacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfrecemosNuestraMotivacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfrecemosNuestraMotivacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
