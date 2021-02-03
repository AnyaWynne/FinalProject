import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PrintComponent } from './print.component';

describe('PrintComponent', () => {
  let component: PrintComponent;
  let fixture: ComponentFixture<PrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create print component', () => {
    expect(component).toBeTruthy();
  });

  it ('should render "Print Design" in h1 tag', ()=>{
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Print Design');
  });

  it ('should check if img source is correct', ()=>{
    expect(fixture.debugElement.query(By.css('img')).nativeElement.
    getAttribute('src')).toContain('/assets/print/dan-mairin.jpg');
  });

  it ('should check href reference to bootstrap carousel', ()=>{
    expect(fixture.debugElement.query(By.css('a')).nativeElement.
    getAttribute('href')).toContain('#bootstrapCarousel');
  });

});
