import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhybkrComponent } from './whybkr.component';

describe('WhybkrComponent', () => {
  let component: WhybkrComponent;
  let fixture: ComponentFixture<WhybkrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhybkrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhybkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
