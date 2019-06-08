import { Directive, OnInit, OnChanges, OnDestroy, SimpleChanges, Input, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { MathContent } from '../../interfaces/math-content';
import { MathjaxService } from '../../services/mathjax/mathjax.service';
import { take, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appMath]'
})
export class MathDirective implements OnInit, OnChanges, OnDestroy{

  private alive$ = new Subject<boolean>();

  @Input()
  private appMath: MathContent;
  private readonly _el: HTMLElement;

  constructor(private service: MathjaxService,
              private el: ElementRef) {
    this._el = el.nativeElement as HTMLElement;
  }

  ngOnInit(): void {
    this.service
      .ready()
      .pipe(
        take(1),
        takeUntil(this.alive$)
      ).subscribe(res => {
        this.service.render(this._el, this.appMath);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    this.alive$.next(false);
  }

}
