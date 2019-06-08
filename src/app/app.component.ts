import { Component } from '@angular/core';
import { MathContent } from './shared/interfaces/math-content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutor';

  mathMl: MathContent = {
    mathml: `<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>76</mn><mo>&#xF7;</mo><mn>4</mn></math>`
  };
}
