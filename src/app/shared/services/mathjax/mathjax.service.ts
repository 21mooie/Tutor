import { Injectable } from '@angular/core';
import { MathContent } from '../../interfaces/math-content';
import { ReplaySubject, Observable, Observer } from 'rxjs';

declare global {
  interface Window {
    hubReady: Observer<boolean>;
  }
}

@Injectable({
  providedIn: 'root'
})
export class MathjaxService {

  private readonly notifier: ReplaySubject<boolean>;

  constructor() {
    this.notifier = new ReplaySubject<boolean>();
    window.hubReady = this.notifier; // as said, bind to window object
  }

  ready(): Observable<boolean> {
    return this.notifier;
  }

  render(element: HTMLElement, math?: MathContent): void {
    if (math) {
      if (math.latex) {
        element.innerText = math.latex;
      } else {
        element.innerHTML = math.mathml;
      }
    }

    MathJax.Hub.Queue(['Typeset', MathJax.Hub, element]);
  }
}
