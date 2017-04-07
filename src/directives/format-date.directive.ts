import {Directive, EventEmitter, Output} from '@angular/core';

@Directive({
    selector: '[ngModel][formatDateDirective]',
    host: {
        "(input)": 'onInputChange($event)'
    }
})
export class FormatDateDirective {

    @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

    onInputChange($event) {
        if ($event.target.value.length == 2 && $event.target.value.indexOf('/') == -1) {
            this.ngModelChange.emit($event.target.value + ' / ');
        }
        if ($event.target.value.length == 4) {
            this.ngModelChange.emit($event.target.value.substring(0, 1));
        }
    }
}
