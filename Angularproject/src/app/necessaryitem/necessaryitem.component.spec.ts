import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NecessaryitemComponent } from './necessaryitem.component';

describe('NecessaryitemComponent', () => {
  let component: NecessaryitemComponent;
  let fixture: ComponentFixture<NecessaryitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NecessaryitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NecessaryitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
