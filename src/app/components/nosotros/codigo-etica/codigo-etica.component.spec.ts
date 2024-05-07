import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoEticaComponent } from './codigo-etica.component';

describe('CodigoEticaComponent', () => {
  let component: CodigoEticaComponent;
  let fixture: ComponentFixture<CodigoEticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodigoEticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodigoEticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
