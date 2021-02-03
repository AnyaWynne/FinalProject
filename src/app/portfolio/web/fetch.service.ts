import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class FetchService {
    urlSource: string[]= [];
    testService: any;

    constructor(private http: HttpClient){

        this.http.get('https://dog.ceo/api/breeds/image/random').toPromise().then ( data => {
            for (let key in data){
                if (data.hasOwnProperty(key)){
                    this.urlSource.push(data[key.valueOf()]);
                }
            }
        });

        this.testService = new Promise((resolve, reject)=>{
            this.http.get('https://dog.ceo/api/breeds/image/random').toPromise().then ( data => {
                for (let key in data){
                    if (data.hasOwnProperty(key)){
                        resolve(data[key.valueOf()]);
                    }
                }
            });
            return this.testService;
        });
    };


}