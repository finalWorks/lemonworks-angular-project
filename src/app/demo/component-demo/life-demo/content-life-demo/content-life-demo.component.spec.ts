import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLifeDemoComponent } from './content-life-demo.component';

describe('ContentLifeDemoComponent', () => {
  let component: ContentLifeDemoComponent;
  let fixture: ComponentFixture<ContentLifeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentLifeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLifeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
