import { Component, forwardRef, ContentChild, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fu-cancallable-input',
  templateUrl: './cancallable-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CancallableInputComponent),
      multi: true
    }
  ]
})
export class CancallableInputComponent implements ControlValueAccessor {

  @ContentChild('inputContent') contentChild;

  value: any;

  constructor( private changeDetectorRef: ChangeDetectorRef ) {}

  writeValue( newValue: any ) {
    if ( newValue !== this.value ) {
      this.value = newValue;
      this.contentChild.writeValue( this.value );
    }
  }

  registerOnChange( fn: any ) {
    this.contentChild.registerOnChange( ( newValue ) => {
      if ( confirm('are you sure?') ) {
        this.value = newValue;
        fn( this.value );
      } else {
        //TODO: fix broken detectChanges to not to use setTimeout
        setTimeout( () => {
          this.contentChild.writeValue( this.value );
          this.changeDetectorRef.detectChanges();
        }, 0 );
      }
    } );
  }

  registerOnTouched(fn: any) {};
}
