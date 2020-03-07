import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesSectionComponent } from './votes-section.component';

describe('VotesSectionComponent', () => {
  let component: VotesSectionComponent;
  let fixture: ComponentFixture<VotesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
