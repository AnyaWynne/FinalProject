import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should render home in h2 tag', ()=>{
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('home');
  });

  it ('should check if home url is there', ()=>{
    expect(fixture.debugElement.query(By.css('a')).nativeElement.
    getAttribute('routerLink')).toContain('/');
  });

  it ('should render portfolio in span tag', ()=>{
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('portfolio');
  });

  it ('should render "web" in p tag', ()=>{
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('web');
  });


  // it ('should check if portfolio url is there', ()=>{
  //   expect(fixture.debugElement.query(By.css('a')).nativeElement.
  //   getAttribute('routerLink')).toContain('contact');
  // });

  // it ('should render about me in h2 tag', ()=>{
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h2').textContent).toContain('about me');
  // });


});
