import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


import { LandingPageComponent } from './landing-page.component';


describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    let fixture = TestBed.createComponent(LandingPageComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it ('should check if web url is there', ()=>{
    expect(fixture.debugElement.query(By.css('a')).nativeElement.
    getAttribute('routerLink')).toContain('/web');
  });

  it ('should check if img url is correct', ()=>{
    expect(fixture.debugElement.query(By.css('img')).nativeElement.
    getAttribute('src')).toContain('https://bn1302files.storage.live.com/y4pckjkP4hA4P1PPzhqR6ADa-qS2HRs_3f6O64RDjEMN0EPaToCBF8GSZqtr-KDJ9GXLnqLtXsR4uG4fMAyk_dD8UUiqzuIG0NdDr--wxiYY86B-BNb0SfeLRLhhuTSkoR7sEXZMqrA-RtL4JVICAnLvKaWoEldja4CBKFc8pnk618ongIZzw-2dmGin3wW-bd0PX9pvRhVrJZ0_5wFoc_-d9gd8XI-VkbQg8Rflfz2Gvk/portrait.png?psid=1&width=373&height=380');
  });

  it ('should render "Anya Wynne" in h1 tag', ()=>{
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Anya Wynne');
  });

  it ('should render "Web Development" in h2 tag', ()=>{
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Web Development');
  });

  // it ('should render "Print Design" in h2 tag', ()=>{
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h2').textContent).toContain('Print Design');
  // });

});
