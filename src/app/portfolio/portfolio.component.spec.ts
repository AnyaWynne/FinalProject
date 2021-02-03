import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PortfolioComponent } from './portfolio.component';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create portfolio component', () => {
    expect(component).toBeTruthy();
  });

  it ('should render "Portfolio" in h1 tag', ()=>{
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Portfolio');
  });

  it ('should render "web" in h3 tag', ()=>{
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('web');
  });

  it ('should check if web url is there', ()=>{
    expect(fixture.debugElement.query(By.css('a')).nativeElement.
    getAttribute('routerLink')).toContain('/web');
  });

  it ('should check if web img url is correct', ()=>{
    expect(fixture.debugElement.query(By.css('img')).nativeElement.
    getAttribute('src')).toContain('https://bn1302files.storage.live.com/y4p_hWokWq5BD7U_fzIyFqfCsk2qYy86DUI9eBzHW-syGs9DnGEMc0P5qJiz6b891hbXq9xUlnxNxPdQ2sNEci6bObG2CSfoAcs4sDmvvpp-i98EAyTnavxhAJBOtfkDzkApCtinpGiVVYw1X7v7tuuEAaDg8aFmjFEtcorPj9kgux9riIDG8nqLsR0LwDMX3hQIRxENjq8ppUfyYa3_IQ3JX3X16g4qVLiIA211s7mxts/web-sm.jpg?psid=1&width=692&height=696');
  });

  
});
