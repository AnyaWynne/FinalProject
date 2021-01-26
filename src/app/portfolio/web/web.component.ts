import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  items = [];

  constructor(private http: HttpClient ) { 
    // this.http.get('http://echo.jsontest.com/key/value/one/two').toPromise().then( data => {
    // console.log(data);
    // for (let key in data){
    //   if (data.hasOwnProperty(key)){
    //     this.items.push(data[key]);
    //   }
    // }

    // });

this.http.get('https://dog.ceo/api/breeds/image/random').toPromise().then (data => {
console.log(data);
for (let key in data){
  if (data.hasOwnProperty(key)){
    this.items.push(data[key])
}
}
});




    // this.http.get('https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5').toPromise().then(response=>{
    //   console.log(response);
    // });
  }

  // https://rapidapi.com/community/api/open-weather-map   this is the link where I tried to get weather from

  ngOnInit(): void {
  }

}
