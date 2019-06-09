import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  onLogin = true;
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
  signedIn: boolean;
  user: any;
  loginForm = new FormGroup({
    email: new FormControl(''),
    pwd: new FormControl('')
  });
  constructor( 
    private amplifyService:AmplifyService,
    private router: Router
     ) { 
    this.amplifyService.authStateChange$
    .subscribe(authState => {
      this.signedIn = authState.state === 'signedIn';
      if (!authState.user) {
        this.user = null;
        console.log('not signed in anymore');
      } else {
        console.log(this.user);
        this.user = authState.user;
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.loginForm);
    const email: string = this.loginForm.controls['email'].value;
    const pwd = this.loginForm.controls['pwd'].value;
    if (this.onLogin) {
      Auth.signIn(email, pwd)
        .then(user => console.log(user))
        .catch(err => console.log(err));
      console.log('submitted');
    }
    else {
      let username = email;
      let password = pwd;
      Auth.signUp({username, password})
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
    
  }

  toggleSignup(value) {
    this.onLogin = !this.onLogin;
  }

}
