import { Component, forwardRef, Input } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component( {
  selector: 'fu-custom-select',
  templateUrl: './custom-select.component.html'
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => CustomSelectComponent ),
      multi: true
    }
  ]
} )
export class CustomSelectComponent implements ControlValueAccessor {

  @Input() options = [ 'one', 'two', 'three' ]
  selected = '';

  private propagateChange = ( _: any ) => {};

  writeValue( newValue: any ) {
      this.selected = newValue;
  }

  registerOnChange( fn: any ) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {};

  onChange( newValue ) {
    if( newValue !== this.selected ) {
      this.selected = newValue;
    }
    this.propagateChange( this.selected );
  }
}
