import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccersComponent } from './soccers.component';

describe('SoccersComponent', () => {
  let component: SoccersComponent;
  let fixture: ComponentFixture<SoccersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoccersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoccersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
