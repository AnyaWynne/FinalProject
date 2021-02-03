import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FetchService } from './fetch.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
  providers: [FetchService]
})
export class WebComponent implements OnInit {

  title: string = 'Web Development';

  items = [];

  codeSnippet: string;
  codeSnippet2: string;

  constructor(private fetchData: FetchService, private http: HttpClient ) { }

  ngOnInit(): void {
    // console.log(this.fetchData.urlSource);
    this.items = this.fetchData.urlSource;
    // this.items = [0];
    this.codeSnippet = "this.http.get('https://dog.ceo/api/breeds/image/random').toPromise().then ( data =>" + "{" +
      "for (let key in data){" +
          "if (data.hasOwnProperty(key)){" +
              "this.urlSource.push(data[key.valueOf()]);" +
          "}"+"}"+"});"+"};";
    this.codeSnippet2 = "<img [src]=items[0]>"
  }

}
