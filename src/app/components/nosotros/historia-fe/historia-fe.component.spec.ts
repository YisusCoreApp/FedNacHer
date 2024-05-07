import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaFeComponent } from './historia-fe.component';

describe('HistoriaFeComponent', () => {
  let component: HistoriaFeComponent;
  let fixture: ComponentFixture<HistoriaFeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriaFeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriaFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
