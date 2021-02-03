import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WebComponent } from './web.component';
import { FetchService } from './fetch.service';

describe('WebComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [WebComponent], 
      providers: [FetchService]
    }).compileComponents();
  });

  it('should create web component', () => {
    let fixture = TestBed.createComponent(WebComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Web Development'`, () => {
    let fixture = TestBed.createComponent(WebComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Web Development');
  });

  it ('should render text in h3 tag', ()=>{
    let fixture = TestBed.createComponent(WebComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain("Fetch random photos of dogs with 'get' and open API");
  });

  // it ('', 
  // fakeAsync( ()=>{
  //   let fixture = TestBed.createComponent(WebComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   let fetchService = fixture.debugElement.injector.get(FetchService);
  //   let spy = spyOn(fetchService, 'testService')
  //     .and.returnValue(Promise.resolve(app.items)); //not sure what value to return, since I don't have access to whatever my API fetches.
  //   fixture.detectChanges();
  //   tick();
  //   expect(app.items.length).toBe(1);
  // })
  // );
  
  });

//   it('expects service to fetch data',
//   inject([HttpTestingController, FetchService],
//     (httpMock: HttpTestingController, service: FetchService) => {
//       // We call the service
//       service.getAllContacts().subscribe(data => {
//         expect(data.pageInfo.totalRecordCount).toBe(21);
//         expect(data.pageInfo.pageNumber).toBe(0);
//         expect(data.data.length).toBe(7);
//       });
//       // We set the expectations for the HttpClient mock
//       const req = httpMock.expectOne('http://.../data/contacts');
//       expect(req.request.method).toEqual('GET');
//       // Then we set the fake data to be returned by the mock
//       req.flush({data: ...});
//     })
// );

 



// import { ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
// import { WebComponent } from './web.component';

// import { FetchService } from './fetch.service';

// // import { HttpClient, HttpClientModule } from '@angular/common/http';
// // import {
// //   HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


// describe('WebComponent', () => {
//   // let component: WebComponent;
//   // let fixture: ComponentFixture<WebComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       // imports: [HttpClientTestingModule, HttpTestingController, HttpClientModule, HttpClient],
//       declarations: [ WebComponent ]
//       // providers: [FetchService]
//     })
//     .compileComponents();
//   });

//   // beforeEach(() => {
//   //   fixture = TestBed.createComponent(WebComponent);
//   //   component = fixture.componentInstance;
//   //   fixture.detectChanges();
//   // });
//   it('should create the app', () => {
//     let fixture = TestBed.createComponent(WebComponent);
//     let app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   });
  

// });

// // it('should create web component', waitForAsync(()=>{
// //   let fixture = TestBed.createComponent(WebComponent);
// //   let app = fixture.debugElement.componentInstance;
// //   expect(app).toBeTruthy();

// // }) );



// // async()=>{
   
// //   let app = fixture.debugElement;
// //   expect(app).toBeTruthy();

// // }


// // it(
// //   'should fetch data successfully if not called asynchronously',
// //   waitForAsync(() => {
// //     let fixture = TestBed.createComponent(UserComponent);
// //     let app = fixture.debugElement.componentInstance;
// //     let dataService = fixture.debugElement.injector.get(DataService);
// //     let spy = spyOn(dataService, 'getDetails').and.returnValue(
// //       Promise.resolve('Data')
// //     );
// //     fixture.detectChanges();
// //     fixture.whenStable().then(() => {
// //       expect(app.data).toBe('Data');
// //     });
// //   })
// // );








// // let fixture = TestBed.createComponent(WebComponent);
// // let app = fixture.debugElement;
// // expect(app).toBeTruthy();


//  // it('should create', () => {
//   //   // let fixture = TestBed.createComponent(WebComponent);
//   //   // let app = fixture.debugElement.componentInstance;
//   //   // expect(app).toBeTruthy();
//   // });