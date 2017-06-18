import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms/src/directives';
import { Observable } from 'rxjs/Rx';

import { ConfirmationService } from '../../services/confirmation.service';

@Component( {} )
export abstract class CancallableControlValueAccessorComponent implements ControlValueAccessor {

@Input() isCancallable = true;

private _value: any;
private propagateChange = ( _: any ) => {};

constructor( private confirmationService: ConfirmationService ) { }

writeValue( newValue: any ) {
    if ( newValue !== this._value ) {
      this._value = newValue;
    }
  }

  registerOnChange( fn: any ) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {};

  /**
   * Callback function to allow clients to rollback any changes in case of cancalled value setting.
   */
  onValueChangeCancalled() {}

  get value() {
      return this._value;
  }

  set value( newValue ) {
    let confirmationResult$ = this.isCancallable ? this.confirmationService.askConfirmation$() : Observable.of( true );

    confirmationResult$.subscribe( ( confirmationResult: boolean ) => {
        if ( confirmationResult ) {
            this._value = newValue;
            this.propagateChange( newValue );
        } else {
          this.onValueChangeCancalled();
        }
    } );
  }
}