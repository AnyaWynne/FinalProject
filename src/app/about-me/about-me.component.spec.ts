import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutMeComponent } from './about-me.component';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create about me component', () => {
    expect(component).toBeTruthy();
  });

  it ('should render "About me" in h1 tag', ()=>{
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('About me');
  });

  it ('should render "education" in h3 tag', ()=>{
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('education');
  });

  it ('should render "References" in h2 tag', ()=>{
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('References');
  });

  it ('should check if references url is there', ()=>{
    expect(fixture.debugElement.query(By.css('a')).nativeElement.
    getAttribute('routerLink')).toContain('/refer');
  });


});
