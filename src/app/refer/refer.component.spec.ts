import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferComponent } from './refer.component';

describe('ReferComponent', () => {
  let component: ReferComponent;
  let fixture: ComponentFixture<ReferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create references component', () => {
    expect(component).toBeTruthy();
  });

  it ('should render text in p tag', ()=>{
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('To Whom It May Concern');
  });

});
