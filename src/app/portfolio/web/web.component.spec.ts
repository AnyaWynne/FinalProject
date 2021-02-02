import { ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { WebComponent } from './web.component';

import { FetchService } from './fetch.service';

// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import {
//   HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('WebComponent', () => {
  // let component: WebComponent;
  // let fixture: ComponentFixture<WebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // imports: [HttpClientTestingModule, HttpTestingController, HttpClientModule, HttpClient],
      declarations: [ WebComponent ]
      // providers: [FetchService]
    })
    .compileComponents();
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(WebComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  it('should create the app', () => {
    let fixture = TestBed.createComponent(WebComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  

});

// it('should create web component', waitForAsync(()=>{
//   let fixture = TestBed.createComponent(WebComponent);
//   let app = fixture.debugElement.componentInstance;
//   expect(app).toBeTruthy();

// }) );



// async()=>{
   
//   let app = fixture.debugElement;
//   expect(app).toBeTruthy();

// }


// it(
//   'should fetch data successfully if not called asynchronously',
//   waitForAsync(() => {
//     let fixture = TestBed.createComponent(UserComponent);
//     let app = fixture.debugElement.componentInstance;
//     let dataService = fixture.debugElement.injector.get(DataService);
//     let spy = spyOn(dataService, 'getDetails').and.returnValue(
//       Promise.resolve('Data')
//     );
//     fixture.detectChanges();
//     fixture.whenStable().then(() => {
//       expect(app.data).toBe('Data');
//     });
//   })
// );








// let fixture = TestBed.createComponent(WebComponent);
// let app = fixture.debugElement;
// expect(app).toBeTruthy();


 // it('should create', () => {
  //   // let fixture = TestBed.createComponent(WebComponent);
  //   // let app = fixture.debugElement.componentInstance;
  //   // expect(app).toBeTruthy();
  // });