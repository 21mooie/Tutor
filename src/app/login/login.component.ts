import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

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
  signedIn: boolean;
  user: any;
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
        // this.router.navigate(['/home'])
      }
    });
  }

  ngOnInit() {
  }

}
