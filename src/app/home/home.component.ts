import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify'; 
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(
    private amplifyService: AmplifyService,
    private router: Router) { }

  ngOnInit() {
  }

  signOut() {
    let user = this.user;
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
    console.log(this.user);
    // this.router.navigate(['']);
  }

}
