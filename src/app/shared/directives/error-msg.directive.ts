import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appErrorMsg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  // @Input() message: string = '';
  // @Input() color: string = 'red';
  private _color: string = 'red';
  private _message = 'Campo obligatorio';
  @Input() set message(value: string) {
    this._message = value;
    this.setMessage();
  }
  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }
  @Input() set invalid(value: boolean) {
    if(!value)
      this.ele.nativeElement.classList.add('hidden');
    else 
      this.ele.nativeElement.classList.remove('hidden');
  }

  constructor(private ele: ElementRef<HTMLElement>) {}

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.color) {
    //   this.ele.nativeElement.style.color = changes.color.currentValue;
    // }
    // console.log('changes', changes);
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
    this.ele.nativeElement.classList.add('form-text');
  }

  setColor() {
    this.ele.nativeElement.style.color = this._color;
  }

  setMessage() {
    this.ele.nativeElement.innerText = this._message;
  }
}
