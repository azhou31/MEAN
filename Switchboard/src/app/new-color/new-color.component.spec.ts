import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewColorComponent } from './new-color.component';

describe('NewColorComponent', () => {
  let component: NewColorComponent;
  let fixture: ComponentFixture<NewColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
