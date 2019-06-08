import { Component } from '@angular/core';
import { MathContent } from './shared/interfaces/math-content';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mathMl: MathContent = {
    mathml: `<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>76</mn><mo>&#xF7;</mo><mn>4</mn></math>`
  };
  signedIn: boolean;
  user: any;
  greeting: string;

  constructor(
    private amplifyService: AmplifyService,
    private router: Router
    ) { }

  ngOnInit() {
    this.amplifyService.authStateChange$
            .subscribe(authState => {
                this.signedIn = authState.state === 'signedIn';
                if (!authState.user) {
                    this.user = null;
                } else {
                    // console.log(this.user);
                    this.user = authState.user;
                    this.greeting = "Hello " + this.user.username;
                }
        });
  }

  signOut() {
    let user = this.user;
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
    console.log(this.user);
    this.router.navigate(['']);
  }
}
