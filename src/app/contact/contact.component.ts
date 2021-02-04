import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formSubmitted = false;
  contactMeForm: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.contactMeForm = new FormGroup ({

      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required)

    });
  }

  onSubmit(){
    this.http.post('https://http-practice-c8c72-default-rtdb.firebaseio.com/posts.json', 
              this.contactMeForm.value).subscribe( post => {console.log(post.valueOf())});
    console.log(this.contactMeForm.value);
    this.contactMeForm.reset();
    this.formSubmitted = true;
  }

}
