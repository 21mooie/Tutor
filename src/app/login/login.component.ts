import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signUpConfig = {
    signUpFields: [
      {
      label:'Email Address',
      key: 'email',
      required: false,
      displayOrder: -1,
      type: 'string',
      custom: false
      },
    ],
    hiddenDefaults: ['phone_number']
  }
  constructor() { }

  ngOnInit() {
  }

}
