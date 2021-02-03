import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PhotoComponent } from './photo.component';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create photo component', () => {
    expect(component).toBeTruthy();
  });

  it ('should render "Photography" in h1 tag', ()=>{
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Photography');
  });

  it ('should check if img source is correct', ()=>{
    expect(fixture.debugElement.query(By.css('img')).nativeElement.
    getAttribute('src')).toContain('/assets/photo/photo1.jpg');
  });

  it ('should check href reference to bootstrap carousel', ()=>{
    expect(fixture.debugElement.query(By.css('a')).nativeElement.
    getAttribute('href')).toContain('#bootstrapCarousel');
  });

});
