import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactMeForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.contactMeForm = new FormGroup ({

      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required)

    });
  }

  onSubmit(){
    console.log(this.contactMeForm);
  }

}
